import { testimonialsRepository } from '../repositories/testimonialsRepository.js';

export const testimonialsService = {
  getTestimonials: async () => {
    return testimonialsRepository.getAll();
  },
};
