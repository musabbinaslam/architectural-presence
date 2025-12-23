import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "The Foundry",
    location: "Manchester, UK",
    type: "Mixed-Use Development",
    year: "2024",
    value: "£42M",
    image: project1,
    featured: true,
  },
  {
    id: 2,
    title: "Meridian Place",
    location: "Bristol, UK",
    type: "Residential Complex",
    year: "2023",
    value: "£28M",
    image: project2,
    featured: false,
  },
  {
    id: 3,
    title: "Stone Quarter",
    location: "Edinburgh, UK",
    type: "Commercial Estate",
    year: "2023",
    value: "£56M",
    image: project3,
    featured: true,
  },
  {
    id: 4,
    title: "Terracotta Walk",
    location: "Leeds, UK",
    type: "Residential Development",
    year: "2022",
    value: "£31M",
    image: project4,
    featured: false,
  },
  {
    id: 5,
    title: "Arch House",
    location: "Bath, UK",
    type: "Heritage Restoration",
    year: "2022",
    value: "£18M",
    image: project5,
    featured: false,
  },
  {
    id: 6,
    title: "Timber Yards",
    location: "Cambridge, UK",
    type: "Mixed-Use Complex",
    year: "2021",
    value: "£64M",
    image: project6,
    featured: true,
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
                Selected Works
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
                Projects
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-foreground/60 md:text-right">
                A curated selection of developments that exemplify our commitment 
                to quality and lasting value.
              </p>
              {/* Filter tabs */}
              <div className="flex gap-6 mt-6 md:justify-end">
                {["All", "Residential", "Commercial", "Mixed-Use"].map((filter, index) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-muted mb-6">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.type} in ${project.location}`}
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

                  {/* Value Badge */}
                  <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-display text-lg">{project.value}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex justify-between items-start">
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
                
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-2 h-2 bg-primary/30" />
                  <p className="text-xs tracking-[0.15em] uppercase text-foreground/50">
                    {project.type}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* View All Link */}
          <div className="flex justify-center mt-20">
            <a
              href="#"
              className="group inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300 border-b border-foreground/20 pb-2 hover:border-foreground/50"
            >
              View All Projects
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
