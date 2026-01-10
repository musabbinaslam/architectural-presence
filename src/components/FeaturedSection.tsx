import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import featuredImage from "@/assets/featured-construction.jpg";

const FeaturedSection = () => {
  return (
    <section className="py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Featured Capability
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={featuredImage}
                alt="Modern residential construction project by INSYNC"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Overlay Badge */}
            <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Turnkey Solutions</span>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Design to Delivery</span>
              <span className="text-foreground/30">·</span>
              <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Complete Construction</span>
            </div>
            
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Modern<br />Residences
            </h3>
            
            <p className="text-foreground/60 leading-relaxed mb-8 text-lg">
              From contemporary minimalist homes to Mediterranean-inspired villas, 
              INSYNC delivers complete residential construction with unmatched attention 
              to detail. Our turnkey approach means one team, one vision, one exceptional result.
            </p>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-6 mb-10 py-8 border-y border-border">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Styles</p>
                <p className="font-display text-xl">Modern & Classical</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Plot Sizes</p>
                <p className="font-display text-xl">5 Marla - 2 Kanal</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Timeline</p>
                <p className="font-display text-xl">12-18 Months</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Warranty</p>
                <p className="font-display text-xl text-primary">12 Months</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="terracotta" size="lg">
                View Portfolio
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="minimal" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
