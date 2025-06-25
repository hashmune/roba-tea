
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import { heroSlides } from "@/lib/placeholder-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  return (
    <Carousel
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
            <div className="relative h-[75vh] max-h-[800px] w-full">
              <Image
                src={slide.imageUrl}
                data-ai-hint={slide.dataAiHint}
                alt={slide.title}
                fill
                className="object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className="relative z-20 flex h-full items-end justify-center text-white md:justify-start">
                <div className="container mx-auto px-4 text-center md:text-left">
                  <div className="max-w-2xl animate-in fade-in-0 slide-in-from-bottom-12 duration-1000 pb-16 md:pb-24">
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
                      {slide.tag}
                    </p>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                      {slide.title}
                    </h1>
                    <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-x-4">
            <CarouselPrevious className="static -translate-y-0 text-white border-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="static -translate-y-0 text-white border-white hover:bg-white/20 hover:text-white" />
        </div>
      </div>
    </Carousel>
  );
}
