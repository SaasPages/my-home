import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackground from '@/components/VideoBackground';

const logos = [
  { name: 'Upwork', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/upwork.svg', href: 'https://www.upwork.com' },
  { name: 'Firefox', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firefox.svg', href: 'https://www.mozilla.org/firefox/' },
  { name: 'Apple', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg', href: 'https://www.apple.com' },
  { name: 'Google', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg', href: 'https://www.google.com' },
  { name: 'Microsoft', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft.svg', href: 'https://www.microsoft.com' },
  { name: 'Facebook', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg', href: 'https://www.facebook.com' },
  { name: 'YouTube', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg', href: 'https://www.youtube.com' },
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

      {/* Logo slider / marquee */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-center text-lg font-semibold mb-6">Trusted by</h3>

          <div className="relative overflow-hidden">
            {/* Duplicate the list (logos.concat(logos)) so the animation loops seamlessly */}
            <div className="marquee-track flex items-center space-x-8">
              {logos.concat(logos).map((logo, idx) => (
                <a
                  key={`${logo.name}-${idx}`}
                  href={logo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center min-w-[140px] min-h-[60px] opacity-90 hover:opacity-100"
                  aria-label={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 w-auto"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      // hide broken images so layout isn't affected
                      const img = e.currentTarget;
                      img.style.display = 'none';
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Inline CSS for marquee animation so no extra Tailwind config is required */}
          <style>{`
            .marquee-track {
              display: flex;
              gap: 2rem;
              align-items: center;
              /* Make the track twice as wide conceptually by duplicating content and moving -50% */
              animation: marquee 24s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }

            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }

            /* Ensure anchor contents don't wrap */
            .marquee-track a { white-space: nowrap; }
          `}</style>
        </div>
      </section>
    </div>
  );
};

export default Home;