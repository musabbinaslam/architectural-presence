import { ArrowRight, Palette, Hammer, ClipboardList, RefreshCw, Map } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Design & Visualization",
    description:
      "Transform ideas into reality with our comprehensive design services. We create stunning 3D walkthroughs, photorealistic renderings, and sustainable design solutions that bring your vision to life.",
    features: ["3D Modeling", "Visualization", "Sustainable Design", "Interior Design"],
    icon: Palette,
  },
  {
    id: "02",
    title: "Engineering & Construction",
    description:
      "From grey structure to turnkey solutions, our engineering team delivers excellence. We handle structural engineering, MEP systems, and complete civil works with precision and safety.",
    features: ["Structural Engineering", "Grey Structure", "Turnkey Solutions", "MEP Systems"],
    icon: Hammer,
  },
  {
    id: "03",
    title: "Project Management",
    description:
      "PMI-aligned workflows ensure your project stays on track. We provide comprehensive planning, cost control, timeline management, and real-time digital tracking for complete transparency.",
    features: ["Planning", "Cost Control", "Timeline Management", "Digital Tracking"],
    icon: ClipboardList,
  },
  {
    id: "04",
    title: "Renovation Services",
    description:
      "Breathe new life into existing structures with our renovation expertise. From structural assessment to controlled demolition and system upgrades, we modernize while respecting the original character.",
    features: ["Structural Audit", "Controlled Demolition", "System Upgrades", "Modernization"],
    icon: RefreshCw,
  },
  {
    id: "05",
    title: "GIS & Spatial Analysis",
    description:
      "Make informed decisions with our GIS and spatial analysis services. We provide site selection analysis, topographical mapping, and comprehensive data management for land development projects.",
    features: ["Site Analysis", "Mapping", "Data Management", "Spatial Planning"],
    icon: Map,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 md:py-40 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/30 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Services
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-foreground/60 leading-relaxed text-lg">
              Our integrated approach covers the full spectrum of construction services. 
              From concept visualization to project completion, each service is delivered 
              with the same commitment to quality that defines INSYNC.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="divide-y divide-border">
          {services.map((service) => (
            <article
              key={service.id}
              className="group py-12 md:py-16 grid md:grid-cols-12 gap-8 items-start cursor-pointer"
            >
              {/* Number & Icon */}
              <div className="md:col-span-1 flex items-center gap-4 md:flex-col md:items-start md:gap-4">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                  {service.id}
                </span>
                <service.icon 
                  size={24} 
                  className="text-primary/50 group-hover:text-primary transition-colors duration-300" 
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl md:col-span-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-foreground/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground bg-secondary px-3 py-1.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="md:col-span-3 flex justify-end items-center gap-4">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                </span>
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <ArrowRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-20 p-10 md:p-16 bg-secondary/50 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                Have a project in mind?
              </h3>
              <p className="text-foreground/60">
                Let's discuss how INSYNC can bring your vision to life with quality and precision.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 tracking-widest uppercase text-xs font-semibold hover:bg-accent/90 transition-colors"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
