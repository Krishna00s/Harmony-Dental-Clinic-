import type { Request, Response, NextFunction } from 'express';
import { appointmentsService } from '../services/appointmentsService.js';
import { sendSuccess } from '../utils/response.js';

export const appointmentsController = {
  createAppointment: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await appointmentsService.createAppointmentRequest(req.body);
      return sendSuccess(res, result, 'Appointment request received.', 201);
    } catch (err) {
      next(err);
    }
  },
};
