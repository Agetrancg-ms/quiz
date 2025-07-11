import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { level, answers, score, totalQuestions, userData } = await request.json()

    if (!userData?.name || !userData?.cpf) {
      return NextResponse.json(
        { error: 'User data is required' },
        { status: 400 }
      )
    }

    // Find or create user
    const user = await prisma.user.upsert({
      where: { cpf: userData.cpf },
      update: {}, // No updates needed if user exists
      create: {
        name: userData.name,
        cpf: userData.cpf,
      },
    })

    // Salvar cada resposta do usuário na tabela Answer
    for (const answer of answers) {
      const question = await prisma.question.findUnique({ where: { id: answer.questionId } })
      await prisma.answer.create({
        data: {
          userId: user.id,
          questionId: answer.questionId,
          answer: answer.answer,
          isCorrect: question !== null && answer.answer === question.correctOption,
        }
      })
    }

    // Store the quiz attempt with user reference
    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        level,
        score,
        totalQuestions,
        answers,
        userId: user.id,
      },
    })

    // Calculate percentages
    const percentageCorrect = (score / totalQuestions) * 100
    const percentageWrong = ((totalQuestions - score) / totalQuestions) * 100

    return NextResponse.json({
      success: true,
      statistics: {
        totalQuestions,
        correctAnswers: score,
        wrongAnswers: totalQuestions - score,
        percentageCorrect: Math.round(percentageCorrect * 10) / 10,
        percentageWrong: Math.round(percentageWrong * 10) / 10,
        quizAttemptId: quizAttempt.id,
        userName: user.name
      },
    })
  } catch (error) {
    console.error('Error submitting quiz:', error)
    return NextResponse.json(
      { error: 'Failed to submit quiz results' },
      { status: 500 }
    )
  }
}