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
  const [isProcessing, setIsProcessing] = useState(false)
  const optionsRef = useRef<(HTMLButtonElement | null)[]>([])
  const { playSuccess, playIncorrect, playClick } = useSoundEffects()
  const autoConfirmTimer = useRef<NodeJS.Timeout | null>(null)

  // Reset state when question changes
  useEffect(() => {
    setConfirmed(false)
    setSelected(null)
    setShowExplanation(false)
    setIsProcessing(false)
    if (autoConfirmTimer.current) {
      clearTimeout(autoConfirmTimer.current)
      autoConfirmTimer.current = null
    }
  }, [question?.id])

  // Auto-confirm after selection (corrigido para não travar ao trocar rapidamente)
  useEffect(() => {
    if (!question || confirmed || selected === null) return
    if (autoConfirmTimer.current) {
      clearTimeout(autoConfirmTimer.current)
    }
    autoConfirmTimer.current = setTimeout(() => {
      setIsProcessing(true)
      handleConfirm()
    }, 1000)
    return () => {
      if (autoConfirmTimer.current) {
        clearTimeout(autoConfirmTimer.current)
        autoConfirmTimer.current = null
      }
    }
  }, [selected, confirmed])

  // Auto-continue after showing feedback
  useEffect(() => {
    if (!question) return
    
    if (confirmed && showExplanation && selected !== null) {
      const timer = setTimeout(() => {
        onAnswer(question.id, selected)
      }, 1500)
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

      if (confirmed || isProcessing) return

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
  }, [selected, confirmed, isProcessing, question?.options?.length, playClick])

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
    setIsProcessing(false)
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
        <div className="text-center mb-4 text-button text-lg font-semibold">
          Questão {currentQuestionNumber} de {totalQuestions}
        </div>
        <div className="w-full">
          {/* Question Box with Mascot */}
          <div className="relative">
            {/* Question Box */}
            <div className="relative bg-highlight rounded-2xl shadow-xl p-6 mb-8 pr-40">
              <h3 className="text-2xl font-bold text-card">
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
            <div className="bg-card text-card rounded-2xl shadow-xl p-6 bg-opacity-95">
              <div className="space-y-4" role="radiogroup" aria-label="Opções da questão">
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
                      role="radio"
                      aria-checked={isSelected}
                      aria-label={`Alternativa ${String.fromCharCode(65 + index)}: ${option}`}
                      className={`w-full text-left p-4 rounded-xl cursor-pointer 
                        ${isSelected ? 'ring-2 ring-[#007aff]' : 'hover:bg-input'}
                        ${isCorrect ? 'bg-green-100 text-green-800' : ''}
                        ${isWrong ? 'bg-error text-error' : ''}
                        ${!confirmed && !isSelected ? 'hover:border-highlight border-2 border-transparent' : ''}
                        ${confirmed ? 'cursor-pointer' : ''}
                      `}
                    >
                      <span className="inline-flex items-center">
                        <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 aspect-square flex-shrink-0
                          ${isSelected ? 'bg-[#007aff] text-white' : 'bg-highlight'}
                          ${isCorrect ? 'bg-green-500 text-white' : ''}
                          ${isWrong ? 'wrong-circle' : ''}
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
                <div className="bg-highlight bg-opacity-10 border-l-4 border-highlight p-4 rounded-r-lg mt-6" aria-live="polite" role="status">
                  <p className="text-card">{question.explanation}</p>
                </div>
              )}
              <button
                onClick={handleConfirm}
                disabled={selected === null || confirmed}
                aria-disabled={selected === null || confirmed}
                className={`w-full p-4 rounded-xl font-semibold mt-6
                  ${confirmed 
                    ? 'bg-input text-input cursor-pointer' 
                    : selected === null
                      ? 'bg-button text-button cursor-pointer'
                      : 'bg-button text-button hover:opacity-90 cursor-pointer'}
                `}
              >
                {isProcessing ? 'Confirmando...' : 'Confirmar'}
              </button>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}