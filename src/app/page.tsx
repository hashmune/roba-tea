
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { teaVarieties, products } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/shared/hero-carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teaVarieties.slice(0, 3).map((tea) => (
              <div key={tea.slug} className="group">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg">
                  <Image 
                    src={tea.imageUrl} 
                    alt={tea.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="pt-4 text-center">
                  <h3 className="font-headline text-xl text-foreground">{tea.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                src="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9"
                data-ai-hint="ceylon history"
                alt="Vintage map of Ceylon"
                fill
                className="object-cover"
                />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-accent">A Legacy of Quality</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Our story is one of dedication to the art of tea making. From the careful selection of leaves to our ethical practices, we honor a tradition of excellence passed down through generations.
              </p>
              <Button asChild size="lg" variant="outline-dark">
                <Link href="/our-story">Our Story</Link>
              </Button>
            </div>
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
