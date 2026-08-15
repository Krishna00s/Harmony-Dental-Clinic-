import { prisma } from '../config/database.js';

export const practiceRepository = {
  getPractice: async () => {
    return prisma.practice.findFirst();
  },
};
