import { galleryRepository } from '../repositories/galleryRepository.js';

export const galleryService = {
  getGallery: async () => {
    return galleryRepository.getAll();
  },
};
