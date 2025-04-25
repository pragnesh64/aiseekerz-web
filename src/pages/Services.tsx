
import { Layout } from "@/components/Layout";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Brain, Code, Palette, Database, Cloud, Bot } from "lucide-react";

const Services = () => {
  useEffect(() => {
    document.title = "Services - AISEEKERZ";
  }, []);

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks and best practices.",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Custom AI solutions using LLMs, NLP, and machine learning models.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive interfaces with engaging animations and smooth interactions.",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable APIs, databases, and authentication systems.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud architecture and DevOps practices for optimal performance.",
    },
    {
      icon: Bot,
      title: "Chatbots & Automation",
      description: "Intelligent chatbots and process automation solutions.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon to-teal animate-text-gradient">
            Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I build intelligent digital experiences that transform ideas into reality
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-6 backdrop-blur-xl bg-background/50 border-neon/20 hover:border-neon/40 transition-colors group"
              >
                <Icon className="h-8 w-8 text-neon mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default Services;
