const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-40 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column - Label */}
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              About Us
            </span>
            <div className="w-12 h-px bg-primary mt-4" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              We believe in the enduring value of well-built spaces.
            </h2>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p className="text-lg">
                Bricks & Land was founded on a simple principle: property should be more than 
                a transaction—it should be a legacy. We approach every project with the 
                patience and precision of master builders.
              </p>
              <p>
                Our philosophy draws from the timeless materials of construction—brick, stone, 
                concrete, and earth—elements that have shaped civilizations and will continue 
                to stand long after trends fade.
              </p>
              <p>
                We work with clients who understand that the best investments are those built 
                on solid ground, both literally and figuratively. From land acquisition to 
                development, we prioritize quality, sustainability, and long-term value.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "120+", label: "Properties Developed" },
            { number: "£450M", label: "Portfolio Value" },
            { number: "98%", label: "Client Retention" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
