import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

// Placeholder component instead of loading external image
const ProfilePlaceholder = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-blue-900/30 to-purple-900/30">
      <User className="h-24 w-24 opacity-50 mb-4" />
      <span className="text-lg font-medium opacity-70">Pragnesh</span>
      <span className="text-sm opacity-50">Digital Alchemist</span>
    </div>
  );
};

export const IntroCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-background/90">
      <div 
        ref={cardRef}
        className="max-w-7xl mx-auto opacity-0"
        style={{ transitionDelay: "200ms" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon/20 to-teal/20 opacity-50"></div>
              <ProfilePlaceholder />
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 bg-neon/80 text-white text-xs font-medium px-2.5 py-1 rounded">Full-Stack Developer</div>
              <div className="absolute top-4 right-4 bg-teal/80 text-white text-xs font-medium px-2.5 py-1 rounded">AI Expert</div>
              <div className="absolute bottom-4 left-4 right-4 bg-background/60 backdrop-blur-md p-3 rounded-lg border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium">Available for freelance work</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-neon/50 rounded-tl-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-teal/50 rounded-br-xl"></div>
          </div>
          
          <div>
            <div className="space-y-2 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Pragnesh
              </h2>
              <p className="text-2xl text-gradient font-dm">Digital Alchemist</p>
            </div>
            
            <div className="prose prose-invert max-w-none mb-8 text-muted-foreground">
              <p>
                A full-stack developer and AI integration expert with a passion for creating 
                intelligent digital experiences that transform ideas into innovative solutions.
              </p>
              <p>
                Specializing in Next.js, React, and modern AI technologies,
                I blend technical excellence with creative problem-solving to build
                applications that are both powerful and user-friendly.
              </p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4 text-neon" />
                Ahmedabad, Gujarat
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="mr-2 h-4 w-4 text-neon" />
                pragnesh@quantumbot.co.in
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4 text-neon" />
                IST Timezone (UTC+5:30)
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className=" relative">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
