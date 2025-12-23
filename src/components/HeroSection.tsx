import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architectural.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abstract architectural concrete forms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-foreground/60 tracking-[0.3em] uppercase text-xs mb-6 animate-fade-up">
            Property Development & Investment
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Building<br />
            <span className="text-primary">Foundations</span><br />
            That Last
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We create spaces where permanence meets purpose. 
            Thoughtfully developed properties for those who value substance over spectacle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              View Projects
            </Button>
            <Button variant="minimal" size="xl">
              Our Philosophy
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">Scroll</span>
        <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-primary animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
