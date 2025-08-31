import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Why Shift-Left Testing is Essential in Agile Development",
      excerpt: "Exploring how early testing integration can dramatically improve software quality and reduce development costs.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Best Practices",
      featured: true
    },
    {
      title: "Best Practices for API Test Automation",
      excerpt: "A comprehensive guide to building robust and maintainable API test suites using modern tools and techniques.",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Technical Guide"
    },
    {
      title: "How to Scale Your QA Automation Framework",
      excerpt: "Strategies for building automation frameworks that grow with your team and can handle complex testing scenarios.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Architecture"
    },
    {
      title: "CI/CD Integration: Making Testing Part of Your Pipeline",
      excerpt: "Learn how to seamlessly integrate automated tests into your continuous integration and deployment processes.",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "DevOps"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and best practices in QA automation and software testing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className={`p-6 hover-lift shadow-card animate-scale-in ${
                post.featured ? 'md:col-span-2 bg-gradient-secondary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Badge variant={post.featured ? "default" : "secondary"}>
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge variant="outline" className="border-primary text-primary">
                    Featured
                  </Badge>
                )}
              </div>
              
              <h3 className={`font-bold mb-3 text-foreground ${
                post.featured ? 'text-2xl' : 'text-xl'
              }`}>
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
              
              <Button variant="ghost" className="group p-0 h-auto font-semibold">
                Read More 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;