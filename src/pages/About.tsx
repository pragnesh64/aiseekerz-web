
import { Layout } from "@/components/Layout";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    document.title = "About - AISEEKERZ";
  }, []);

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "TensorFlow", "PyTorch", "AWS", "Docker", "GraphQL"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon to-teal animate-text-gradient">
            About AISEEKERZ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Passionate about bridging the gap between human creativity and artificial intelligence.
            With expertise in full-stack development and AI integration, I create innovative solutions
            that push the boundaries of what's possible.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 backdrop-blur-xl bg-background/50 border-neon/20">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-muted-foreground">
              To revolutionize digital experiences through the seamless integration of AI
              and cutting-edge web technologies, creating solutions that are not just functional,
              but transformative.
            </p>
          </Card>
          
          <Card className="p-6 backdrop-blur-xl bg-background/50 border-neon/20">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-muted-foreground">
              Leading the way in AI-powered web development, setting new standards for
              intelligent, responsive, and user-centric digital solutions.
            </p>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm py-1 px-3 bg-accent/50 hover:bg-accent transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
