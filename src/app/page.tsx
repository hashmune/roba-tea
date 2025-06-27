
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { teaVarieties, products, experiences, type ExperienceCard } from "@/lib/placeholder-data";
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

const ExperienceDisplayItem = ({ experience, className }: { experience: ExperienceCard, className?: string }) => (
  <Link 
    href={experience.link} 
    key={experience.title} 
    className={cn("group block", className)}
  >
    <div className="relative aspect-square w-full overflow-hidden">
      <Image 
        src={experience.imageUrl} 
        alt={experience.title} 
        data-ai-hint={experience.dataAiHint}
        fill 
        className="object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    <div className="pt-4">
      <p className="text-xs font-light text-muted-foreground uppercase tracking-widest">{experience.category}</p>
      <h3 className="font-headline text-lg font-bold text-foreground uppercase tracking-wider">{experience.title}</h3>
    </div>
  </Link>
);


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
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {teaVarieties.map((tea) => (
                <CarouselItem key={tea.slug} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group p-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image 
                        src={tea.imageUrls[0]} 
                        alt={tea.name}
                        data-ai-hint={tea.dataAiHint}
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
                        className="static w-auto h-full px-4 rounded-none translate-x-0 translate-y-0 hover:bg-transparent hover:text-inherit"
                    />
                    <CarouselNext 
                        variant="ghost" 
                        className="static w-auto h-full px-4 rounded-none translate-x-0 translate-y-0 hover:bg-transparent hover:text-inherit"
                    />
                </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase text-muted-foreground mb-4">HEART AND HOME</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">Welcome to The Roba Estate</h2>
          <div className="mb-5">
            <Button asChild variant="outline-dark" size="lg">
              <Link href="/our-story">Discover estate</Link>
            </Button>
          </div>
          <VideoPlayer 
             src="https://videos.pexels.com/video-files/3568312/3568312-hd_1280_720_24fps.mp4"
             poster="https://images.unsplash.com/photo-1522747776116-64ee03be1dad"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase text-muted-foreground mb-4">FROM OUR STORE</p>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground tracking-wider">EXPERIENCE THE ROBA TEA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div className="flex flex-col gap-y-12">
              {experiences
                .filter((_, index) => index % 2 === 0)
                .map((experience) => (
                  <ExperienceDisplayItem experience={experience} key={experience.title} />
                ))}
            </div>
            <div className="flex flex-col gap-y-12 md:mt-16">
               {experiences
                .filter((_, index) => index % 2 !== 0)
                .map((experience) => (
                  <ExperienceDisplayItem experience={experience} key={experience.title} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
