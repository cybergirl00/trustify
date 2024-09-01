import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()


// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
