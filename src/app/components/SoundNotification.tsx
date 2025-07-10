'use client'

import { useState, useEffect } from 'react'
import { useSoundEffects } from './SoundEffects'

export default function SoundNotification() {
  const { isSoundEnabled } = useSoundEffects()
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    if (!isSoundEnabled) {
      setShowNotification(true)
      const timer = setTimeout(() => setShowNotification(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isSoundEnabled])

  if (!showNotification) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
        <span>Sons desativados</span>
      </div>
    </div>
  )
}