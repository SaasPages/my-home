import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

const Gallery = () => {
  const videos = [
    {
      title: 'Project Showcase 2024',
      thumbnail:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&h=800&fit=crop&q=80',
      duration: '3:45',
      category: 'Portfolio',
      videoUrl: 'https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc',
    },
    {
      title: 'Design Process Timelapse',
      thumbnail:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=800&fit=crop&q=80',
      duration: '5:12',
      category: 'Tutorial',
    },
    {
      title: 'Client Testimonial - TechCorp',
      thumbnail:
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1400&h=800&fit=crop&q=80',
      duration: '2:30',
      category: 'Testimonial',
    },
    {
      title: 'Web Development Tips',
      thumbnail:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=800&fit=crop&q=80',
      duration: '8:20',
      category: 'Tutorial',
    },
    {
      title: 'UI/UX Design Walkthrough',
      thumbnail:
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1400&h=800&fit=crop&q=80',
      duration: '6:15',
      category: 'Design',
    },
    {
      title: 'Behind the Scenes',
      thumbnail:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1400&h=800&fit=crop&q=80',
      duration: '4:30',
      category: 'Vlog',
    },
    {
      title: 'Code Review Session',
      thumbnail:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1400&h=800&fit=crop&q=80',
      duration: '12:45',
      category: 'Tutorial',
    },
    {
      title: 'E-Commerce Platform Demo',
      thumbnail:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=800&fit=crop&q=80',
      duration: '7:00',
      category: 'Demo',
    },
    {
      title: 'Mobile App Development',
      thumbnail:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=800&fit=crop&q=80',
      duration: '9:30',
      category: 'Tutorial',
    },
  ];

  // Carousel state
  const [current, setCurrent] = useState(0);
  const slideCount = videos.length;
  const autoplayRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  // Modal
  const [playingUrl, setPlayingUrl] = useState<string | null>(null);

  // Touch / swipe
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  // Autoplay
  useEffect(() => {
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
        autoplayRef.current = null;
      }
    };
  }, [paused, slideCount]);

  const goTo = (i: number) => setCurrent((i + slideCount) % slideCount);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Touch handlers for swipe + subtle dragging animation
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    isDragging.current = true;
    setPaused(true);
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || touchStartX.current == null) return;
    const x = e.touches[0].clientX;
    touchDeltaX.current = x - touchStartX.current;
    if (trackRef.current) {
      const percent = (touchDeltaX.current / window.innerWidth) * 100;
      trackRef.current.style.transform = `translateX(calc(-${(current * 100) / slideCount}% + ${percent}%))`;
    }
  };
  const onTouchEnd = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 700ms cubic-bezier(.22,.9,.36,1)';
      trackRef.current.style.transform = `translateX(-${(current * 100) / slideCount}%)`;
    }
    const threshold = 60; // pixels to trigger slide
    if (touchDeltaX.current > threshold) {
      prev();
    } else if (touchDeltaX.current < -threshold) {
      next();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setTimeout(() => setPaused(false), 600);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative">
      <VideoBackground />
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Gallery</h1>
          <div className="h-1 w-20 bg-primary mb-8 rounded"></div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Let me know what direction you’d like, and I’ll craft the perfect quote for your video gallery!​​​​​​​​​​​​​​​​
          </p>

          {/* Sliding animation / cinematic carousel */}
          <div
            className="relative mb-8 select-none"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div
                ref={trackRef}
                className="flex will-change-transform"
                style={{
                  width: `${slideCount * 100}%`,
                  transform: `translateX(-${(current * 100) / slideCount}%)`,
                  transition: 'transform 700ms cubic-bezier(.22,.9,.36,1)',
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onTouchCancel={onTouchEnd}
              >
                {videos.map((video, idx) => {
                  const isActive = idx === current;
                  const scale = isActive ? 1 : 0.94;
                  const opacity = isActive ? 1 : 0.7;
                  const zIndex = isActive ? 20 : 10;
                  return (
                    <div
                      key={idx}
                      className="min-w-full flex-shrink-0 px-3 py-4"
                      aria-hidden={!isActive}
                    >
                      <Card
                        className="overflow-hidden relative transform transition-all duration-700"
                        style={{
                          transform: `scale(${scale})`,
                          opacity,
                          zIndex,
                        }}
                      >
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-72 md:h-80 object-cover"
                            loading="lazy"
                            decoding="async"
                          />

                          {/* Cinematic gradient overlay */}
                          <div className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 60%)',
                            }}
                          />

                          {/* Play CTA */}
                          <button
                            onClick={() => video.videoUrl && setPlayingUrl(video.videoUrl)}
                            aria-label={`Play ${video.title}`}
                            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
                          >
                            <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/95 to-primary/70 flex items-center justify-center shadow-2xl">
                              <Play className="w-8 h-8 text-primary-foreground ml-0.5" fill="currentColor" />
                            </div>
                          </button>

                          {/* Meta badges */}
                          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                            {video.category}
                          </div>

                          {/* Subtle parallax title */}
                          <div className="absolute left-6 bottom-6 text-white">
                            <h3 className="text-xl md:text-2xl font-semibold drop-shadow-lg">
                              {video.title}
                            </h3>
                            <p className="text-sm text-white/80 mt-1">
                              {video.category} • {video.duration}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/100 p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/100 p-2 rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-primary scale-125' : 'bg-muted'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid fallback with play modal */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => video.videoUrl && setPlayingUrl(video.videoUrl)}
                    role="button"
                    aria-label={`Play ${video.title}`}
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

      {/* Modal for embedded video playback */}
      {playingUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-md overflow-hidden shadow-2xl">
            <button
              onClick={() => setPlayingUrl(null)}
              className="absolute top-3 right-3 z-20 bg-background/80 hover:bg-background/100 p-2 rounded-full"
              aria-label="Close video"
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
