
'use client';

import { useState, useRef } from 'react';

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
      className="relative aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden group"
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label="Play video"
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
        >
          <div className="h-24 w-24 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors">
            <i className="ri-play-fill text-6xl ml-2"></i>
          </div>
        </button>
      )}
    </div>
  );
}
