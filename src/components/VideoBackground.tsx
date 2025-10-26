import { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        // Reset video to start
        video.currentTime = 0;
        video.muted = true;
        video.playsInline = true;
        
        // Wait a bit for the video to be ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Try to play
        await video.play();
        setIsLoaded(true);
        console.log('Video background loaded successfully');
      } catch (error) {
        console.log('Video autoplay blocked, trying alternative approach:', error);
        
        // Try again after a short delay
        setTimeout(async () => {
          try {
            await video.play();
            setIsLoaded(true);
          } catch (e) {
            console.log('Video play failed:', e);
          }
        }, 500);
      }
    };

    // Listen for when video data is loaded
    const handleLoadedData = () => {
      attemptPlay();
    };

    // Listen for user interaction to play video if autoplay fails
    const handleInteraction = () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });

    // Also try to play immediately
    if (video.readyState >= 2) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/.50 backdrop-blur-sm"></div>
    </div>
  );
};

export default VideoBackground;