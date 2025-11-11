
'use client';

import { teaCollections } from '@/lib/roba-website-data';
import Image from 'next/image';
import { Breadcrumb } from '@/components/shared/breadcrumb';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';

export default function TeaVarietiesPage() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for the sticky header (88px) + 24px gap
      const yOffset = -112; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  // Handle hash fragments when navigating from other pages (e.g., footer links)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.slice(1); // Remove the '#' symbol
      if (hash) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Offset for the sticky header (88px) + 24px gap
            const yOffset = -112; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }
        }, 100);
      }
    };

    // Handle hash on initial load
    handleHashScroll();

    // Handle hash changes (e.g., browser back/forward)
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Tea Varieties' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="container px-4">
        {/* Page Title & Introduction */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start py-12 md:pt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-wider text-foreground">
            TEA VARIETIES
          </h1>
          <p className="text-lg text-muted-foreground">
            At Roba Tea, we offer handpicked selections from our lush plantations, each crafted with legacy, precision, and nature’s finest offerings. From timeless classics to rare releases, our premium collections reflect our deep-rooted passion for tea.
          </p>
        </div>
      </div>

      {/* Category Navigation Strip */}
      <div className="bg-secondary/10 py-4 border-y">
        <div className="container mx-auto px-4">
            <div className="flex items-start gap-x-8">
                {teaCollections.map((collection) => (
                    <button
                        key={collection.id}
                        onClick={() => handleScrollTo(collection.id)}
                        className="group flex-1 min-w-0"
                    >
                        <div className="w-full space-y-2">
                            <div className="relative aspect-[271/199] w-full overflow-hidden transition-colors duration-300">
                                <Image
                                    src={collection.navImage}
                                    alt={collection.title}
                                    data-ai-hint={collection.dataAiHintNav}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                                {collection.title}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Tea Categories Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {teaCollections.map((collection) => (
            <section key={collection.id} id={collection.id} className="scroll-mt-28">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-headline text-foreground">{collection.title}</h2>
                <p className="mt-2 text-muted-foreground">{collection.description}</p>
              </div>

              <div className="mt-12 flex gap-8">
                {collection.products.slice(0, 5).map((product) => (
                    <div key={product.name} className="flex gap-2 w-full">
                      <div className="group relative w-[400px] flex-shrink-0 overflow-hidden h-[50vh]">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          data-ai-hint={product.dataAiHint}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      {product.imageUrl2 && (
                        <div className="group relative flex-1 overflow-hidden h-[50vh]">
                          <Image
                            src={product.imageUrl2}
                            alt={product.name}
                            data-ai-hint={product.dataAiHint}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}
                    </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
