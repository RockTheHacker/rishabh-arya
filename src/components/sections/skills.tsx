import { FadeInSection } from "@/components/common/fade-in-section";
import { Badge } from "@/components/ui/badge";
import { SKILLS_DATA } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-headline sm:text-4xl">
              My Skillset
            </h2>
            <p className="mt-4 text-lg leading-8 text-foreground">
              Technologies and abilities I use to build great products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left font-headline">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {SKILLS_DATA.technical.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="py-2 px-4 text-base transform transition-transform duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-110"
                  >
                    {skill.icon && (
                      <skill.icon className="mr-2 h-5 w-5" />
                    )}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left font-headline">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {SKILLS_DATA.soft.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="py-2 px-4 text-base"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
