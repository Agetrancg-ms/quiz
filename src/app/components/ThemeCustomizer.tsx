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
  const { playClick, playSuccess } = useSoundEffects()

  useEffect(() => {
    // Load saved theme preferences
    const savedTheme = localStorage.getItem('quizTheme')
    if (savedTheme) {
      const parsedTheme = JSON.parse(savedTheme)
      setTheme(parsedTheme)
      applyTheme(parsedTheme)
    }
  }, [])

  const applyTheme = (newTheme: Theme) => {
    // Apply color scheme
    document.documentElement.classList.remove(
      'theme-default',
      'theme-high-contrast',
      'theme-calm',
      'theme-dark'
    )
    document.documentElement.classList.add(`theme-${newTheme.colorScheme}`)

    // Apply font size
    document.documentElement.classList.remove(
      'text-normal',
      'text-large',
      'text-extra-large'
    )
    document.documentElement.classList.add(`text-${newTheme.fontSize}`)

    // Save preferences
    localStorage.setItem('quizTheme', JSON.stringify(newTheme))
    playSuccess() // Play success sound when theme is applied
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

  return (
    <>
      <button
        onClick={handleOpenClose}
        className="fixed bottom-6 left-6 bg-white text-gray-700 w-12 h-12 rounded-full shadow-lg 
          hover:bg-gray-50 transition-colors flex items-center justify-center z-40
          hover:scale-110 transform transition-transform duration-200 border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Personalizar tema"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="theme-customizer-title"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-fade-in-up">
            <button
              onClick={handleOpenClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Fechar personalizador"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 id="theme-customizer-title" className="text-xl font-bold text-gray-800 mb-6">
              Personalizar Aparência
            </h2>

            <div className="space-y-6">
              <div role="radiogroup" aria-labelledby="color-scheme-label">
                <h3 id="color-scheme-label" className="font-medium text-gray-700 mb-3">
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
                      className={`p-3 rounded-lg border-2 transition-all
                        ${theme.colorScheme === id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'}
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
                <h3 id="font-size-label" className="font-medium text-gray-700 mb-3">
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
                      className={`p-3 rounded-lg border-2 transition-all
                        ${theme.fontSize === id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'}
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

            <div className="mt-6 pt-4 border-t">
              <button
                onClick={handleOpenClose}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
                  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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