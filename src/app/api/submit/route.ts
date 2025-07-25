import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface QuizAnswer {
  questionId: number
  answer: number
}

interface UserData {
  name: string
  bairro: string
  idade: string
  sexo: string
  cnh?: string[]
  conducao?: string[]
  outrosConducao?: string
}

interface QuizSubmission {
  level: string
  group: string
  answers: QuizAnswer[]
  score: number
  totalQuestions: number
  userData: UserData
}

export async function POST(request: NextRequest) {
  try {
    console.log('[DEBUG] Received quiz submission request')
    const submission: QuizSubmission = await request.json()
    console.log('[DEBUG] Parsed submission:', submission)

    if (!submission.userData?.name || !submission.userData?.bairro || !submission.userData?.idade || !submission.userData?.sexo) {
      console.error('[DEBUG] Missing required user data')
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      )
    }

    // Create user with their data
    const user = await prisma.user.create({
      data: {
        name: submission.userData.name,
        bairro: submission.userData.bairro,
        idade: parseInt(submission.userData.idade),
        sexo: submission.userData.sexo,
        cnh: submission.userData.cnh || [],
        conducao: submission.userData.conducao || [],
        outrosConducao: submission.userData.outrosConducao,
      },
    })
    console.log('[DEBUG] User created:', user.id)

    // Process answers and calculate statistics
    const answersWithCorrectness = await Promise.all(
      submission.answers.map(async (answer) => {
        const question = await prisma.question.findUnique({
          where: { id: answer.questionId },
          select: { id: true, correctOption: true }
        })
        
        if (!question) {
          console.error(`[DEBUG] Question not found: ${answer.questionId}`)
          return null
        }
        
        const isCorrect = question.correctOption === answer.answer
        console.log('[DEBUG] Answer processed:', { 
          questionId: answer.questionId, 
          userAnswer: answer.answer, 
          correctOption: question.correctOption,
          isCorrect 
        })
        
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
    console.log('[DEBUG] Valid answers saved:', validAnswers.length)

    // Store the quiz attempt
    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        level: submission.level,
        score: submission.score,
        totalQuestions: submission.totalQuestions,
        userId: user.id,
        answers: JSON.stringify(submission.answers)
      }
    })
    console.log('[DEBUG] Quiz attempt saved:', quizAttempt.id)

    // Calculate final statistics
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

    console.log('[DEBUG] Final statistics:', statistics)

    return NextResponse.json({
      success: true,
      statistics
    })
  } catch (error) {
    console.error('[DEBUG] Error in submit route:', error)
    return NextResponse.json(
      { error: 'Failed to submit quiz results', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}