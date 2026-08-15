import { prisma } from '../config/database.js';

export const doctorsRepository = {
  getAll: async () => {
    return prisma.doctor.findMany({
      where: { active: true },
      orderBy: { displayOrder: 'asc' },
    });
  },
  getById: async (id: string) => {
    return prisma.doctor.findUnique({
      where: { id },
    });
  },
};
