import { fetchApi } from './apiClient';
import type { GalleryItem } from '../types';
import { mockGallery } from '../data/mockFallbackData';

export async function getGallery(): Promise<GalleryItem[]> {
  try {
    return await fetchApi<GalleryItem[]>('/gallery');
  } catch (err) {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_FALLBACK === 'true') {
      console.warn('[DEV FALLBACK] Serving mock gallery data:', err);
      return mockGallery;
    }
    throw err;
  }
}
