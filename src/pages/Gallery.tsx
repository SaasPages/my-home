import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const Gallery = () => {
  const videos = [
    {
      title: 'Project Showcase 2024',
      thumbnail:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
      duration: '3:45',
      category: 'Portfolio',
      videoUrl:
        'https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc', // <-- added videoUrl here
    },
    {
      title: 'Design Process Timelapse',
      thumbnail:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
      duration: '5:12',
      category: 'Tutorial',
    },
    {
      title: 'Client Testimonial - TechCorp',
      thumbnail:
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=450&fit=crop',
      duration: '2:30',
      category: 'Testimonial',
    },
    {
      title: 'Web Development Tips',
      thumbnail:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop',
      duration: '8:20',
      category: 'Tutorial',
    },
    {
      title: 'UI/UX Design Walkthrough',
      thumbnail:
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=450&fit=crop',
      duration: '6:15',
      category: 'Design',
    },
    {
      title: 'Behind the Scenes',
      thumbnail:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=450&fit=crop',
      duration: '4:30',
      category: 'Vlog',
    },
    {
      title: 'Code Review Session',
      thumbnail:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
      duration: '12:45',
      category: 'Tutorial',
    },
    {
      title: 'E-Commerce Platform Demo',
      thumbnail:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop',
      duration: '7:00',
      category: 'Demo',
    },
    {
      title: 'Mobile App Development',
      thumbnail:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop',
      duration: '9:30',
      category: 'Tutorial',
    },
  ];

  // Slider state
  const [current, setCurrent] = useState(0);
  const slideCount = videos.length;
  const autoplayRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  // Modal state for playing embedded video
  const [playingUrl, setPlayingUrl] = useState<string | null>(null);

  useEffect(() => {
    // autoplay every 4.5s
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    if (!paused) {
      autoplayRef.current = window.setInterval(() => {
        setCurrent((c) => (c + 1) % slideCount);
      }, 4500);
    }
    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, [paused, slideCount]);

  const prev = () => setCurrent((c) => (c - 1 + slideCount) % slideCount);
  const next = () => setCurrent((c) => (c + 1) % slideCount);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Gallery</h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Watch my tutorials, project showcases, and behind-the-scenes content.
          </p>

          {/* Slider / Carousel */}
          <div
            className="relative mb-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  width: `${slideCount * 100}%`,
                  transform: `translateX(-${(current * 100) / slideCount}%)`,
                }}
              >
                {videos.map((video, idx) => (
                  <div
                    key={idx}
                    className="min-w-full flex-shrink-0 px-2"
                    aria-hidden={current !== idx}
                  >
                    <Card className="overflow-hidden group cursor-pointer relative">
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-90"></div>

                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          onClick={() => {
                            if (video.videoUrl) {
                              setPlayingUrl(video.videoUrl);
                            } else {
                              // Fallback: open thumbnail or show toast in real app
                            }
                          }}
                        >
                          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>

                        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                          {video.category}
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {video.category} • {video.duration}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next controls */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/100 p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/100 p-2 rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full ${i === current ? 'bg-primary' : 'bg-muted'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid of videos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => {
                      if (video.videoUrl) setPlayingUrl(video.videoUrl);
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    {video.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 gradient-bg text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
              Subscribe for More Content
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Get notified when I upload new tutorials and project showcases
            </p>
            <button className="px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Subscribe Now
            </button>
          </Card>
        </div>
      </div>

      {/* Modal for playing embedded video */}
      {playingUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-md overflow-hidden shadow-2xl">
            <button
              onClick={() => setPlayingUrl(null)}
              className="absolute top-3 right-3 z-20 bg-background/80 hover:bg-background/100 p-2 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={playingUrl}
              title="Video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;