import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/common/fade-in-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PROJECTS_DATA } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

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
              A selection of projects that showcase my skills and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project) => {
              const image = getImage(project.imagePlaceholderId);
              return (
                <Card
                  key={project.id}
                  className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <CardHeader>
                    {image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg -mt-6 -mx-6">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <CardTitle className="pt-6 font-headline text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow"></CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
