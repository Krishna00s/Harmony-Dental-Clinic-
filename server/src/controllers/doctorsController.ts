import type { Request, Response, NextFunction } from 'express';
import { doctorsService } from '../services/doctorsService.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const doctorsController = {
  getDoctors: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await doctorsService.getDoctors();
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
  getDoctorById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      const data = await doctorsService.getDoctorById(id);
      if (!data) {
        return sendError(res, 'Doctor not found', [], 404);
      }
      return sendSuccess(res, data);
    } catch (err) {
      next(err);
    }
  },
};
