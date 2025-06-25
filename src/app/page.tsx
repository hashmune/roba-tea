
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teaVarieties, products } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/shared/hero-carousel";

export default function Home() {
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      <HeroCarousel />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-accent">Our Signature Varieties</h2>
            <p className="text-lg text-muted-foreground mt-2">A curated selection of our finest teas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teaVarieties.slice(0, 3).map((tea) => (
              <Card key={tea.slug} className="bg-card border-border hover:border-accent/50 transition-colors duration-300 overflow-hidden group">
                <CardHeader>
                  <div className="relative h-48 w-full mb-4">
                    <Image src={tea.imageUrl} alt={tea.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                  <CardTitle className="font-headline text-2xl text-primary-foreground">{tea.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tea.shortDescription}</CardDescription>
                  <Button asChild variant="link" className="p-0 mt-4 text-accent hover:text-accent/80">
                    <Link href={`/tea-varieties/${tea.slug}`}>Learn More <i className="ri-arrow-right-line ml-2 text-base leading-none"></i></Link>
                  </Button>
                </CardContent>
              </Card>
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
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
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
              <Card key={product.id} className="bg-card border-border hover:border-accent/50 transition-colors duration-300 overflow-hidden group">
                <div className="relative h-64 w-full">
                  <Image src={product.imageUrl} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-accent">{product.price}</p>
                  <Button asChild className="w-full mt-4" variant="primary">
                    <Link href="/store">View Product</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
