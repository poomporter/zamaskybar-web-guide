import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const menuItems = [
  {
    category: "Signature Cocktails",
    items: [
      {
        name: "Dawn Breaker",
        description: "Mezcal, passion fruit, chili, lime, golden sunrise foam",
        price: "฿480",
      },
      {
        name: "Ocean Ritual",
        description: "Gin, butterfly pea, elderflower, tonic, ocean mist",
        price: "฿450",
      },
      {
        name: "Tulum Sunset",
        description: "Tequila reposado, mango, hibiscus, coral salt rim",
        price: "฿460",
      },
    ],
  },
  {
    category: "Premium Spirits",
    items: [
      {
        name: "Rare Tequilas",
        description: "Curated selection from Mexico's finest distilleries",
        price: "฿400+",
      },
      {
        name: "Japanese Whisky",
        description: "Premium single malts and blends",
        price: "฿500+",
      },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="relative bg-background py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <span className="text-sm font-sans tracking-[0.3em] text-muted-foreground uppercase">
            Libations & Bites
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Crafted by the Horizon
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Each creation is inspired by the elements—earth, water, fire, and spirit
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {menuItems.map((category, catIndex) => (
            <div
              key={catIndex}
              className="animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="mb-6 font-serif text-3xl font-semibold text-foreground border-b-2 border-accent pb-2">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-serif text-xl font-medium text-foreground group-hover:text-secondary transition-smooth">
                          {item.name}
                        </h4>
                        <p className="mt-1 font-sans text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-sans text-lg font-semibold text-accent whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <Button
            size="lg"
            onClick={() => window.open('/menu.pdf', '_blank')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-elegant transition-elegant group"
          >
            View Full Menu
            <ExternalLink className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
