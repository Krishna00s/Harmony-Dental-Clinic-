import { servicesRepository } from '../repositories/servicesRepository.js';

export const servicesService = {
  getServices: async () => {
    return servicesRepository.getAll();
  },
  getServiceBySlug: async (slug: string) => {
    return servicesRepository.getBySlug(slug);
  },
};
