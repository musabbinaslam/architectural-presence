import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import projectModern from "@/assets/project-modern.jpg";
import projectClassical from "@/assets/project-classical.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

type FilterType = "All" | "Residential" | "Commercial";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const filters: FilterType[] = ["All", "Residential", "Commercial"];

  return (
    <section id="projects" className="py-32 md:py-40 bg-secondary/30">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          >
            <div>
              <span 
                className={`text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4 transition-all duration-700 ${
                  headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Design Capabilities
              </span>
              <h2 
                className={`font-display text-4xl md:text-5xl lg:text-6xl transition-all duration-700 delay-100 ${
                  headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Projects & Portfolio
              </h2>
            </div>
            <div className="max-w-md">
              <p 
                className={`text-foreground/60 md:text-right transition-all duration-700 delay-200 ${
                  headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Our design capabilities demonstrate versatility across modern, 
                classical, and commercial aesthetics—from concept to keys.
              </p>
              {/* Filter tabs */}
              <div 
                className={`flex gap-8 mt-6 md:justify-end transition-all duration-700 delay-300 ${
                  headerVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 relative ${
                      activeFilter === filter 
                        ? "text-primary font-medium" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter}
                    {/* Active indicator line */}
                    <span 
                      className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                        activeFilter === filter ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-8 md:gap-10 transition-all duration-500 ${
            filteredProjects.length === 1 ? "md:grid-cols-1 max-w-lg" : 
            filteredProjects.length === 2 ? "md:grid-cols-2 max-w-4xl" : 
            "md:grid-cols-3"
          } ${filteredProjects.length < 3 ? "mx-auto" : ""}`}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View All Link */}
          <ViewAllLink />
        </div>
      </div>
    </section>
  );
};

// Separate component for each project card with its own scroll animation
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6 card-3d">
        <img
          src={project.image}
          alt={`${project.title} - ${project.style}`}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            isVisible ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 150 + 100}ms` }}
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Type Badge */}
        <div 
          className={`absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground transition-all duration-500 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        >
          <span className="text-[9px] tracking-[0.2em] uppercase font-medium">{project.type}</span>
        </div>
        
        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 group-hover:-translate-y-0 translate-x-2 -translate-y-2 group-hover:rotate-0 rotate-45">
          <ArrowUpRight size={18} className="text-foreground" />
        </div>

        {/* Plot Size Badge */}
        <div 
          className={`absolute bottom-4 left-4 bg-background/90 px-3 py-2 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 150 + 250}ms` }}
        >
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
        {project.features.map((feature, fIndex) => (
          <span 
            key={feature}
            className={`text-[10px] tracking-[0.1em] uppercase text-muted-foreground bg-secondary px-3 py-1.5 transition-all duration-500 group-hover:bg-primary/20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: `${index * 150 + 300 + fIndex * 50}ms` }}
          >
            {feature}
          </span>
        ))}
      </div>
    </article>
  );
};

// Separate component for the "View All" link
const ViewAllLink = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex justify-center mt-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <a
        href="#contact"
        className="group inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-all duration-300 border-b border-foreground/20 pb-2 hover:border-primary"
      >
        <span className="link-underline">Discuss Your Project</span>
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </div>
  );
};

export default ProjectsSection;
