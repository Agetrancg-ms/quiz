'use client'

import { useSoundEffects } from './SoundEffects'

export default function SoundToggle() {
  const { isSoundEnabled, toggleSound, playClick } = useSoundEffects()

  const handleClick = () => {
    playClick()
    toggleSound()
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 left-6 bg-white text-gray-700 w-12 h-12 rounded-full shadow-lg 
        hover:bg-gray-50 transition-colors flex items-center justify-center z-40
        hover:scale-110 transform transition-transform duration-200 border border-gray-200"
      aria-label={isSoundEnabled ? 'Desativar sons' : 'Ativar sons'}
    >
      {isSoundEnabled ? (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8.688l5.762-5.762a1 1 0 011.414 0l2.37 2.37a1 1 0 010 1.414L7.914 15.087a1 1 0 01-1.414 0l-2.37-2.37a1 1 0 010-1.414l2.37-2.37zM6 15.5a1 1 0 001 1h4a1 1 0 001-1v-6a1 1 0 00-1-1H7a1 1 0 00-1 1v6z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      )}
    </button>
  )
}