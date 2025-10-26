import React from 'react';

const logos = [
  { name: 'Upwork', url: 'https://www.upwork.com', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/upwork.svg' },
  { name: 'Firefox', url: 'https://www.mozilla.org/firefox/', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/firefox.svg' },
  { name: 'Apple', url: 'https://www.apple.com', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg' },
  { name: 'Google', url: 'https://www.google.com', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg' },
  { name: 'Microsoft', url: 'https://www.microsoft.com', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg' },
  { name: 'Facebook', url: 'https://www.facebook.com', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg' },
  { name: 'YouTube', url: 'https://www.youtube.com', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/youtube.svg' },
];

const LogosSlider: React.FC = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto overflow-hidden">
        {/* Simple keyframes injected locally for the marquee effect */}
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 20s linear infinite; }
          .logo-img { filter: grayscale(100%); opacity: 0.85; transition: filter .2s ease, opacity .2s ease; }
          .logo-img:hover { filter: none; opacity: 1; }
        `}</style>

        <div className="flex items-center">
          <div className="flex w-full">
            {/* Duplicate the list so the marquee can scroll continuously */}
            <div className="flex animate-marquee space-x-8 items-center w-[200%]">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex items-center space-x-8 px-4">
                  {logos.map((logo) => (
                    <a
                      key={logo.name + dup}
                      href={logo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-12 w-auto logo-img"
                      />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSlider;