'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const collectionsLinks = [
  { href: "/store", label: "Timeless Collections" },
  { href: "/store", label: "Travel Exclusive" },
  { href: "/store", label: "Limited Releases" },
  { href: "/store", label: "Lifestyle & Accessories" },
  { href: "#", label: "Archive" },
];

const aboutLinks = [
  { href: "/our-story", label: "About Roba Ceylon Tea" },
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
  { href: "#",label: "Returns Information" },
];


export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const FooterLinkColumn = ({ title, links }: { title: string, links: { href: string, label: string }[] }) => (
    <div>
      <h3 className="font-semibold uppercase tracking-wider mb-6 text-sm text-foreground/80">{title}</h3>
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">
          
          <div className="md:col-span-1 lg:col-span-2 space-y-6">
            <Link href="/">
              <Logo className="text-primary h-[30px]" />
            </Link>
            <div className="flex items-center space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <i className="ri-facebook-box-line text-xl"></i>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <i className="ri-instagram-line text-xl"></i>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <i className="ri-youtube-fill text-xl"></i>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <i className="ri-linkedin-fill text-xl"></i>
                </Link>
              </div>
          </div>

          <div className="md:col-span-1">
             <FooterLinkColumn title="Collections" links={collectionsLinks} />
          </div>
          <div className="md:col-span-1">
             <FooterLinkColumn title="About" links={aboutLinks} />
          </div>
          <div className="md:col-span-1">
             <FooterLinkColumn title="Support" links={supportLinks} />
          </div>

        </div>
      </div>
      
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-wider">
            <p>A Tea Adventure Awaits</p>
            <p className="mt-4 md:mt-0">&copy; {year} Roba Tea</p>
        </div>
      </div>
    </footer>
  );
}
