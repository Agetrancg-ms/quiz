import QuizClient from '@/app/components/QuizClient';

export default async function QuizPage({
  params,
}: {
  params: { level: string }
}) {
  // Em Next.js 15, precisamos garantir que params seja awaited em server components
  const level = params.level;
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