"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tea-varieties", label: "Tea Varieties" },
  { href: "/our-story", label: "Our Story" },
  { href: "/store", label: "Store" },
  { href: "/gallery", label: "Gallery" },
  { href: "/find-a-store", label: "Find a Store" },
];

export function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => (
    <Link href={href} passHref>
      <span
        className={cn(
          "font-medium transition-colors hover:text-accent",
          pathname === href ? "text-accent font-bold" : "text-foreground/80",
          className
        )}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
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
                <div className="col-span-2 flex flex-col bg-background p-8 sm:p-12 md:col-span-1">
                    <div className="mb-16">
                        <SheetClose asChild>
                            <Link href="/" passHref>
                                <Logo className="text-primary max-h-[40px]" />
                            </Link>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-grow flex-col space-y-8">
                    {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                            <NavLink {...link} className="text-4xl font-light tracking-wide"/>
                        </SheetClose>
                    ))}
                    </nav>
                    <div className="mt-12 text-xs text-muted-foreground space-y-4">
                        <div className="flex items-center space-x-4">
                            <Link href="#" className="text-foreground hover:text-secondary">
                                <i className="ri-facebook-fill text-lg"></i>
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary">
                                <i className="ri-instagram-line text-lg"></i>
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary">
                                <i className="ri-youtube-fill text-lg"></i>
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary">
                                <i className="ri-linkedin-fill text-lg"></i>
                            </Link>
                        </div>
                        <p>&copy; {new Date().getFullYear()} Roba Ceylon Tea</p>
                    </div>
                </div>
                <div className="relative hidden h-full bg-muted md:block">
                  <Image
                    src="https://placehold.co/800x1200.png"
                    data-ai-hint="tea ceremony"
                    alt="A serene tea ceremony setting"
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex flex-col items-center" passHref>
                <Logo className="text-primary max-h-[40px]" />
            </Link>
        </div>
        
        {/* Right Side: Empty for balance */}
        <div className="flex items-center justify-end">
        </div>

      </div>
    </header>
  );
}
