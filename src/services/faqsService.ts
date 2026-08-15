import { fetchApi } from './apiClient';
import type { FAQ } from '../types';
import { mockFaqs } from '../data/mockFallbackData';

export async function getFaqs(): Promise<FAQ[]> {
  try {
    return await fetchApi<FAQ[]>('/faqs');
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn('[DEV FALLBACK] Serving mock faqs data:', err);
      return mockFaqs;
    }
    throw err;
  }
}
