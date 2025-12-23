import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "The Foundry",
    location: "Manchester, UK",
    type: "Mixed-Use Development",
    year: "2024",
    image: project1,
  },
  {
    id: 2,
    title: "Meridian Place",
    location: "Bristol, UK",
    type: "Residential Complex",
    year: "2023",
    image: project2,
  },
  {
    id: 3,
    title: "Stone Quarter",
    location: "Edinburgh, UK",
    type: "Commercial Estate",
    year: "2023",
    image: project3,
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
            <p className="text-foreground/60 max-w-md text-right hidden md:block">
              A curated selection of developments that exemplify our commitment 
              to quality and lasting value.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
                  
                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={18} className="text-foreground" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-xl mb-1 group-hover:text-primary transition-colors duration-300">
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
                
                <p className="text-xs tracking-[0.15em] uppercase text-foreground/50 mt-3">
                  {project.type}
                </p>
              </article>
            ))}
          </div>

          {/* View All Link */}
          <div className="flex justify-center mt-16">
            <a
              href="#"
              className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
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
