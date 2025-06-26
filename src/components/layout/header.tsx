
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tea-varieties", label: "Tea Varieties" },
  { href: "/our-story", label: "Our Story" },
  { href: "/store", label: "Store" },
  { href: "/gallery", label: "Gallery" },
];

export function Header() {
  const pathname = usePathname();
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-h-[88px]">
      <div className="container flex items-center justify-between py-2">
        {/* Left Side: Menu */}
        <div className="flex items-center justify-start">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:bg-transparent text-foreground hover:text-secondary">
                  <i className="ri-menu-4-line text-2xl leading-none"></i>
                  <span>Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-none p-0 sm:max-w-none">
              <div className="grid h-full md:grid-cols-2">
                <div className="col-span-2 flex flex-col bg-background md:col-span-1">
                    <div className="px-8 sm:px-12 py-8 sm:py-12">
                      <SheetClose asChild>
                          <Link href="/" passHref>
                              <Logo className="text-primary max-h-[40px]" />
                          </Link>
                      </SheetClose>
                    </div>
                    <nav className="flex mt-16 flex-grow flex-col space-y-8 px-8 sm:px-12">
                    {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={cn(
                              "font-medium transition-colors hover:text-accent text-4xl font-light tracking-wide",
                              pathname === link.href ? "text-accent font-semibold" : "text-foreground/80"
                            )}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                    ))}
                    </nav>
                    <div className="mt-12 text-xs text-muted-foreground space-y-4 px-8 sm:px-12">
                        <div className="flex items-center space-x-4">
                            <Link href="#" className="text-foreground hover:text-secondary">
                                <i className="ri-facebook-box-line text-lg"></i>
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary">
                                <i className="ri-instagram-line text-lg"></i>
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary">
                                <i className="ri-youtube-line text-lg"></i>
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary">
                                <i className="ri-linkedin-fill text-lg"></i>
                            </Link>
                        </div>
                        <p>&copy; {year} Roba Ceylon Tea</p>
                    </div>
                </div>
                <div className="relative hidden h-full bg-muted md:block">
                  <Image
                    src="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9"
                    data-ai-hint="tea ceremony"
                    alt="A serene tea ceremony setting"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo */}
        <div>
            <Link href="/" className="flex flex-col items-center" passHref>
                <Logo className="text-primary" />
            </Link>
        </div>
        
        {/* Right Side: Empty for balance */}
        <div className="flex items-center justify-end"></div>
      </div>
    </header>
  );
}
