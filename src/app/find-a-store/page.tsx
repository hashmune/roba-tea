import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const stores = [
  {
    name: "Colombo Flagship Store",
    address: "123 Galle Road, Colombo 3, Sri Lanka",
    phone: "+94 11 234 5678",
    hours: "Mon-Sat: 10am - 8pm, Sun: 11am - 6pm"
  },
  {
    name: "Kandy Heritage Center",
    address: "45 Temple Street, Kandy, Sri Lanka",
    phone: "+94 81 222 3333",
    hours: "Mon-Sun: 9am - 7pm"
  },
  {
    name: "Galle Fort Boutique",
    address: "78 Lighthouse Street, Galle Fort, Sri Lanka",
    phone: "+94 91 456 7890",
    hours: "Mon-Sun: 10am - 9pm"
  }
]

export default function FindAStorePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <i className="ri-map-pin-line mx-auto text-5xl leading-none text-accent mb-4"></i>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Find Our Tea</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Visit our stores and authorized retailers to experience Roba Ceylon Tea in person.</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-headline font-bold mb-4">Our Locations</h2>
            <div className="space-y-6">
              {stores.map(store => (
                <Card key={store.name} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline">{store.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-2 text-sm">
                    <p className="flex items-start gap-2"><i className="ri-map-pin-line text-base leading-none mt-1 text-accent flex-shrink-0"></i> <span>{store.address}</span></p>
                    <p className="flex items-center gap-2"><i className="ri-phone-line text-base leading-none text-accent"></i> {store.phone}</p>
                    <p className="flex items-center gap-2"><i className="ri-time-line text-base leading-none text-accent"></i> {store.hours}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative h-[400px] lg:h-full w-full rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1580287292203-c9185e478546?q=80&w=1200&auto=format&fit=crop"
                data-ai-hint="world map"
                alt="Map showing store locations"
                layout="fill"
                objectFit="cover"
                className="brightness-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
