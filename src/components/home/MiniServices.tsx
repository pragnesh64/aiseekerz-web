
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Cpu,
  Layers,
  Database,
  BarChart3,
  Cloud
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web applications with React, Next.js, Node.js, and more.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Implement LLMs, chatbots, and machine learning solutions for your business.",
  },
  {
    icon: Layers,
    title: "UI/UX & Motion Design",
    description: "Beautiful, animated interfaces focused on user experience and accessibility.",
  },
  {
    icon: Database,
    title: "API & Auth Systems",
    description: "Scalable API architecture with secure authentication and authorization.",
  },
  {
    icon: BarChart3,
    title: "Data Dashboards",
    description: "Interactive visualization dashboards to track metrics and gain insights.",
  },
  {
    icon: Cloud,
    title: "DevOps Solutions",
    description: "CI/CD pipelines, containerization, and cloud infrastructure management.",
  },
];

export const MiniServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            
            // Animate child elements with staggered delay
            const children = entry.target.querySelectorAll(".service-card");
            children.forEach((child, index) => {
              (child as HTMLElement).style.transitionDelay = `${index * 100}ms`;
              child.classList.add("animate-slide-in");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-background/95">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto opacity-0"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solutions I provide to help businesses succeed in the digital age with AI-driven technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card opacity-0 p-6 rounded-xl border border-border/50 bg-background hover:bg-muted/5 transition-colors duration-300"
              >
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-neon/20 to-teal/20 border border-neon/30">
                  <Icon className="h-6 w-6 text-neon" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-neon hover:text-neon/80 text-sm font-medium inline-block transition-colors"
                >
                  Learn more
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
