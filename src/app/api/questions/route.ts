import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

interface QuestionResult {
  id: number
  text: string
  options: string[]
  correctOption: number
  explanation: string | null
  difficultyLevel: number
  group: string | null
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const group = searchParams.get('group')
    const level = searchParams.get('level')

    // Build where clause based on group or level
    let whereClause = {}
    if (group) {
      whereClause = { group: { equals: group, mode: 'insensitive' } }
    } else if (level) {
      const difficultyLevel =
        level === 'fundamental' ? 1 : level === 'medio' ? 2 : 3
      whereClause = { difficultyLevel }
    } else {
      return NextResponse.json(
        { error: 'Invalid or missing group/level parameter' },
        { status: 400 }
      )
    }

    // First, count total questions matching the criteria
    const totalQuestions = await prisma.question.count({
      where: whereClause,
    })

    // Get all IDs of matching questions
    const allQuestionIds = await prisma.question.findMany({
      where: whereClause,
      select: { id: true },
    })

    // Randomly select 10 IDs
    const selectedIds = allQuestionIds
      .sort(() => Math.random() - 0.5)
      .slice(0, 10)
      .map((q) => q.id)

    // Fetch the complete questions for selected IDs
    const questions = await prisma.question.findMany({
      where: {
        ...whereClause,
        id: { in: selectedIds },
      },
      select: {
        id: true,
        text: true,
        options: true,
        correctOption: true,
        explanation: true,
        difficultyLevel: true,
        group: true,
      },
    })

    if (!questions.length) {
      return NextResponse.json(
        { error: 'No questions found for this filter' },
        { status: 404 }
      )
    }

    // Additional shuffle of the final questions
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5)
    return NextResponse.json(shuffledQuestions)
  } catch (error) {
    console.error('Error fetching questions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    )
  }
}