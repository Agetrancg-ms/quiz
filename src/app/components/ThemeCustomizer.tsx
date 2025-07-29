'use client'

import { useState, useEffect } from 'react'
import { useSoundEffects } from './SoundEffects'

interface Theme {
  colorScheme: 'default' | 'high-contrast' | 'calm' | 'dark'
  fontSize: 'normal' | 'large' | 'extra-large'
}

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>({
    colorScheme: 'default',
    fontSize: 'normal'
  })
  const [isMounted, setIsMounted] = useState(false)
  const { playClick, playSuccess } = useSoundEffects()

  useEffect(() => {
    setIsMounted(true)
    // Carrega preferências salvas
    const savedTheme = localStorage.getItem('quizTheme')
    if (savedTheme) {
      const parsedTheme = JSON.parse(savedTheme)
      setTheme(parsedTheme)
      applyTheme(parsedTheme)
    }
  }, [])

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.classList.remove(
      'theme-default',
      'theme-high-contrast',
      'theme-calm',
      'theme-dark'
    )
    document.documentElement.classList.add(`theme-${newTheme.colorScheme}`)
    document.documentElement.classList.remove(
      'text-normal',
      'text-large',
      'text-extra-large'
    )
    document.documentElement.classList.add(`text-${newTheme.fontSize}`)
    localStorage.setItem('quizTheme', JSON.stringify(newTheme))
    playSuccess()
  }

  const updateTheme = (updates: Partial<Theme>) => {
    const newTheme = { ...theme, ...updates }
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  const handleOpenClose = () => {
    playClick()
    setIsOpen(prev => !prev)
  }

  if (!isMounted) return null

  return (
    <>
      <button
        onClick={handleOpenClose}
        className="fixed bottom-20 left-4 bg-card text-elements w-12 h-12 rounded-full shadow-lg \
          hover:bg-input flex items-center justify-center z-40\
          hover:scale-110 transform transition-transform duration-200 border border-theme cursor-pointer"
        aria-label="Personalizar Tema"
      >
        <i className="fas fa-universal-access text-2xl" aria-hidden="true"></i>
      </button>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="theme-customizer-title"
        >
          <div className="bg-card text-card rounded-lg shadow-xl max-w-md w-full p-6 relative animate-fade-in-up border border-theme">
            <button
              onClick={handleOpenClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Fechar personalizador"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 id="theme-customizer-title" className="text-xl font-bold text-card mb-6">
              Personalizar Aparência
            </h2>
            <div className="space-y-6">
              <div role="radiogroup" aria-labelledby="color-scheme-label">
                <h3 id="color-scheme-label" className="font-medium text-card mb-3">
                  Esquema de Cores
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  { [
                    { id: 'default', label: 'Padrão' },
                    { id: 'high-contrast', label: 'Alto Contraste' },
                    { id: 'calm', label: 'Calmo' },
                    { id: 'dark', label: 'Escuro' }
                  ].map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => {
                        playClick()
                        updateTheme({ colorScheme: id as Theme['colorScheme'] })
                      }}
                      className={`p-3 rounded-lg border-2 transition-all cursor-pointer text-card bg-input
                        ${theme.colorScheme === id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-theme hover:border-blue-300 '}
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                      `}
                      role="radio"
                      aria-checked={theme.colorScheme === id}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div role="radiogroup" aria-labelledby="font-size-label">
                <h3 id="font-size-label" className="font-medium text-card mb-3">
                  Tamanho da Fonte
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  { [
                    { id: 'normal', label: 'Normal' },
                    { id: 'large', label: 'Grande' },
                    { id: 'extra-large', label: 'Extra Grande' }
                  ].map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => {
                        playClick()
                        updateTheme({ fontSize: id as Theme['fontSize'] })
                      }}
                      className={`p-3 rounded-lg border-2 transition-all cursor-pointer text-card bg-input
                        ${theme.fontSize === id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-theme hover:border-blue-300'}
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                      `}
                      role="radio"
                      aria-checked={theme.fontSize === id}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-theme">
              <button
                onClick={handleOpenClose}
                className="w-full bg-button text-button py-2 px-4 rounded-md hover:opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              >
                Concluído
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}