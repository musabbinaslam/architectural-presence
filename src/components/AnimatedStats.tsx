import { useCountUp } from "@/hooks/useCountUp";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

const stats: StatItem[] = [
  { value: 7, suffix: "+", label: "Years Experience", detail: "Since 2018" },
  { value: 50, suffix: "+", label: "Projects Delivered", detail: "Across Pakistan" },
  { value: 100, suffix: "%", label: "Quality Commitment", detail: "Zero shortcuts" },
  { value: 12, suffix: "", label: "Month Warranty", detail: "Post-completion" },
];

const StatCard = ({ stat, index }: { stat: StatItem; index: number }) => {
  const { ref, formattedCount, isVisible } = useCountUp({
    end: stat.value,
    suffix: stat.suffix,
    duration: 2000,
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center md:text-left group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100 + 100}ms` }}
    >
      <p className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
        {formattedCount}
      </p>
      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
        {stat.label}
      </p>
      <p className="text-xs text-foreground/40">{stat.detail}</p>
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} />
      ))}
    </div>
  );
};

export default AnimatedStats;
