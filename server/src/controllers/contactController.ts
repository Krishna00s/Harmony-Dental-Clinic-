import type { Request, Response, NextFunction } from 'express';
import { contactService } from '../services/contactService.js';
import { sendSuccess } from '../utils/response.js';

export const contactController = {
  createContact: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await contactService.createContactMessage(req.body);
      return sendSuccess(res, result, 'Contact message sent successfully.', 201);
    } catch (err) {
      next(err);
    }
  },
};
