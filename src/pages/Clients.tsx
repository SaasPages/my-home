import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Star, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Clients = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup Inc.',
      role: 'CEO',
      content: 'Working with this developer was an absolute pleasure. The attention to detail and ability to bring our vision to life exceeded our expectations. The project was delivered ahead of schedule with exceptional quality.',
      initials: 'SJ',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Pro',
      role: 'Marketing Director',
      content: 'Exceptional work on our website redesign. The new design increased our conversion rate by 40% and we continue to receive compliments from our clients. Highly professional and responsive throughout.',
      initials: 'MC',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-Commerce Solutions',
      role: 'Product Manager',
      content: 'The e-commerce platform delivered was robust, scalable, and beautiful. Our sales have tripled since launch. The developer understood our business needs perfectly and delivered beyond expectations.',
      initials: 'ER',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'David Thompson',
      company: 'Finance Corp',
      role: 'CTO',
      content: 'Professional, responsive, and technically excellent. Delivered a complex dashboard ahead of schedule and provided excellent support throughout. Would definitely work together again.',
      initials: 'DT',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Lisa Wang',
      company: 'Creative Agency',
      role: 'Creative Director',
      content: 'Amazing collaboration! The developer understood our creative vision and translated it into a stunning website that perfectly represents our brand. The attention to design details was impressive.',
      initials: 'LW',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    },
    {
      name: 'James Anderson',
      company: 'Healthcare Tech',
      role: 'Founder',
      content: 'Built our patient management system with great care for security and user experience. The system is intuitive and our staff loves using it. Exceptional technical skills and communication.',
      initials: 'JA',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
  ];

  const clientLogos = [
    { name: 'TechCorp', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'DigitalPro', gradient: 'from-purple-500 to-pink-500' },
    { name: 'InnovateCo', gradient: 'from-green-500 to-emerald-500' },
    { name: 'StartupLabs', gradient: 'from-orange-500 to-red-500' },
    { name: 'CreativeStudio', gradient: 'from-indigo-500 to-purple-500' },
    { name: 'FinTech', gradient: 'from-yellow-500 to-orange-500' },
    { name: 'HealthTech', gradient: 'from-teal-500 to-cyan-500' },
    { name: 'EduSolutions', gradient: 'from-rose-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      <VideoBackground />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-primary/20 rotate-45 animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-accent/20 rounded-full animate-[bounce_3s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border-2 border-primary/15 rotate-12 animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Client Success Stories</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mt-2">
              Industry Leaders
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the growing list of satisfied clients who have transformed their digital presence with our innovative solutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Quote className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">What Clients Say</h2>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="p-8 h-full backdrop-blur-xl bg-background/60 border-primary-foreground/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden">
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-primary/20 mb-4" />

                      {/* Testimonial Content */}
                      <p className="text-muted-foreground text-base leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/10">
                        <Avatar className="w-14 h-14 border-2 border-primary/20">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-lg">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg text-primary-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-primary font-medium flex items-center gap-1 mt-1">
                            <Building2 className="w-3 h-3" />
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Client Logos Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
            Proud to Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((client, idx) => (
              <Card 
                key={idx} 
                className="group p-8 flex items-center justify-center h-32 backdrop-blur-xl bg-background/60 border-primary-foreground/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
                style={{
                  animationDelay: `${idx * 100}ms`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${client.gradient} flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {client.name.charAt(0)}
                  </div>
                  <span className="font-bold text-lg text-primary-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-12 text-center backdrop-blur-xl bg-gradient-to-br from-primary/20 via-background/80 to-accent/20 border-primary-foreground/30 relative overflow-hidden group">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          </div>

          <div className="relative z-10">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Let's collaborate on your next project and create something extraordinary together. Your success is our mission.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="h-14 px-10 text-base font-semibold shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover-scale group"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Clients;