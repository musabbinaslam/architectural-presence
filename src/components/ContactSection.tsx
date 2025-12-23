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
              Let's Build<br />Something<br /><span className="text-primary italic">Lasting</span>
            </h2>
            <p className="text-foreground/60 leading-relaxed max-w-md mb-12 text-lg">
              Whether you're looking to invest, develop, or simply explore 
              opportunities in property, we'd like to hear from you.
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
                    href="mailto:hello@bricksandland.com"
                    className="text-lg hover:text-primary transition-colors duration-300"
                  >
                    hello@bricksandland.com
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
                    href="tel:+442012345678"
                    className="text-lg hover:text-primary transition-colors duration-300"
                  >
                    +44 (0) 20 1234 5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    Address
                  </p>
                  <address className="text-lg not-italic text-foreground/80">
                    12 Foundation House<br />
                    London EC2A 4BX<br />
                    United Kingdom
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
                    Mon – Fri: 9:00 – 18:00<br />
                    Sat: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card p-8 md:p-12 border border-border">
            <h3 className="font-display text-2xl mb-2">Start a Conversation</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
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
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="Smith"
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
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="+44 7000 000000"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Area of Interest *
                </label>
                <select className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground appearance-none cursor-pointer">
                  <option value="">Select your interest</option>
                  <option value="investment">Property Investment</option>
                  <option value="development">Development Opportunities</option>
                  <option value="land">Land Acquisition</option>
                  <option value="advisory">Advisory Services</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="terracotta"
                  size="xl"
                  className="w-full"
                >
                  Send Inquiry
                  <ArrowUpRight size={16} />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
