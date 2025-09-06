import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { BenefitsSection } from "@/components/sections/BenefitsSection"
import { MissionVisionSection } from "@/components/sections/MissionVisionSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { BusinessValueSection } from "@/components/sections/BusinessValueSection"
import { CTASection } from "@/components/sections/CTASection"
import { TestimonialSection } from "@/components/sections/TestimonialSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" id="inicio">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <MissionVisionSection />
      <HowItWorksSection />
      <BusinessValueSection />
      <CTASection />
      <TestimonialSection />
      <div id="sistema">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;