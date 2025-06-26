
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products, storeHeroSlides } from '@/lib/placeholder-data';
import { Breadcrumb } from '@/components/shared/breadcrumb';
import { Button, buttonVariants } from '@/components/ui/button';
import { useShoppingBag } from '@/hooks/use-shopping-bag';
import { formatCurrency, cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addToBag } = useShoppingBag();

  return (
    <div className="group text-left">
      <div className="relative mb-4">
        <Link href={`/store/${product.slug}`}>
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    data-ai-hint={product.dataAiHint}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>
        </Link>
      </div>
      <h3 className="font-headline text-lg font-medium text-foreground">
        <Link href={`/store/${product.slug}`}>{product.name}</Link>
      </h3>
      <p className="mb-4 text-muted-foreground">{formatCurrency(product.price)}</p>
      <Button variant="outline-dark" size="sm" onClick={() => addToBag(product)}>
        Add to Bag
      </Button>
    </div>
  );
}

export default function StorePage() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Store' }];
  const teas = products.filter((p) => p.category === 'Tea');
  const accessories = products.filter((p) => p.category === 'Accessories');

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section>
        <Carousel
          opts={{
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {storeHeroSlides.map((slide) => (
              <CarouselItem key={slide.title}>
                <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
                  <div className="text-left">
                    <p className="mb-2 font-bold uppercase tracking-widest text-muted-foreground">
                      {slide.tag}
                    </p>
                    <h1 className="mb-4 font-headline text-4xl font-bold uppercase text-foreground md:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="mb-6 max-w-lg text-muted-foreground">
                      {slide.description}
                    </p>
                    <Button variant="outline-dark" size="lg" asChild>
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={slide.imageUrl}
                      alt={slide.title}
                      data-ai-hint={slide.dataAiHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="container mx-auto flex justify-start px-4 pb-8 -mt-8">
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
      </section>

      <section id="teas" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground">
              Tea Varieties
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {teas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="accessories" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground">
              Lifestyle & Accessories
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {accessories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <Alert>
                    <i className="ri-shopping-bag-line h-4 w-4" />
                    <AlertTitle>In-Store Pickup Only</AlertTitle>
                    <AlertDescription>
                        Please note that all online orders are for pickup at our estate store. Your order will be ready for collection approximately 15 minutes after payment is confirmed.
                    </AlertDescription>
                </Alert>
            </div>
        </section>

    </div>
  );
}
