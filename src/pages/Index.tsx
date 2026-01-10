import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedSection from "@/components/FeaturedSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <ServicesSection />
        <FeaturedSection />
        <ProjectsSection />
        <TeamSection />
        <TestimonialsSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
