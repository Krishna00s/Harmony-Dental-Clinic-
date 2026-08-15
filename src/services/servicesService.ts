import { fetchApi } from './apiClient';
import type { Service } from '../types';
import { mockServices } from '../data/mockFallbackData';

export async function getServices(): Promise<Service[]> {
  try {
    return await fetchApi<Service[]>('/services');
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn('[DEV FALLBACK] Serving mock services data:', err);
      return mockServices;
    }
    throw err;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service> {
  try {
    return await fetchApi<Service>(`/services/${slug}`);
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn(`[DEV FALLBACK] Serving mock service for slug ${slug}:`, err);
      const found = mockServices.find((s) => s.slug === slug);
      if (found) return found;
    }
    throw err;
  }
}
