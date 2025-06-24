import Link from "next/link";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-accent" />
              <span className="font-bold font-headline text-lg">Roba Ceylon Tea</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Honoring the rich heritage of Ceylon tea from the lush mountains of Sri Lanka.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <NewsletterForm />
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Roba Ceylon Tea. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
