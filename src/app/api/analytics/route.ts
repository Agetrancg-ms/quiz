import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const levelParam = searchParams.get('level')
    const groupParam = searchParams.get('group')

    // Build where clause based on filters
    const whereClause: any = {}
    if (levelParam) {
      const level = parseInt(levelParam)
      if (!isNaN(level)) {
        whereClause.question = {
          ...whereClause.question,
          difficultyLevel: level
        }
      }
    }
    if (groupParam) {
      whereClause.question = {
        ...whereClause.question,
        group: groupParam
      }
    }

    // Get answers with filters
    const answers = await prisma.answer.findMany({
      where: whereClause,
      include: {
        question: true
      }
    })

    console.log('Analytics query params:', { levelParam, groupParam, whereClause })
    console.log('Found answers:', answers.length)

    // Calculate statistics
    const totalAnswers = answers.length
    const correctAnswers = answers.filter(a => a.isCorrect).length
    const averageScore = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0

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
        totalAttempts: stats.total,
        text: answers.find(a => a.questionId === parseInt(questionId))?.question?.text || ''
      }))
      .sort((a, b) => a.correctRate - b.correctRate)
      .slice(0, 5)

    // Get user count with the same filters
    const userCount = await prisma.user.count({
      where: whereClause.question ? {
        answers: {
          some: whereClause
        }
      } : undefined
    })

    console.log('Analytics response:', {
      totalParticipants: userCount,
      averageScore,
      totalAnswers,
      correctAnswers,
      challengingQuestionsCount: challengingQuestions.length
    })

    return NextResponse.json({
      totalParticipants: userCount,
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