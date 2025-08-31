import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-tech mx-auto rounded-full" />
          </div>
          
          <Card className="p-8 md:p-12 shadow-card hover-lift">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I am a Senior SQA Automation Engineer with over <strong className="text-foreground">8 years</strong> of experience ensuring the highest quality of software delivery through robust test automation and continuous improvement. My passion lies in designing scalable automation frameworks, optimizing QA processes, and integrating quality practices into agile and DevOps environments.
              </p>
              
              <p>
                Over the years, I've worked across industries such as <strong className="text-foreground">finance, healthcare, and e-commerce</strong> and have contributed to building reliable test strategies that reduce defects, accelerate releases, and improve customer confidence. My mission is simple: empower teams to deliver software that is fast, reliable, and user-focused.
              </p>
              
              <p>
                I believe in the power of automation to transform not just testing processes, but entire development workflows. By implementing comprehensive test automation strategies and fostering a culture of quality-first thinking, I help organizations achieve faster time-to-market while maintaining the highest standards of software reliability.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;