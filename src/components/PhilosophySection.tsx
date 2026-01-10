const PhilosophySection = () => {
  const values = [
    {
      number: "01",
      title: "Integrity",
      description: "We uphold the highest standards of honesty. Our contracts and costs are transparent—no hidden charges, no surprises.",
    },
    {
      number: "02", 
      title: "Safety",
      description: "Human life is invaluable. We prioritize a safe working environment for our team and implement rigorous safety protocols on every site.",
    },
    {
      number: "03",
      title: "Precision",
      description: "Every project is executed with technical accuracy, disciplined planning, and controlled delivery. Excellence in every detail.",
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
              <span className="text-primary italic">not shortcuts.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-foreground/60 leading-relaxed text-lg max-w-md">
              At INSYNC, we believe that exceptional construction is the result of 
              unwavering commitment to our core values. These principles guide every 
              decision we make.
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
              "Our commitment to quality is not a marketing slogan—it's the foundation of everything we build."
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-lg">AT</span>
              </div>
              <div>
                <p className="font-medium">Arham Tahir Awan</p>
                <p className="text-sm text-muted-foreground">Chairman, INSYNC Construction</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
