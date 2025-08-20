import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { QuizSubmission } from '@/types/quiz'

export async function POST(request: NextRequest) {
  try {
    const submission: QuizSubmission = await request.json()

    if (!submission.userData?.name || !submission.userData?.age || !submission.userData?.gender) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Busque usuários existentes por nome, idade e sexo
    const existingUser = await prisma.user.findFirst({
      where: {
        name: submission.userData.name,
        age: parseInt(submission.userData.age),
        gender: submission.userData.gender
      }
    });

    // Criar ou utilizar usuário existente
    const user = existingUser || await prisma.user.create({
      data: {
        name: submission.userData.name,
        age: parseInt(submission.userData.age),
        gender: submission.userData.gender,
        driverLicense: submission.userData.driverLicense || [],
        transport: submission.userData.transport || [],
        otherTransport: submission.userData.otherTransport,
      },
    })

    // Verifica as tentativas recentes (últimos 5 segundos) para evitar duplicação
    const recentAttempt = await prisma.quizAttempt.findFirst({
      where: {
        userId: user.id,
        createdAt: {
          gte: new Date(Date.now() - 5000)
        }
      }
    });

    if (recentAttempt) {
      return NextResponse.json(
        { error: 'Duplicate submission detected' },
        { status: 409 }
      );
    }

    // Verifica se o número de respostas corresponde ao total de perguntas
    if (submission.answers.length !== submission.totalQuestions) {
      return NextResponse.json(
        { error: 'Incorrect number of answers' },
        { status: 400 }
      );
    }

    // Processar respostas e calcular estatísticas
    const answersWithCorrectness = await Promise.all(
      submission.answers.map(async (answer) => {
        const question = await prisma.question.findUnique({
          where: { id: answer.questionId },
          select: { id: true, correctOption: true }
        })
        if (!question) {
          return null
        }
        const isCorrect = question.correctOption === answer.answer
        return prisma.answer.create({
          data: {
            userId: user.id,
            questionId: answer.questionId,
            answer: answer.answer,
            isCorrect
          }
        })
      })
    )

    const validAnswers = answersWithCorrectness.filter((a): a is Exclude<typeof a, null> => a !== null)

    // Salvar
    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        level: submission.group || submission.level || 'not specified',
        score: submission.score,
        totalQuestions: submission.totalQuestions,
        userId: user.id,
        answers: JSON.stringify(submission.answers)
      }
    })

    // Calcular estatísticas
    const correctAnswers = validAnswers.filter(a => a.isCorrect).length
    const wrongAnswers = submission.totalQuestions - correctAnswers
    const percentageCorrect = (correctAnswers / submission.totalQuestions) * 100
    const percentageWrong = (wrongAnswers / submission.totalQuestions) * 100

    const statistics = {
      totalQuestions: submission.totalQuestions,
      correctAnswers,
      wrongAnswers,
      score: submission.score,
      percentageCorrect: Math.round(percentageCorrect * 10) / 10,
      percentageWrong: Math.round(percentageWrong * 10) / 10,
      quizAttemptId: quizAttempt.id,
      userName: user.name
    }

    return NextResponse.json({
      success: true,
      statistics
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error submitting quiz results', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}