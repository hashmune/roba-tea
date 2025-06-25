
import Image from "next/image";

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'Lush tea fields in Sri Lanka', hint: 'tea plantation' },
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'Close-up of freshly picked tea leaves', hint: 'tea leaves' },
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'Tea leaves being withered', hint: 'tea factory' },
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'Tea tasting session with various blends', hint: 'tea tasting' },
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'A perfectly brewed cup of Ceylon tea', hint: 'tea cup' },
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'Rolling hills of a tea estate at sunrise', hint: 'sri lanka' },
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'Workers processing tea in a factory', hint: 'worker' },
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'Beautifully packaged Roba Ceylon Tea tins', hint: 'tea packaging' },
  { src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9', alt: 'A traditional Sri Lankan tea ceremony setup', hint: 'tea ceremony' },
];

export default function GalleryPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <i className="ri-camera-line mx-auto text-5xl leading-none text-accent mb-4"></i>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Visual Storytelling</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A glimpse into the journey of our tea, from the vibrant estates of Ceylon to your cup.</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg break-inside-avoid group">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
