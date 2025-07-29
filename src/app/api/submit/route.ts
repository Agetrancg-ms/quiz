import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { QuizAnswer, UserData, QuizSubmission } from '@/types/quiz'

export async function POST(request: NextRequest) {
  try {
    const submission: QuizSubmission = await request.json()

    if (!submission.userData?.name || !submission.userData?.bairro || 
        !submission.userData?.idade || !submission.userData?.sexo) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      )
    }

    // Verifica se o usuário com o CPF já existe
    const existingUser = await prisma.user.findUnique({
      where: { cpf: submission.userData.cpf }
    });

    // Se existir, usa o usuário existente
    const user = existingUser || await prisma.user.create({
      data: {
        name: submission.userData.name,
        bairro: submission.userData.bairro,
        idade: parseInt(submission.userData.idade),
        cpf: submission.userData.cpf,
        sexo: submission.userData.sexo,
        cnh: submission.userData.cnh || [],
        conducao: submission.userData.conducao || [],
        outrosConducao: submission.userData.outrosConducao,
      },
    })

    // Verifica se já existe uma tentativa recente (últimos 5 segundos) para evitar duplicação
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
        { error: 'Submissão duplicada detectada' },
        { status: 409 }
      );
    }

    // Verifica se o número de respostas corresponde ao total de questões
    if (submission.answers.length !== submission.totalQuestions) {
      return NextResponse.json(
        { error: 'Número incorreto de respostas' },
        { status: 400 }
      );
    }

    // Processa as respostas e calcula estatísticas
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

    // Salva a tentativa do quiz
    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        level: submission.group || submission.level || 'não especificado',
        score: submission.score,
        totalQuestions: submission.totalQuestions,
        userId: user.id,
        answers: JSON.stringify(submission.answers)
      }
    })

    // Calcula estatísticas finais
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
      { error: 'Erro ao enviar os resultados do quiz', detalhes: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    )
  }
}