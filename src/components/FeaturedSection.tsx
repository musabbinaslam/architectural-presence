import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import featuredImage from "@/assets/featured-property.jpg";

const FeaturedSection = () => {
  return (
    <section className="py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Featured Development
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={featuredImage}
                alt="Greenfield Quarter - Mixed-use urban development masterplan"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Overlay Badge */}
            <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Now Available</span>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">2025</span>
              <span className="text-foreground/30">·</span>
              <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Birmingham, UK</span>
            </div>
            
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Greenfield<br />Quarter
            </h3>
            
            <p className="text-foreground/60 leading-relaxed mb-8 text-lg">
              A landmark mixed-use development transforming 12 acres of former industrial land 
              into a vibrant urban quarter. Featuring 450 residential units, 80,000 sq ft of 
              commercial space, and extensive public realm improvements.
            </p>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-6 mb-10 py-8 border-y border-border">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Investment</p>
                <p className="font-display text-2xl">£125M</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Units</p>
                <p className="font-display text-2xl">450</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Completion</p>
                <p className="font-display text-2xl">Q3 2026</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Status</p>
                <p className="font-display text-2xl text-primary">Active</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="terracotta" size="lg">
                View Development
                <ArrowUpRight size={16} />
              </Button>
              <Button variant="minimal" size="lg">
                Investment Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
