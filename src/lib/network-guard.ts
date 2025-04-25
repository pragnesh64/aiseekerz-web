import { logger } from './logger';
import config from './config';

/**
 * Network Guard
 * Intercepts and controls all network requests in the application
 */

// Create a modified fetch that can be controlled globally
const originalFetch = window.fetch;

// Override the global fetch to implement our security controls
window.fetch = async function(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  
  // Block all external requests if external APIs are disabled
  if (!config.enableExternalAPIs && url.startsWith('http')) {
    const errorMessage = `Network request blocked: External APIs are disabled - ${url}`;
    logger.warn(errorMessage);
    
    // Return a mock response instead of making the actual request
    return new Response(JSON.stringify({ error: 'External API requests are disabled' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // Allow the request to proceed
  return originalFetch(input, init);
};

// Block all image loading from external domains
const blockExternalImageLoading = () => {
  // Find all image elements in the document
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Replace the src with a blank image if it's external and not allowed
    if (img.src && img.src.startsWith('http')) {
      const domain = new URL(img.src).hostname;
      
      if (!config.allowedExternalDomains.includes(domain)) {
        logger.warn(`Blocked external image from loading: ${img.src}`);
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect width="18" height="18" x="3" y="3" rx="2" ry="2"/%3E%3Ccircle cx="9" cy="9" r="2"/%3E%3Cpath d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/%3E%3C/svg%3E';
        img.alt = 'Image blocked for security';
      }
    }
  });
};

// Initialize the network guard
export const initNetworkGuard = () => {
  // Block external images already in the DOM
  blockExternalImageLoading();
  
  // Set up a mutation observer to handle dynamically added images
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        blockExternalImageLoading();
      }
    }
  });
  
  // Start observing the document
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
  
  // Log initialization
  logger.info('Network guard initialized - blocking unauthorized network requests');
  
  return {
    // Method to manually check the page for external resources
    checkPage: blockExternalImageLoading
  };
};

export default initNetworkGuard; 