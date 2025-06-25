'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const collectionsLinks = [
  { href: "/store", label: "Timeless Collections" },
  { href: "/store", label: "Travel Exclusive" },
  { href: "/store", label: "Limited Releases" },
  { href: "/store", label: "Lifestyle & Accessories" },
  { href: "/store", label: "Archive" },
];

const aboutLinks = [
  { href: "/our-story", label: "About Roba Tea" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Contact Us" },
  { href: "#", label: "Newsroom" },
  { href: "#", label: "Sustainability" },
];

const supportLinks = [
  { href: "#", label: "Delivery Information" },
  { href: "#", label: "Frequently Asked Questions" },
  { href: "#", label: "Manage Cookie Preferences" },
  { href: "#", label: "My Account" },
  { href: "#", label: "Returns Information" },
];


export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background text-foreground border-t border-border/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo and Socials */}
          <div className="flex flex-col space-y-8">
            <Link href="/">
              <Logo className="text-primary max-h-[40px]" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-foreground hover:text-secondary">
                <i className="ri-facebook-fill text-xl"></i>
              </Link>
              <Link href="#" className="text-foreground hover:text-secondary">
                <i className="ri-instagram-line text-xl"></i>
              </Link>
              <Link href="#" className="text-foreground hover:text-secondary">
                <i className="ri-youtube-fill text-xl"></i>
              </Link>
              <Link href="#" className="text-foreground hover:text-secondary">
                <i className="ri-linkedin-fill text-xl"></i>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold uppercase tracking-wider mb-4 text-sm">Collections</h3>
              <ul className="space-y-3">
                {collectionsLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-wider mb-4 text-sm">About</h3>
              <ul className="space-y-3">
                {aboutLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-wider mb-4 text-sm">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p className="uppercase tracking-wider">A Tea Adventure Awaits</p>
          <p className="mt-4 sm:mt-0 uppercase tracking-wider">&copy; {year} ROBA TEA</p>
        </div>
      </div>
    </footer>
  );
}