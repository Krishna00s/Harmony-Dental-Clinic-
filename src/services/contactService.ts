import { fetchApi } from './apiClient';
import type { ContactMessageInput } from '../types';

export async function submitContactMessage(data: ContactMessageInput) {
  return await fetchApi<{ id: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
