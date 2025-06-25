'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NewsletterForm } from "../shared/newsletter-form";

const collectionsLinks = [
  { href: "/store", label: "All Teas" },
  { href: "/tea-varieties", label: "Tea Varieties" },
  { href: "/store", label: "Accessories" },
];

const aboutLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/find-a-store", label: "Find a Store" },
];

const supportLinks = [
  { href: "#", label: "Contact Us" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Shipping & Returns" },
];


export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
          
          <div className="lg:col-span-3">
            <NewsletterForm />
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="md:col-start-2">
              <h3 className="font-semibold mb-4 text-primary-foreground">Collections</h3>
              <ul className="space-y-3">
                {collectionsLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">About</h3>
              <ul className="space-y-3">
                {aboutLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-4 order-2 md:order-1 mt-4 md:mt-0">
             <Link href="/">
              <Logo className="text-primary-foreground max-h-[30px]" />
            </Link>
            <p>&copy; {year} Roba Ceylon Tea. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4 order-1 md:order-2">
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
              <i className="ri-facebook-fill text-xl"></i>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
              <i className="ri-instagram-line text-xl"></i>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
              <i className="ri-youtube-fill text-xl"></i>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground">
              <i className="ri-linkedin-fill text-xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
