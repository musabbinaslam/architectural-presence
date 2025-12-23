const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-40 section-padding relative">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column - Label */}
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              About Us
            </span>
            <div className="w-12 h-px bg-primary mt-4 mb-8" />
            
            {/* Large decorative text */}
            <p className="font-display text-8xl md:text-9xl text-primary/10 leading-none hidden md:block">
              B&L
            </p>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              We believe in the enduring value of <span className="text-primary italic">well-built</span> spaces.
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

            {/* Signature */}
            <div className="pt-6 border-t border-border inline-block">
              <p className="font-display text-xl italic text-foreground/80">James Morrison</p>
              <p className="text-sm text-muted-foreground mt-1">Founder & Principal</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { number: "15+", label: "Years Experience", detail: "Since 2009" },
            { number: "120+", label: "Properties Developed", detail: "Across the UK" },
            { number: "£450M", label: "Portfolio Value", detail: "Under management" },
            { number: "98%", label: "Client Retention", detail: "Return investors" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left group">
              <p className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-foreground/40">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-24">
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-10">
            Trusted By Leading Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50">
            {["Barclays Capital", "Knight Frank", "Savills", "CBRE", "Grosvenor"].map((name) => (
              <span key={name} className="text-sm font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
