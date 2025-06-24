import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/placeholder-data";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StorePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="mx-auto h-12 w-12 text-accent mb-4"/>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Online Store</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bring home the exquisite taste of Ceylon with our curated collection of teas and accessories.</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-card border-border hover:border-accent/50 transition-colors duration-300 overflow-hidden group flex flex-col">
              <div className="relative h-72 w-full">
                <Image 
                  src={product.imageUrl} 
                  alt={product.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={product.dataAiHint}
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                <CardDescription className="text-sm pt-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-accent mb-4">{product.price}</p>
                <Button className="w-full bg-primary hover:bg-primary/80">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
