'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSoundEffects } from './SoundEffects'

interface HelpDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function HelpDialog({ isOpen, onClose }: HelpDialogProps) {
  const { playClick } = useSoundEffects()

  const shortcuts = [
    {
      category: 'Navegação do Quiz',
      items: [
        { key: '↑/↓', description: 'Navegar entre as opções' },
        { key: '1-4', description: 'Selecionar opção diretamente' },
        { key: 'Enter', description: 'Confirmar resposta selecionada' },
      ]
    },
    {
      category: 'Revisão e Estatísticas',
      items: [
        { key: 'R', description: 'Abrir/fechar revisão de questões' },
        { key: 'Space', description: 'Reiniciar o quiz' },
        { key: 'Esc', description: 'Voltar para estatísticas' },
      ]
    },
    {
      category: 'Ajuda',
      items: [
        { key: 'H', description: 'Abrir/fechar este diálogo de ajuda' },
      ]
    }
  ]

  if (!isOpen) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  Ajuda e Atalhos do Teclado
                </Dialog.Title>

                <div className="mt-4 space-y-6">
                  {shortcuts.map((section) => (
                    <div key={section.category}>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        {section.category}
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        {section.items.map((item) => (
                          <div key={item.key} className="flex items-center justify-between text-sm">
                            <kbd className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 
                              border border-gray-200 rounded shadow-sm">
                              {item.key}
                            </kbd>
                            <span className="text-gray-600">{item.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent 
                      bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
                      focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Entendi! (Esc)
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}