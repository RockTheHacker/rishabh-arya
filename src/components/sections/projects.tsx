import Image from "next/image";
import { FadeInSection } from "@/components/common/fade-in-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PROJECTS_DATA } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, X } from "lucide-react";

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
              A selection of projects that showcase my skills and passion. Click on a card to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project) => {
              const image = getImage(project.imagePlaceholderId);
              return (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <Card
                      className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                    >
                      <CardHeader className="p-0">
                        {image && (
                          <div className="aspect-video overflow-hidden">
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
                         <div className="p-6">
                            <CardTitle className="font-headline text-xl">
                              {project.title}
                            </CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                         </div>
                      </CardHeader>
                      <CardContent className="flex-grow"></CardContent>
                      <CardFooter>
                         <p className="text-sm text-accent w-full text-center">Click to learn more</p>
                      </CardFooter>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-[90vh] flex flex-col p-0">
                     <DialogHeader className="p-6 pb-0">
                       <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
                       <DialogDescription>
                         Live preview of the project. You can scroll and interact with the site below.
                       </DialogDescription>
                     </DialogHeader>
                     <div className="flex-1 overflow-auto px-6 pb-6">
                       <iframe
                         src={project.link}
                         className="w-full h-full border rounded-lg"
                         title={project.title}
                       />
                     </div>
                      <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
