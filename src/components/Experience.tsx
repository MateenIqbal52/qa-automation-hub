import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior SQA Automation Engineer",
      company: "TechFlow Solutions",
      period: "2020 - Present",
      location: "San Francisco, CA",
      highlights: [
        "Designed and maintained scalable automation frameworks for web and API testing",
        "Integrated automation into CI/CD pipelines, reducing release cycle time by 30%",
        "Mentored junior QA engineers and led automation best practices",
        "Implemented shift-left testing strategies across 5 development teams"
      ],
      technologies: ["Selenium", "Cypress", "Jenkins", "AWS", "Java", "Python"]
    },
    {
      title: "QA Automation Engineer",
      company: "DataVision Corp",
      period: "2018 - 2020",
      location: "Austin, TX",
      highlights: [
        "Automated regression test suites, achieving 80% reduction in manual testing effort",
        "Collaborated with developers and product owners to ensure early defect detection",
        "Championed shift-left testing by implementing test cases in development pipelines",
        "Led API testing automation for microservices architecture"
      ],
      technologies: ["REST Assured", "Postman", "GitLab CI", "Docker", "JavaScript"]
    },
    {
      title: "QA Engineer",
      company: "InnovateSoft Inc",
      period: "2016 - 2018", 
      location: "Denver, CO",
      highlights: [
        "Conducted functional, regression, and performance testing",
        "Created detailed test plans and bug reports to improve product quality",
        "Established testing standards and processes for the QA team",
        "Performed load testing and identified performance bottlenecks"
      ],
      technologies: ["JMeter", "TestNG", "Selenium", "SQL", "JIRA"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software quality assurance and test automation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-tech"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                
                {/* Content */}
                <div className="ml-20 w-full">
                  <Card className="p-6 hover-lift shadow-card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <TrendingUp className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;