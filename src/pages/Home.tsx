import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackground from '@/components/VideoBackground';

const logos = [
  {
    name: 'Upwork',
    href: 'https://www.upwork.com/',
    src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/upwork.svg',
  },
  {
    name: 'Firefox',
    href: 'https://www.mozilla.org/firefox/',
    src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/firefox.svg',
  },
  {
    name: 'Apple',
    href: 'https://www.apple.com/',
    src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/apple.svg',
  },
  {
    name: 'Google',
    href: 'https://www.google.com/',
    src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/google.svg',
  },
  {
    name: 'Microsoft',
    href: 'https://www.microsoft.com/',
    src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/microsoft.svg',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/facebook.svg',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/main/icons/youtube.svg',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <VideoBackground overlayOpacity={0.14} />

      {/* Hero content — removed the heavy gradient-bg wrapper so the video is visible */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Creative Designer & Developer
          </h1>

          {/* fixed subtitle opacity (previously /0 made it invisible) */}
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
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/0 hover:bg-primary-foreground/10"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The rest of the page stays the same — VideoBackground covers the full page behind this content */}
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

      <section className="py-20 px-4 bg-muted/0.5">
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

      {/* Trusted logos with slide animation */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Trusted by</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 items-center justify-items-center">
            {logos.map((logo, index) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-lg flex items-center justify-center w-28 h-20 transition-transform duration-300 hover:-translate-y-2"
                style={{ opacity: 0, animation: `fade-in-up 600ms ease ${index * 100}ms forwards` }}
                aria-label={logo.name}
              >
                {/* Using remote simple-icons SVGs. They render with currentColor by default; we set img to 48% height to keep it balanced */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 max-w-full object-contain filter grayscale-0"
                  style={{ color: 'currentColor' }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse existing sections or add more below as needed */}
    </div>
  );
};

export default Home;