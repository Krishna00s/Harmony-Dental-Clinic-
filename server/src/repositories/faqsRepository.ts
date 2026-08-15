import { prisma } from '../config/database.js';

export const faqsRepository = {
  getAll: async () => {
    return prisma.fAQ.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    });
  },
};
