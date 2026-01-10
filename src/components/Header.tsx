import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4 shadow-subtle"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="InSync Construction Company" 
            className="h-12 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/60 hover:text-foreground tracking-widest uppercase text-[11px] font-medium transition-all duration-300 link-underline"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button 
          variant="terracotta" 
          size="sm" 
          className="hidden md:flex group magnetic-hover"
        >
          <span className="relative z-10">Get a Quote</span>
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 transition-transform duration-300 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
              }`} 
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-padding py-8 flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-foreground/70 hover:text-foreground tracking-widest uppercase text-sm font-medium transition-all duration-500 ${
                isMobileMenuOpen 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : "0ms" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="terracotta" 
            size="lg" 
            className={`mt-4 transition-all duration-500 ${
              isMobileMenuOpen 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "350ms" : "0ms" }}
          >
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
