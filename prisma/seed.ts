const { PrismaClient } = require('@prisma/client')
const { easyQuestions, mediumQuestions, hardQuestions } = require('./questions')

const prisma = new PrismaClient()

function uniqueByTextAndLevel(questions: Array<{ text: string; difficultyLevel: number }>) {
  const seen = new Set()
  return questions.filter(q => {
    const key = q.text + '|' + q.difficultyLevel
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

async function main() {
  console.log('Limpando banco de dados...')
  await prisma.answer.deleteMany()
  await prisma.quizAttempt.deleteMany()
  await prisma.question.deleteMany()
  await prisma.user.deleteMany()
  // Reseta o id (Postgres)
  await prisma.$executeRawUnsafe('ALTER SEQUENCE "Question_id_seq" RESTART WITH 1;')
  await prisma.$executeRawUnsafe('ALTER SEQUENCE "User_id_seq" RESTART WITH 1;')
  await prisma.$executeRawUnsafe('ALTER SEQUENCE "QuizAttempt_id_seq" RESTART WITH 1;')
  await prisma.$executeRawUnsafe('ALTER SEQUENCE "Answer_id_seq" RESTART WITH 1;')

  const easyUnique = uniqueByTextAndLevel(easyQuestions)
  const mediumUnique = uniqueByTextAndLevel(mediumQuestions)
  const hardUnique = uniqueByTextAndLevel(hardQuestions)

  console.log('Inserindo questões fáceis...')
  for (const question of easyUnique) {
    await prisma.question.create({ data: question })
  }
  console.log('Inserindo questões médias...')
  for (const question of mediumUnique) {
    await prisma.question.create({ data: question })
  }
  console.log('Inserindo questões difíceis...')
  for (const question of hardUnique) {
    await prisma.question.create({ data: question })
  }
  const total = await prisma.question.count()
  console.log(`Seed concluído! Total de ${total} questões inseridas.`)
}

main()
  .catch((e) => {
    console.error('Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })