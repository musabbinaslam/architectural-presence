import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-lg">B</span>
              </div>
              <span className="font-display text-xl tracking-tight">
                Bricks & Land
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Building foundations that last. Property development and investment 
              for those who value substance over spectacle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {["About", "Projects", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Connect
            </h4>
            <nav className="flex flex-col gap-3">
              {["LinkedIn", "Instagram", "Twitter"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Bricks & Land. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
