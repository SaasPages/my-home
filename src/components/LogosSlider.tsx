import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

type Logo = {
  id: string;
  label: string;
  bg: string;
  fg?: string;
  link?: string;
};

const DEFAULT_SPEED = 20;

const LogosSlider: React.FC<{
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

          @media (prefers-reduced-motion: reduce) {
            .logo-track {
              animation: none;
            }
          }
        `}</style>

        <div className={cn("logo-track", isPaused && "paused")}>
          {doubled.map((l, idx) => {
            const logoContent = (
              <div
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
            );

            return l.link ? (
              <a
                key={`${l.id}-${idx}`}
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {logoContent}
              </a>
            ) : (
              <div key={`${l.id}-${idx}`}>{logoContent}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogosSlider;
