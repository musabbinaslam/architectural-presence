import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Team", href: "#team" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Design & Visualization", href: "#services" },
      { name: "Engineering & Construction", href: "#services" },
      { name: "Project Management", href: "#services" },
      { name: "Renovation Services", href: "#services" },
    ],
    social: [
      { name: "LinkedIn", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Facebook", href: "#" },
    ],
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter Section */}
      <div className="section-padding py-16 border-b border-accent-foreground/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-2">
                Stay Updated
              </h3>
              <p className="text-accent-foreground/60">
                Receive updates on our latest projects and construction insights.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-accent-foreground/10 border border-accent-foreground/20 px-4 py-3 text-accent-foreground placeholder:text-accent-foreground/40 focus:border-primary outline-none transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 tracking-widest uppercase text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                Subscribe
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img 
                  src={logoFooter} 
                  alt="InSync Construction Company" 
                  className="h-20 w-auto"
                />
              </Link>
              <p className="text-accent-foreground/60 text-sm leading-relaxed max-w-sm mb-6">
                Building with Precision. Professional construction services for 
                residential and commercial projects. Quality, safety, and excellence 
                since 2018.
              </p>
              <div className="space-y-2">
                <address className="text-sm not-italic text-accent-foreground/50">
                  191, Street 98, Sector I-8/4<br />
                  Islamabad, Pakistan
                </address>
                <p className="text-sm text-accent-foreground/50">
                  PEC Certified | ISO 9001
                </p>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-accent-foreground/40 mb-6">
                Explore
              </h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.explore.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-accent-foreground/40 mb-6">
                Services
              </h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.services.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-accent-foreground/40 mb-6">
                Connect
              </h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-accent-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    {item.name}
                    <ArrowUpRight 
                      size={12} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 pt-8 border-t border-accent-foreground/10">
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent-foreground/40 mb-3">
                  Contact
                </p>
                <a 
                  href="mailto:info@insyncpk.com"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors block mb-2"
                >
                  info@insyncpk.com
                </a>
                <a 
                  href="tel:+923009204444"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  +92 300 9204444
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-accent-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-accent-foreground/40">
              © {currentYear} INSYNC Construction. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs text-accent-foreground/40 hover:text-accent-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-accent-foreground/40 hover:text-accent-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
