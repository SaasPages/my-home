import React from 'react';
import {
  SiUpwork,
  SiFirefox,
  SiApple,
  SiGoogle,
  SiMicrosoft,
  SiFacebook,
  SiYoutube,
} from 'react-icons/si';

const logos = [
  { Icon: SiUpwork, label: 'Upwork' },
  { Icon: SiFirefox, label: 'Firefox' },
  { Icon: SiApple, label: 'Apple' },
  { Icon: SiGoogle, label: 'Google' },
  { Icon: SiMicrosoft, label: 'Microsoft' },
  { Icon: SiFacebook, label: 'Facebook' },
  { Icon: SiYoutube, label: 'YouTube' },
];

const TechStackSlider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      {/* Two tracks duplicated for seamless continuous scroll */}
      <div className="relative">
        <div className="flex gap-8 will-change-transform" aria-hidden>
          <div className="track flex items-center gap-8">
            {logos.map(({ Icon, label }, i) => (
              <div
                key={`logo-a-${label}-${i}`}
                className="flex items-center justify-center p-2"
              >
                <Icon
                  title={label}
                  aria-label={label}
                  className="tech-logo"
                  size={48}
                />
              </div>
            ))}
          </div>

          {/* duplicate */}
          <div className="track flex items-center gap-8">
            {logos.map(({ Icon, label }, i) => (
              <div
                key={`logo-b-${label}-${i}`}
                className="flex items-center justify-center p-2"
              >
                <Icon
                  title={label}
                  aria-label={label}
                  className="tech-logo"
                  size={48}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Root layout */
        .track { display: flex; }

        /* marquee animation: move the whole wide flex row left */
        .relative > .flex {
          animation: marquee 18s linear infinite;
        }

        /* Pause on hover */
        .relative:hover > .flex {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* logo visuals + hover */
        .tech-logo {
          color: rgba(255,255,255,0.95); /* default color; Tailwind classes can override */
          transition: transform 220ms ease, filter 220ms ease;
          will-change: transform, filter;
        }

        .tech-logo:hover,
        .tech-logo:focus {
          transform: scale(1.08) rotate(-6deg);
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.25));
        }

        /* Responsive: smaller icons on small screens */
        @media (max-width: 640px) {
          .tech-logo {
            transform: none;
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default TechStackSlider;