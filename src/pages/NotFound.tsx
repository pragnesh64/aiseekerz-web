
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set page title
    document.title = "404 - Page Not Found | AISEEKERZ";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="space-y-6 text-center max-w-md">
        <div className="relative w-48 h-48 mx-auto">
          <svg 
            viewBox="0 0 200 200" 
            className="w-full h-full animate-float"
          >
            <defs>
              <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#2DD4BF" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#robotGradient)"
              d="M47.7,-61.3C62.9,-50.8,77,-37.2,82.1,-20.6C87.3,-4,83.4,15.7,74.2,32.1C65,48.5,50.5,61.7,33.8,68.3C17,74.9,-2,75,-19.8,70.2C-37.5,65.4,-54,55.7,-66.1,40.9C-78.3,26.1,-86,6.2,-82.9,-11.9C-79.7,-30.1,-65.7,-46.4,-50,-58.4C-34.2,-70.5,-17.1,-78.3,-0.1,-78.1C16.9,-78,33.8,-69.9,47.7,-61.3Z" 
              transform="translate(100 100) scale(0.7)"
              className="opacity-80"
            />
            
            {/* Robot face */}
            <circle cx="100" cy="90" r="30" fill="#191D2E" />
            <rect x="70" y="130" width="60" height="40" rx="10" fill="#191D2E" />
            <rect x="85" y="120" width="30" height="10" fill="#191D2E" />
            
            {/* Robot eyes */}
            <circle cx="85" cy="90" r="8" fill="white" className="animate-pulse" />
            <circle cx="115" cy="90" r="8" fill="white" className="animate-pulse" />
            <circle cx="85" cy="90" r="4" fill="#2DD4BF" />
            <circle cx="115" cy="90" r="4" fill="#2DD4BF" />
            
            {/* Robot mouth */}
            <rect x="85" y="110" width="30" height="5" rx="2" fill="white" />
            
            {/* Antenna */}
            <rect x="97" y="50" width="6" height="15" fill="#191D2E" />
            <circle cx="100" cy="45" r="8" fill="#191D2E" className="animate-pulse" />
            
            {/* Error text */}
            <text x="100" y="155" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">ERROR 404</text>
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-neon/20 rounded-full filter blur-xl"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gradient">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
        <p className="text-muted-foreground">
          Oops! The page you're looking for doesn't exist or has been moved to another location.
        </p>
        
        <Button asChild className=" relative">
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
