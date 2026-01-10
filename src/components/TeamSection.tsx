const teamMembers = [{
  name: "Arham Tahir Awan",
  role: "Chairman",
  initials: "AT",
  quote: "Building isn't just a profession for me—it's a purpose. I believe in creating structures that stand as testaments to quality, safety, and lasting value. INSYNC is my commitment to redefining construction standards."
}, {
  name: "Tahir Anjum Awan",
  role: "Chief Executive Officer",
  initials: "TA",
  quote: "With decades of experience in large-scale infrastructure, I understand what it takes to deliver on promises. At INSYNC, we don't just meet expectations—we exceed them, consistently and reliably."
}, {
  name: "Sadia Tahir Awan",
  role: "Director & Interior Designer",
  initials: "SA",
  quote: "Great spaces are designed from the inside out. I believe every home should reflect the personality of its owner while embracing functionality and timeless elegance. That's the INSYNC promise."
}];
const TeamSection = () => {
  return <section id="team" className="py-24 md:py-32 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
            Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Meet Our Team
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Our leadership team combines decades of experience with fresh perspectives, 
            united by a shared commitment to excellence in construction.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => <article key={index} className="group bg-card border border-border p-8 md:p-10 hover:border-primary/30 transition-colors duration-300">
              {/* Avatar */}
              
              
              {/* Name & Role */}
              <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300 font-bold">
                {member.name}
              </h3>
              <p className="text-sm text-primary mb-6">{member.role}</p>
              
              {/* Quote */}
              <blockquote className="text-foreground/60 leading-relaxed text-sm italic border-l-2 border-primary/30 pl-4">
                "{member.quote}"
              </blockquote>
            </article>)}
        </div>
      </div>
    </section>;
};
export default TeamSection;