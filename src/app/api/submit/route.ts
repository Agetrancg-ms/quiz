import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { name, answers } = await request.json()

    // Create or find user
    const user = await prisma.user.create({
      data: {
        name,
      },
    })

    // Process each answer
    const processedAnswers = await Promise.all(
      answers.map(async (answer: { questionId: number; answer: number }) => {
        const question = await prisma.question.findUnique({
          where: { id: answer.questionId },
          select: { correctOption: true }
        })

        const isCorrect = question?.correctOption === answer.answer

        return prisma.answer.create({
          data: {
            userId: user.id,
            questionId: answer.questionId,
            answer: answer.answer,
            isCorrect,
          }
        })
      })
    )

    const totalCorrect = processedAnswers.filter(a => a.isCorrect).length

    return NextResponse.json({
      userId: user.id,
      totalQuestions: answers.length,
      correctAnswers: totalCorrect,
    })
  } catch (error) {
    console.error('Error submitting quiz:', error)
    return NextResponse.json(
      { error: 'Failed to submit quiz results' },
      { status: 500 }
    )
  }
}