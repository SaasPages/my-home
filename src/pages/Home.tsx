import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoBackground from '@/components/VideoBackground';

type Logo = {
  id: string;
  label: string;
  bg: string;
  fg?: string;
};

const DEFAULT_SPEED = 18; // seconds for one full loop

const LogoSlider: React.FC<{
  logos: Logo[];
  initialSpeed?: number;
}> = ({ logos, initialSpeed = DEFAULT_SPEED }) => {
  const [speed, setSpeed] = useState<number>(initialSpeed);

  const doubled = useMemo(() => {
    // duplicate the array so the animation can loop seamlessly
    return [...logos, ...logos];
  }, [logos]);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Our Brand Partners</h3>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Speed</span>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setSpeed((s) => Math.max(4, Math.round((s - 2) * 10) / 10))}
            >
              −
            </Button>
            <div className="px-3 py-2 rounded-md bg-muted/20 text-sm">
              {speed}s
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setSpeed((s) => Math.min(60, Math.round((s + 2) * 10) / 10))}
            >
              +
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        aria-hidden={false}
        // CSS variable used by the keyframes to control speed
        style={{ ['--slider-speed' as any]: `${speed}s` }}
      >
        {/* Inline styles for the slider animation & shimmer effect */}
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .logo-track {
            display: inline-flex;
            gap: 1rem;
            align-items: center;
            /* animate translateX to -50% (because we duplicated items) */
            animation: scroll-left var(--slider-speed) linear infinite;
            will-change: transform;
          }

          /* pause animation on hover to allow the user to inspect logos */
          .logo-track:hover {
            animation-play-state: paused;
          }

          /* Each logo card */
          .logo-card {
            min-width: 160px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 6px 18px rgba(15,23,42,0.08);
            transition: transform .2s ease, box-shadow .2s ease;
            flex-shrink: 0;
          }

          .logo-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 28px rgba(15,23,42,0.12);
          }

          /* golden shimmer overlay */
          .logo-card::after {
            content: "";
            position: absolute;
            top: -40%;
            left: -40%;
            width: 60%;
            height: 180%;
            background: linear-gradient(90deg, rgba(255,215,0,0) 0%, rgba(255,215,0,0.45) 50%, rgba(255,215,0,0) 100%);
            transform: rotate(-25deg);
            animation: shimmer 2.2s linear infinite;
            pointer-events: none;
            mix-blend-mode: overlay;
            opacity: 0.9;
          }

          @keyframes shimmer {
            0% { transform: translateX(-220%) rotate(-25deg); opacity: 0; }
            10% { opacity: 0.5; }
            50% { transform: translateX(120%) rotate(-25deg); opacity: 0.7; }
            100% { transform: translateX(220%) rotate(-25deg); opacity: 0; }
          }

          /* Make sure logos are readable on their brand backgrounds */
          .logo-inner {
            z-index: 2;
            display:flex;
            align-items:center;
            gap:0.75rem;
            padding: 0 1rem;
          }

          .logo-mark {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight:700;
            font-size:14px;
            color: white;
            flex-shrink:0;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08) inset;
          }

          /* subdued label for brand name */
          .logo-label {
            color: rgba(255,255,255,0.95);
            font-weight: 600;
          }

          /* small screens: allow smaller logo widths */
          @media (max-width: 640px) {
            .logo-card { min-width: 130px; height: 60px; }
            .logo-mark { width: 36px; height: 36px; font-size:13px; border-radius:8px; }
          }
        `}</style>

        <div className="logo-track" style={{ whiteSpace: 'nowrap' }}>
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
                  style={{ background: (l.fg ? l.fg : 'rgba(0,0,0,0.08)') }}
                >
                  {/* use initials as a lightweight mark */}
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
  // brand background colors (kept accessible & visually distinct)
  const logos: Logo[] = [
    { id: 'upwork', label: 'Upwork', bg: '#1fb57a', fg: 'rgba(255,255,255,0.06)' },
    { id: 'firefox', label: 'Firefox', bg: '#ff9400', fg: 'rgba(255,255,255,0.06)' },
    { id: 'apple', label: 'Apple', bg: '#111827', fg: 'rgba(255,255,255,0.06)' },
    { id: 'google', label: 'Google', bg: '#ffffff', fg: '#f3f4f6' },
    { id: 'microsoft', label: 'Microsoft', bg: '#f3f4f6', fg: '#111827' },
    { id: 'facebook', label: 'Facebook', bg: '#1877f2', fg: 'rgba(255,255,255,0.06)' },
    { id: 'youtube', label: 'YouTube', bg: '#ff0000', fg: 'rgba(255,255,255,0.06)' },
  ];

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

          {/* Logo slider placed beneath hero CTAs */}
          <LogoSlider logos={logos} initialSpeed={DEFAULT_SPEED} />
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