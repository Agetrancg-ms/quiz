import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface QuestionResult {
  id: number
  text: string
  options: string[]
  correctOption: number
  explanation: string | null
  difficultyLevel: number
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = new URL(request.url).searchParams
    const levelParam = searchParams.get('level')

    if (!levelParam) {
      return NextResponse.json(
        { error: 'Level parameter is required' },
        { status: 400 }
      )
    }

    const level = ['facil', 'medio', 'dificil'].indexOf(levelParam) + 1
    if (level === 0) {
      return NextResponse.json(
        { error: 'Invalid level parameter. Must be facil, medio, or dificil' },
        { status: 400 }
      )
    }

    // Get a count of all questions for this level
    const totalQuestions = await prisma.question.count({
      where: { difficultyLevel: level },
    })

    if (totalQuestions === 0) {
      return NextResponse.json(
        { error: 'No questions found for this level' },
        { status: 404 }
      )
    }

    // Use window function to get truly random questions
    const questions = await prisma.$queryRaw<QuestionResult[]>`
      WITH RandomizedQuestions AS (
        SELECT 
          id,
          text,
          options,
          "correctOption",
          explanation,
          "difficultyLevel",
          ROW_NUMBER() OVER (ORDER BY RANDOM()) as rn
        FROM "Question"
        WHERE "difficultyLevel" = ${level}
      )
      SELECT 
        id,
        text,
        options,
        "correctOption",
        explanation,
        "difficultyLevel"
      FROM RandomizedQuestions 
      WHERE rn <= 20
    `

    if (!questions.length) {
      return NextResponse.json(
        { error: 'No questions found for this level' },
        { status: 404 }
      )
    }

    return NextResponse.json(questions)
  } catch (error) {
    console.error('Error fetching questions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    )
  }
}