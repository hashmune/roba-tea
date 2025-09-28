'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function VideoPlayer({
    src,
    poster
}: {
    src: string;
    poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video w-full max-w-6xl mx-auto overflow-hidden group"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        data-ai-hint="tea pouring"
        playsInline
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer transform scale-110"
      />
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
          <Button
            variant="filled"
            size="icon"
            className="h-[44px] w-[44px] rounded-tl-[40px] rounded-tr-[12px] rounded-br-[40px] rounded-bl-[40px]"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label="Play video"
          >
            <i className="ri-play-line text-2xl"></i>
          </Button>
        </div>
      )}

      {/* Control buttons - only show when video is playing */}
      {isPlaying && (
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="filled"
            size="icon"
            className="h-10 w-10 rounded-tl-[20px] rounded-tr-[6px] rounded-br-[20px] rounded-bl-[20px] bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            <i className={isMuted ? "ri-volume-mute-line text-lg" : "ri-volume-up-line text-lg"}></i>
          </Button>
          
          <Button
            variant="filled"
            size="icon"
            className="h-10 w-10 rounded-tl-[20px] rounded-tr-[6px] rounded-br-[20px] rounded-bl-[20px] bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
            }}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            <i className={isFullscreen ? "ri-fullscreen-exit-line text-lg" : "ri-fullscreen-line text-lg"}></i>
          </Button>
        </div>
      )}
    </div>
  );
}
