
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`fixed right-5 bottom-5 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <Button 
        onClick={scrollToTop} 
        variant="outline" 
        size="icon" 
        className="rounded-full border border-neon/30 bg-background/50 backdrop-blur hover:bg-neon/10 hover:border-neon transition-all"
      >
        <ArrowUp className="h-5 w-5 text-neon" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  );
};
