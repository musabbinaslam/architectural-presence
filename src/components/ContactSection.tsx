import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 md:py-40 bg-accent text-accent-foreground">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent-foreground/50 block mb-4">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
                Let's Build<br />Something<br />Lasting
              </h2>
              <p className="text-accent-foreground/70 leading-relaxed max-w-md mb-10">
                Whether you're looking to invest, develop, or simply explore 
                opportunities in property, we'd like to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-accent-foreground/40 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:hello@bricksandland.com"
                    className="text-lg hover:text-primary transition-colors duration-300"
                  >
                    hello@bricksandland.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-accent-foreground/40 mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+442012345678"
                    className="text-lg hover:text-primary transition-colors duration-300"
                  >
                    +44 (0) 20 1234 5678
                  </a>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-accent-foreground/40 mb-2">
                    Address
                  </p>
                  <address className="text-lg not-italic text-accent-foreground/80">
                    12 Foundation House<br />
                    London EC2A 4BX<br />
                    United Kingdom
                  </address>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:pt-16">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-accent-foreground/40 block mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 focus:border-primary outline-none transition-colors text-accent-foreground placeholder:text-accent-foreground/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-accent-foreground/40 block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 focus:border-primary outline-none transition-colors text-accent-foreground placeholder:text-accent-foreground/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-accent-foreground/40 block mb-3">
                    Interest
                  </label>
                  <select className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 focus:border-primary outline-none transition-colors text-accent-foreground appearance-none cursor-pointer">
                    <option value="" className="bg-accent text-accent-foreground">Select your interest</option>
                    <option value="investment" className="bg-accent text-accent-foreground">Property Investment</option>
                    <option value="development" className="bg-accent text-accent-foreground">Development Opportunities</option>
                    <option value="land" className="bg-accent text-accent-foreground">Land Acquisition</option>
                    <option value="other" className="bg-accent text-accent-foreground">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-accent-foreground/40 block mb-3">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 focus:border-primary outline-none transition-colors text-accent-foreground placeholder:text-accent-foreground/30 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="terracotta"
                  size="xl"
                  className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Inquiry
                  <ArrowUpRight size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
