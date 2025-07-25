import { PrismaClient } from '@prisma/client';
import { questions } from './questions';

interface Question {
  text: string;
  options: string[];
  correctOption: number;
  explanation: string;
  group: string;
  difficultyLevel: number;
}

const prisma = new PrismaClient();

function uniqueQuestions(questions: Question[]): Question[] {
  const seen = new Set();
  return questions.filter((q: Question) => {
    // Usar apenas o texto como chave para deduplicação
    if (seen.has(q.text)) return false;
    seen.add(q.text);
    return true;
  });
}

async function main() {
  console.log('Limpando banco de dados...');
  await prisma.answer.deleteMany();
  await prisma.quizAttempt.deleteMany();
  await prisma.question.deleteMany();
  await prisma.user.deleteMany();
  
  // Reseta o id (Postgres)
  await prisma.$executeRawUnsafe('ALTER SEQUENCE "Question_id_seq" RESTART WITH 1;');
  await prisma.$executeRawUnsafe('ALTER SEQUENCE "User_id_seq" RESTART WITH 1;');
  await prisma.$executeRawUnsafe('ALTER SEQUENCE "QuizAttempt_id_seq" RESTART WITH 1;');
  await prisma.$executeRawUnsafe('ALTER SEQUENCE "Answer_id_seq" RESTART WITH 1;');

  // Remover duplicatas e classificar por nível de dificuldade
  const uniqueQuestionsList = uniqueQuestions(questions);
  
  console.log(`Total de questões originais: ${questions.length}`);
  console.log(`Total após remover duplicatas: ${uniqueQuestionsList.length}`);

  // Distribuir questões por nível de dificuldade
  const easyQuestions = uniqueQuestionsList.filter(q => q.difficultyLevel === 1);
  const mediumQuestions = uniqueQuestionsList.filter(q => q.difficultyLevel === 2);
  const hardQuestions = uniqueQuestionsList.filter(q => q.difficultyLevel === 3);

  // Inserir questões no banco
  console.log('\nInserindo questões...');
  for (const question of uniqueQuestionsList) {
    await prisma.question.create({ data: question });
  }

  const total = await prisma.question.count();
  const easyCount = await prisma.question.count({ where: { difficultyLevel: 1 } });
  const mediumCount = await prisma.question.count({ where: { difficultyLevel: 2 } });
  const hardCount = await prisma.question.count({ where: { difficultyLevel: 3 } });

  console.log(`\nSeed concluído! Total de ${total} questões inseridas:`);
  console.log(`- Fáceis: ${easyCount}`);
  console.log(`- Médias: ${mediumCount}`);
  console.log(`- Difíceis: ${hardCount}`);

  // Log distribuição por grupo
  const groups = await prisma.question.groupBy({
    by: ['group'],
    _count: true
  });
  
  console.log('\nDistribuição por grupo:');
  groups.forEach((g) => 
    console.log(`- ${g.group}: ${g._count} questões`)
  );
}

main()
  .catch((e) => {
    console.error('Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });