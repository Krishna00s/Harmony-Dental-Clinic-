import { appointmentsRepository } from '../repositories/appointmentsRepository.js';
import type { AppointmentInput } from '../schemas/appointmentSchema.js';

export const appointmentsService = {
  createAppointmentRequest: async (data: AppointmentInput) => {
    const appointment = await appointmentsRepository.create(data);
    return appointment;
  },
};
