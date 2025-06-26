
'use client';

import { teaCollections } from '@/lib/placeholder-data';
import Image from 'next/image';
import { Breadcrumb } from '@/components/shared/breadcrumb';

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

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Tea Varieties' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Category Navigation Strip */}
      <div className="bg-secondary/10 py-4 border-y">
        <div className="container mx-auto px-4">
            <div className="flex items-start justify-start md:justify-center gap-x-8 overflow-x-auto">
                {teaCollections.map((collection) => (
                    <button
                        key={collection.id}
                        onClick={() => handleScrollTo(collection.id)}
                        className="group flex-shrink-0"
                    >
                        <div className="w-48 space-y-2">
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

      <div className="container mx-auto px-4">
        {/* Page Title & Introduction */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start max-w-6xl pt-12 md:pt-16">
          <h1 className="md:col-span-1 text-4xl md:text-5xl font-bold font-headline uppercase tracking-wider text-foreground">
            Premium Collections
          </h1>
          <p className="md:col-span-2 text-lg text-muted-foreground">
            At Roba Tea, we offer handpicked selections from our lush plantations, each crafted with legacy, precision, and nature’s finest offerings. From timeless classics to rare releases, our premium collections reflect our deep-rooted passion for tea.
          </p>
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
