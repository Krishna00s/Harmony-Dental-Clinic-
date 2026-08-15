import { prisma } from '../config/database.js';
import type { AppointmentInput } from '../schemas/appointmentSchema.js';

export const appointmentsRepository = {
  create: async (data: AppointmentInput) => {
    return prisma.appointmentRequest.create({
      data: {
        patientName: data.patientName,
        email: data.email,
        phone: data.phone,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        appointmentType: data.appointmentType,
        note: data.note || null,
        status: 'PENDING',
      },
    });
  },
};
