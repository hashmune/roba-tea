
'use client';

import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/roba-website-data';
import { Breadcrumb } from '@/components/shared/breadcrumb';
import { Button, buttonVariants } from '@/components/ui/button';
import { formatCurrency, cn } from '@/lib/utils';
import { useShoppingBag } from '@/hooks/use-shopping-bag';
import { Separator } from '@/components/ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { use } from 'react';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const product = products.find((p) => p.slug === slug);
  const { addToBag } = useShoppingBag();

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Store', href: '/store' },
    { label: product.name },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto flex items-center justify-between">
        <Breadcrumb items={breadcrumbItems} />
        <Button variant="outline-dark" onClick={() => router.back()}>
          <i className="ri-arrow-left-line mr-2" />
          Back
        </Button>
      </div>

      <div className="container mx-auto grid grid-cols-1 items-start gap-12 py-8 md:grid-cols-2 md:py-12">
        <div className="relative aspect-[5/4] w-full group">
           <Carousel className="w-full h-full">
            <CarouselContent>
              {product.imageUrls.map((url, index) => (
                <CarouselItem key={index} className="relative h-full">
                  <Image
                    src={url}
                    alt={`${product.name} image ${index + 1}`}
                    data-ai-hint={product.dataAiHint}
                    fill
                    className="object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {product.imageUrls.length > 1 && (
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="inline-flex items-center justify-center rounded-tl-[40px] rounded-tr-[12px] rounded-br-[40px] rounded-bl-[40px] border border-muted-foreground bg-background/80 backdrop-blur-sm p-1">
                        <CarouselPrevious variant="ghost" size="icon" className="static translate-y-0 border-none h-8 w-8 text-foreground/70 disabled:text-foreground/30 hover:text-foreground hover:bg-transparent" />
                        <CarouselNext variant="ghost" size="icon" className="static translate-y-0 border-none h-8 w-8 text-foreground/70 disabled:text-foreground/30 hover:text-foreground hover:bg-transparent" />
                    </div>
                </div>
            )}
          </Carousel>
        </div>

        <div className="sticky top-28">
          <h1 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-2xl text-muted-foreground">
            {formatCurrency(product.price)}
          </p>
          
          <Separator className="my-6" />

          <p className="text-muted-foreground">{product.description}</p>
          
          <div className="mt-8">
            <Button
              variant="outline-dark"
              size="lg"
              onClick={() => addToBag(product)}
              className="w-full md:w-auto"
            >
              Add to Bag
            </Button>
          </div>
          
           <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Category:</span> {product.category}
                </p>
                <p>
                    <span className="font-semibold text-foreground">Status:</span> {product.status}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
