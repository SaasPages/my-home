import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code2, Palette, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackground from '@/components/VideoBackground';
import LogosSlider from '@/components/LogosSlider';

type Logo = {
  id: string;
  label: string;
  bg: string;
  fg?: string;
};

const Home = () => {
  const logos: Logo[] = [
    { id: 'upwork', label: 'Upwork', bg: 'linear-gradient(135deg, #1fb57a, #14a871)', fg: 'rgba(255,255,255,0.08)' },
    { id: 'firefox', label: 'Firefox', bg: 'linear-gradient(135deg, #ff9400, #e68500)', fg: 'rgba(255,255,255,0.08)' },
    { id: 'apple', label: 'Apple', bg: 'linear-gradient(135deg, #111827, #000000)', fg: 'rgba(255,255,255,0.08)' },
    { id: 'google', label: 'Google', bg: 'linear-gradient(135deg, #CA3F16, #F3F4F5)', fg: '#FF5A45' },
    { id: 'microsoft', label: 'Microsoft', bg: 'linear-gradient(135deg, #F4F1EC, #9BACD8)', fg: '#111144' },
  ];

  return (
    <div className="min-h-screen relative">
      <VideoBackground />

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 py-16">
        <div className="text-center w-full max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary-foreground">Welcome to My Portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Creative Designer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground mt-2 animate-fade-in">
              & Full-Stack Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg mb-8 text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4 animate-fade-in">
            Crafting beautiful, functional digital experiences that bring ideas to life. 
            Specialized in modern web technologies and user-centered design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 animate-fade-in">
            <Link to="/projects">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-12 text-base font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale group"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 text-base font-semibold px-8 bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 transition-all duration-300 hover-scale"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Skills Highlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4">
            {[
              { icon: Code2, label: 'Clean Code', color: 'text-blue-400' },
              { icon: Palette, label: 'UI/UX Design', color: 'text-purple-400' },
              { icon: Rocket, label: 'Fast Delivery', color: 'text-green-400' },
              { icon: Sparkles, label: 'Innovation', color: 'text-yellow-400' }
            ].map((item, index) => (
              <div 
                key={index}
                className="glass p-4 rounded-xl backdrop-blur-sm border border-primary-foreground/10 hover:border-primary/30 transition-all duration-300 hover-scale group"
              >
                <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform`} />
                <p className="text-sm font-medium text-primary-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Logo Slider */}
          <LogosSlider logos={logos} initialSpeed={20} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-background/20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
            Achievements & Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '50+', label: 'Projects Completed', icon: Rocket },
              { number: '30+', label: 'Happy Clients', icon: Sparkles },
              { number: '5+', label: 'Years Experience', icon: Code2 }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass p-8 rounded-2xl text-center backdrop-blur-md border border-primary-foreground/20 hover:border-primary/40 transition-all duration-300 hover-scale group"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            What I Offer
          </h2>
          <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs, from concept to deployment
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Web Design', 
                description: 'Beautiful, responsive designs that capture your brand essence and engage your audience',
                icon: Palette,
                color: 'from-purple-500 to-pink-500'
              },
              { 
                title: 'Web Development', 
                description: 'Robust, scalable applications built with modern technologies and best practices',
                icon: Code2,
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                title: 'UI/UX Design', 
                description: 'User-centered interfaces that provide intuitive and delightful experiences',
                icon: Sparkles,
                color: 'from-yellow-500 to-orange-500'
              },
              { 
                title: 'Consulting', 
                description: 'Strategic guidance to help your business thrive in the digital landscape',
                icon: Rocket,
                color: 'from-green-500 to-emerald-500'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-2xl text-left backdrop-blur-md border border-primary-foreground/20 hover:border-primary/40 transition-all duration-300 hover-scale group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 text-center bg-background/30 backdrop-blur-md">
        <div className="max-w-3xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-3xl backdrop-blur-md border border-primary-foreground/20">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">
              Ready to Bring Your Vision to Life?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's collaborate on your next project and create something extraordinary together
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="h-14 px-8 text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale group"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
