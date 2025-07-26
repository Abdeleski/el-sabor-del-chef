import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ReliableImageProps {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export default function ReliableImage({ 
  src, 
  fallback, 
  alt, 
  className = "", 
  loading = "lazy",
  onError 
}: ReliableImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
    if (onError) {
      onError(e);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-mediterranean-100 to-cream-100 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <ImageIcon className="w-8 h-8 mediterranean-500 mx-auto mb-2" />
          <p className="text-xs text-mediterranean-700 font-medium">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}>
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      )}
      <img 
        src={currentSrc}
        alt={alt}
        className={className}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
}