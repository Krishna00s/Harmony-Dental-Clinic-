import { contactRepository } from '../repositories/contactRepository.js';
import type { ContactInput } from '../schemas/contactSchema.js';

export const contactService = {
  createContactMessage: async (data: ContactInput) => {
    return contactRepository.create(data);
  },
};
