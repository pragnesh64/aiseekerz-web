import { useEffect, useRef } from "react";
import { ArrowRight, Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Content Generator",
    description:
      "A natural language processing tool powered by OpenAI's GPT-4 that generates high-quality content for various purposes.",
    tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
    github: "#",
    demo: "#",
    color: "bg-blue-500/10",
  },
  {
    title: "Neural Language Translator",
    description:
      "Real-time translation platform with support for 50+ languages using neural machine learning models.",
    tags: ["React", "Python", "TensorFlow", "Firebase"],
    github: "#",
    demo: "#",
    color: "bg-purple-500/10",
  },
  {
    title: "Smart Data Dashboard",
    description:
      "Interactive data visualization dashboard with real-time analytics and AI-driven insights for business intelligence.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    color: "bg-green-500/10",
  },
];

// Placeholder component instead of loading external images
const ProjectImagePlaceholder = ({ title, color }: { title: string, color: string }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${color} aspect-video`}>
      <div className="flex flex-col items-center justify-center text-center p-4">
        <ImageIcon className="h-12 w-12 mb-2 opacity-50" />
        <span className="text-sm font-medium opacity-70">{title}</span>
      </div>
    </div>
  );
};

export const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            
            // Animate child elements with staggered delay
            const children = entry.target.querySelectorAll(".project-card");
            children.forEach((child, index) => {
              (child as HTMLElement).style.transitionDelay = `${index * 200}ms`;
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
    <section className="section-padding bg-gradient-to-b from-background/95 to-background">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto opacity-0"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my most recent and impactful work in AI, web development, and data visualization.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card opacity-0 rounded-xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg hover:shadow-neon/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <ProjectImagePlaceholder title={project.title} color={project.color} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
