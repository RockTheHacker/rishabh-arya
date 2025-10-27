
import Image from "next/image";
import { FadeInSection } from "@/components/common/fade-in-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS_DATA } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

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
              const image = getImage(project.imagePlaceholderId);
              return (
                <Card
                  key={project.id}
                  className="group flex flex-col overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
                >
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 w-full h-full transition-opacity duration-500 group-hover:opacity-0">
                      {image && (
                          <Image
                            src={image.imageUrl}
                            alt={project.title}
                            width={1280}
                            height={960}
                            className="object-cover w-full h-full"
                            data-ai-hint={image.imageHint}
                          />
                      )}
                    </div>
                    <div className={cn(
                      "absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-background"
                    )}>
                       <div className="w-[1280px] h-[960px] origin-top-left scale-[0.27] sm:scale-[0.4] md:scale-[0.3] lg:scale-[0.4] xl:scale-[0.5]">
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
