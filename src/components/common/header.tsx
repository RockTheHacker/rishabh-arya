"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      {NAV_LINKS.map((link) => (
        <Button key={link.href} variant="link" asChild className="text-foreground">
          <Link href={link.href}>{link.name}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-background/0"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-headline">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">{navItems}</nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <SheetHeader className="border-b pb-4">
                 <SheetTitle className="text-left text-xl font-bold font-headline">{SITE_CONFIG.name}</SheetTitle>
                 <SheetDescription className="sr-only">A list of navigation links to explore the portfolio of {SITE_CONFIG.name}.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col items-start gap-4 mt-8">
                  {NAV_LINKS.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link href={link.href} className="text-lg w-full text-left">
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
