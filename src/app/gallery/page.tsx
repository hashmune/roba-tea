import Image from "next/image";
import { Camera } from "lucide-react";

const galleryImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'Lush tea fields in Sri Lanka', hint: 'tea plantation' },
  { src: 'https://placehold.co/600x800.png', alt: 'Close-up of freshly picked tea leaves', hint: 'tea leaves' },
  { src: 'https://placehold.co/800x600.png', alt: 'Tea leaves being withered', hint: 'tea factory' },
  { src: 'https://placehold.co/800x600.png', alt: 'Tea tasting session with various blends', hint: 'tea tasting' },
  { src: 'https://placehold.co/600x800.png', alt: 'A perfectly brewed cup of Ceylon tea', hint: 'tea cup' },
  { src: 'https://placehold.co/800x600.png', alt: 'Rolling hills of a tea estate at sunrise', hint: 'sri lanka' },
  { src: 'https://placehold.co/800x600.png', alt: 'Workers processing tea in a factory', hint: 'worker' },
  { src: 'https://placehold.co/600x800.png', alt: 'Beautifully packaged Roba Ceylon Tea tins', hint: 'tea packaging' },
  { src: 'https://placehold.co/800x600.png', alt: 'A traditional Sri Lankan tea ceremony setup', hint: 'tea ceremony' },
];

export default function GalleryPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Camera className="mx-auto h-12 w-12 text-accent mb-4"/>
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
