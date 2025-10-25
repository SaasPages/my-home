import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup Inc.',
      role: 'CEO',
      content: 'Working with this developer was an absolute pleasure. The attention to detail and ability to bring our vision to life exceeded our expectations. Highly recommended!',
      initials: 'SJ',
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Pro',
      role: 'Marketing Director',
      content: 'Exceptional work on our website redesign. The new design increased our conversion rate by 40% and we continue to receive compliments from our clients.',
      initials: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-Commerce Solutions',
      role: 'Product Manager',
      content: 'The e-commerce platform delivered was robust, scalable, and beautiful. Our sales have tripled since launch. Could not be happier with the results!',
      initials: 'ER',
    },
    {
      name: 'David Thompson',
      company: 'Finance Corp',
      role: 'CTO',
      content: 'Professional, responsive, and technically excellent. Delivered a complex dashboard ahead of schedule and provided excellent support throughout.',
      initials: 'DT',
    },
    {
      name: 'Lisa Wang',
      company: 'Creative Agency',
      role: 'Creative Director',
      content: 'Amazing collaboration! The developer understood our creative vision and translated it into a stunning website that perfectly represents our brand.',
      initials: 'LW',
    },
    {
      name: 'James Anderson',
      company: 'Healthcare Tech',
      role: 'Founder',
      content: 'Built our patient management system with great care for security and user experience. The system is intuitive and our staff loves using it.',
      initials: 'JA',
    },
  ];

  const clientLogos = [
    'TechCorp', 'DigitalPro', 'InnovateCo', 'StartupLabs', 
    'CreativeStudio', 'FinTech', 'HealthTech', 'EduSolutions',
    'RetailHub', 'MediaGroup', 'ConsultCo', 'CloudServices'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Clients & Testimonials</h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            I've had the privilege of working with amazing clients across various industries. Here's what they have to say.
          </p>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Trusted By</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clientLogos.map((logo, idx) => (
                <Card key={idx} className="p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow">
                  <span className="font-bold text-lg text-muted-foreground">{logo}</span>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">What Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-6 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">{testimonial.content}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-12 p-8 gradient-bg text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
              Want to be my next success story?
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Let's work together to bring your vision to life
            </p>
            <a href="/contact" className="inline-block">
              <button className="px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow">
                Get in Touch
              </button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Clients;
