import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IsThisYouSection from "@/components/IsThisYouSection";
import IntroducingMindlySection from "@/components/IntroducingMindlySection";
import TestimonialQuote from "@/components/TestimonialQuote";
import CurriculumSection from "@/components/CurriculumSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import BonusesSection from "@/components/BonusesSection";
import PerfectFitSection from "@/components/PerfectFitSection";
import InstructorSection from "@/components/InstructorSection";
import CommunitySection from "@/components/CommunitySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IsThisYouSection />
        <IntroducingMindlySection />
        <TestimonialQuote />
        <CurriculumSection />
        <ResultsSection />
        <TestimonialsSection />
        <PricingSection />
        <BonusesSection />
        <PerfectFitSection />
        <InstructorSection />
        <CommunitySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
