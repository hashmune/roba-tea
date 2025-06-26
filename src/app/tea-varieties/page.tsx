
'use client';

import { teaCollections } from '@/lib/placeholder-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/shared/breadcrumb';

export default function TeaVarietiesPage() {
  
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // The offset is to account for the sticky header height
      const yOffset = -120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Tea Varieties' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Page Title & Introduction */}
        <div className="text-center max-w-3xl mx-auto py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-wider text-foreground">
            Premium Collections
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            At Roba Tea, we offer handpicked selections from our lush plantations, each crafted with legacy, precision, and nature’s finest offerings. From timeless classics to rare releases, our premium collections reflect our deep-rooted passion for tea.
          </p>
        </div>

        {/* Category Navigation Strip */}
        <div className="sticky top-[88px] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
            <div className="flex items-center justify-center flex-wrap gap-2">
                {teaCollections.map((collection) => (
                    <Button 
                        key={collection.id} 
                        variant="ghost" 
                        size="lg"
                        className="rounded-none hover:bg-transparent text-foreground hover:text-primary data-[active]:text-primary data-[active]:border-b-2 border-primary"
                        onClick={() => handleScroll(collection.id)}
                    >
                        {collection.title}
                    </Button>
                ))}
            </div>
        </div>
      </div>

      {/* Tea Categories Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {teaCollections.map((collection) => (
            <section key={collection.id} id={collection.id} className="scroll-mt-32">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold font-headline text-foreground">{collection.title}</h2>
                <p className="mt-2 text-muted-foreground">{collection.description}</p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {collection.products.map((product) => (
                  <div key={product.name} className="group">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        data-ai-hint={product.dataAiHint}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="pt-4">
                      <h3 className="font-sans text-sm text-foreground uppercase">{product.name}</h3>
                    </div>
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
