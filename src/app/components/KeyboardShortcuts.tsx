'use client'

import { useEffect, useState } from 'react'
import { useSoundEffects } from './SoundEffects'

interface ShortcutOverlayProps {
  isOpen: boolean
  onClose: () => void
}

function ShortcutOverlay({ isOpen, onClose }: ShortcutOverlayProps) {
  if (!isOpen) return null

  const shortcuts = [
    { keys: ['?'], description: 'Mostrar/ocultar atalhos de teclado' },
    { keys: ['h'], description: 'Abrir ajuda' },
    { keys: ['t'], description: 'Abrir personalizador de tema' },
    { keys: ['m'], description: 'Ativar/desativar sons' },
    { keys: ['↑', '↓'], description: 'Navegar entre opções' },
    { keys: ['1-4'], description: 'Selecionar opção diretamente' },
    { keys: ['Enter'], description: 'Confirmar resposta selecionada' },
    { keys: ['Esc'], description: 'Fechar diálogos' }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Fechar atalhos de teclado"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Atalhos de Teclado
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shortcuts.map(({ keys, description }) => (
            <div key={description} className="flex items-center gap-3">
              <div className="flex gap-1">
                {keys.map(key => (
                  <kbd
                    key={key}
                    className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
                      border border-gray-200 rounded shadow-sm min-w-[24px] text-center"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
              <span className="text-gray-600">{description}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Pressione <kbd className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
            border border-gray-200 rounded shadow-sm">?</kbd> a qualquer momento para
          ver esta tela novamente
        </div>
      </div>
    </div>
  )
}

export default function KeyboardShortcuts() {
  const [showOverlay, setShowOverlay] = useState(false)
  const { playClick } = useSoundEffects()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Não acionar atalhos se o usuário estiver digitando em um input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      const key = e.key.toLowerCase()
      
      switch (key) {
        case '?':
          e.preventDefault()
          playClick()
          setShowOverlay(prev => !prev)
          break
        case 'escape':
          if (showOverlay) {
            e.preventDefault()
            playClick()
            setShowOverlay(false)
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showOverlay, playClick])

  // Mostrar sobreposição de atalhos na primeira visita
  useEffect(() => {
    const hasSeenShortcuts = localStorage.getItem('hasSeenShortcuts')
    if (!hasSeenShortcuts) {
      setShowOverlay(true)
      localStorage.setItem('hasSeenShortcuts', 'true')
    }
  }, [])

  return (
    <ShortcutOverlay
      isOpen={showOverlay}
      onClose={() => setShowOverlay(false)}
    />
  )
}