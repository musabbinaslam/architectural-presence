import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern construction site with professional workers"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p 
            className="text-foreground/80 tracking-[0.3em] uppercase text-xs mb-6 font-medium opacity-0 animate-slide-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Professional Construction Since 2018
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-foreground overflow-hidden">
            <span 
              className="inline-block opacity-0 animate-slide-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Building with
            </span>
            <br />
            <span 
              className="text-primary inline-block opacity-0 animate-slide-up"
              style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              Precision
            </span>
          </h1>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl text-foreground/80 max-w-xl mb-10 leading-relaxed opacity-0 animate-blur-in"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            We deliver high-quality residential and commercial construction through 
            disciplined planning, skilled execution, and uncompromising standards.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group shimmer-button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View Projects</span>
            </Button>
            <Button 
              variant="minimal" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="link-underline">Our Services</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Corner Accent */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 border-r-2 border-b-2 border-primary/20 opacity-0 animate-scale-in"
        style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
      />

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">Scroll</span>
        <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-primary animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
