'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

export function VideoPlayer({
    src,
    poster
}: {
    src: string;
    poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div 
      className="relative aspect-video w-full max-w-5xl mx-auto overflow-hidden group"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        data-ai-hint="tea pouring"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
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
    </div>
  );
}
