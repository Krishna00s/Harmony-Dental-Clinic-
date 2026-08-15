import { prisma } from '../config/database.js';

export const galleryRepository = {
  getAll: async () => {
    return prisma.galleryItem.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    });
  },
};
