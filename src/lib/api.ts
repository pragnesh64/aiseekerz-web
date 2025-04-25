import { isExternalAPIAllowed } from './config';
import { logger } from './logger';

/**
 * Safe fetch wrapper that only makes API calls when allowed
 * Checks against configuration before making any external requests
 */
export async function safeFetch(
  url: string,
  options?: RequestInit
): Promise<Response | null> {
  // Check if external API calls are allowed
  if (!isExternalAPIAllowed()) {
    logger.warn(`API call blocked: External APIs are disabled`, { url });
    return null;
  }

  try {
    // Make the API call
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    logger.error(`API call failed:`, error);
    return null;
  }
}

/**
 * Safely fetches JSON from an API endpoint
 * Returns null if the request is blocked or fails
 */
export async function safeGetJSON<T>(url: string, options?: RequestInit): Promise<T | null> {
  const response = await safeFetch(url, options);
  
  if (!response) return null;
  
  try {
    return await response.json() as T;
  } catch (error) {
    logger.error(`Failed to parse JSON response:`, error);
    return null;
  }
}

/**
 * Safely posts JSON to an API endpoint
 * Returns null if the request is blocked or fails
 */
export async function safePostJSON<T>(
  url: string, 
  data: unknown, 
  options?: RequestInit
): Promise<T | null> {
  const response = await safeFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
  
  if (!response) return null;
  
  try {
    return await response.json() as T;
  } catch (error) {
    logger.error(`Failed to parse JSON response:`, error);
    return null;
  }
} 