import { faqsRepository } from '../repositories/faqsRepository.js';

export const faqsService = {
  getFaqs: async () => {
    return faqsRepository.getAll();
  },
};
