import { ArrowUpRight } from "lucide-react";
import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import projectRenovation1 from "@/assets/project-renovation-1.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    location: "Contemporary Modern",
    type: "Residential",
    year: "1 Kanal",
    value: "Design Capability",
    image: projectResidential1,
    featured: true,
    features: ["Double-height Atrium", "Smart Glass", "Green Roof"],
  },
  {
    id: 2,
    title: "Classical Residence",
    location: "Spanish / Mediterranean",
    type: "Residential",
    year: "2 Kanal Estate",
    value: "Design Capability",
    image: projectResidential2,
    featured: true,
    features: ["Terracotta Tiles", "Arched Windows", "Wrought Iron Details"],
  },
  {
    id: 3,
    title: "Corporate Interior Fit-out",
    location: "Tech Hubs / Coworking Spaces",
    type: "Commercial",
    year: "Industrial Chic",
    value: "Interior Design",
    image: projectCommercial1,
    featured: true,
    features: ["Acoustic Paneling", "Exposed Ceilings", "Modular Pods"],
  },
  {
    id: 4,
    title: "Renovation & Retrofitting",
    location: "Existing Structures",
    type: "Renovation",
    year: "Specialized",
    value: "System Upgrades",
    image: projectRenovation1,
    featured: false,
    features: ["Structural Assessment", "Controlled Demolition", "MEP Upgrades"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 md:py-40 bg-secondary/30">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
                Portfolio
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                Projects & Capabilities
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-foreground/60 md:text-right">
                Our design capabilities demonstrate versatility across modern, 
                classical, and commercial aesthetics—from concept to keys.
              </p>
              {/* Filter tabs */}
              <div className="flex gap-6 mt-6 md:justify-end">
                {["All", "Residential", "Commercial", "Renovation"].map((filter, index) => (
                  <button
                    key={filter}
                    className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                      index === 0 ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.type}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-colors duration-500" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground">
                      <span className="text-[9px] tracking-[0.2em] uppercase font-medium">Featured</span>
                    </div>
                  )}
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 group-hover:-translate-y-0 translate-x-2 -translate-y-2">
                    <ArrowUpRight size={18} className="text-foreground" />
                  </div>

                  {/* Type Badge */}
                  <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-2">
                    <span className="font-display text-lg">{project.value}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-primary/30" />
                  <p className="text-xs tracking-[0.15em] uppercase text-foreground/50">
                    {project.type}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground bg-secondary px-3 py-1.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* GIS Capability Note */}
          <div className="mt-16 p-8 md:p-12 bg-card border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary block mb-3">
                  GIS Capability
                </span>
                <h3 className="font-display text-2xl md:text-3xl mb-4">
                  Geographic Information Systems
                </h3>
                <p className="text-foreground/60">
                  With over 32 years of collective expertise in geospatial analysis, 
                  we've delivered large-scale cadastral and GIS projects for the 
                  Government of Balochistan and projects in Saudi Arabia.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                {["Cadastral Mapping", "Spatial Analysis", "Land Records", "Urban Planning"].map((service) => (
                  <span 
                    key={service}
                    className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground bg-secondary px-4 py-2"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="flex justify-center mt-16">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300 border-b border-foreground/20 pb-2 hover:border-foreground/50"
            >
              Discuss Your Project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
