import type { Request, Response, NextFunction } from 'express';
import { testimonialsService } from '../services/testimonialsService.js';
import { sendSuccess } from '../utils/response.js';

export const testimonialsController = {
  getTestimonials: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await testimonialsService.getTestimonials();
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
};
