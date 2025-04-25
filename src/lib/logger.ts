import { isLoggingEnabled } from './config';

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

/**
 * Secure logging service that can be globally enabled/disabled
 * Does not expose sensitive data in production environments
 */
class Logger {
  private logToConsole(level: LogLevel, ...args: any[]) {
    // Only log if logging is enabled
    if (!isLoggingEnabled()) return;
    
    // In production, filter out potentially sensitive information
    if (process.env.NODE_ENV === 'production') {
      // Sanitize logs to prevent sensitive data exposure
      const sanitizedArgs = args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
          return '[Object filtered in production]';
        }
        return arg;
      });
      
      switch (level) {
        case 'info':
          console.info(`[INFO]`, ...sanitizedArgs);
          break;
        case 'warn':
          console.warn(`[WARN]`, ...sanitizedArgs);
          break;
        case 'error':
          console.error(`[ERROR]`, ...sanitizedArgs);
          break;
        case 'debug':
          console.debug(`[DEBUG]`, ...sanitizedArgs);
          break;
      }
    } else {
      // In development, log everything
      switch (level) {
        case 'info':
          console.info(`[INFO]`, ...args);
          break;
        case 'warn':
          console.warn(`[WARN]`, ...args);
          break;
        case 'error':
          console.error(`[ERROR]`, ...args);
          break;
        case 'debug':
          console.debug(`[DEBUG]`, ...args);
          break;
      }
    }
  }
  
  info(...args: any[]) {
    this.logToConsole('info', ...args);
  }
  
  warn(...args: any[]) {
    this.logToConsole('warn', ...args);
  }
  
  error(...args: any[]) {
    this.logToConsole('error', ...args);
  }
  
  debug(...args: any[]) {
    this.logToConsole('debug', ...args);
  }
}

// Export singleton instance
export const logger = new Logger(); 