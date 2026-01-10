import { useState } from "react";
import { ArrowRight, Palette, Hammer, ClipboardList, RefreshCw, Map } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ServiceDetailModal, { ServiceDetail } from "@/components/ServiceDetailModal";

// GIS Images
import gis1 from "@/assets/gis/gis-1.png";
import gis2 from "@/assets/gis/gis-2.png";
import gis3 from "@/assets/gis/gis-3.png";
import gis4 from "@/assets/gis/gis-4.png";
import gis5 from "@/assets/gis/gis-5.png";
import gis6 from "@/assets/gis/gis-6.png";
import gis7 from "@/assets/gis/gis-7.png";
import gis8 from "@/assets/gis/gis-8.png";
import gis9 from "@/assets/gis/gis-9.jpg";
import gis10 from "@/assets/gis/gis-10.jpg";
import gis11 from "@/assets/gis/gis-11.jpg";
import gis12 from "@/assets/gis/gis-12.jpg";
import gis13 from "@/assets/gis/gis-13.png";
import gis14 from "@/assets/gis/gis-14.png";
import gis15 from "@/assets/gis/gis-15.png";
import gis16 from "@/assets/gis/gis-16.png";
import gis17 from "@/assets/gis/gis-17.png";
import gis18 from "@/assets/gis/gis-18.png";
import gis19 from "@/assets/gis/gis-19.png";

const gisImages = [gis1, gis2, gis3, gis4, gis5, gis6, gis7, gis8, gis9, gis10, gis11, gis12, gis13, gis14, gis15, gis16, gis17, gis18, gis19];
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

