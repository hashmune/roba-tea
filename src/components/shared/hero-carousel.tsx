"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

import { heroSlides } from "@/lib/roba-website-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[75vh] max-h-[800px]">
              <Image
                src={slide.imageUrl}
                data-ai-hint={slide.dataAiHint}
                alt={slide.title}
                fill
                className="object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className="relative z-20 flex h-full items-end justify-center text-white md:justify-start">
                <div className="w-full h-full flex items-end justify-center">
                  <div className="w-full max-w-[1400px] mx-auto">
                    <div className="container mx-auto text-center md:text-left">
                      <div className="max-w-2xl animate-in fade-in-0 slide-in-from-bottom-12 duration-1000 pb-16 md:pb-24 md:pl-4">
                        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
                          {slide.tag}
                        </p>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-4xl uppercase">
                          {slide.title}
                        </h1>
                        <Button asChild size="lg" variant="outline-light">
                            <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex items-center gap-x-2">
        {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index ? "w-6 bg-white" : "w-2 bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
        ))}
      </div>
    </Carousel>
  );
}
