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
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden relative">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Floating sound toggle button will be rendered by SoundEffects provider */}
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
          bg-white p-4 z-50 rounded-lg shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
    </section>
  )
}

// Add background grid pattern to global.css
const styles = `
  .bg-grid-pattern {
    background-image: linear-gradient(to right, #ccc 1px, transparent 1px),
                      linear-gradient(to bottom, #ccc 1px, transparent 1px);
    background-size: 20px 20px;
  }
`