import { prisma } from '../config/database.js';
import type { ContactInput } from '../schemas/contactSchema.js';

export const contactRepository = {
  create: async (data: ContactInput) => {
    return prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
        status: 'UNREAD',
      },
    });
  },
};
