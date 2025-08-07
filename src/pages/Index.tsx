import CinematicHero from "@/components/CinematicHero";
import ProblemSection from "@/components/ProblemSection";
import ProcessJourney from "@/components/ProcessJourney";
import BenefitsSection from "@/components/BenefitsSection";
import TechOrchestra from "@/components/TechOrchestra";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CinematicHero />
      <ProblemSection />
      <ProcessJourney />
      <BenefitsSection />
      <TechOrchestra />
      <FinalCTA />
    </div>
  );
};

export default Index;
