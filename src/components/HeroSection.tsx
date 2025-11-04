import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-sunrise.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <div className="mb-2 text-sunrise-gold animate-glow">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
              <path
                d="M20 8 L26 20 L20 32 L14 20 Z"
                fill="currentColor"
                opacity="0.8"
              />
            </svg>
          </div>
          <h1 className="font-serif text-6xl font-bold tracking-wider text-dawn md:text-8xl">
            ZAMĀ
          </h1>
          <p className="mt-2 font-sans text-sm tracking-[0.3em] text-dawn/90 md:text-base">
            SKYBAR
          </p>
        </div>

        {/* Headline */}
        <div className="max-w-3xl space-y-4 animate-fade-in">
          <h2 className="font-serif text-3xl font-semibold text-dawn md:text-5xl">
            Pattaya's Highest Seaside Rooftop
          </h2>
          <p className="font-sans text-lg text-dawn/90 md:text-xl">
            Rise above the sea, where light meets luxury
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row animate-fade-in">
          <Button
            size="lg"
            onClick={() => scrollToSection("reservation")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg shadow-elegant transition-elegant"
          >
            Reserve Your Table
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("menu")}
            className="border-2 border-dawn bg-dawn/10 backdrop-blur-sm text-dawn hover:bg-dawn hover:text-foreground font-semibold px-8 py-6 text-lg transition-elegant"
          >
            Explore Menu
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-8 w-8 text-dawn/70" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
