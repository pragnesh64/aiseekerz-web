
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border/50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Building intelligent digital experiences that transform ideas into innovative solutions.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://github.com/pragnesh64" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-neon transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:pragnesh@quantumbot.co.in" className="text-muted-foreground hover:text-neon transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-poppins font-semibold text-foreground tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {["Home", "About", "Projects", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-neon transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-poppins font-semibold text-foreground tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Full-Stack Development",
                "AI Integration",
                "UI/UX Design",
                "API Systems",
                "Data Dashboards",
                "DevOps Solutions"
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-neon transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            <span className="animate-fade-in">
              © {year} AISEEKERZ. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
