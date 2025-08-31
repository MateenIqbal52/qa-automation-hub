import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, TrendingUp, Clock, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "End-to-End Test Automation Framework",
      description: "Built a comprehensive hybrid Selenium + TestNG framework with advanced reporting dashboards and parallel execution capabilities.",
      impact: "Increased automation coverage by 70%, reducing post-release defects significantly",
      duration: "6 months",
      technologies: ["Selenium", "TestNG", "Java", "Maven", "Allure Reports", "Jenkins"],
      highlights: [
        "Cross-browser compatibility testing",
        "Data-driven test execution",
        "Custom reporting with screenshots",
        "CI/CD pipeline integration"
      ]
    },
    {
      title: "API Automation for Microservices",
      description: "Developed a robust REST Assured + Karate API automation suite for testing complex microservices architecture.",
      impact: "Reduced testing time by 40% while ensuring reliability of microservices",
      duration: "4 months",
      technologies: ["REST Assured", "Karate", "Java", "Postman", "Newman", "Docker"],
      highlights: [
        "Contract testing implementation",
        "Performance testing integration",
        "Automated environment setup",
        "Mock services for testing"
      ]
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Integrated automated tests into Jenkins pipelines with quality gates and comprehensive reporting.",
      impact: "Enabled faster release cycles with zero manual intervention in regression testing",
      duration: "3 months",
      technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "SonarQube"],
      highlights: [
        "Automated deployment validation",
        "Quality gate implementation",
        "Rollback strategies",
        "Multi-environment testing"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing successful automation implementations and their business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift shadow-card animate-scale-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-accent/10 p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <Target className="h-4 w-4 text-accent mr-2" />
                    <span className="font-semibold text-accent">Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
                
                <div className="flex items-center mb-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Duration: {project.duration}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm">
                        <TrendingUp className="h-3 w-3 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 pt-4 border-t">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;