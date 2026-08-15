import type { Request, Response, NextFunction } from 'express';
import { availabilityService } from '../services/availabilityService.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const availabilityController = {
  getAvailability: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dateStr = (req.query.date as string) || new Date().toISOString().split('T')[0];
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
        return sendError(res, 'Invalid date format. Use YYYY-MM-DD', [], 400);
      }
      const data = await availabilityService.getAvailabilityByDate(dateStr);
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
};
