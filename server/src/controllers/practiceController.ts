import type { Request, Response, NextFunction } from 'express';
import { practiceService } from '../services/practiceService.js';
import { sendSuccess } from '../utils/response.js';

export const practiceController = {
  getPractice: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await practiceService.getPracticeInfo();
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
};
