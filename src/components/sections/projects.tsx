"use client";

import { FadeInSection } from "@/components/common/fade-in-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-headline sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg leading-8 text-foreground">
              A selection of projects that showcase my skills and passion. Hover and scroll over a card to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project) => {
              return (
                <Card
                  key={project.id}
                  className="group flex flex-col overflow-hidden transform transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-lg"
                >
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 relative aspect-video overflow-hidden">
                    <div className={cn(
                      "absolute inset-0 w-full h-full bg-background"
                    )}>
                       <div className="w-[1280px] h-[720px] origin-top-left scale-[0.27] sm:scale-[0.4] md:scale-[0.3] lg:scale-[0.4] xl:scale-50 pointer-events-none group-hover:pointer-events-auto">
                        <iframe
                          src={project.link}
                          className="w-full h-full border-none"
                          title={project.title}
                          scrolling="yes"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
