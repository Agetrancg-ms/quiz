import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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

    // Validar que o nível é um número válido
    const level = ['facil', 'medio', 'dificil'].indexOf(levelParam) + 1
    if (level === 0) {
      return NextResponse.json(
        { error: 'Invalid level parameter. Must be facil, medio, or dificil' },
        { status: 400 }
      )
    }

    const questions = await prisma.question.findMany({
      where: {
        difficultyLevel: level
      },
      select: {
        id: true,
        text: true,
        options: true,
        difficultyLevel: true
      }
    })

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