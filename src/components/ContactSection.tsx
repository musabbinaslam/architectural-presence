import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const contactDetails = [{
  icon: Mail,
  label: "Email",
  content: "info@insyncpk.com",
  href: "mailto:info@insyncpk.com"
}, {
  icon: Phone,
  label: "Phone",
  content: "",
  href: "tel:"
}, {
  icon: MapPin,
  label: "Islamabad Office, Pakistan",
  content: "191, Street 98\nSector I-8/4, Islamabad",
  isAddress: true
}, {
  icon: MapPin,
  label: "Multan Office, Pakistan",
  content: "43, Block V\nGulzar Khalil Piran Ghaib Road, Multan",
  isAddress: true
}, {
  icon: Clock,
  label: "Office Hours",
  content: "Mon – Sat: 9:00 – 18:00\nSun: Closed"
}];
const ContactSection = () => {
  const {
    ref: leftRef,
    isVisible: leftVisible
  } = useScrollAnimation({
    threshold: 0.15
  });
  const {
    ref: rightRef,
    isVisible: rightVisible
  } = useScrollAnimation({
    threshold: 0.15
  });
  return <section id="contact" className="py-32 md:py-40 section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -z-10" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary/10 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column */}
          <div ref={leftRef as React.RefObject<HTMLDivElement>}>
            <span className={`text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4 transition-all duration-700 ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Get In Touch
            </span>
            <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight transition-all duration-700 delay-100 ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-block overflow-hidden">
                <span className={`inline-block transition-transform duration-700 delay-150 ${leftVisible ? "translate-y-0" : "translate-y-full"}`}>
                  Let's Build
                </span>
              </span>
              <br />
              <span className="inline-block overflow-hidden">
                <span className={`inline-block transition-transform duration-700 delay-200 ${leftVisible ? "translate-y-0" : "translate-y-full"}`}>
                  Something
                </span>
              </span>
              <br />
              <span className="inline-block overflow-hidden">
                <span className={`text-primary italic inline-block transition-transform duration-700 delay-250 ${leftVisible ? "translate-y-0" : "translate-y-full"}`}>
                  Great
                </span>
              </span>
            </h2>
            <p className={`text-foreground/60 leading-relaxed max-w-md mb-12 text-lg transition-all duration-700 delay-300 ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Whether you're planning a new construction, renovation, or just want 
              to explore possibilities, we'd love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {contactDetails.map((detail, index) => <div key={detail.label} className={`flex items-start gap-4 transition-all duration-700 ${leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{
              transitionDelay: `${index * 100 + 400}ms`
            }}>
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <detail.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                      {detail.label}
                    </p>
                    {detail.href ? <a href={detail.href} className="text-lg hover:text-primary transition-colors duration-300 link-underline">
                        {detail.content}
                      </a> : detail.isAddress ? <address className="text-lg not-italic text-foreground/80 whitespace-pre-line">
                        {detail.content}
                      </address> : <p className="text-lg text-foreground/80 whitespace-pre-line">
                        {detail.content}
                      </p>}
                  </div>
                </div>)}
            </div>
          </div>

          {/* Right Column - Form */}
          <div ref={rightRef as React.RefObject<HTMLDivElement>} className={`bg-card p-8 md:p-12 border border-border transition-all duration-700 ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h3 className={`font-display text-2xl mb-2 transition-all duration-500 delay-100 ${rightVisible ? "opacity-100" : "opacity-0"}`}>
              Request a Quote
            </h3>
            <p className={`text-muted-foreground text-sm mb-8 transition-all duration-500 delay-150 ${rightVisible ? "opacity-100" : "opacity-0"}`}>
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput label="First Name" placeholder="Ahmed" isVisible={rightVisible} delay={200} />
                <FormInput label="Last Name" placeholder="Khan" isVisible={rightVisible} delay={250} />
              </div>

              <FormInput label="Email Address" type="email" placeholder="ahmed@example.com" isVisible={rightVisible} delay={300} />

              <FormInput label="Phone Number" type="tel" placeholder="+92 300 0000000" isVisible={rightVisible} delay={350} />

              <div className={`transition-all duration-500 ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
              transitionDelay: "400ms"
            }}>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Project Type *
                </label>
                <select className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-all duration-300 text-foreground appearance-none cursor-pointer hover:border-foreground/30">
                  <option value="">Select project type</option>
                  <option value="residential-new">Residential - New Construction</option>
                  <option value="residential-renovation">Residential - Renovation</option>
                  <option value="commercial-new">Commercial - New Construction</option>
                  <option value="commercial-fitout">Commercial - Fit-out</option>
                  <option value="interior">Interior Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={`transition-all duration-500 ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
              transitionDelay: "450ms"
            }}>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Project Details *
                </label>
                <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none hover:border-foreground/30" placeholder="Tell us about your project, location, plot size, budget range..." />
              </div>

              <div className={`pt-4 transition-all duration-500 ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
              transitionDelay: "500ms"
            }}>
                <Button type="submit" variant="terracotta" size="xl" className="w-full group shimmer-button overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Request
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Button>
              </div>
              
              <p className={`text-xs text-muted-foreground text-center transition-all duration-500 ${rightVisible ? "opacity-100" : "opacity-0"}`} style={{
              transitionDelay: "550ms"
            }}>
                Your information is secure. We never share your data with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

// Separate component for form inputs
const FormInput = ({
  label,
  type = "text",
  placeholder,
  isVisible,
  delay
}: {
  label: string;
  type?: string;
  placeholder: string;
  isVisible: boolean;
  delay: number;
}) => <div className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
  transitionDelay: `${delay}ms`
}}>
    <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
      {label} *
    </label>
    <input type={type} className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground hover:border-foreground/30 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]" placeholder={placeholder} />
  </div>;
export default ContactSection;