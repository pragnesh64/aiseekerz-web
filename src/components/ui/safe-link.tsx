import { Link, LinkProps } from 'react-router-dom';
import { sanitizeUrl, isSafeUrl } from '@/lib/url-validator';
import { logger } from '@/lib/logger';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  fallbackHref?: string;
}

interface SafeLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  external?: boolean;
  fallbackTo?: string;
}

/**
 * Safe external link component
 * Only allows links to safe domains with proper security attributes
 */
export function ExternalSafeLink({ 
  href, 
  fallbackHref = '#', 
  children, 
  ...props 
}: ExternalLinkProps) {
  // Sanitize the URL to ensure it's safe
  const safeHref = sanitizeUrl(href, fallbackHref);
  
  // Add security attributes for external links
  return (
    <a 
      href={safeHref}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Universal safe link component
 * Uses react-router for internal links and safe external links for external URLs
 */
export function SafeLink({ 
  to, 
  external, 
  fallbackTo = '#',
  children, 
  ...props 
}: SafeLinkProps) {
  // Check if the link is explicitly marked as external or starts with http
  const isExternal = external || (to && (to.startsWith('http://') || to.startsWith('https://')));
  
  if (isExternal) {
    if (!isSafeUrl(to)) {
      logger.warn(`Blocked unsafe external URL: ${to}`);
      return (
        <a href={fallbackTo} {...props}>
          {children}
        </a>
      );
    }
    
    return (
      <ExternalSafeLink href={to} {...props}>
        {children}
      </ExternalSafeLink>
    );
  }
  
  // Internal link - use react-router
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
} 