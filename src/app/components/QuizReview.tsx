'use client'

import { useState } from 'react'
import Loading from './Loading'

interface QuizReviewProps {
  questions: Array<{
    id: number
    text: string
    options: string[]
    correctOption: number
    explanation?: string
  }>
  userAnswers: Array<{
    questionId: number
    answer: number
  }>
  onBackToStats: () => void
}

export default function QuizReview({ questions, userAnswers, onBackToStats }: QuizReviewProps) {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  const getQuestionResult = (questionId: number) => {
    const userAnswer = userAnswers.find(a => a.questionId === questionId)
    const question = questions.find(q => q.id === questionId)
    
    if (!userAnswer || !question) return { isCorrect: false, userOption: -1 }
    return {
      isCorrect: userAnswer.answer === question.correctOption,
      userOption: userAnswer.answer
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Revisão das Questões
        </h3>
        <button
          onClick={onBackToStats}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 
            transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Voltar para Estatísticas
        </button>
      </div>

      {questions.map((question) => {
        const { isCorrect, userOption } = getQuestionResult(question.id)
        
        return (
          <div
            key={question.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300
              ${expandedQuestion === question.id ? 'ring-2 ring-blue-500' : ''}
            `}
          >
            <div
              className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors
                ${isCorrect ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}
              `}
              onClick={() => setExpandedQuestion(
                expandedQuestion === question.id ? null : question.id
              )}
              role="button"
              aria-expanded={expandedQuestion === question.id}
              tabIndex={0}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{question.text}</p>
                  <div className="mt-2 text-sm">
                    <span className="text-gray-600">Sua resposta: </span>
                    <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {question.options[userOption]}
                    </span>
                  </div>
                </div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full 
                  ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                >
                  {isCorrect ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {expandedQuestion === question.id && (
              <div className="p-4 bg-gray-50 border-t animate-fade-in-up">
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Resposta correta: </span>
                    <span className="text-green-600">{question.options[question.correctOption]}</span>
                  </div>
                  
                  {question.explanation && (
                    <div>
                      <span className="font-medium text-gray-700">Explicação: </span>
                      <p className="mt-1 text-gray-600">{question.explanation}</p>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-gray-700 mb-2">Todas as opções:</h4>
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded ${
                            index === question.correctOption
                              ? 'bg-green-100 text-green-700'
                              : index === userOption && !isCorrect
                              ? 'bg-red-100 text-red-700'
                              : 'bg-white text-gray-600'
                          }`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}