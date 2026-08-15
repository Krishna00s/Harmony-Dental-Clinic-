import type { APIResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  const json: APIResponse<T> = await response.json();

  if (!response.ok || !json.success) {
    const errorMsg = json.message || `API request failed with status ${response.status}`;
    throw new Error(errorMsg);
  }

  return json.data as T;
}
