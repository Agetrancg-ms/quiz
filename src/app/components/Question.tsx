'use client'

import { useEffect, useState, useRef } from 'react'
import Loading from './Loading'
import { useSoundEffects } from './SoundEffects'

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
}

export default function Question({
  question,
  onAnswer,
  showFeedback = false,
  selectedAnswer
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

  // Handle keyboard navigation
  useEffect(() => {
    if (!question || !question.options) return;
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
    onAnswer(question.id, selected)
  }

  useEffect(() => {
    if (selected !== null && optionsRef.current[selected]) {
      optionsRef.current[selected]?.focus()
    }
  }, [selected])

  if (!question || !question.options) return null

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {question.text}
      </h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selected === index
          const isCorrect = index === question.correctOption
          const isWrong = confirmed && isSelected && !isCorrect

          return (
            <button
              key={index}
              ref={el => { optionsRef.current[index] = el }}
              onClick={() => {
                if (!confirmed) {
                  playClick()
                  setSelected(index)
                }
              }}
              className={`w-full text-left p-4 rounded-lg transition-all
                ${!confirmed && isSelected ? 'ring-2 ring-blue-500' : ''}
                ${confirmed
                  ? isCorrect
                    ? 'bg-green-100 text-green-700 border-2 border-green-500'
                    : isWrong
                      ? 'bg-red-100 text-red-700 border-2 border-red-500'
                      : 'opacity-70'
                  : 'hover:bg-gray-50 bg-white text-gray-700'
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500`}
              disabled={confirmed}
              aria-selected={isSelected}
            >
              {option}
              {confirmed && isCorrect && (
                <span className="ml-2 text-green-600">✓</span>
              )}
              {confirmed && isWrong && (
                <span className="ml-2 text-red-600">✗</span>
              )}
            </button>
          )
        })}
      </div>

      {!confirmed ? (
        <button
          onClick={handleConfirm}
          disabled={selected === null}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all
            ${selected === null
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
            }
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          Confirmar Resposta
        </button>
      ) : (
        showExplanation && question.explanation && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700">
              <span className="font-medium">Explicação: </span>
              {question.explanation}
            </p>
          </div>
        )
      )}
    </div>
  )
}