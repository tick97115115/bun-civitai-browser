import { PrismaClient } from '@prisma/client'
import { PrismaBunSQLite } from '@synapsenwerkstatt/prisma-bun-sqlite-adapter'

// Create adapter factory
const adapter = new PrismaBunSQLite({ url: 'file:database.db' })

// Initialize Prisma with adapter
export const prisma = new PrismaClient({ adapter })

// Use Prisma as usual
// const users = await prisma.user.findMany()