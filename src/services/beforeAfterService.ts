import { fetchApi } from './apiClient';
import type { BeforeAfterCase } from '../types';
import { mockBeforeAfterCases } from '../data/mockFallbackData';

export async function getBeforeAfterCases(): Promise<BeforeAfterCase[]> {
  try {
    return await fetchApi<BeforeAfterCase[]>('/before-after');
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn('[DEV FALLBACK] Serving mock before-after cases data:', err);
      return mockBeforeAfterCases;
    }
    throw err;
  }
}
