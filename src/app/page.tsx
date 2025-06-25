import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teaVarieties, products } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1800&auto=format&fit=crop"
          data-ai-hint="tea plantation"
          alt="Lush tea plantation in Ceylon"
          layout="fill"
          objectFit="cover"
          className="z-0 brightness-50"
        />
        <div className="relative z-10 p-4 animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4 tracking-tight">
            The Soul of Ceylon, in a Cup
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-foreground/80">
            Experience the unparalleled quality and rich heritage of Roba Ceylon Tea, cultivated in the pristine highlands of Sri Lanka.
          </p>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="/store">Explore Our Teas <i className="ri-arrow-right-line ml-2 text-xl leading-none"></i></Link>
          </Button>
        </div>
      </section>

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
                    <Image src={tea.imageUrl} alt={tea.name} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-500"/>
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
                src="https://images.unsplash.com/photo-1604213410329-32b07d611b84?q=80&w=800&auto=format&fit=crop"
                data-ai-hint="ceylon history"
                alt="Vintage map of Ceylon"
                layout="fill"
                objectFit="cover"
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
                  <Image src={product.imageUrl} alt={product.name} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-accent">{product.price}</p>
                  <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/80">
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
