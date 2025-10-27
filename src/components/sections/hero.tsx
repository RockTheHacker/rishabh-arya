import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "@/components/common/fade-in-section";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import FloatingIcons from "@/components/common/floating-icons";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] py-20 lg:min-h-screen lg:py-32"
    >
      <FloatingIcons />
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/[0.05]"></div>
      <FadeInSection className="z-10 text-center px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <Image
              src="/pp.png"
              alt={SITE_CONFIG.name}
              width={160}
              height={160}
              className="rounded-full border-4 border-primary shadow-lg object-cover w-32 h-32 md:w-40 md:h-40"
              priority
            />
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight font-headline sm:text-6xl md:text-7xl">
              Hi, I'm <span className="text-primary">{SITE_CONFIG.name}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
              A Full Stack MERN Developer & Project Manager building modern, scalable, and
              intelligent digital experiences.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
            <Link href="#contact">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button size="lg" variant="outline" asChild>
            <Link href="/resume.pdf" target="_blank" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
      </FadeInSection>
    </section>
  );
}
