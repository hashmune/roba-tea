
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { teaVarieties, products } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/shared/hero-carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { VideoPlayer } from "@/components/shared/video-player";

export default function Home() {
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      <div className="w-full max-w-[1800px] mx-auto">
        <HeroCarousel />
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Our signature varieties</h2>
            <p className="text-lg text-muted-foreground mt-2">From our Timeless Collections enjoyed around the world to our rare, limited-edition teas—each blend tells a unique story. Every cup of our single-origin or artisan tea reflects our unwavering dedication to the craft of leaf and flavor mastery, honed since 1824.</p>
            <div className="mt-8">
              <Button asChild variant="outline-dark" size="lg">
                <Link href="/tea-varieties">Explore signature varieties</Link>
              </Button>
            </div>
          </div>
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {teaVarieties.map((tea) => (
                <CarouselItem key={tea.slug} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group p-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                      <Image 
                        src={tea.imageUrl} 
                        alt={tea.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="pt-4">
                       <div className="flex justify-between items-baseline gap-4">
                        <h3 className="font-sans text-sm text-foreground uppercase">{tea.name}</h3>
                        <Badge variant="outline" className={cn('whitespace-nowrap', tea.status === 'Available' ? 'text-accent border-accent' : 'text-muted-foreground')}>
                          {tea.status.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
             <div className="flex justify-end mt-4">
                <div className={cn(
                    buttonVariants({ variant: 'outline-dark', size: 'lg' }),
                    "w-auto p-0 hover:bg-transparent hover:text-inherit"
                )}>
                    <CarouselPrevious 
                        variant="ghost" 
                        className="static w-auto h-full px-4 rounded-none translate-x-0 translate-y-0 hover:bg-transparent hover:text-inherit disabled:opacity-75"
                    />
                    <CarouselNext 
                        variant="ghost" 
                        className="static w-auto h-full px-4 rounded-none translate-x-0 translate-y-0 hover:bg-transparent hover:text-inherit disabled:opacity-75"
                    />
                </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">HEART AND HOME</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-8">Welcome to The Roba Estate</h2>
          <VideoPlayer 
             src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
             poster="https://placehold.co/1920x1080.png"
          />
          <div className="mt-8">
            <Button asChild variant="outline-dark" size="lg">
              <Link href="/our-story">Discover estate</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-accent">From Our Store</h2>
            <p className="text-lg text-muted-foreground mt-2">Bring home the taste of Ceylon.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image 
                    src={product.imageUrl} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="pt-4">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="font-headline text-sm text-foreground uppercase">{product.name}</h3>
                    <Badge variant="outline" className={cn('whitespace-nowrap', product.status === 'Available' ? 'text-accent border-accent' : 'text-muted-foreground')}>
                      {product.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
