import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border p-0">
        {/* Header */}
        <DialogHeader className="p-8 pb-0">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-secondary flex items-center justify-center shrink-0">
              <service.icon size={28} className="text-primary" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
                Service {service.id}
              </span>
              <DialogTitle className="font-display text-2xl md:text-3xl">
                {service.title}
              </DialogTitle>
              <p className="text-primary/80 text-sm mt-1">{service.subtitle}</p>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <div>
            <p className="text-foreground/70 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {service.highlights.map((highlight, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Our Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.capabilities.map((capability) => (
                <span
                  key={capability}
                  className="text-[10px] tracking-[0.15em] uppercase text-foreground/70 bg-secondary px-4 py-2 border border-border"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-border">
            <a
              href="#contact"
              onClick={onClose}
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 tracking-widest uppercase text-xs font-semibold hover:bg-accent/90 transition-all duration-300 hover:gap-5"
            >
              Get a Quote for This Service
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
