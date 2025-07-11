import QuizClient from '@/app/components/QuizClient';

export default async function QuizPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  if (!level) {
    throw new Error('Level parameter is required');
  }

  // Validar o nível antes de passar para o componente
  const validLevels = ['facil', 'medio', 'dificil'];
  if (!validLevels.includes(level)) {
    throw new Error('Invalid level parameter');
  }

  return <QuizClient level={level} />;
}