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
  onShowReview: () => void
}

export default function Statistics({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  score,
  level,
  onRestart,
  onShowReview
}: StatisticsProps) {
  const [showAchievement, setShowAchievement] = useState(false)
  const [achievementMessage, setAchievementMessage] = useState('')
  const { playSuccess, playClick } = useSoundEffects()
  const percentage = (correctAnswers / totalQuestions) * 100

  useEffect(() => {
    // Check for achievements
    if (percentage === 100) {
      setAchievementMessage('🏆 Perfeito! Você acertou todas as questões!')
      setShowAchievement(true)
      playSuccess()
    } else if (percentage >= 80) {
      setAchievementMessage('🌟 Excelente desempenho!')
      setShowAchievement(true)
      playSuccess()
    } else if (percentage >= 70) {
      setAchievementMessage('👏 Bom trabalho!')
      setShowAchievement(true)
      playSuccess()
    }

    // Store high score
    const highScores = JSON.parse(localStorage.getItem('highScores') || '{}')
    if (!highScores[level] || score > highScores[level]) {
      highScores[level] = score
      localStorage.setItem('highScores', JSON.stringify(highScores))
      if (Object.keys(highScores).length > 0) {
        setAchievementMessage(prev => 
          `${prev ? prev + '\n' : ''}🎉 Novo recorde pessoal!`)
        setShowAchievement(true)
        playSuccess()
      }
    }
  }, [score, level, percentage, playSuccess])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Resultados do Quiz
      </h2>

      {showAchievement && (
        <div className="mb-6 text-center">
          {achievementMessage.split('\n').map((message, index) => (
            <div
              key={index}
              className="text-lg font-medium text-blue-600 animate-bounce mb-2"
            >
              {message}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {totalQuestions}
          </div>
          <div className="text-sm text-gray-600">Total de Questões</div>
        </div>

        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {correctAnswers}
          </div>
          <div className="text-sm text-gray-600">Respostas Corretas</div>
        </div>

        <div className="text-center p-4 bg-red-50 rounded-lg">
          <div className="text-3xl font-bold text-red-600 mb-2">
            {wrongAnswers}
          </div>
          <div className="text-sm text-gray-600">Respostas Incorretas</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Aproveitamento</span>
          <span className="font-medium text-gray-800">{percentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full transition-all duration-1000 ${
              percentage >= 70 ? 'bg-green-600' : 'bg-red-600'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => {
            playClick()
            onShowReview()
          }}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
            transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Revisar Questões
        </button>
        <button
          onClick={() => {
            playClick()
            onRestart()
          }}
          className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 
            transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Tentar Novamente
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Pressione <kbd className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
          border border-gray-200 rounded shadow-sm">R</kbd> para revisar ou{' '}
        <kbd className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
          border border-gray-200 rounded shadow-sm">Space</kbd> para tentar novamente
      </div>
    </div>
  )
}