import { Card } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Working with Alex transformed our QA process. Their automation expertise cut our testing time in half while improving product stability. The frameworks they built are still the backbone of our testing strategy.",
      author: "Sarah Chen",
      role: "Engineering Manager",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      text: "A true team player with deep technical knowledge. Alex consistently drives quality at every stage of development. Their mentorship helped our junior engineers grow tremendously.",
      author: "Michael Rodriguez",
      role: "QA Lead",
      company: "DataVision Corp",
      rating: 5
    },
    {
      text: "Alex's implementation of shift-left testing practices revolutionized our development workflow. The early defect detection saved us countless hours and significantly improved our release confidence.",
      author: "Jennifer Park",
      role: "Product Owner",
      company: "InnovateSoft Inc",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Colleagues Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from teammates and stakeholders I've had the pleasure to work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift shadow-card animate-scale-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary">
                  {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;