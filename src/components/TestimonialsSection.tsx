import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const testimonials = [
  {
    quote: "INSYNC delivered our dream home exactly as promised—on time and within budget. Their attention to detail and transparent communication made the entire process stress-free.",
    author: "Ahmed Malik",
    role: "Homeowner",
    company: "F-7, Islamabad"
  },
  {
    quote: "We chose INSYNC for our office fit-out because of their reputation for quality. They exceeded our expectations in every way. The space is both functional and stunning.",
    author: "Sarah Khan",
    role: "Managing Director",
    company: "TechVentures Islamabad"
  },
  {
    quote: "The renovation of our heritage property required sensitivity and expertise. INSYNC's team handled every challenge professionally and preserved the character we cherished.",
    author: "Faisal Ahmed",
    role: "Property Owner",
    company: "Gulberg, Lahore"
  },
  {
    quote: "From concept to completion, INSYNC demonstrated exceptional craftsmanship. Our retail space now attracts customers with its modern yet welcoming design.",
    author: "Ayesha Raza",
    role: "Business Owner",
    company: "DHA, Karachi"
  },
  {
    quote: "Working with INSYNC on our multi-story commercial project was seamless. Their project management and quality control are truly world-class.",
    author: "Omar Siddiqui",
    role: "CEO",
    company: "Siddiqui Developments"
  },
  {
    quote: "INSYNC transformed our dated apartment into a contemporary masterpiece. Their design team understood our vision perfectly and executed it flawlessly.",
    author: "Zainab Hussain",
    role: "Homeowner",
    company: "E-11, Islamabad"
  },
  {
    quote: "The attention to sustainability and energy efficiency in our new headquarters has reduced our operational costs significantly. Highly recommend INSYNC.",
    author: "Tariq Mahmood",
    role: "Operations Director",
    company: "GreenTech Solutions"
  }
];

const TestimonialsSection = () => {
  const {
    ref: headerRef,
    isVisible: headerVisible
  } = useScrollAnimation({
    threshold: 0.2
  });

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-24 md:py-32 bg-accent text-accent-foreground overflow-hidden">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef as React.RefObject<HTMLDivElement>} className="text-center mb-16">
            <span className={`text-[10px] tracking-[0.3em] uppercase text-accent-foreground/50 block mb-4 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Client Testimonials
            </span>
            <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/20 hover:text-accent-foreground" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/20 hover:text-accent-foreground" />
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-primary w-6" 
                    : "bg-accent-foreground/30 hover:bg-accent-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for each testimonial card
const TestimonialCard = ({
  testimonial,
  index
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) => {
  return (
    <article className="relative h-full p-8 md:p-10 bg-accent-foreground/5 border border-accent-foreground/10 transition-all duration-500 hover:border-primary/30 group">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Quote Icon */}
      <Quote 
        size={32} 
        className="text-primary/40 mb-6 transition-all duration-500 group-hover:text-primary/60 group-hover:scale-110" 
        fill="currentColor" 
      />
      
      {/* Quote */}
      <blockquote className="text-accent-foreground/80 leading-relaxed mb-8 relative z-10">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Author */}
      <footer className="flex items-center gap-4 relative z-10 mt-auto">
        <div className="w-12 h-12 bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
          <span className="font-display text-primary text-lg group-hover:scale-110 transition-transform duration-300">
            {testimonial.author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-medium text-accent-foreground">{testimonial.author}</p>
          <p className="text-sm text-accent-foreground/60">{testimonial.company}</p>
        </div>
      </footer>
    </article>
  );
};

export default TestimonialsSection;
