import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="gradient-bg min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Creative Designer & Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Crafting beautiful digital experiences with passion and precision
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" variant="secondary">
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="glass p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="glass p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Do</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I specialize in creating modern web experiences that combine stunning design with powerful functionality
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-3">Web Design</h3>
              <p className="text-muted-foreground">Creating beautiful, intuitive interfaces that users love</p>
            </div>
            <div className="glass p-6 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-muted-foreground">Building robust, scalable applications with modern technologies</p>
            </div>
            <div className="glass p-6 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">Designing experiences that delight and engage users</p>
            </div>
            <div className="glass p-6 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-3">Consulting</h3>
              <p className="text-muted-foreground">Helping businesses achieve their digital goals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
