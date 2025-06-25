"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
          "text-sm font-medium transition-colors hover:text-accent",
          pathname === href ? "text-accent font-bold" : "text-foreground/80",
          className
        )}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        {/* Left Side: Menu */}
        <div className="flex items-center justify-start">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:bg-transparent text-foreground">
                  <i className="ri-menu-line text-2xl leading-none"></i>
                  <span className="text-sm font-medium uppercase tracking-wider">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background">
              <div className="p-6">
                <Link href="/" className="flex flex-col items-start mb-10" passHref>
                    <span className="font-headline text-4xl font-bold text-primary tracking-tighter">ROBA</span>
                    <span className="text-[0.5rem] text-muted-foreground tracking-[0.2em] mt-1">A TEA ADVENTURE AWAITS</span>
                </Link>
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <NavLink {...link} className="text-2xl"/>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex flex-col items-center" passHref>
                <span className="font-headline text-5xl font-bold text-primary tracking-tighter">ROBA</span>
                <span className="text-[0.6rem] text-muted-foreground tracking-[0.2em] mt-1">A TEA ADVENTURE AWAITS</span>
            </Link>
        </div>
        
        {/* Right Side: Empty for balance */}
        <div className="flex items-center justify-end">
        </div>

      </div>
    </header>
  );
}
