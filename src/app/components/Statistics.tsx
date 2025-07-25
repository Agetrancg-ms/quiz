'use client'

import { useState, useEffect } from 'react'
import { useSoundEffects } from './SoundEffects'

interface StatisticsProps {
  totalQuestions: number
  correctAnswers: number
  wrongAnswers: number
  score: number
  level: string
  onRestart: () => void
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

export default function Statistics({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  score,
  level,
  onRestart,
  questions,
  userAnswers
}: StatisticsProps) {
  const [showAchievement, setShowAchievement] = useState(false)
  const [achievementMessage, setAchievementMessage] = useState('')
  const { playSuccess } = useSoundEffects()
  const percentage = Math.round((correctAnswers / totalQuestions) * 100)

  useEffect(() => {
    if (!level || score === undefined) return;
    
    try {
      const highScores = JSON.parse(localStorage.getItem('highScores') || '{}')
      if (!highScores[level] || score > highScores[level]) {
        highScores[level] = score
        localStorage.setItem('highScores', JSON.stringify(highScores))
        setShowAchievement(true)
        setAchievementMessage('Novo recorde!')
        playSuccess()
      }
    } catch (error) {
      console.error('Error handling high scores:', error)
    }
  }, [level, score, playSuccess])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Resultado do Quiz
      </h2>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="transparent"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 54}
              strokeDashoffset={2 * Math.PI * 54 * (1 - percentage / 100)}
              className="text-blue-600"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-800">{percentage}%</span>
          </div>
        </div>

        <p className="mt-4 text-gray-600 text-center">
          {percentage >= 70 
            ? 'Excelente! Você tem um ótimo conhecimento!'
            : percentage >= 50
            ? 'Bom trabalho! Você tem um bom conhecimento, mas pode melhorar.'
            : 'Continue praticando para melhorar seu conhecimento.'}
        </p>

        {showAchievement && (
          <div className="mt-4 p-2 bg-yellow-100 text-yellow-800 rounded-md">
            {achievementMessage}
          </div>
        )}

        <div className="mt-6 flex space-x-4">
          <button
            onClick={onRestart}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </div>
  )
}