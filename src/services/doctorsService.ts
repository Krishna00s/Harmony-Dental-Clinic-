import { fetchApi } from './apiClient';
import type { Doctor } from '../types';
import { mockDoctor } from '../data/mockFallbackData';

export async function getDoctors(): Promise<Doctor[]> {
  try {
    return await fetchApi<Doctor[]>('/doctors');
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn('[DEV FALLBACK] Serving mock doctors data:', err);
      return [mockDoctor];
    }
    throw err;
  }
}
