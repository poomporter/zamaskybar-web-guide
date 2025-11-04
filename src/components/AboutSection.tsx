const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen bg-background py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-sans tracking-[0.3em] text-muted-foreground uppercase">
                The Story of ZAMĀ
              </span>
              <div className="mt-2 h-px w-20 bg-gradient-sunrise" />
            </div>

            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              A Sanctuary of Light, Sea & Sound
            </h2>

            <div className="space-y-4 font-sans text-lg text-muted-foreground leading-relaxed">
              <p>
                Inspired by the ancient Mayan word for <span className="text-sunrise-gold font-medium">"dawn"</span>, 
                ZAMĀ is more than a rooftop bar—it's a sanctuary where each evening feels like a new sunrise above the horizon.
              </p>
              <p>
                Perched on Level 38, we blend Tulum's mystical essence with Pattaya's vibrant energy, 
                creating an ethereal space where natural textures meet modern luxury.
              </p>
              <p>
                Here, every element—from hand-selected stone and linen to the warm glow of golden hour—
                is carefully curated to transport you to a realm above the sea.
              </p>
            </div>

            <div className="pt-6 flex gap-8">
              <div>
                <div className="text-3xl font-serif font-bold text-secondary">38</div>
                <div className="text-sm text-muted-foreground">Floor Level</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-primary">360°</div>
                <div className="text-sm text-muted-foreground">Ocean Views</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-accent">∞</div>
                <div className="text-sm text-muted-foreground">Unforgettable</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200"
                alt="Tulum inspired design elements"
                className="h-full w-full object-cover transition-elegant hover:scale-105"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-sunrise opacity-20 blur-3xl" />
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-gradient-ocean opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
