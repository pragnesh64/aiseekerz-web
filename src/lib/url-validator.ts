import { isExternalDomainAllowed } from './config';
import { logger } from './logger';

/**
 * URL validator and sanitizer
 * Ensures external URLs are safe and allowed
 */

/**
 * Check if a URL is safe and allowed
 * @param url The URL to check
 * @returns true if the URL is safe and allowed
 */
export function isSafeUrl(url: string): boolean {
  if (!url) return false;
  
  try {
    // Check for javascript: protocol which can be used for XSS
    if (url.toLowerCase().trim().startsWith('javascript:')) {
      logger.warn('Blocked javascript: URL', { url });
      return false;
    }
    
    // Check for data: URLs which can be used for XSS
    if (url.toLowerCase().trim().startsWith('data:')) {
      logger.warn('Blocked data: URL', { url });
      return false;
    }
    
    // Only allow http: and https: protocols
    const urlObj = new URL(url);
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      logger.warn(`Blocked URL with invalid protocol: ${urlObj.protocol}`, { url });
      return false;
    }
    
    // Check if the domain is allowed
    return isExternalDomainAllowed(url);
  } catch (e) {
    logger.warn('Invalid URL format', { url, error: e });
    return false;
  }
}

/**
 * Sanitize a URL to ensure it's safe
 * @param url The URL to sanitize
 * @param fallbackUrl Fallback URL to use if the provided URL is unsafe
 * @returns The sanitized URL or the fallback URL
 */
export function sanitizeUrl(url: string, fallbackUrl: string = '#'): string {
  if (isSafeUrl(url)) {
    return url;
  }
  
  logger.warn('URL sanitized and replaced with fallback', { originalUrl: url, fallbackUrl });
  return fallbackUrl;
} 