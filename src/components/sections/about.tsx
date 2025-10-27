import { FadeInSection } from "@/components/common/fade-in-section";
import { SITE_CONFIG } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-headline sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground">
              I am a passionate and experienced developer with a strong focus on
              building modern, scalable, and intelligent applications. With a
              background in both web and app development, I specialize in using
              cutting-edge technologies like Next.js, Firebase, and Genkit to
              bring ideas to life. My goal is to create meaningful digital
              experiences that solve real-world problems.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
