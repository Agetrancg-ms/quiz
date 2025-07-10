const { PrismaClient } = require('@prisma/client')
const { easyQuestions, mediumQuestions, hardQuestions } = require('./questions')

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando seed...')
  
  // Clear existing questions
  await prisma.answer.deleteMany()
  await prisma.question.deleteMany()
  
  console.log('Inserindo questões fáceis...')
  for (const question of easyQuestions) {
    await prisma.question.create({
      data: question
    })
  }
  
  console.log('Inserindo questões médias...')
  for (const question of mediumQuestions) {
    await prisma.question.create({
      data: question
    })
  }
  
  console.log('Inserindo questões difíceis...')
  for (const question of hardQuestions) {
    await prisma.question.create({
      data: question
    })
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