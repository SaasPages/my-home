import React from 'react';

// VideoBackground: place a crisp, full-bleed video behind page content.
// Recommended: put a high-resolution MP4 in public/videos/hero.mp4 (1080p or 4k)
// and a poster image in public/videos/hero-poster.jpg. Fallback source is provided.
const VIDEO_SRC = '/videos/hero.mp4'; // Replace with your uploaded /public/videos/hero.mp4
const FALLBACK_SRC = 'https://www.w3schools.com/html/mov_bbb.mp4'; // optional fallback

type Props = {
  overlayOpacity?: number; // 0..1, default 0.15 for subtle darkening to keep text legible
};

const VideoBackground: React.FC<Props> = ({ overlayOpacity = 0.15 }) => {
  // The wrapper is absolutely positioned with a negative z-index so it sits behind
  // the page content. pointer-events-none ensures it doesn't intercept clicks.
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
        aria-hidden
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        <source src={FALLBACK_SRC} type="video/mp4" />
        {/* If the browser cannot play the video, it will simply fall back to a poster or still page */}
      </video>

      {/* Subtle overlay to improve contrast; inline style used so pages can pass a prop */}
      <div
        className="absolute inset-0 -z-10 bg-black"
        style={{ opacity: overlayOpacity, pointerEvents: 'none' }}
        aria-hidden
      />
    </div>
  );
};

export default VideoBackground;