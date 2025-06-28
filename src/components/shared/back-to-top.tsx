
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      variant="outline-dark"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-10 left-3 z-50 h-10 w-10 p-0 rounded-tl-[20px] rounded-tr-[8px] rounded-br-[20px] rounded-bl-[20px] transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="Go to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.0001 22.0003L11.0002 22.0004L11.0002 5.82845L7.05044 9.77817L5.63623 8.36396L12.0002 2L18.3642 8.36396L16.9499 9.77817L13.0002 5.8284L13.0001 22.0003Z"></path>
      </svg>
    </Button>
  );
}
