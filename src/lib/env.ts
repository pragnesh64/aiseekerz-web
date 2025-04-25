/**
 * Environment settings manager
 * Controls application behavior based on runtime environment
 */

// Environment detection
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';
export const isTest = process.env.NODE_ENV === 'test';

// Load environment variables with defaults
export const env = {
  // API settings
  ENABLE_EXTERNAL_APIS: getEnvValue('VITE_ENABLE_EXTERNAL_APIS', 'false') === 'true',
  
  // Logging settings
  ENABLE_LOGGING: getEnvValue('VITE_ENABLE_LOGGING', isDevelopment ? 'true' : 'false') === 'true',
  
  // Security settings
  ALLOWED_DOMAINS: getEnvValue('VITE_ALLOWED_DOMAINS', 'cdn.simpleicons.org,images.unsplash.com').split(','),
  
  // Feature flags
  ENABLE_ANALYTICS: getEnvValue('VITE_ENABLE_ANALYTICS', isProduction ? 'true' : 'false') === 'true',
};

/**
 * Helper to safely get environment variables with fallbacks
 */
function getEnvValue(key: string, defaultValue: string): string {
  const value = import.meta.env[key];
  return value !== undefined ? String(value) : defaultValue;
}

/**
 * Update the configuration based on current environment
 * Call this function in app initialization to apply environment settings
 */
export function initializeEnvironment() {
  // Import configuration as needed here
  const config = import('./config').then(module => {
    const config = module.default;
    
    // Update config based on environment
    config.enableExternalAPIs = env.ENABLE_EXTERNAL_APIS;
    config.enableLogging = env.ENABLE_LOGGING;
    config.allowedExternalDomains = env.ALLOWED_DOMAINS;
    
    return config;
  });
  
  return config;
} 