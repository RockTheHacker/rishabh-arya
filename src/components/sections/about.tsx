import { FadeInSection } from "@/components/common/fade-in-section";
import { SITE_CONFIG } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card/50 backdrop-blur-lg border-y">
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-headline sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground">
              Results-driven full stack developer and project manager with over four years’ experience architecting, building, and maintaining robust web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Expert at leading technical teams, designing scalable modules, delivering enterprise-grade projects, and translating business needs into high-performance digital solutions. Strong mentor and communicator, skilled in client-facing work, agile delivery, and end-to-end execution.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
