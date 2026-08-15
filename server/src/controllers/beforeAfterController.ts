import type { Request, Response, NextFunction } from 'express';
import { beforeAfterService } from '../services/beforeAfterService.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const beforeAfterController = {
  getCases: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await beforeAfterService.getBeforeAfterCases();
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
  getCaseById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      const data = await beforeAfterService.getBeforeAfterCaseById(id);
      if (!data) {
        return sendError(res, 'Before/After case not found', [], 404);
      }
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
};
