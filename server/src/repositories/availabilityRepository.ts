import { prisma } from '../config/database.js';

export const availabilityRepository = {
  getByDate: async (date: string) => {
    return prisma.availabilitySlot.findMany({
      where: { date, available: true },
      orderBy: { startTime: 'asc' },
    });
  },
};
