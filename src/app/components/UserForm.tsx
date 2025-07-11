'use client'

import { useState } from 'react'

interface UserFormProps {
  onSubmit: (data: { name: string; cpf: string }) => void
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Nome é obrigatório')
      return
    }

    if (!cpf.trim()) {
      setError('CPF é obrigatório')
      return
    }

    // Basic CPF validation (11 digits)
    const cpfNumbers = cpf.replace(/\D/g, '')
    if (cpfNumbers.length !== 11) {
      setError('CPF inválido')
      return
    }

    onSubmit({ name: name.trim(), cpf: cpfNumbers })
  }

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Identificação</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(formatCPF(e.target.value))}
            maxLength={14}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="000.000.000-00"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 
            transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Começar Quiz
        </button>
      </form>
    </div>
  )
}