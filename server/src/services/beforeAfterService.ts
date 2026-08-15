import { beforeAfterRepository } from '../repositories/beforeAfterRepository.js';

export const beforeAfterService = {
  getBeforeAfterCases: async () => {
    return beforeAfterRepository.getAll();
  },
  getBeforeAfterCaseById: async (id: string) => {
    return beforeAfterRepository.getById(id);
  },
};
