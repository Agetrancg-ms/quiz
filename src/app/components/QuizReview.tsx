'use client'

import { useState } from 'react'

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
}

export default function QuizReview({ questions, userAnswers }: QuizReviewProps) {
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
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-theme">
          Revisão das Questões
        </h3>
      </div>
      <div className="space-y-6">
        {questions.map((question) => {
          const { isCorrect, userOption } = getQuestionResult(question.id)
          const isExpanded = expandedQuestion === question.id
          return (
            <div
              key={question.id}
              className={`bg-card text-card rounded-lg shadow-md overflow-hidden transition-all duration-300
                ${isExpanded ? 'ring-2 ring-blue-500' : ''}
              `}
            >
              <div
                className={`p-4 cursor-pointer hover:bg-input transition-colors flex flex-col gap-2
                  ${isCorrect ? 'border-l-4 border-green-500' : 'border-l-4 border-error text-error'}
                `}
                onClick={() => setExpandedQuestion(isExpanded ? null : question.id)}
                role="button"
                aria-expanded={isExpanded}
                tabIndex={0}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium text-theme mb-2">
                      {question.text}
                    </p>
                    <span className="block mt-1 text-sm" aria-live="polite" role="status">
                        <span className="font-light text-input">Sua resposta: </span>
                        <span className={
                          userOption === question.correctOption
                            ? 'text-green-700 font-semibold'
                            : 'text-error font-semibold'
                        }>
                          {userOption !== -1 ? question.options[userOption] : <span className="italic text-gray-400">Não respondida</span>}
                        </span>
                      </span>
                    {userOption !== question.correctOption && (
                      <p className="text-sm text-input" aria-live="polite" role="status">
                        Resposta correta: <span className="text-green-700 font-semibold">{question.options[question.correctOption]}</span>
                      </p>
                    )}
                    {question.explanation && (
                      <div className="flex items-center mt-2 gap-2" aria-live="polite" role="status">
                        <span className="text-elements text-xl" aria-label="Explicação">
                          <i className="fas fa-info-circle"></i>
                        </span>
                        <div className="mt-0 p-3 bg-button rounded text-sm text-button">
                          {question.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full 
                    ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-error text-error'}`}
                    aria-label={isCorrect ? 'Resposta correta' : 'Resposta incorreta'}
                  >
                    {isCorrect ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              {isExpanded && (
                <div className="mt-2 space-y-2">
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded flex items-center gap-2 text-sm
                        ${index === question.correctOption ? 'bg-green-50 text-green-700 font-semibold' : ''}
                        ${userOption === index && index !== question.correctOption ? 'bg-error text-error font-semibold' : ''}
                        ${userOption !== index && index !== question.correctOption ? 'bg-input text-input' : ''}
                      `}
                    >
                      <span className="w-8 h-8 min-w-[2rem] min-h-[2rem] flex items-center justify-center rounded-full border border-theme bg-card mr-2">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                      {index === question.correctOption && (
                        <span className="ml-2 text-green-600 font-bold" aria-label="Correta">✔</span>
                      )}
                      {userOption === index && index !== question.correctOption && (
                        <span className="ml-2 text-error font-bold" aria-label="Errada">✘</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}