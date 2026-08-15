import { fetchApi } from './apiClient';
import type { Practice } from '../types';
import { mockPractice } from '../data/mockFallbackData';

export async function getPractice(): Promise<Practice> {
  try {
    return await fetchApi<Practice>('/practice');
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn('[DEV FALLBACK] Serving mock practice data:', err);
      return mockPractice;
    }
    throw err;
  }
}
