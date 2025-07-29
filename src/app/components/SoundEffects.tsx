'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface SoundEffectsContextType {
  playCorrect: () => void
  playIncorrect: () => void
  playClick: () => void
  playSuccess: () => void
  isSoundEnabled: boolean
  toggleSound: () => void
}

const SoundEffectsContext = createContext<SoundEffectsContextType | undefined>(undefined)

export function SoundEffectsProvider({ children }: { children: React.ReactNode }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [sounds, setSounds] = useState<{[key: string]: HTMLAudioElement}>({})

  useEffect(() => {
    // Carrega efeitos sonoros
    const soundEffects = {
      correct: new Audio('/sounds/correct.mp3'),
      incorrect: new Audio('/sounds/incorrect.mp3'),
      click: new Audio('/sounds/click.mp3'),
      success: new Audio('/sounds/success.mp3')
    }
    Object.values(soundEffects).forEach(sound => {
      sound.volume = 0.5
      sound.preload = 'auto'
    })
    setSounds(soundEffects)
    // Carrega preferência de som do localStorage
    const soundEnabled = localStorage.getItem('soundEnabled')
    if (soundEnabled !== null) {
      setIsSoundEnabled(soundEnabled === 'true')
    }
    return () => {
      Object.values(soundEffects).forEach(sound => {
        sound.pause()
        sound.currentTime = 0
      })
    }
  }, [])

  const playSound = (soundName: string) => {
    if (isSoundEnabled && sounds[soundName]) {
      sounds[soundName].currentTime = 0
      sounds[soundName].play().catch(() => {}) // Silencia erros de reprodução
    }
  }

  const toggleSound = () => {
    const newValue = !isSoundEnabled
    setIsSoundEnabled(newValue)
    localStorage.setItem('soundEnabled', String(newValue))
  }

  const value = {
    playCorrect: () => playSound('correct'),
    playIncorrect: () => playSound('incorrect'),
    playClick: () => playSound('click'),
    playSuccess: () => playSound('success'),
    isSoundEnabled,
    toggleSound
  }

  return (
    <SoundEffectsContext.Provider value={value}>
      {children}
    </SoundEffectsContext.Provider>
  )
}

export function useSoundEffects() {
  const context = useContext(SoundEffectsContext)
  if (context === undefined) {
    throw new Error('useSoundEffects deve ser usado dentro de SoundEffectsProvider')
  }
  return context
}