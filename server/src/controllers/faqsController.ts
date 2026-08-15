import type { Request, Response, NextFunction } from 'express';
import { faqsService } from '../services/faqsService.js';
import { sendSuccess } from '../utils/response.js';

export const faqsController = {
  getFaqs: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await faqsService.getFaqs();
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
};
