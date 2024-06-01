import { PrismaClient } from '@prisma/client';
import path from 'path';

// Workaround to find the db file in production
const filePath = path.join(process.cwd(), 'prisma/dev.db');
const config = {
  datasources: {
    db: {
      url: 'file:' + filePath,
    },
  },
};
console.log("filePath", filePath)
const prisma = new PrismaClient(config);

export type Context = {
  prisma: PrismaClient;
};

export const createContext = () => ({
  prisma,
});