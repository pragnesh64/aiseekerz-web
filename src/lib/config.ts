/**
 * Application configuration
 * Controls API endpoints, logging, and external resource access
 */

interface Config {
  // Enable/disable all API calls
  enableExternalAPIs: boolean;
  
  // Enable/disable all logging
  enableLogging: boolean;
  
  // List of allowed external domains for images and resources
  allowedExternalDomains: string[];
}

// Default configuration
const config: Config = {
  enableExternalAPIs: false, // Disable all external API calls by default
  enableLogging: false, // Disable all logging by default
  allowedExternalDomains: [
    // Allow only trusted domains
    'cdn.simpleicons.org',
    'images.unsplash.com'
  ]
};

export default config;

// Helper functions
export const isExternalAPIAllowed = () => config.enableExternalAPIs;
export const isLoggingEnabled = () => config.enableLogging;
export const isExternalDomainAllowed = (url: string) => {
  if (!url) return false;
  try {
    const domain = new URL(url).hostname;
    return config.allowedExternalDomains.includes(domain);
  } catch (e) {
    return false;
  }
}; 