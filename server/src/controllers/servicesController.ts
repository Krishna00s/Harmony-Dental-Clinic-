import type { Request, Response, NextFunction } from 'express';
import { servicesService } from '../services/servicesService.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const servicesController = {
  getServices: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await servicesService.getServices();
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
  getServiceBySlug: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const slug = req.params.slug as string;
      const data = await servicesService.getServiceBySlug(slug);
      if (!data) {
        return sendError(res, 'Service not found', [], 404);
      }
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
};
