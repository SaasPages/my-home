import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h3>
          <p className="text-sm text-gray-400 mt-2">Companies I've collaborated with</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Scroll Speed</span>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 hover:bg-gray-800"
              onClick={() => setSpeed((s) => Math.max(4, Math.round((s - 2) * 10) / 10))}
            >
              −
            </Button>
            <div className="px-3 py-2 rounded-md bg-gray-800/50 text-sm text-gray-300 min-w-[60px] text-center">
              {speed}s
            </div>
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 hover:bg-gray-800"
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
            gap: 1.5rem;
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
            min-width: 180px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.1);
          }

          .logo-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            border-color: rgba(255,255,255,0.2);
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
            gap:1rem;
            padding: 0 1.25rem;
          }

          .logo-mark {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight:700;
            font-size:15px;
            color: white;
            flex-shrink:0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15) inset;
            backdrop-filter: blur(4px);
          }

          /* subdued label for brand name */
          .logo-label {
            color: rgba(255,255,255,0.95);
            font-weight: 600;
            font-size: 15px;
            white-space: nowrap;
          }

          /* small screens: allow smaller logo widths */
          @media (max-width: 640px) {
            .logo-card { min-width: 140px; height: 65px; }
            .logo-mark { width: 40px; height: 40px; font-size:14px; border-radius:10px; }
            .logo-label { font-size: 14px; }
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
                  style={{ background: (l.fg ? l.fg : 'rgba(0,0,0,0.12)') }}
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

      {/* Hero content */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Now available for new projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white leading-tight">
            Digital
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Innovator
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into exceptional digital experiences through cutting-edge design 
            and engineering excellence
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link to="/projects">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 h-auto text-lg font-semibold rounded-xl">
                Explore My Work 
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50 px-8 py-3 h-auto text-lg font-semibold rounded-xl backdrop-blur-sm"
              >
                Start a Project
              </Button>
            </Link>
          </div>

          {/* Logo slider placed beneath hero CTAs */}
          <LogoSlider logos={logos} initialSpeed={DEFAULT_SPEED} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-10 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">75+</div>
              <p className="text-lg text-gray-300 font-medium">Projects Delivered</p>
            </div>
            <div className="glass p-10 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">40+</div>
              <p className="text-lg text-gray-300 font-medium">Satisfied Clients</p>
            </div>
            <div className="glass p-10 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-3">6+</div>
              <p className="text-lg text-gray-300 font-medium">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Crafting Digital Excellence
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            I bridge the gap between stunning visual design and robust technical implementation 
            to create products that users love and businesses rely on.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl text-left group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">WD</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Design</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Creating beautiful, intuitive interfaces that users love to interact with
              </p>
            </div>
            <div className="glass p-8 rounded-2xl text-left group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">WD</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Building robust, scalable applications with modern technologies and best practices
              </p>
            </div>
            <div className="glass p-8 rounded-2xl text-left group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">UX</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Designing experiences that delight users and drive meaningful engagement
              </p>
            </div>
            <div className="glass p-8 rounded-2xl text-left group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Strategy</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Helping businesses achieve their digital transformation goals with data-driven insights
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;