
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
        'fixed bottom-6 left-6 z-50 h-10 w-10 p-0 rounded-tl-[20px] rounded-tr-[8px] rounded-br-[20px] rounded-bl-[20px] transition-opacity duration-300 bg-background',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="Go to top"
    >
      <i className="ri-arrow-up-long-line text-xl"></i>
    </Button>
  );
}
