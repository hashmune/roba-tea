import Image from "next/image";

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop', alt: 'Lush tea fields in Sri Lanka', hint: 'tea plantation' },
  { src: 'https://images.unsplash.com/photo-1597318181409-cf7e2f18d27a?q=80&w=600&auto=format&fit=crop', alt: 'Close-up of freshly picked tea leaves', hint: 'tea leaves' },
  { src: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d54?q=80&w=800&auto=format&fit=crop', alt: 'Tea leaves being withered', hint: 'tea factory' },
  { src: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=800&auto=format&fit=crop', alt: 'Tea tasting session with various blends', hint: 'tea tasting' },
  { src: 'https://images.unsplash.com/photo-1576092762791-d07a271f3228?q=80&w=600&auto=format&fit=crop', alt: 'A perfectly brewed cup of Ceylon tea', hint: 'tea cup' },
  { src: 'https://images.unsplash.com/photo-1523485804343-5d58b8f2c328?q=80&w=800&auto=format&fit=crop', alt: 'Rolling hills of a tea estate at sunrise', hint: 'sri lanka' },
  { src: 'https://images.unsplash.com/photo-1528239074395-c9a721d0115b?q=80&w=800&auto=format&fit=crop', alt: 'Workers processing tea in a factory', hint: 'worker' },
  { src: 'https://images.unsplash.com/photo-1594212699903-861dc5891364?q=80&w=600&auto=format&fit=crop', alt: 'Beautifully packaged Roba Ceylon Tea tins', hint: 'tea packaging' },
  { src: 'https://images.unsplash.com/photo-1621282643881-88481498b671?q=80&w=800&auto=format&fit=crop', alt: 'A traditional Sri Lankan tea ceremony setup', hint: 'tea ceremony' },
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
