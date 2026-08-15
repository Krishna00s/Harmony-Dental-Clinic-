import { prisma } from '../config/database.js';

export const beforeAfterRepository = {
  getAll: async () => {
    return prisma.beforeAfterCase.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    });
  },
  getById: async (id: string) => {
    return prisma.beforeAfterCase.findUnique({
      where: { id },
    });
  },
};