// Detailed service information from company profile
const serviceDetails: Record<string, Omit<ServiceDetail, "icon">> = {
  "01": {
    id: "01",
    title: "Design & Visualization",
    subtitle: "Creating Immersive Experiences",
    description:
      "Our in-house studio goes beyond basic drafting to offer 3D walkthroughs, photorealistic renderings, and virtual reality experiences. We enable clients to experience their spaces before a single brick is laid, providing unmatched clarity during the approval phase. Sustainable design is central to our philosophy—we use natural lighting, strategic ventilation, and reduce future energy costs while staying aesthetically compelling.",
    highlights: [
      "Immersive 3D walkthroughs and photorealistic renderings",
      "Virtual reality experiences for complete spatial understanding",
      "Sustainable design with natural lighting and ventilation optimization",
      "Interior design from concept to detailed specifications",
      "Design styles: Contemporary Modern, Spanish/Mediterranean, Industrial Chic",
    ],
    capabilities: [
      "3D Modeling & Rendering",
      "Interior Design",
      "Sustainable Architecture",
      "Space Planning",
      "Virtual Reality Tours",
      "Material Selection",
    ],
  },
  "02": {
    id: "02",
    title: "Engineering & Construction",
    subtitle: "From Grey Structure to Turnkey Excellence",
    description:
      "Our engineering team handles everything from structural calculations to MEP installations, ensuring that every project meets stringent safety standards and local codes. We use Grade-60 reinforcement steel and 3000-4000 PSI concrete specifications. Our turnkey solutions cover the entire construction lifecycle—from foundation to finishing—so you can focus on your business while we handle the complexities.",
    highlights: [
      "Complete grey structure to turnkey construction solutions",
      "Structural engineering with ASTM/ACI compliance standards",
      "MEP systems: electrical panels, PPRC plumbing, HVAC integration",
      "Quality materials: Grade-60 steel, 3000-4000 PSI concrete",
      "Full civil works including excavation, compaction, and finishing",
    ],
    capabilities: [
      "Structural Engineering",
      "Grey Structure",
      "Turnkey Solutions",
      "MEP Systems",
      "Civil Works",
      "Quality Assurance",
    ],
  },
  "03": {
    id: "03",
    title: "Project Management",
    subtitle: "PMI-Aligned Precision & Transparency",
    description:
      "Every InSync project is guided by globally recognized project management principles. We utilize Earned Value Management (EVM) to monitor performance, digital dashboards for real-time tracking, and comprehensive Bill of Quantities (BOQ) for budget transparency. Our approach ensures that timelines are met, budgets are respected, and communication remains clear throughout the project lifecycle.",
    highlights: [
      "PMI-aligned workflows with Earned Value Management (EVM)",
      "Real-time digital tracking dashboards for complete visibility",
      "Detailed Bill of Quantities (BOQ) for budget transparency",
      "Comprehensive planning from inception to handover",
      "Risk mitigation and change management protocols",
    ],
    capabilities: [
      "Strategic Planning",
      "Cost Control",
      "Timeline Management",
      "Digital Tracking",
      "Risk Management",
      "Stakeholder Communication",
    ],
  },
  "04": {
    id: "04",
    title: "Renovation Services",
    subtitle: "Breathing New Life into Structures",
    description:
      "Our renovation division is staffed with architects and engineers trained in adaptive reuse. Before any demolition begins, we conduct thorough structural assessments to identify load-bearing elements. We use controlled demolition techniques with specialized tools and implement MEP system retrofitting—upgrading from outdated GI pipes to modern PPRC systems and upgrading electrical panels for modern energy demands.",
    highlights: [
      "Comprehensive structural assessment before any demolition",
      "Controlled demolition with specialized precision tools",
      "MEP system retrofitting: GI to PPRC pipe upgrades",
      "Electrical panel upgrades for modern energy demands",
      "Minimal disruption approach preserving original character",
    ],
    capabilities: [
      "Structural Assessment",
      "Controlled Demolition",
      "MEP Retrofitting",
      "System Upgrades",
      "Adaptive Reuse",
      "Heritage Preservation",
    ],
  },
  "05": {
    id: "05",
    title: "GIS & Spatial Analysis",
    subtitle: "32+ Years of Collective Expertise",
    description:
      "Our GIS division combines over 32 years of collective expertise with cutting-edge technology. We provide cadastral mapping, georeferencing, and advanced spatial analysis using industry-standard tools like ArcGIS and QGIS. Our team has contributed to government-level projects in Pakistan and Saudi Arabia, and we specialize in spatial database management for informed land development decisions.",
    highlights: [
      "32+ years of collective GIS expertise across team members",
      "Cadastral mapping and precise georeferencing services",
      "Advanced spatial analysis using ArcGIS and QGIS",
      "Government project experience in Pakistan and Saudi Arabia",
      "Comprehensive spatial database management solutions",
    ],
    capabilities: [
      "Cadastral Mapping",
      "Georeferencing",
      "Spatial Analysis",
      "Database Management",
      "Topographical Surveys",
      "Land Use Planning",
    ],
    images: gisImages,
  },
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 });

  const handleServiceClick = (serviceId: string, icon: typeof Palette) => {
    const detail = serviceDetails[serviceId];
    if (detail) {
      setSelectedService({ ...detail, icon });
    }
  };

  return (
    <section id="services" className="py-32 md:py-40 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/30 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="grid lg:grid-cols-2 gap-16 mb-20"
        >
          <div>
            <span 
              className={`text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4 transition-all duration-700 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              What We Do
            </span>
            <h2 
              className={`font-display text-4xl md:text-5xl lg:text-6xl mb-6 transition-all duration-700 delay-100 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Services
            </h2>
          </div>
          <div className="flex items-end">
            <p 
              className={`text-foreground/60 leading-relaxed text-lg transition-all duration-700 delay-200 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Our integrated approach covers the full spectrum of construction services. 
              From concept visualization to project completion, each service is delivered 
              with the same commitment to quality that defines InSync.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="divide-y divide-border">
          {services.map((service, index) => (
            <ServiceRow 
              key={service.id} 
              service={service} 
              index={index}
              onClick={() => handleServiceClick(service.id, service.icon)}
            />
          ))}
        </div>

        {/* CTA Box */}
        <div 
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`mt-20 p-10 md:p-16 bg-secondary/50 border border-border transition-all duration-700 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                Have a project in mind?
              </h3>
              <p className="text-foreground/60">
                Let's discuss how InSync can bring your vision to life with quality and precision.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a 
                href="#contact"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 tracking-widest uppercase text-xs font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-5"
              >
                Get a Free Quote
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

// Separate component for each service row with its own scroll animation
const ServiceRow = ({ 
  service, 
  index, 
  onClick 
}: { 
  service: typeof services[0]; 
  index: number;
  onClick: () => void;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      onClick={onClick}
      className={`group py-12 md:py-16 grid md:grid-cols-12 gap-8 items-start cursor-pointer transition-all duration-700 ${
        isVisible 
          ? "opacity-100 translate-x-0" 
          : isEven 
            ? "opacity-0 -translate-x-8" 
            : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: "100ms" }}
    >
      {/* Number & Icon */}
      <div className="md:col-span-1 flex items-center gap-4 md:flex-col md:items-start md:gap-4">
        <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
          {service.id}
        </span>
        <service.icon 
          size={24} 
          className="text-primary/50 group-hover:text-primary transition-all duration-500 group-hover:scale-110 icon-float" 
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
          {service.features.map((feature, fIndex) => (
            <span 
              key={feature}
              className={`text-[10px] tracking-[0.15em] uppercase text-muted-foreground bg-secondary px-3 py-1.5 transition-all duration-500 group-hover:bg-secondary/80 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: `${fIndex * 50 + 200}ms` }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="md:col-span-3 flex justify-end items-center gap-4">
        <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
          Learn More
        </span>
        <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500 group-hover:scale-105">
          <ArrowRight
            size={20}
            className="text-muted-foreground group-hover:text-primary-foreground transition-all duration-300 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  );
};

export default ServicesSection;
