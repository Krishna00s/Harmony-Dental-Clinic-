import { fetchApi } from './apiClient';
import type { AppointmentRequestInput } from '../types';

export async function submitAppointmentRequest(data: AppointmentRequestInput) {
  return await fetchApi<{ id: string; status: string }>('/appointments', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
