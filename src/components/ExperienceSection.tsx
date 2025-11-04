import { Sunset, Waves, Music } from "lucide-react";
import interiorImage from "@/assets/interior-lounge.jpg";
import nightlifeImage from "@/assets/nightlife-ambiance.jpg";
import cocktailsImage from "@/assets/cocktails-signature.jpg";

const experiences = [
  {
    icon: Sunset,
    title: "Sunset Lounge",
    description: "Watch the day transform into night from our exclusive vantage point. Golden hour takes on new meaning at 38 floors above the sea.",
    image: interiorImage,
  },
  {
    icon: Waves,
    title: "Signature Cocktails",
    description: "Crafted by master mixologists, each drink tells a story of the ocean, sun, and ancient rituals. A symphony of flavors in coral, gold, and teal.",
    image: cocktailsImage,
  },
  {
    icon: Music,
    title: "Live DJs & Rituals",
    description: "Immerse yourself in curated soundscapes. Our resident DJs blend deep house with organic rhythms, creating the perfect atmosphere for connection.",
    image: nightlifeImage,
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative bg-sand py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <span className="text-sm font-sans tracking-[0.3em] text-muted-foreground uppercase">
            The ZAMĀ Experience
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Above the Sea
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Elevate your senses through curated moments designed to transcend the ordinary
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card shadow-elegant transition-elegant hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="h-full w-full object-cover transition-elegant group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-sunrise shadow-soft">
                  <experience.icon className="h-6 w-6 text-foreground" />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {experience.title}
                </h3>

                <p className="font-sans text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-sunrise transform scale-x-0 transition-elegant group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
