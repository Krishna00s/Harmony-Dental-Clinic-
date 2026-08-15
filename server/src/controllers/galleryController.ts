import type { Request, Response, NextFunction } from 'express';
import { galleryService } from '../services/galleryService.js';
import { sendSuccess } from '../utils/response.js';

export const galleryController = {
  getGallery: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await galleryService.getGallery();
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
};
