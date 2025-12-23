import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Land Acquisition", href: "#services" },
      { name: "Property Development", href: "#services" },
      { name: "Investment Advisory", href: "#services" },
      { name: "Asset Management", href: "#services" },
    ],
    social: [
      { name: "LinkedIn", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Twitter", href: "#" },
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
                Stay Informed
              </h3>
              <p className="text-accent-foreground/60">
                Receive updates on new developments and investment opportunities.
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
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display text-xl">B</span>
                </div>
                <span className="font-display text-2xl tracking-tight">
                  Bricks & Land
                </span>
              </Link>
              <p className="text-accent-foreground/60 text-sm leading-relaxed max-w-sm mb-6">
                Building foundations that last. Property development and investment 
                for those who value substance over spectacle. Established 2009.
              </p>
              <address className="text-sm not-italic text-accent-foreground/50">
                12 Foundation House<br />
                London EC2A 4BX, UK
              </address>
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
                  href="mailto:hello@bricksandland.com"
                  className="text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                >
                  hello@bricksandland.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-accent-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-accent-foreground/40">
              © {currentYear} Bricks & Land Ltd. All rights reserved. Company No. 12345678
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs text-accent-foreground/40 hover:text-accent-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-accent-foreground/40 hover:text-accent-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-accent-foreground/40 hover:text-accent-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
