import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teaVarieties } from "@/lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function TeaVarietiesPage() {
  return (
    <div className="animate-in fade-in duration-500">
       <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <i className="ri-leaf-line mx-auto text-5xl leading-none text-accent mb-4"></i>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Tea Varieties</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our collection of authentic Ceylon teas, each with its own unique character and story.</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {teaVarieties.map((tea) => (
            <Card key={tea.slug} className="bg-card border-border hover:border-accent/50 transition-colors duration-300 overflow-hidden group lg:grid lg:grid-cols-3 lg:items-center">
              <div className="relative h-64 lg:h-full w-full lg:col-span-1">
                <Image 
                  src={tea.imageUrl} 
                  alt={tea.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={tea.dataAiHint}
                />
              </div>
              <div className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">{tea.name}</CardTitle>
                  <CardDescription className="text-base">{tea.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Details</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{tea.longDescription}</p>
                            <p><strong>Origin:</strong> {tea.origin}</p>
                            <p><strong>Flavor Profile:</strong> {tea.flavorProfile}</p>
                            <p><strong>Brewing Method:</strong> {tea.brewingMethod}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
