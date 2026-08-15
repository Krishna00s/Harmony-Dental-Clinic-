import { z } from 'zod';

export const appointmentSchema = z.object({
  patientName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number must be at least 7 characters'),
  preferredDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  preferredTime: z.string().min(2, 'Time is required'),
  appointmentType: z.string().min(2, 'Appointment type is required'),
  note: z.string().optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
