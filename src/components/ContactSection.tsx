import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 md:py-40 section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -z-10" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary/10 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column */}
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Let's Build<br />Something<br /><span className="text-primary italic">Great</span>
            </h2>
            <p className="text-foreground/60 leading-relaxed max-w-md mb-12 text-lg">
              Whether you're planning a new construction, renovation, or just want 
              to explore possibilities, we'd love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@insyncpk.com"
                    className="text-lg hover:text-primary transition-colors duration-300"
                  >
                    info@insyncpk.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+923009204444"
                    className="text-lg hover:text-primary transition-colors duration-300"
                  >
                    +92 300 9204444
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Islamabad Office
                  </p>
                  <address className="text-lg not-italic text-foreground/80">
                    191, Street 98<br />
                    Sector I-8/4, Islamabad
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Multan Office
                  </p>
                  <address className="text-lg not-italic text-foreground/80">
                    43, Block V<br />
                    Gulzar Khalil Piran Ghaib Road, Multan
                  </address>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Office Hours
                  </p>
                  <p className="text-lg text-foreground/80">
                    Mon – Sat: 9:00 – 18:00<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card p-8 md:p-12 border border-border">
            <h3 className="font-display text-2xl mb-2">Request a Quote</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="Ahmed"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="Khan"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="ahmed@example.com"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="+92 300 0000000"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Project Type *
                </label>
                <select className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground appearance-none cursor-pointer">
                  <option value="">Select project type</option>
                  <option value="residential-new">Residential - New Construction</option>
                  <option value="residential-renovation">Residential - Renovation</option>
                  <option value="commercial-new">Commercial - New Construction</option>
                  <option value="commercial-fitout">Commercial - Fit-out</option>
                  <option value="interior">Interior Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Project Details *
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell us about your project, location, plot size, budget range..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="terracotta"
                  size="xl"
                  className="w-full"
                >
                  Submit Request
                  <ArrowUpRight size={16} />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                Your information is secure. We never share your data with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
