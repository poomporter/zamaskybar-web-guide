import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageCircle } from "lucide-react";

const ReservationSection = () => {
  const handleReservation = () => {
    // In production, this would link to actual booking system (SevenRooms, LINE, WhatsApp)
    window.open("https://wa.me/66XXXXXXXXX?text=I'd like to make a reservation at ZAMĀ Skybar", "_blank");
  };

  return (
    <section id="reservation" className="relative py-24 px-4 bg-gradient-to-b from-sand to-dawn">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center animate-fade-in">
          {/* Header */}
          <span className="text-sm font-sans tracking-[0.3em] text-muted-foreground uppercase">
            Join Us
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Book Your Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your place above the sea. Limited tables available for sunset viewing.
          </p>

          {/* Features */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold">Select Date</h3>
              <p className="text-sm text-muted-foreground">Choose your perfect evening</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-serif text-lg font-semibold">Party Size</h3>
              <p className="text-sm text-muted-foreground">From intimate to celebration</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <MessageCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold">Instant Confirm</h3>
              <p className="text-sm text-muted-foreground">Quick WhatsApp response</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Button
              size="lg"
              onClick={handleReservation}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-12 py-6 text-lg shadow-elegant transition-elegant"
            >
              Reserve Now via WhatsApp
            </Button>
          </div>

          {/* Info */}
          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
            <p>Walk-ins welcome subject to availability</p>
            <p>Dress code: Smart casual</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
