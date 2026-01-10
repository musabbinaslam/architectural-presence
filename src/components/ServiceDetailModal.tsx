import { ArrowRight, X } from "lucide-react";
import { LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  capabilities: string[];
  icon: LucideIcon;
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetailModal = ({ service, isOpen, onClose }: ServiceDetailModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="fixed left-4 right-4 top-[50%] translate-y-[-50%] w-auto max-w-md max-h-[calc(100dvh-32px)] overflow-y-auto overflow-x-hidden bg-background border-border p-0 shadow-2xl shadow-black/40 rounded-xl sm:left-[50%] sm:right-auto sm:w-full sm:translate-x-[-50%] sm:max-h-[80vh] [&>button]:hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full p-1.5 bg-secondary/80 hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X size={16} className="text-foreground/70" />
        </button>

        {/* Header */}
        <DialogHeader className="p-5 pb-0 pr-12">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-secondary flex items-center justify-center shrink-0 rounded-lg">
              <service.icon size={20} className="text-primary" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground block mb-1">
                Service {service.id}
              </span>
              <DialogTitle className="font-display text-lg md:text-xl">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-primary/80 text-xs mt-0.5">
                {service.subtitle}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Description */}
          <div>
            <p className="text-foreground/70 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {service.highlights.map((highlight, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-foreground/80 text-sm"
                >
                  <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Our Capabilities
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="text-[9px] tracking-[0.15em] uppercase text-foreground/70 bg-secondary px-3 py-1.5 border border-border rounded"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-3 border-t border-border">
            <a
              href="#contact"
              onClick={onClose}
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 tracking-widest uppercase text-[10px] font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-4 rounded"
            >
              Get a Quote
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
