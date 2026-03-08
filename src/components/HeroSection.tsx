import { Button } from "@/components/ui/button";
import { HardHat, Shield, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern construction site with professional workers"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full flex-1 flex items-center pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-4 py-1.5 mb-8 opacity-0 animate-slide-up"
                style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
              >
                <HardHat size={14} className="text-primary" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">
                  Professional Construction Since 2018
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-foreground">
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
                className="text-lg md:text-xl text-foreground/70 max-w-xl mb-10 leading-relaxed opacity-0 animate-blur-in"
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
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button
                  variant="minimal"
                  size="xl"
                  className="group"
                  onClick={() =>
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="link-underline">Our Services</span>
                </Button>
              </div>
            </div>

            {/* Right: Quick Stats Cards */}
            <div
              className="hidden lg:grid grid-cols-2 gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              {[
                { icon: HardHat, number: "50+", label: "Projects Completed", color: "text-primary" },
                { icon: Shield, number: "100%", label: "Quality Commitment", color: "text-primary" },
                { icon: Clock, number: "7+", label: "Years Experience", color: "text-primary" },
                { icon: ArrowRight, number: "12mo", label: "Post-Completion Warranty", color: "text-primary" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-card/60 backdrop-blur-md border border-border/50 p-6 hover:border-primary/40 transition-all duration-500 group"
                >
                  <stat.icon
                    size={20}
                    className={`${stat.color} mb-3 group-hover:scale-110 transition-transform`}
                  />
                  <p className="font-display text-2xl md:text-3xl text-foreground mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar (mobile) */}
      <div
        className="relative z-10 lg:hidden border-t border-border/30 bg-card/40 backdrop-blur-md opacity-0 animate-fade-in"
        style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
      >
        <div className="section-padding py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { number: "50+", label: "Projects" },
            { number: "7+", label: "Years" },
            { number: "100%", label: "Quality" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-display text-xl text-primary">{stat.number}</p>
              <p className="text-[10px] tracking-wider uppercase text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in hidden lg:flex"
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
