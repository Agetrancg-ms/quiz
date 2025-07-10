'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Loading from './components/Loading'

interface Statistics {
  totalParticipants: number
  easyAverage: number
  mediumAverage: number
  hardAverage: number
}

export default function HomePage() {
  const [stats, setStats] = useState<Statistics | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [easyStats, mediumStats, hardStats] = await Promise.all([
          fetch('/api/analytics?level=1').then(res => res.json()),
          fetch('/api/analytics?level=2').then(res => res.json()),
          fetch('/api/analytics?level=3').then(res => res.json())
        ])

        setStats({
          totalParticipants: Math.max(
            easyStats.totalParticipants,
            mediumStats.totalParticipants,
            hardStats.totalParticipants
          ),
          easyAverage: easyStats.averageScore,
          mediumAverage: mediumStats.averageScore,
          hardAverage: hardStats.averageScore
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  const difficultyLevels = [
    {
      level: 'facil',
      title: 'Nível Fácil',
      description: 'Ideal para iniciantes. Questões básicas sobre regras de trânsito, sinalizações e procedimentos simples.',
      color: 'green',
      average: stats?.easyAverage
    },
    {
      level: 'medio',
      title: 'Nível Médio',
      description: 'Para quem já tem conhecimento básico. Aborda situações mais complexas e legislação específica.',
      color: 'yellow',
      average: stats?.mediumAverage
    },
    {
      level: 'dificil',
      title: 'Nível Difícil',
      description: 'Para especialistas. Questões avançadas sobre legislação, mecânica e situações especiais.',
      color: 'red',
      average: stats?.hardAverage
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto pt-20 px-4 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Quiz de Conhecimentos sobre Trânsito
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teste seus conhecimentos sobre as leis e regras de trânsito. Escolha entre três níveis
            de dificuldade e descubra o quanto você sabe sobre segurança viária.
          </p>

          {isLoading ? (
            <div className="mt-8">
              <Loading message="Carregando estatísticas..." />
            </div>
          ) : stats && (
            <div className="mt-8 inline-flex items-center bg-blue-50 px-6 py-3 rounded-full">
              <span className="text-blue-600 font-semibold">
                {stats.totalParticipants} participantes já realizaram o quiz
              </span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {difficultyLevels.map(({ level, title, description, color, average }) => (
            <Link
              key={level}
              href={`/quiz/${level}`}
              className={`group relative overflow-hidden p-6 rounded-xl shadow-lg bg-white hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1 border-2
                ${color === 'green' 
                  ? 'border-green-500 hover:border-green-600' 
                  : color === 'yellow'
                    ? 'border-yellow-500 hover:border-yellow-600'
                    : 'border-red-500 hover:border-red-600'
                }`}
            >
              <div className="relative z-10">
                <h2 className={`text-2xl font-bold mb-3 ${
                  color === 'green' 
                    ? 'text-green-700' 
                    : color === 'yellow'
                      ? 'text-yellow-700'
                      : 'text-red-700'
                }`}>
                  {title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {description}
                </p>
                {typeof average === 'number' && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Média de Acertos</p>
                    <p className={`text-2xl font-bold ${
                      average >= 70
                        ? 'text-green-600'
                        : average >= 50
                          ? 'text-yellow-600'
                          : 'text-red-600'
                    }`}>
                      {Math.round(average)}%
                    </p>
                  </div>
                )}
              </div>
              
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity
                ${color === 'green' 
                  ? 'bg-green-500' 
                  : color === 'yellow'
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="text-center text-gray-600">
          <p className="mb-4 max-w-2xl mx-auto">
            Este quiz foi desenvolvido para ajudar motoristas e futuros condutores a testarem seus
            conhecimentos sobre as leis e regras de trânsito. As questões são baseadas no Código
            de Trânsito Brasileiro (CTB) e em situações reais do dia a dia.
          </p>
          <p className="text-sm">
            * Seus resultados serão armazenados anonimamente e usados apenas para fins
            estatísticos e de pesquisa sobre o conhecimento da população em relação às leis
            de trânsito.
          </p>
        </div>
      </div>
    </main>
  )
}
