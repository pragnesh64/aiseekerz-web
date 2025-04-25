import { useState, useEffect } from 'react';
import { isExternalDomainAllowed } from '@/lib/config';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

/**
 * A component that only loads images from allowed domains
 * Falls back to a placeholder or specified fallback image
 */
export function SafeImage({ src, fallbackSrc = '/placeholder.png', alt, ...props }: SafeImageProps) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if the source is an external URL
    if (src && (src.startsWith('http://') || src.startsWith('https://'))) {
      // Only set the image source if the domain is allowed
      if (isExternalDomainAllowed(src)) {
        setImageSrc(src);
      } else {
        console.warn(`Image from non-allowed domain blocked: ${src}`);
        setImageSrc(fallbackSrc);
      }
    } else {
      // Local images are always allowed
      setImageSrc(src);
    }
  }, [src, fallbackSrc]);

  const handleError = () => {
    setError(true);
    setImageSrc(fallbackSrc);
  };

  return (
    <img
      src={error ? fallbackSrc : imageSrc}
      alt={alt || 'Image'}
      onError={handleError}
      {...props}
    />
  );
} 