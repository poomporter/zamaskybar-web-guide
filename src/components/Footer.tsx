import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">ZAMĀ</h3>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed">
              Rise above the sea where light meets luxury. Experience Pattaya's premier rooftop destination on Level 38.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-accent transition-smooth">
                  About ZAMĀ
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-accent transition-smooth">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-accent transition-smooth">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* The Tulum Group */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">The Tulum Group</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Tulum Skybar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Veyla Bangkok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>© {currentYear} ZAMĀ Skybar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
