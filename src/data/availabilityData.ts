import type { AvailabilitySlot } from '../types';

export const generateAvailabilityData = (): AvailabilitySlot[] => {
  const slots: AvailabilitySlot[] = [];
  const today = new Date();
  const times = ['09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // Skip weekends
    if (d.getDay() === 0 || d.getDay() === 6) continue;

    const dateStr = d.toISOString().split('T')[0];
    times.forEach((t, idx) => {
      slots.push({
        id: `slot-${dateStr}-${idx}`,
        date: dateStr,
        startTime: t,
        endTime: t,
        available: true,
        appointmentType: 'General Care & Consultation',
      });
    });
  }

  return slots;
};

export const availabilityData = generateAvailabilityData();
