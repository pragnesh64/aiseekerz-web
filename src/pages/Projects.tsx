
import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects - AISEEKERZ";
  }, []);

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "AI Chat Platform",
      description: "Real-time chat application with AI-powered responses and natural language processing.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "OpenAI", "WebSocket"],
      github: "#",
      demo: "#",
      category: "ai",
    },
    {
      title: "Smart Dashboard",
      description: "Analytics dashboard with machine learning insights and predictive modeling.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TensorFlow", "Python", "D3.js"],
      github: "#",
      demo: "#",
      category: "web",
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon to-teal animate-text-gradient">
          Projects
        </h1>

        <div className="flex gap-2 flex-wrap">
          {["all", "ai", "web", "mobile"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className="capitalize"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((project) => filter === "all" || project.category === filter)
            .map((project) => (
              <Card key={project.title} className="overflow-hidden group">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
