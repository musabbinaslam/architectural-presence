import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bricks & Land understood our vision for a legacy property from day one. Their attention to quality and the long-term perspective they bring is unmatched in the industry.",
    author: "Richard Hawthorne",
    role: "Private Investor",
    company: "Hawthorne Family Office",
  },
  {
    quote: "We've worked with many developers, but few approach projects with the craftsmanship and integrity that Bricks & Land demonstrates. They're builders in the truest sense.",
    author: "Catherine Mills",
    role: "Director",
    company: "Savills Investment",
  },
  {
    quote: "The Meridian Place development exceeded all expectations. From planning to handover, the team delivered excellence at every stage.",
    author: "David Chen",
    role: "Fund Manager",
    company: "Greystone Capital",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-accent text-accent-foreground">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent-foreground/50 block mb-4">
              Client Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              What Our Partners Say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <article 
                key={index}
                className="relative p-8 md:p-10 bg-accent-foreground/5 border border-accent-foreground/10 hover:border-primary/30 transition-colors duration-300"
              >
                {/* Quote Icon */}
                <Quote 
                  size={32} 
                  className="text-primary/40 mb-6" 
                  fill="currentColor"
                />
                
                {/* Quote */}
                <blockquote className="text-accent-foreground/80 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-primary text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-accent-foreground">{testimonial.author}</p>
                    <p className="text-sm text-accent-foreground/60">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
