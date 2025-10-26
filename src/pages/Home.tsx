import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackground from '@/components/VideoBackground';
import { cn } from '@/lib/utils';

type Logo = {
  id: string;
  label: string;
  bg: string;
  fg?: string;
};

const DEFAULT_SPEED = 20;

const LogoSlider: React.FC<{
  logos: Logo[];
  initialSpeed?: number;
}> = ({ logos, initialSpeed = DEFAULT_SPEED }) => {
  const [speed, setSpeed] = useState<number>(initialSpeed);
  const [isPaused, setIsPaused] = useState(false);

  const doubled = useMemo(() => {
    return [...logos, ...logos];
  }, [logos]);

  return (
    <div className="flex flex-col w-full mt-6">
      {/* Header and Controls */}
      <div className="flex flex-col items-center justify-between gap-3 mb-4 w-full">
        <h3 className="text-lg font-semibold text-primary-foreground text-center">
          Trusted by Industry Leaders
        </h3>

        <div className="flex items-center justify-center w-full gap-3">
          {/* Play/Pause Controls */}
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsPaused(!isPaused)}
            className="flex bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 h-8 w-8 p-0"
          >
            {isPaused ? (
              <Play className="w-3 h-3" />
            ) : (
              <Pause className="w-3 h-3" />
            )}
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-primary-foreground/80 whitespace-nowrap">
              Speed
            </span>
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSpeed((s) => Math.max(6, s - 2))}
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 h-7 w-7 p-0 text-xs"
              >
                −
              </Button>
              <div className="flex px-2 py-1 rounded bg-primary-foreground/15 text-primary-foreground text-xs min-w-[45px] text-center items-center justify-center">
                {speed}s
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSpeed((s) => Math.min(40, s + 2))}
                className="flex bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 h-7 w-7 p-0 text-xs"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Slider */}
      <div
        className="relative overflow-hidden w-full"
        aria-hidden={false}
        style={{ ['--slider-speed' as any]: `${speed}s` }}
      >
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .logo-track {
            display: inline-flex;
            gap: 0.5rem;
            align-items: center;
            animation: scroll-left var(--slider-speed) linear infinite;
            will-change: transform;
          }

          .logo-track.paused {
            animation-play-state: paused;
          }

          .logo-card {
            min-width: 110px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            flex-shrink: 0;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.15);
          }

          .logo-inner {
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0 0.5rem;
          }

          .logo-mark {
            width: 30px;
            height: 30px;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 10px;
            color: white;
            flex-shrink: 0;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2) inset;
            backdrop-filter: blur(4px);
          }

          .logo-label {
            color: rgba(255, 255, 255, 0.95);
            font-weight: 600;
            font-size: 0.7rem;
            white-space: nowrap;
          }

          /* Tablet and Desktop - hidden on mobile */
          @media (min-width: 768px) {
            .logo-card { 
              min-width: 140px; 
              height: 75px; 
            }
            .logo-mark { 
              width: 40px; 
              height: 40px; 
              font-size: 12px; 
            }
            .logo-label {
              font-size: 0.8rem;
            }
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            .logo-track {
              animation: none;
            }
          }
        `}</style>

        <div className={cn("logo-track", isPaused && "paused")}>
          {doubled.map((l, idx) => (
            <div
              key={`${l.id}-${idx}`}
              className="logo-card"
              style={{ background: l.bg }}
              role="img"
              aria-label={l.label}
            >
              <div className="logo-inner">
                <div
                  className="logo-mark"
                  style={{ background: (l.fg ? l.fg : 'rgba(0,0,0,0.15)') }}
                >
                  {l.label
                    .split(' ')
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()}
                </div>
                <div className="logo-label">{l.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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
      <VideoBackground overlayOpacity={0.16} />

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 py-16">
        <div className="text-center w-full max-w-md mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl font-bold mb-3 text-primary-foreground leading-snug">
            Creative Designer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-1">
              & Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm mb-6 text-primary-foreground/90 leading-relaxed px-2">
            Crafting beautiful digital experiences with passion and precision across all platforms
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 justify-center mb-8 px-2">
            <Link to="/projects">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full h-11 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects 
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-11 text-sm font-semibold bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Logo Slider */}
          <LogoSlider logos={logos} initialSpeed={DEFAULT_SPEED} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-4 bg-background/50 backdrop-blur-sm">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-1 gap-3">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass p-4 rounded-lg text-center backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <div className="text-xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4 bg-muted/30 backdrop-blur-sm">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-lg font-bold mb-4 text-primary-foreground">
            What I Do
          </h2>
          <p className="text-xs text-muted-foreground mb-6 px-2">
            I specialize in creating modern web experiences that combine stunning design with powerful functionality
          </p>
          
          <div className="grid grid-cols-1 gap-3">
            {[
              { title: 'Web Design', description: 'Creating beautiful, intuitive interfaces that users love' },
              { title: 'Web Development', description: 'Building robust, scalable applications with modern tech' },
              { title: 'UI/UX Design', description: 'Designing experiences that delight and engage users' },
              { title: 'Consulting', description: 'Helping businesses achieve their digital goals' }
            ].map((service, index) => (
              <div 
                key={index}
                className="glass p-4 rounded-lg text-left backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <h3 className="text-sm font-bold mb-2 text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-8 px-4 text-center bg-background/10 backdrop-blur-sm">
        <div className="max-w-md mx-auto">
          <h3 className="text-base font-bold mb-3 text-primary-foreground">
            Ready to Start Your Project?
          </h3>
          <Link to="/contact">
            <Button 
              size="lg"
              className="w-full max-w-xs h-11 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;