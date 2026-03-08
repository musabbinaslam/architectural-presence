import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clients = [
  "Pakistan Engineering Council",
  "Bahria Town",
  "DHA Islamabad",
  "Capital Development Authority",
  "National Highway Authority",
  "Nespak",
  "FWO Pakistan",
  "Frontier Works Organization",
];

const ClientLogos = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 section-padding border-t border-b border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p
          ref={ref as React.RefObject<HTMLParagraphElement>}
          className={`text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-10 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Trusted by Leading Organizations
        </p>

        {/* Scrolling logos */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-[scroll_30s_linear_infinite] gap-16 items-center">
              {[...clients, ...clients].map((name, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-4"
                >
                  <span className="text-sm font-medium tracking-wider text-muted-foreground/60 hover:text-foreground/80 transition-colors whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
