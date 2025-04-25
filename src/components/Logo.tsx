
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-stroke-draw");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative" ref={logoRef}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-neon"
          style={{ 
            strokeDasharray: "100%", 
            strokeDashoffset: "100%", 
          }}
        >
          <path
            d="M5 10L20 5L35 10L20 15L5 10Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 10V30"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          />
          <path
            d="M5 10V30"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          />
          <path
            d="M5 30L20 35L35 30"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="20"
            cy="20"
            r="5"
            strokeWidth="2"
            className="fill-accent/50 animate-pulse"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-neon to-teal opacity-50 blur-lg animate-pulse rounded-full"></div>
      </div>
      <div className="font-poppins font-bold text-xl">
        <span className="text-neon">AI</span>
        <span className="text-white">SEEKERZ</span>
      </div>
    </Link>
  );
};
