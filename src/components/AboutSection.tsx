const AboutSection = () => {
  return (
    <section id="about" className="py-32 md:py-40 section-padding relative">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            About Us
          </span>
          <div className="w-12 h-px bg-primary mt-4 mb-8" />

          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Process over <span className="text-primary italic">Promise</span>
            </h2>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p className="text-lg">
                INSYNC Construction was founded in 2018 with a singular vision: to redefine 
                construction standards in Pakistan through disciplined planning, skilled 
                execution, and uncompromising quality.
              </p>
              <p>
                At INSYNC, we believe that great buildings are the result of great processes. 
                Every project we undertake follows our rigorous methodology—from initial 
                consultation to final handover—ensuring consistency, safety, and excellence.
              </p>
              <p>
                Our team combines experienced leadership with young, dynamic professionals 
                who bring fresh perspectives and cutting-edge techniques to every project. 
                We don't just build structures; we build lasting relationships with our clients.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-border inline-block">
              <p className="font-display text-xl italic text-foreground/80">Arham Tahir Awan</p>
              <p className="text-sm text-muted-foreground mt-1">Chairman</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { number: "7+", label: "Years Experience", detail: "Since 2018" },
            { number: "50+", label: "Projects Delivered", detail: "Across Pakistan" },
            { number: "100%", label: "Quality Commitment", detail: "Zero shortcuts" },
            { number: "12", label: "Month Warranty", detail: "Post-completion" },
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

        {/* Certifications */}
        <div className="mt-24">
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-10">
            Certifications & Memberships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50">
            {["Pakistan Engineering Council", "ISO 9001 Certified", "PCATP Member", "Safety First Certified"].map((name) => (
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
