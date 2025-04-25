
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add("animate-fade-in");
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-float");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon/20 rounded-full filter blur-3xl opacity-30 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/20 rounded-full filter blur-3xl opacity-30 animate-spin-slow" style={{ animationDelay: "2s", animationDuration: "8s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold opacity-0 font-poppins tracking-tight"
          style={{ transitionDelay: "200ms" }}
        >
          WE CREATE THE <span className="text-gradient">BRAIN OF AI</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
          Pioneering the fusion of cutting-edge AI technologies with elegant, 
          user-centric interfaces to build intelligent digital experiences.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button asChild size="lg" className=" relative">
            <Link to="/projects">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>

      <div 
        ref={imageRef}
        className="relative z-10 mx-auto mt-8 max-w-sm opacity-0"
      >
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-neon/30 rounded-full filter blur-xl"></div>
          </div>
          <svg 
            viewBox="0 0 200 200" 
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#2DD4BF" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#brainGradient)"
              d="M47.7,-61.3C62.9,-50.8,77,-37.2,82.1,-20.6C87.3,-4,83.4,15.7,74.2,32.1C65,48.5,50.5,61.7,33.8,68.3C17,74.9,-2,75,-19.8,70.2C-37.5,65.4,-54,55.7,-66.1,40.9C-78.3,26.1,-86,6.2,-82.9,-11.9C-79.7,-30.1,-65.7,-46.4,-50,-58.4C-34.2,-70.5,-17.1,-78.3,-0.1,-78.1C16.9,-78,33.8,-69.9,47.7,-61.3Z" 
              transform="translate(100 100)"
              className="opacity-80"
            />
            <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-spin-slow" />
            {/* Neural nodes */}
            {[...Array(10)].map((_, i) => {
              const angle = (i / 10) * Math.PI * 2;
              const x = 100 + 60 * Math.cos(angle);
              const y = 100 + 60 * Math.sin(angle);
              return (
                <circle 
                  key={i} 
                  cx={x} 
                  cy={y} 
                  r="4" 
                  fill="white" 
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              );
            })}
            {/* Neural connections */}
            {[...Array(8)].map((_, i) => {
              const angle1 = (i / 8) * Math.PI * 2;
              const angle2 = ((i + 3) / 8) * Math.PI * 2;
              const x1 = 100 + 60 * Math.cos(angle1);
              const y1 = 100 + 60 * Math.sin(angle1);
              const x2 = 100 + 60 * Math.cos(angle2);
              const y2 = 100 + 60 * Math.sin(angle2);
              return (
                <line 
                  key={i} 
                  x1={x1} 
                  y1={y1} 
                  x2={x2} 
                  y2={y2} 
                  stroke="white" 
                  strokeWidth="1" 
                  strokeDasharray="3,3" 
                  className="animate-pulse" 
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
};
