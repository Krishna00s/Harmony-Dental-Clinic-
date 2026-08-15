import { availabilityRepository } from '../repositories/availabilityRepository.js';

export const availabilityService = {
  getAvailabilityByDate: async (date: string) => {
    const slots = await availabilityRepository.getByDate(date);
    if (slots.length > 0) return slots;

    // Generate dynamic default available slots for requested valid date if no explicit slots in DB
    const defaultTimes = ['09:00', '10:00', '11:30', '14:00', '15:30', '16:30'];
    return defaultTimes.map((time, idx) => ({
      id: `slot_${date}_${idx}`,
      date,
      startTime: time,
      endTime: time,
      available: true,
      appointmentType: 'General Dentistry',
    }));
  },
};
