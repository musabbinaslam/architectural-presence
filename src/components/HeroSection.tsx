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
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 hidden lg:block" />
      <div className="absolute bottom-32 right-40 w-16 h-16 bg-primary/10 hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-px h-32 bg-primary/30 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <div className="w-12 h-px bg-primary" />
            <p className="text-foreground/60 tracking-[0.3em] uppercase text-xs">
              Property Development & Investment
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.9] mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Building<br />
            <span className="text-primary italic">Foundations</span><br />
            That Last
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-xl mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
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

          {/* Quick Stats */}
          <div className="flex gap-12 mt-16 pt-8 border-t border-border/30 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl text-primary">15+</p>
              <p className="text-xs tracking-[0.15em] uppercase text-foreground/50 mt-1">Years</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-primary">120+</p>
              <p className="text-xs tracking-[0.15em] uppercase text-foreground/50 mt-1">Projects</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-primary">£450M</p>
              <p className="text-xs tracking-[0.15em] uppercase text-foreground/50 mt-1">Portfolio</p>
            </div>
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

      {/* Side Label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-foreground/20" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Est. 2009
        </span>
        <div className="w-px h-16 bg-foreground/20" />
      </div>
    </section>
  );
};

export default HeroSection;
