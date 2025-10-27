import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-headline font-semibold">{SITE_CONFIG.name}</p>
            <Link href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {SITE_CONFIG.contact.email}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
