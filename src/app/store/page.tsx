
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/placeholder-data';
import { Breadcrumb } from '@/components/shared/breadcrumb';
import { Button } from '@/components/ui/button';
import { useShoppingBag } from '@/hooks/use-shopping-bag';
import { formatCurrency } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShoppingBagIcon } from 'lucide-react';

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addToBag } = useShoppingBag();

  return (
    <div className="group text-center">
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

      <section className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div className="text-left">
          <p className="mb-2 font-bold uppercase tracking-widest text-muted-foreground">
            THE ROBA COLLECTION
          </p>
          <h1 className="mb-4 font-headline text-4xl font-bold uppercase text-foreground md:text-5xl">
            A Journey in Every Sip
          </h1>
          <p className="mb-6 max-w-lg text-muted-foreground">
            Explore our curated selection of premium Ceylon teas and handcrafted
            accessories. Each product is a testament to our dedication to
            quality, tradition, and the fine art of tea.
          </p>
          <Button variant="outline-dark" size="lg" asChild>
            <Link href="#teas">Shop Now</Link>
          </Button>
        </div>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9"
            alt="A featured tea product"
            data-ai-hint="luxury tea bottle"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section id="teas" className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground">
              Tea Varieties
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {teas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground">
              Lifestyle & Accessories
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {accessories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <Alert>
                    <ShoppingBagIcon className="h-4 w-4" />
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
