import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackground from '@/components/VideoBackground';

const logos = [
  { id: 'upwork', label: 'Upwork', short: 'U' },
  { id: 'firefox', label: 'Firefox', short: 'F' },
  { id: 'apple', label: 'Apple', short: '' },
  { id: 'google', label: 'Google', short: 'G' },
  { id: 'microsoft', label: 'Microsoft', short: 'M' },
  { id: 'facebook', label: 'Facebook', short: 'f' },
  { id: 'youtube', label: 'YouTube', short: '▶' },
];

type LogoSliderProps = {
  /**
   * Speed between slides.
   * - If a number > 10 is passed it is interpreted as milliseconds (e.g. 500).
   * - If a number <= 10 is passed it is interpreted as seconds and converted to ms (e.g. 0.5 -> 500ms).
   */
  speed?: number;
};

const LogoSlider: React.FC<LogoSliderProps> = ({ speed = 0.5 }) => {
  const [index, setIndex] = useState(0);

  // Accepts both seconds (e.g. 0.5) and ms (e.g. 500)
  const intervalMs = speed <= 10 ? Math.max(100, speed * 1000) : Math.max(100, speed);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % logos.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <div className="mt-12">
      {/* Inline styles for the animated golden look */}
      <style>{`
        .logo-wrap { display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; gap: 12px; }
        .logo-item { text-align: center; width: 96px; }
        .logo-circle {
          width: 84px;
          height: 84px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255,215,0,0.14), rgba(255,215,0,0.04));
          color: #d4af37; /* gold */
          box-shadow: 0 6px 20px rgba(212,175,55,0.08), inset 0 -6px 12px rgba(0,0,0,0.08);
          font-size: 34px;
          transition: transform 300ms ease, box-shadow 300ms ease, opacity 300ms ease;
          -webkit-backdrop-filter: blur(6px);
          backdrop-filter: blur(6px);
        }
        .logo-circle.gold-pulse { animation: goldenPulse 1.6s ease-in-out infinite; }
        @keyframes goldenPulse {
          0% { transform: scale(1); box-shadow: 0 6px 20px rgba(212,175,55,0.08); }
          50% { transform: scale(1.06); box-shadow: 0 14px 34px rgba(212,175,55,0.18); }
          100% { transform: scale(1); box-shadow: 0 6px 20px rgba(212,175,55,0.08); }
        }
        .logo-label { margin-top: 8px; font-weight: 600; color: rgba(212,175,55,0.95); font-size: 13px; }
        .logo-fade { opacity: 0.28; transform: translateY(4px); }
        .logo-fade.active { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="logo-wrap" role="list" aria-label="Trusted by">
        {logos.map((l, i) => {
          const active = i === index;
          return (
            <div key={l.id} className={`logo-item`} role="listitem" aria-hidden={!active}>
              <div className={`logo-circle ${active ? 'gold-pulse' : ''} ${active ? 'logo-fade active' : 'logo-fade'}`}>
                <span aria-hidden style={{ display: 'inline-block', lineHeight: 1 }}>
                  {l.short}
                </span>
              </div>
              <div className="logo-label" aria-hidden={!active}>
                {l.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
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

          {/* Logo slider: default speed is 0.5 seconds per slide.
              If you want to pass milliseconds, use speed={500}. */}
          <LogoSlider speed={0.5} />
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
    </div>
  );
};

export default Home;