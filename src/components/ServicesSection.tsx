import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Land Acquisition",
    description:
      "Strategic identification and acquisition of prime land parcels with development potential. We analyze market conditions, zoning regulations, and long-term value propositions.",
  },
  {
    id: "02",
    title: "Property Development",
    description:
      "End-to-end development services from concept to completion. We manage every phase with attention to quality, sustainability, and architectural integrity.",
  },
  {
    id: "03",
    title: "Investment Advisory",
    description:
      "Expert guidance for property investors seeking stable, long-term returns. We provide market analysis, risk assessment, and portfolio optimization strategies.",
  },
  {
    id: "04",
    title: "Asset Management",
    description:
      "Comprehensive management of property portfolios to maximize value and performance. We handle operations, maintenance, and tenant relations with care.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 md:py-40 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Services
          </h2>
          <p className="text-foreground/60 leading-relaxed">
            Our integrated approach covers the full spectrum of property development 
            and investment. Each service is delivered with the same commitment to 
            quality and long-term thinking.
          </p>
        </div>

        {/* Services List */}
        <div className="divide-y divide-border">
          {services.map((service) => (
            <article
              key={service.id}
              className="group py-10 md:py-14 grid md:grid-cols-12 gap-6 md:gap-8 items-start cursor-pointer"
            >
              {/* Number */}
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground md:col-span-1">
                {service.id}
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl md:col-span-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/60 leading-relaxed md:col-span-6">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="md:col-span-1 flex justify-end">
                <ArrowRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
