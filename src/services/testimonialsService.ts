import { fetchApi } from './apiClient';
import type { Testimonial } from '../types';
import { mockTestimonials } from '../data/mockFallbackData';

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await fetchApi<Testimonial[]>('/testimonials');
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn('[DEV FALLBACK] Serving mock testimonials data:', err);
      return mockTestimonials;
    }
    throw err;
  }
}
