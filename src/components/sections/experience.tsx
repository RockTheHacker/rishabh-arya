import { FadeInSection } from "@/components/common/fade-in-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EXPERIENCE_DATA } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <FadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary font-headline sm:text-4xl">
              Work Experience
            </h2>
            <p className="mt-4 text-lg leading-8 text-foreground">
              My professional journey and key accomplishments.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
            {EXPERIENCE_DATA.map((item, index) => (
              <div
                key={index}
                className="relative mb-12 flex items-center w-full"
              >
                <div className="hidden sm:block absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full -translate-y-1/2 -translate-x-1/2 z-10 border-4 border-background"></div>
                <div className="block sm:hidden absolute top-4 left-4 w-4 h-4 bg-primary rounded-full -translate-y-1/2 -translate-x-1/2 z-10 border-4 border-background"></div>
                
                <div
                  className={
                    "w-full sm:w-1/2 " +
                    (index % 2 === 0
                      ? "sm:pr-8"
                      : "sm:pl-8 sm:ml-auto")
                  }
                >
                    <div 
                      className={
                        "ml-12 sm:ml-0 p-0 " +
                        (index % 2 === 0
                          ? "sm:text-right"
                          : "sm:text-left")
                      }>
                       <p className="font-semibold text-accent">{item.date}</p>
                    </div>

                    <Card
                      className={`ml-12 sm:ml-0 shadow-lg mt-2 bg-card/50 backdrop-blur-lg`}
                    >
                      <CardHeader>
                        <CardTitle className="font-headline text-xl">
                          {item.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
