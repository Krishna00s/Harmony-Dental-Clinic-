import { fetchApi } from './apiClient';
import type { AvailabilitySlot } from '../types';

export async function getAvailability(dateStr: string): Promise<AvailabilitySlot[]> {
  try {
    return await fetchApi<AvailabilitySlot[]>(`/availability?date=${dateStr}`);
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn('[DEV FALLBACK] Serving mock availability data:', err);
      const defaultTimes = ['09:00', '10:30', '13:30', '15:00', '16:30'];
      return defaultTimes.map((time, idx) => ({
        id: `slot_${dateStr}_${idx}`,
        date: dateStr,
        startTime: time,
        endTime: time,
        available: true,
        appointmentType: 'General Dentistry',
      }));
    }
    throw err;
  }
}
