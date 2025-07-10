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

  // Animate question in on mount
  useEffect(() => {
    return () => setConfirmed(false)
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
    if (showFeedback) {
      if (selected === question.correctOption) {
        playSuccess()
      } else {
        playIncorrect()
      }
      setShowExplanation(true)
    }
    onAnswer(question.id, selected)
  }

  // Focus management
  useEffect(() => {
    if (selected !== null && optionsRef.current[selected]) {
      optionsRef.current[selected]?.focus()
    }
  }, [selected])

  // Add guard to render nothing if question or question.options is undefined
  if (!question || !question.options) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {question.text}
      </h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
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
              ${selected === index ? 'ring-2 ring-blue-500' : 'hover:bg-gray-50'}
              ${confirmed && showFeedback
                ? index === question.correctOption
                  ? 'bg-green-50 text-green-700'
                  : selected === index
                    ? 'bg-red-50 text-red-700'
                    : 'opacity-50'
                : 'bg-white text-gray-700'}
              focus:outline-none focus:ring-2 focus:ring-blue-500`}
            disabled={confirmed}
          >
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center
                border-2 rounded-full
                ${selected === index ? 'border-blue-500' : 'border-gray-300'}
                ">
                {index + 1}
              </span>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      {!confirmed && (
        <button
          onClick={handleConfirm}
          disabled={selected === null}
          className={`w-full py-3 px-6 rounded-lg text-white font-medium
            transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
            ${selected === null
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'}`}
        >
          Confirmar Resposta
        </button>
      )}

      {showExplanation && question.explanation && (
        <div className={`mt-6 p-4 rounded-lg ${
          selected === question.correctOption ? 'bg-green-50' : 'bg-red-50'
        }`}>
          <p className={`text-sm ${
            selected === question.correctOption ? 'text-green-700' : 'text-red-700'
          }`}>
            {question.explanation}
          </p>
        </div>
      )}

      <div className="mt-4 text-center text-sm text-gray-500">
        Use as teclas <kbd className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
          border border-gray-200 rounded shadow-sm">↑</kbd> <kbd className="px-2 py-1 text-sm 
          font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded shadow-sm">↓</kbd> ou 
        <kbd className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
          border border-gray-200 rounded shadow-sm">1-4</kbd> para selecionar e 
        <kbd className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
          border border-gray-200 rounded shadow-sm">Enter</kbd> para confirmar
      </div>
    </div>
  )
}