import { PrismaPg } from '@prisma/adapter-pg'
import { env } from '../config'
import { PrismaClient } from '../../generated/prisma/client'
import { LOG } from '../../shared/const'

const adapter = new PrismaPg(env.DATABASE_URL)
export const prisma = new PrismaClient({ adapter })

export const connectDatabase = async (): Promise<void> => {
  try {
    await prisma.$connect()
    await prisma.$queryRaw`SELECT 1`
  } catch (error) {
    console.error(LOG.DATABASE.connectError)
    process.exit(1)
  }

  console.log(LOG.DATABASE.connect)
}

export const disconnectDatabase = async (): Promise<void> => {
  await prisma.$disconnect()
  console.log(LOG.DATABASE.disconnect)
}
