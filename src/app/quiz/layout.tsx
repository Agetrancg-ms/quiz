import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiz de Trânsito - Teste seus Conhecimentos',
  description: 'Teste seus conhecimentos sobre as leis e regras de trânsito com nosso quiz interativo. Escolha entre níveis fácil, médio e difícil.',
  keywords: 'quiz trânsito, teste direção, código de trânsito, CTB, leis de trânsito',
  openGraph: {
    title: 'Quiz de Trânsito - Teste seus Conhecimentos',
    description: 'Teste seus conhecimentos sobre as leis e regras de trânsito com nosso quiz interativo.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quiz de Trânsito',
      },
    ],
  },
}

interface QuizLayoutProps {
  children: React.ReactNode
}

export default function QuizLayout({ children }: QuizLayoutProps) {
  return (
    <section className="flex items-center justify-center relative overflow-hidden">
      <div className="fixed inset-0 opacity-5 pointer-events-none" />
      <div className="relative z-10 w-full max-w-4xl">
        {children}
      </div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-4 z-50 rounded-lg shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
    </section>
  )
}