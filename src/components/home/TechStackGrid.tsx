import { useEffect, useRef } from "react";
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaVuejs, 
  FaAngular, FaJava, FaPhp, FaLaravel, FaWordpress, FaDigitalOcean 
} from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, 
  SiGraphql, SiNextdotjs, SiGo, SiKubernetes, SiTensorflow,
  SiPostgresql, SiFirebase, SiRedis, SiElasticsearch, SiSwift,
  SiFlutter, SiDjango, SiSpring, SiDotnet, SiRust, SiCplusplus
} from "react-icons/si";

interface Technology {
  name: string;
  icon: JSX.Element;
  color: string;
}

// First row of technologies (will scroll left to right)
const technologiesRow1: Technology[] = [
  { name: "React", icon: <FaReact size={40} />, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: <FaNodeJs size={40} />, color: "text-[#339933]" },
  { name: "TypeScript", icon: <SiTypescript size={40} />, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: <SiJavascript size={40} />, color: "text-[#F7DF1E]" },
  { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "text-white" },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} />, color: "text-[#06B6D4]" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, color: "text-[#47A248]" },
  { name: "GraphQL", icon: <SiGraphql size={40} />, color: "text-[#E535AB]" },
  { name: "Python", icon: <FaPython size={40} />, color: "text-[#3776AB]" },
  { name: "TensorFlow", icon: <SiTensorflow size={40} />, color: "text-[#FF6F00]" },
];

// Second row of technologies (will scroll right to left)
const technologiesRow2: Technology[] = [
  { name: "Docker", icon: <FaDocker size={40} />, color: "text-[#2496ED]" },
  { name: "AWS", icon: <FaAws size={40} />, color: "text-[#FF9900]" },
  { name: "Kubernetes", icon: <SiKubernetes size={40} />, color: "text-[#326CE5]" },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} />, color: "text-[#4169E1]" },
  { name: "Firebase", icon: <SiFirebase size={40} />, color: "text-[#FFCA28]" },
  { name: "Redis", icon: <SiRedis size={40} />, color: "text-[#DC382D]" },
  { name: "Go", icon: <SiGo size={40} />, color: "text-[#00ADD8]" },
  { name: "Vue.js", icon: <FaVuejs size={40} />, color: "text-[#4FC08D]" },
  { name: "Angular", icon: <FaAngular size={40} />, color: "text-[#DD0031]" },
  { name: "Java", icon: <FaJava size={40} />, color: "text-[#007396]" },
];

// Creates a doubled array for seamless looping
const duplicateArray = (arr: Technology[]): Technology[] => [...arr, ...arr];

export const TechStackGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section className="section-padding bg-background overflow-hidden">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto opacity-0"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The cutting-edge technologies I leverage to build modern, scalable, and intelligent applications.
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="space-y-12">
          {/* First row - scrolling left to right */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-scroll-x">
              {duplicateArray(technologiesRow1).map((tech, index) => (
                <div 
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center mx-8 min-w-[100px]"
                >
                  <div className={`${tech.color} transition-all duration-300 hover:scale-110`}>
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10"></div>
          </div>
          
          {/* Second row - scrolling right to left */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-scroll-x-reverse">
              {duplicateArray(technologiesRow2).map((tech, index) => (
                <div 
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center mx-8 min-w-[100px]"
                >
                  <div className={`${tech.color} transition-all duration-300 hover:scale-110`}>
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
