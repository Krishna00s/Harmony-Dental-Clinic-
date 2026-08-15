import { prisma } from '../config/database.js';

export const testimonialsRepository = {
  getAll: async () => {
    return prisma.testimonial.findMany({
      where: { approved: true },
      orderBy: { createdAt: 'desc' },
    });
  },
};
