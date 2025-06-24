import { Leaf } from "lucide-react";
import Image from "next/image";

export default function OurStoryPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1600x900.png"
          data-ai-hint="tea pickers"
          alt="Tea pickers working on a plantation"
          layout="fill"
          objectFit="cover"
          className="z-0 brightness-50"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
            Our Heritage, Your Tea
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            A tradition of excellence, from our family to yours.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="prose prose-invert prose-lg mx-auto text-foreground/90 prose-headings:font-headline prose-headings:text-accent prose-a:text-accent">
          <p className="lead text-xl">
            Roba Ceylon Tea was born from a deep-rooted passion for the art of tea. Our story begins in the misty highlands of Sri Lanka, where generations of our family have cultivated some of the world's finest tea leaves. We believe that a perfect cup of tea is more than just a beverage; it's an experience, a ritual, a moment of tranquility.
          </p>
          
          <div className="relative w-full h-96 my-12 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/1200x800.png"
              data-ai-hint="sri lanka landscape"
              alt="Lush green landscape of Sri Lanka's tea country"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <h2>Commitment to Quality</h2>
          <p>
            Our commitment to quality starts with the leaf. We selectively hand-pick only the tenderest two leaves and a bud, ensuring the richest flavor and aroma. Our master tea blenders then meticulously process the leaves using time-honored techniques, preserving the natural character of each variety. This dedication to craftsmanship is what sets Roba Ceylon Tea apart.
          </p>

          <h2>Ethical and Sustainable Practices</h2>
          <p>
            We are stewards of the land and the community. Our estates follow sustainable farming practices that enrich the soil and protect biodiversity. We are also committed to the well-being of our workers, providing fair wages, healthcare, and education to their families. When you choose Roba Ceylon Tea, you are not just buying a premium product; you are supporting a community and a sustainable future.
          </p>
          <div className="flex justify-center my-8">
            <Leaf className="w-12 h-12 text-accent" />
          </div>
          <p>
            We invite you to explore our collection and discover the authentic taste of Ceylon. Each cup tells a story of our heritage, our passion, and our unwavering commitment to bringing you the very best tea.
          </p>
        </div>
      </div>
    </div>
  );
}
