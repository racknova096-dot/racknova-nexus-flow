import { HeroSection } from "@/components/sections/HeroSection"
import { BenefitsSection } from "@/components/sections/BenefitsSection"
import { StrategicBenefitsSection } from "@/components/sections/StrategicBenefitsSection"
import { SystemPreviewSection } from "@/components/sections/SystemPreviewSection"
import { CTASection } from "@/components/sections/CTASection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <StrategicBenefitsSection />
      <div id="sistema">
        <SystemPreviewSection />
      </div>
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;