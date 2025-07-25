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
      className="fixed bottom-4 left-4 bg-white text-gray-700 w-12 h-12 rounded-full shadow-lg 
        hover:bg-gray-50 flex items-center justify-center z-40
        hover:scale-110 transform transition-transform duration-200 border border-gray-200 cursor-pointer"
      aria-label={isSoundEnabled ? 'Desativar sons' : 'Ativar sons'}
    >
      {isSoundEnabled ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  )
}