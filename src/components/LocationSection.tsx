import { MapPin, Clock, Phone, Mail } from "lucide-react";
const LocationSection = () => {
  return <section className="relative bg-background py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-sm font-sans tracking-[0.3em] text-muted-foreground uppercase">
                Visit Us
              </span>
              <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
                Find ZAMĀ
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Location</h3>
                  <p className="mt-1 text-muted-foreground">Level 38, D Varee Jomtien Beach Pattaya Hotel,Pattaya City
Chonburi, Thailand<br />
                    Beach Road, Pattaya City<br />
                    Chonburi, Thailand
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Hours</h3>
                  <p className="mt-1 text-muted-foreground">Everydays
10:00 AM – 4:00 AM
                  <br />
                    5:00 PM – 2:00 AM<br />
                    <span className="text-sm italic">Closed Mondays</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Contact</h3>
                  <a href="tel:+66XXXXXXXXX" className="mt-1 text-muted-foreground hover:text-accent transition-smooth block">
                    +66 XX XXX XXXX
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@zama.asia" className="mt-1 text-muted-foreground hover:text-accent transition-smooth block">rsvp@zama.asia</a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <div className="aspect-square overflow-hidden rounded-lg shadow-elegant lg:aspect-[4/5]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248057.80073473647!2d100.71571875!3d12.9235557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102f6a9db8b5451%3A0x4fa9c3c38d6d5c1b!2sPattaya%2C%20Bang%20Lamung%20District%2C%20Chon%20Buri%2C%20Thailand!5e0!3m2!1sen!2s!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="ZAMĀ Skybar Location" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationSection;