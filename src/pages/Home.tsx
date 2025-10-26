import { useMemo, useState, useEffect } from 'react';
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

const DEFAULT_SPEED = 18;

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
    <div className="mt-10 lg:mt-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-foreground">
          Trusted by Industry Leaders
        </h3>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Play/Pause Controls */}
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsPaused(!isPaused)}
            className="flex bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
          >
            {isPaused ? (
              <Play className="w-4 h-4" />
            ) : (
              <Pause className="w-4 h-4" />
            )}
          </Button>

          <div className="flex items-center gap-2 flex-1 sm:flex-initial">
            <span className="text-sm text-primary-foreground/80 whitespace-nowrap">
              Speed
            </span>
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSpeed((s) => Math.max(4, Math.round((s - 2) * 10) / 10))}
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-8 w-8 p-0"
              >
                −
              </Button>
              <div className="flex px-3 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground text-sm min-w-[60px] text-center">
                {speed}s
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSpeed((s) => Math.min(60, Math.round((s + 2) * 10) / 10))}
                className="flex bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-8 w-8 p-0"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
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
            gap: 1rem;
            align-items: center;
            animation: scroll-left var(--slider-speed) linear infinite;
            will-change: transform;
          }

          .logo-track.paused {
            animation-play-state: paused;
          }

          .logo-card {
            min-width: 140px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .logo-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }

          .logo-card::after {
            content: "";
            position: absolute;
            top: -40%;
            left: -40%;
            width: 60%;
            height: 180%;
            background: linear-gradient(90deg, rgba(255,215,0,0) 0%, rgba(255,215,0,0.35) 50%, rgba(255,215,0,0) 100%);
            transform: rotate(-25deg);
            animation: shimmer 3s linear infinite;
            pointer-events: none;
            mix-blend-mode: overlay;
            opacity: 0.8;
          }

          @keyframes shimmer {
            0% { transform: translateX(-220%) rotate(-25deg); opacity: 0; }
            10% { opacity: 0.5; }
            50% { transform: translateX(120%) rotate(-25deg); opacity: 0.7; }
            100% { transform: translateX(220%) rotate(-25deg); opacity: 0; }
          }

          .logo-inner {
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0 1rem;
          }

          .logo-mark {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
            color: white;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) inset;
            backdrop-filter: blur(4px);
          }

          .logo-label {
            color: rgba(255, 255, 255, 0.95);
            font-weight: 600;
            font-size: 0.875rem;
            white-space: nowrap;
          }

          /* Mobile Styles */
          @media (max-width: 640px) {
            .logo-card { 
              min-width: 120px; 
              height: 70px; 
              border-radius: 12px;
            }
            .logo-mark { 
              width: 36px; 
              height: 36px; 
              font-size: 12px; 
              border-radius: 10px; 
            }
            .logo-label {
              font-size: 0.75rem;
            }
            .logo-inner {
              gap: 0.5rem;
              padding: 0 0.75rem;
            }
          }

          /* Tablet Styles */
          @media (min-width: 641px) and (max-width: 1024px) {
            .logo-card { 
              min-width: 150px; 
              height: 85px; 
            }
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            .logo-track {
              animation: none;
            }
            .logo-card::after {
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
              title={l.label}
            >
              <div className="logo-inner">
                <div
                  className="logo-mark"
                  style={{ background: (l.fg ? l.fg : 'rgba(0,0,0,0.12)') }}
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
    { id: 'google', label: 'Google', bg: 'linear-gradient(135deg, #CA3F16, #F3F4F5)', fg: '#f1f5f9' },
    { id: 'microsoft', label: 'Microsoft', bg: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)', fg: '#374151' },
    { id: 'facebook', label: 'Facebook', bg: 'linear-gradient(135deg, #1877f2, #1669d6)', fg: 'rgba(255,255,255,0.08)' },
    { id: 'youtube', label: 'YouTube', bg: 'linear-gradient(135deg, #ff0000, #e60000)', fg: 'rgba(255,255,255,0.08)' },
  ];

  return (
    <div className="min-h-screen relative">
      <VideoBackground overlayOpacity={0.14} />

      {/* Hero Section */}
      <section className="flex min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Creative Designer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              & Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 lg:mb-12 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with passion and precision across all platforms
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16">
            <Link to="/projects" className="flex-1 sm:flex-initial">
              <Button 
                size="lg" 
                variant="secondary"
                className="flex w-full sm:w-auto h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Projects 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link to="/contact" className="flex-1 sm:flex-initial">
              <Button
                size="lg"
                variant="outline"
                className="flex w-full sm:w-auto h-12 px-8 text-base font-semibold bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300"
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
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass p-6 lg:p-8 rounded-2xl text-center backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I specialize in creating modern web experiences that combine stunning design with powerful functionality across all devices
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              { title: 'Web Design', description: 'Creating beautiful, intuitive interfaces that users love' },
              { title: 'Web Development', description: 'Building robust, scalable applications with modern technologies' },
              { title: 'UI/UX Design', description: 'Designing experiences that delight and engage users' },
              { title: 'Consulting', description: 'Helping businesses achieve their digital goals' }
            ].map((service, index) => (
              <div 
                key={index}
                className="glass p-6 lg:p-8 rounded-2xl text-left backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <h3 className="text-lg lg:text-xl font-bold mb-3 text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;