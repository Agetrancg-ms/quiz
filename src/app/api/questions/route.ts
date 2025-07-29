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

    // Monta o filtro conforme grupo ou nível
    let whereClause = {}
    if (group) {
      whereClause = { group: { equals: group, mode: 'insensitive' } }
    } else if (level) {
      const difficultyLevel =
        level === 'fundamental' ? 1 : level === 'medio' ? 2 : 3
      whereClause = { difficultyLevel }
    } else {
      return NextResponse.json(
        { error: 'Parâmetro de grupo ou nível inválido ou ausente' },
        { status: 400 }
      )
    }

    // Conta total de questões
    const totalQuestions = await prisma.question.count({
      where: whereClause,
    })

    // Busca todos os IDs das questões
    const allQuestionIds = await prisma.question.findMany({
      where: whereClause,
      select: { id: true },
    })

    // Seleciona 10 IDs aleatórios
    const selectedIds = allQuestionIds
      .sort(() => Math.random() - 0.5)
      .slice(0, 10)
      .map((q) => q.id)

    // Busca as questões completas
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
        { error: 'Nenhuma questão encontrada para este filtro' },
        { status: 404 }
      )
    }

    // Embaralha as questões finais
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5)
    return NextResponse.json(shuffledQuestions)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar questões' },
      { status: 500 }
    )
  }
}