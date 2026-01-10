import { ArrowUpRight } from "lucide-react";
import projectModern from "@/assets/project-modern.jpg";
import projectClassical from "@/assets/project-classical.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    style: "Contemporary Modern",
    type: "Residential",
    plotSize: "1 Kanal Standard",
    image: projectModern,
    features: ["Double-height Atrium", "Smart Glass", "Green Roof"],
    philosophy: "This concept showcases our ability to design for modern living. The layout prioritizes open-plan spaces, natural light, and energy efficiency with clean lines and minimalist facade.",
  },
  {
    id: 2,
    title: "Classical Residence",
    style: "Spanish / Mediterranean",
    type: "Residential",
    plotSize: "2 Kanal Estate",
    image: projectClassical,
    features: ["Terracotta Tiles", "Arched Windows", "Wrought Iron Details"],
    philosophy: "A timeless design aesthetic tailored for clients who value elegance and grandeur, featuring traditional Spanish elements with a grand central courtyard.",
  },
  {
    id: 3,
    title: "Corporate Interior Fit-out",
    style: "Industrial Chic",
    type: "Commercial",
    plotSize: "Tech Hubs / Coworking Spaces",
    image: projectCommercial,
    features: ["Acoustic Paneling", "Exposed Ceilings", "Modular Pods"],
    philosophy: "An interior concept focused on productivity and collaboration, showcasing expertise in dry-wall partitioning, custom joinery, and ergonomic lighting design.",
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
                Design Capabilities
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                Projects & Portfolio
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-foreground/60 md:text-right">
                Our design capabilities demonstrate versatility across modern, 
                classical, and commercial aesthetics—from concept to keys.
              </p>
              {/* Filter tabs */}
              <div className="flex gap-6 mt-6 md:justify-end">
                {["All", "Residential", "Commercial"].map((filter, index) => (
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
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
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
                    alt={`${project.title} - ${project.style}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-colors duration-500" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground">
                    <span className="text-[9px] tracking-[0.2em] uppercase font-medium">{project.type}</span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 group-hover:-translate-y-0 translate-x-2 -translate-y-2">
                    <ArrowUpRight size={18} className="text-foreground" />
                  </div>

                  {/* Plot Size Badge */}
                  <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-2">
                    <span className="font-display text-sm">{project.plotSize}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.style}
                  </p>
                </div>

                {/* Philosophy */}
                <p className="text-sm text-foreground/60 mb-4 line-clamp-3">
                  {project.philosophy}
                </p>

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
