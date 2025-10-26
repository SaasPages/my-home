import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackground from '@/components/VideoBackground';

const brands = [
  {
    name: 'Upwork',
    url: 'https://www.upwork.com',
    bg: '#6fdc6f',
    fg: '#0b3b20',
    initials: 'U',
  },
  {
    name: 'Firefox',
    url: 'https://www.mozilla.org/firefox',
    bg: '#ff9400',
    fg: '#fff',
    initials: 'F',
  },
  {
    name: 'Apple',
    url: 'https://www.apple.com',
    bg: '#000000',
    fg: '#fff',
    initials: '',
  },
  {
    name: 'Google',
    url: 'https://www.google.com',
    bg: '#ffffff',
    fg: '#202124',
    initials: 'G',
  },
  {
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    bg: '#f25022',
    fg: '#fff',
    initials: 'M',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    bg: '#1877f2',
    fg: '#fff',
    initials: 'f',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com',
    bg: '#ff0000',
    fg: '#fff',
    initials: '▶',
  },
];

const Slider = ({ speed = 18 }: { speed?: number }) => {
  // speed is seconds for a full loop
  const styleVar = { ['--speed' as any]: `${speed}s` } as React.CSSProperties;

  return (
    <div className="my-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-bold mb-4 text-center">Trusted by</h3>
        <div className="slider overflow-hidden" style={styleVar as React.CSSProperties}>
          <div className="track flex items-center gap-6">
            {brands.map((b) => (
              <a
                key={b.name}
                href={b.url}
                target="_blank"
                rel="noreferrer"
                className="logo-item block"
                aria-label={b.name}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="logo flex items-center justify-center text-xl font-semibold"
                  style={{ background: b.bg, color: b.fg }}
                >
                  <span>{b.initials}</span>
                </div>
                <div className="mt-2 text-center text-sm text-muted-foreground">{b.name}</div>
              </a>
            ))}
            {/* duplicate for seamless scroll */}
            {brands.map((b) => (
              <a
                key={b.name + '-dup'}
                href={b.url}
                target="_blank"
                rel="noreferrer"
                className="logo-item block"
                aria-hidden
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="logo flex items-center justify-center text-xl font-semibold"
                  style={{ background: b.bg, color: b.fg }}
                >
                  <span>{b.initials}</span>
                </div>
                <div className="mt-2 text-center text-sm text-muted-foreground">{b.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for slider and golden animation */}
      <style>{`
        .slider { --speed: 18s; }
        .track { display: flex; align-items: center; gap: 1.5rem; animation: scroll var(--speed) linear infinite; }
        .logo-item { width: 120px; flex: 0 0 auto; }
        .logo { width: 72px; height: 72px; border-radius: 9999px; box-shadow: 0 6px 18px rgba(0,0,0,0.18); position: relative; font-size: 1.25rem; }

        /* golden animated ring */
        .logo::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          background: conic-gradient(from 0deg, rgba(255,215,0,0.95), rgba(255,215,0,0.6), rgba(255,215,0,0.2), rgba(255,215,0,0.95));
          filter: blur(8px);
          opacity: 0.9;
          transform: scale(1);
          animation: spinGlow 3.5s linear infinite;
          z-index: -1;
        }

        /* make sure on white logos the golden ring sits behind */
        .logo { position: relative; z-index: 1; }

        @keyframes spinGlow {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.02); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Reduce motion respects */
        @media (prefers-reduced-motion: reduce) {
          .track { animation: none; }
          .logo::after { animation: none; }
        }

        /* smaller screens adjustments */
        @media (max-width: 640px) {
          .logo-item { width: 92px; }
          .logo { width: 56px; height: 56px; font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

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

      {/* Logo slider added here */}
      <section className="py-8 px-4 bg-transparent">
        <Slider speed={18} />
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
    </div>
  );
};

export default Home;
