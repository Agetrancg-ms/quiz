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

    const validGroups = ['ciclista', 'motorista', 'pedestre', 'motociclista']
    const validLevels = ['fundamental', 'medio', 'especialista']

    let whereClause: Prisma.QuestionWhereInput = {}

    if (group && validGroups.includes(group)) {
      // Filtra apenas pelo grupo
      whereClause = {
        group: {
          equals: group,
          mode: 'insensitive' as Prisma.QueryMode,
        },
      }
    } else if (level && validLevels.includes(level)) {
      // Filtra apenas pelo nível de dificuldade
      const difficultyLevel = {
        fundamental: 1,
        medio: 2,
        especialista: 3,
      }[level]
      whereClause = {
        difficultyLevel,
      }
    } else {
      return NextResponse.json(
        { error: 'Invalid or missing group/level parameter' },
        { status: 400 }
      )
    }

    const questions = await prisma.question.findMany({
      where: whereClause,
      select: {
        id: true,
        text: true,
        options: true,
        correctOption: true,
        explanation: true,
        difficultyLevel: true,
        group: true,
      },
      take: 10,
    })

    if (!questions.length) {
      return NextResponse.json(
        { error: 'No questions found for this filter' },
        { status: 404 }
      )
    }

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