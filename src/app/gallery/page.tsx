
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Breadcrumb } from '@/components/shared/breadcrumb';
import { Button } from '@/components/ui/button';
import { galleryAlbums, galleryCategories } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type GalleryAlbum = (typeof galleryAlbums)[0];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All Stories');
  const [selectedAlbum, setSelectedAlbum] = useState<GalleryAlbum | null>(null);
  const [itemsToShow, setItemsToShow] = useState(6);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
  ];

  const filteredAlbums = useMemo(() => {
    if (activeFilter === 'All Stories') {
      return galleryAlbums;
    }
    return galleryAlbums.filter((album) => album.category === activeFilter);
  }, [activeFilter]);

  const handleAlbumClick = (album: GalleryAlbum) => {
    setSelectedAlbum(album);
  };

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <section className="container mx-auto px-4 py-12 text-center">
        <p className="font-bold uppercase tracking-widest text-muted-foreground">
          Explore
        </p>
        <h1 className="mt-2 font-headline text-4xl font-bold uppercase text-foreground md:text-5xl">
          Galleries
        </h1>
        <div className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          <p>
            Learn more about the partnerships, processes and people that form and shape Roba Ceylon Tea.
          </p>
          <p className="mt-4">
            Discover more about our sustainability commitments, collaborations with like-minded individuals, and the stories behind our new releases and collections.
          </p>
        </div>
      </section>

      <section className="border-y bg-background/95 py-4 backdrop-blur">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-2 px-4">
          {galleryCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'filled' : 'outline-dark'}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredAlbums.slice(0, itemsToShow).map((album) => (
            <div
              key={album.id}
              className="group cursor-pointer"
              onClick={() => handleAlbumClick(album)}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  data-ai-hint={album.dataAiHintCover}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="pt-4 text-left">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {new Date(album.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()} - {album.category.toUpperCase()}
                </p>
                <h2 className="mt-1 font-headline text-xl font-bold uppercase text-foreground">
                  {album.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {album.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {itemsToShow < filteredAlbums.length && (
          <div className="mt-16 text-center">
            <Button variant="outline-dark" size="lg" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </section>

      <Dialog open={!!selectedAlbum} onOpenChange={(isOpen) => !isOpen && setSelectedAlbum(null)}>
        <DialogContent className="h-[90vh] max-w-[90vw] p-4 bg-background/80 backdrop-blur-lg border-0">
          {selectedAlbum && (
             <Carousel className="h-full w-full">
              <CarouselContent className="h-full">
                {selectedAlbum.images.map((image, index) => (
                  <CarouselItem key={index} className="relative h-full">
                    <Image
                      src={image.url}
                      alt={`${selectedAlbum.title} - Image ${index + 1}`}
                      data-ai-hint={image.dataAiHint}
                      fill
                      className="object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-4 right-4 z-10">
                <div className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm p-1">
                  <CarouselPrevious variant="ghost" size="icon" className="static translate-y-0 h-8 w-8 border-none" />
                  <CarouselNext variant="ghost" size="icon" className="static translate-y-0 h-8 w-8 border-none" />
                </div>
              </div>
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
