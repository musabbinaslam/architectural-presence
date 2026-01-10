import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "INSYNC delivered our dream home exactly as promised—on time and within budget. Their attention to detail and transparent communication made the entire process stress-free.",
    author: "Ahmed Malik",
    role: "Homeowner",
    company: "F-7, Islamabad",
  },
  {
    quote: "We chose INSYNC for our office fit-out because of their reputation for quality. They exceeded our expectations in every way. The space is both functional and stunning.",
    author: "Sarah Khan",
    role: "Managing Director",
    company: "TechVentures Islamabad",
  },
  {
    quote: "The renovation of our heritage property required sensitivity and expertise. INSYNC's team handled every challenge professionally and preserved the character we cherished.",
    author: "Faisal Ahmed",
    role: "Property Owner",
    company: "Gulberg, Lahore",
  },
];

const TestimonialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-accent text-accent-foreground">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="text-center mb-16"
          >
            <span 
              className={`text-[10px] tracking-[0.3em] uppercase text-accent-foreground/50 block mb-4 transition-all duration-700 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Client Testimonials
            </span>
            <h2 
              className={`font-display text-3xl md:text-4xl lg:text-5xl transition-all duration-700 delay-100 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for each testimonial card
const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <article 
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative p-8 md:p-10 bg-accent-foreground/5 border border-accent-foreground/10 transition-all duration-700 hover:border-primary/30 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Quote Icon */}
      <Quote 
        size={32} 
        className={`text-primary/40 mb-6 transition-all duration-500 group-hover:text-primary/60 group-hover:scale-110 ${
          isVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-12"
        }`}
        style={{ transitionDelay: `${index * 150 + 100}ms` }}
        fill="currentColor"
      />
      
      {/* Quote */}
      <blockquote 
        className={`text-accent-foreground/80 leading-relaxed mb-8 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: `${index * 150 + 150}ms` }}
      >
        "{testimonial.quote}"
      </blockquote>
      
      {/* Author */}
      <footer 
        className={`flex items-center gap-4 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
        style={{ transitionDelay: `${index * 150 + 200}ms` }}
      >
        <div className="w-12 h-12 bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
          <span className="font-display text-primary text-lg group-hover:scale-110 transition-transform duration-300">
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
  );
};

export default TestimonialsSection;
