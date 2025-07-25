// src/app/components/Question.tsx
'use client'
import { useEffect, useState, useRef } from 'react'
import Loading from './Loading'
import { useSoundEffects } from './SoundEffects'
import Image from 'next/image'

interface QuestionProps {
  question: {
    id: number
    text: string
    options: string[]
    correctOption: number
    explanation?: string
  }
  onAnswer: (questionId: number, answer: number) => void
  showFeedback?: boolean
  selectedAnswer?: number
  currentQuestionNumber: number
  totalQuestions: number
}

export default function Question({
  question,
  onAnswer,
  showFeedback = false,
  selectedAnswer,
  currentQuestionNumber,
  totalQuestions
}: QuestionProps) {
  const [selected, setSelected] = useState<number | null>(selectedAnswer ?? null)
  const [confirmed, setConfirmed] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const optionsRef = useRef<(HTMLButtonElement | null)[]>([])
  const { playSuccess, playIncorrect, playClick } = useSoundEffects()

  // Reset state when question changes
  useEffect(() => {
    setConfirmed(false)
    setSelected(null)
    setShowExplanation(false)
  }, [question?.id])

  // Auto-continue after showing feedback
  useEffect(() => {
    if (!question) return // Guard clause for undefined question
    
    if (confirmed && showExplanation && selected !== null) {
      const timer = setTimeout(() => {
        onAnswer(question.id, selected)
      }, 1000) // Match the timing in QuizClient
      return () => clearTimeout(timer)
    }
  }, [confirmed, showExplanation, selected, onAnswer, question])

  // Handle keyboard navigation
  useEffect(() => {
    if (!question || !question.options) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      if (confirmed) return

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          setSelected(prev => (prev === null || prev === 0) ? question.options.length - 1 : prev - 1)
          playClick()
          break
        case 'ArrowDown':
          e.preventDefault()
          setSelected(prev => (prev === null || prev === question.options.length - 1) ? 0 : prev + 1)
          playClick()
          break
        case 'Enter':
          e.preventDefault()
          if (selected !== null && !confirmed) {
            handleConfirm()
          }
          break
        case '1':
        case '2':
        case '3':
        case '4':
          const num = parseInt(e.key) - 1
          if (num < question.options.length) {
            setSelected(num)
            playClick()
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selected, confirmed, question?.options?.length, playClick])

  const handleConfirm = () => {
    if (selected === null || confirmed) return

    setConfirmed(true)
    const isCorrect = selected === question.correctOption
    
    if (isCorrect) {
      playSuccess()
    } else {
      playIncorrect()
    }
    
    setShowExplanation(true)
  }

  useEffect(() => {
    if (selected !== null && optionsRef.current[selected]) {
      optionsRef.current[selected]?.focus()
    }
  }, [selected])

  if (!question || !question.options) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: '#0b45af', opacity: 0.94, mixBlendMode: 'normal'}}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl -mt-12 px-8">
        {/* Progress indicator */}
        <div className="text-center mb-4 text-white text-lg font-semibold">
          Questão {currentQuestionNumber} de {totalQuestions}
        </div>

        <div className="w-full">
          {/* Question Box with Mascot */}
          <div className="relative">
            {/* Question Box */}
            <div className="relative bg-[#F1C307] rounded-2xl shadow-xl p-6 mb-8 pr-40">
              <h3 className="text-2xl font-bold text-black">
                {question.text}
              </h3>
              {/* Mascot */}
              <div className="absolute -right-8 lg:-right-18 top-1/2 -translate-y-1/2">
                <Image
                  src="/mascote.png"
                  alt="Mascote"
                  width={180}
                  height={180}
                  priority
                  className="w-[170px] h-[170px] lg:w-[180px] lg:h-[180px] object-contain"
                />
              </div>
            </div>

            {/* Options Container */}
            <div className="bg-white rounded-2xl shadow-xl p-6 bg-opacity-95">
              <div className="space-y-4">
                {question.options.map((option, index) => {
                  const isSelected = selected === index
                  const isCorrect = confirmed && index === question.correctOption
                  const isWrong = confirmed && isSelected && index !== question.correctOption

                  return (
                    <button
                      key={index}
                      ref={(el) => {
                        if (optionsRef.current) {
                          optionsRef.current[index] = el
                        }
                      }}
                      onClick={() => !confirmed && setSelected(index)}
                      disabled={confirmed}
                      className={`w-full text-left p-4 rounded-xl cursor-pointer
                        ${isSelected ? 'ring-2 ring-[#007aff]' : 'hover:bg-gray-50'}
                        ${isCorrect ? 'bg-green-100 text-green-800' : ''}
                        ${isWrong ? 'bg-red-100 text-red-800' : ''}
                        ${!confirmed && !isSelected ? 'hover:border-[#F1C307] border-2 border-transparent' : ''}
                        ${confirmed ? 'cursor-pointer' : ''}
                      `}
                    >
                      <span className="inline-flex items-center">
                        <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 aspect-square flex-shrink-0
                          ${isSelected ? 'bg-[#007aff] text-white' : 'bg-[#F1C307]'}
                          ${isCorrect ? 'bg-green-500 text-white' : ''}
                          ${isWrong ? 'bg-red-500 text-white' : ''}
                        `}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/*{showExplanation && question.explanation && (
                <div className="bg-[#F1C307] bg-opacity-10 border-l-4 border-[#D6A103] p-4 rounded-r-lg mt-6">
                  <p className="text-[#204da5]">{question.explanation}</p>
                </div>
              )}*/}

              <button
                onClick={handleConfirm}
                disabled={selected === null || confirmed}
                className={`w-full p-4 rounded-xl font-semibold mt-6
                  ${confirmed 
                    ? 'bg-gray-200 text-gray-500 cursor-pointer' 
                    : selected === null
                      ? 'bg-gray-200 text-gray-500 cursor-pointer'
                      : 'bg-[#007aff] text-white hover:bg-[#204da5] cursor-pointer'}
                `}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}