import { prisma } from '../config/database.js';

export const servicesRepository = {
  getAll: async () => {
    return prisma.service.findMany({
      where: { active: true },
      orderBy: { displayOrder: 'asc' },
    });
  },
  getBySlug: async (slug: string) => {
    return prisma.service.findUnique({
      where: { slug },
    });
  },
};
