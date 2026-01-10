import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section className="py-20 md:py-28 section-padding bg-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
          Company Profile
        </h2>
        
        <p className="text-foreground/60 max-w-xl mx-auto mb-8">
          Download our comprehensive company profile to learn more about our services, 
          projects, and capabilities.
        </p>
        
        <a 
          href="/INSYNC-Company-Profile.pdf" 
          download="INSYNC-Company-Profile.pdf"
          className="inline-block"
        >
          <Button variant="hero" size="xl" className="gap-3">
            <Download className="w-5 h-5" />
            Download Profile
          </Button>
        </a>
        
        <p className="text-xs text-muted-foreground mt-4">
          PDF • Company Profile 2026
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;
