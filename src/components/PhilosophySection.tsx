const PhilosophySection = () => {
  const values = [
    {
      number: "01",
      title: "Permanence",
      description: "We build for generations, not quarters. Every decision is weighed against the test of time.",
    },
    {
      number: "02", 
      title: "Integrity",
      description: "Honest materials, honest relationships. We say what we do and do what we say.",
    },
    {
      number: "03",
      title: "Craft",
      description: "Excellence in execution. From foundation to finish, every detail matters.",
    },
  ];

  return (
    <section className="py-24 md:py-32 section-padding bg-secondary/40 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-primary/10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Built on principles,<br />
              <span className="text-primary italic">not trends.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-foreground/60 leading-relaxed text-lg max-w-md">
              In an industry often driven by short-term gains, we take the long view. 
              Our approach is rooted in values that have guided great builders for centuries.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <article 
              key={value.number}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <span className="text-[10px] tracking-[0.2em] text-primary/60 block mb-4">
                {value.number}
              </span>
              
              {/* Decorative Line */}
              <div className="w-8 h-px bg-primary mb-6 group-hover:w-16 transition-all duration-500" />
              
              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-foreground/60 leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-24 pt-16 border-t border-border">
          <blockquote className="max-w-3xl">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground/80 mb-8">
              "The work will praise the master. We let our buildings speak for themselves."
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-lg">JM</span>
              </div>
              <div>
                <p className="font-medium">James Morrison</p>
                <p className="text-sm text-muted-foreground">Founder & Principal</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
