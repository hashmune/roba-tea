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
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    try {
      if (!document.fullscreenElement) {
        // For mobile devices, request fullscreen on video element
        // For desktop, request fullscreen on container to preserve custom controls
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const element = isMobile ? video : container;
        
        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if ((element as any).webkitRequestFullscreen) {
          await (element as any).webkitRequestFullscreen();
        } else if ((element as any).mozRequestFullScreen) {
          await (element as any).mozRequestFullScreen();
        } else if ((element as any).msRequestFullscreen) {
          await (element as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      ));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
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
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
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
