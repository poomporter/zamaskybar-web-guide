import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import bgImage from "@/assets/coming-soon-bg.jpg";

const ComingSoonSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "กรุณากรอกอีเมล",
        description: "โปรดระบุอีเมลของคุณเพื่อรับสิทธิพิเศษ",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Replace with your Mailchimp form action URL
    // Format: https://XXXX.list-manage.com/subscribe/post?u=XXXX&id=XXXX
    const MAILCHIMP_URL = "YOUR_MAILCHIMP_FORM_ACTION_URL";
    
    try {
      // Create form data
      const formData = new FormData();
      formData.append("EMAIL", email);

      // Submit to Mailchimp
      const response = await fetch(MAILCHIMP_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Mailchimp doesn't support CORS
      });

      // Since we're using no-cors, we can't check the actual response
      // but the request will go through
      toast({
        title: "ลงทะเบียนสำเร็จ! 🎉",
        description: "คุณจะได้รับสิทธิพิเศษก่อนใครเมื่อเราเปิดตัว",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error submitting to Mailchimp:", error);
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "โปรดลองอีกครั้งในภายหลัง",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="ZAMĀ Skybar Sunset View"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-serif text-primary mb-2">
            ZAMĀ
          </h1>
          <p className="text-xl md:text-2xl text-accent tracking-[0.3em] uppercase">
            Skybar
          </p>
        </div>

        {/* Coming Soon */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Rise above the sea, where light meets luxury.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Pattaya's Highest Seaside Rooftop Experience
          </p>
        </div>

        {/* Email Form */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-foreground mb-6">
            ลงทะเบียนเพื่อรับสิทธิพิเศษก่อนใคร
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="อีเมลของคุณ"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              {isLoading ? "กำลังส่ง..." : "ลงทะเบียน"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            เราจะไม่แชร์อีเมลของคุณกับผู้อื่น
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-sm text-muted-foreground mb-4">ติดตามเราได้ที่</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/zamaskybar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/zamaskybar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              LINE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
