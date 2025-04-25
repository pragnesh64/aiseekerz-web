
import { Layout } from "@/components/Layout";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - AISEEKERZ";
  }, []);

  const posts = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is reshaping the web development landscape...",
      date: "2025-04-01",
      tags: ["AI", "Web Development"],
      readTime: "5 min read",
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable React applications...",
      date: "2025-03-28",
      tags: ["React", "Architecture"],
      readTime: "8 min read",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon to-teal animate-text-gradient">
          Blog
        </h1>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
          />
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Card
              key={post.title}
              className="p-6 hover:border-neon/40 transition-colors cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold group-hover:text-neon transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
