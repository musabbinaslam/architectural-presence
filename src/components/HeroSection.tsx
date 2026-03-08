import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern construction site with professional workers"
          className="w-full h-full object-cover scale-110"
        />
        {/* Dramatic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated vertical line */}
      <div className="absolute left-12 lg:left-20 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-3 mb-8 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <div className="w-12 h-px bg-primary" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-primary font-medium">
                Trusted Since 2018
              </span>
            </div>

            {/* Main Headline with staggered reveal */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-8 text-foreground">
              <span
                className="block opacity-0 animate-slide-up"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                We Build
              </span>
              <span
                className="block text-primary opacity-0 animate-slide-up"
                style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
              >
                Dreams Into
              </span>
              <span
                className="block opacity-0 animate-slide-up"
                style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
              >
                Reality
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-lg md:text-xl text-foreground/60 max-w-lg mb-12 leading-relaxed opacity-0 animate-blur-in"
              style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
            >
              Premium residential and commercial construction with uncompromising 
              quality standards and meticulous attention to detail.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <Button
                variant="hero"
                size="xl"
                className="group shimmer-button"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Work
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                variant="minimal"
                size="xl"
                className="group"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Play size={16} className="mr-2" />
                <span className="link-underline">Get Free Consultation</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in hidden lg:flex"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">Scroll</span>
        <div className="w-px h-16 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-6 bg-primary animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
