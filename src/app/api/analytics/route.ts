import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const level = parseInt(searchParams.get('level') || '1')

  try {
    // Get average score for the difficulty level
    const answers = await prisma.answer.findMany({
      where: {
        question: {
          difficultyLevel: level
        }
      },
      include: {
        question: true
      }
    })

    // Calculate statistics
    const totalAnswers = answers.length
    const correctAnswers = answers.filter(a => a.isCorrect).length
    const averageScore = totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0

    // Get most challenging questions
    const questionStats = answers.reduce((acc: Record<number, { total: number; correct: number }>, answer) => {
      if (!acc[answer.questionId]) {
        acc[answer.questionId] = { total: 0, correct: 0 }
      }
      acc[answer.questionId].total++
      if (answer.isCorrect) acc[answer.questionId].correct++
      return acc
    }, {})

    const challengingQuestions = Object.entries(questionStats)
      .map(([questionId, stats]) => ({
        questionId: parseInt(questionId),
        correctRate: (stats.correct / stats.total) * 100,
        totalAttempts: stats.total
      }))
      .sort((a, b) => a.correctRate - b.correctRate)
      .slice(0, 5)

    return NextResponse.json({
      totalParticipants: await prisma.user.count(),
      averageScore,
      totalAnswers,
      correctAnswers,
      challengingQuestions
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}