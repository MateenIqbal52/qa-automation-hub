import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  TestTube, 
  Zap, 
  GitBranch, 
  Database, 
  Cloud,
  Settings,
  Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Test Automation",
      icon: <TestTube className="h-6 w-6" />,
      skills: ["Selenium", "Cypress", "Playwright", "Appium", "TestNG", "JUnit"]
    },
    {
      title: "API Testing",
      icon: <Database className="h-6 w-6" />,
      skills: ["Postman", "REST Assured", "Karate", "Newman", "Insomnia"]
    },
    {
      title: "Performance Testing",
      icon: <Zap className="h-6 w-6" />,
      skills: ["JMeter", "k6", "LoadRunner", "Gatling"]
    },
    {
      title: "CI/CD & DevOps",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "TeamCity"]
    },
    {
      title: "Programming",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C#"]
    },
    {
      title: "Cloud & Containers",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "Azure", "GCP"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Maven", "Gradle", "npm", "Allure", "ExtentReports"]
    },
    {
      title: "Methodologies",
      icon: <Users className="h-6 w-6" />,
      skills: ["Agile/Scrum", "BDD/TDD", "Shift-Left Testing", "Risk-Based Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans across various domains of software quality assurance and automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 hover-lift animate-scale-in shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-3 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;