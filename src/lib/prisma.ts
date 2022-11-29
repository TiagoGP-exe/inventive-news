import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// @ts-ignore

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
