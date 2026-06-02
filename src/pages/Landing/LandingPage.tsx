import { ActivitiesSection } from "../../components/sections/ActivitiesSection";
import { AttractionsSection } from "../../components/sections/AttractionsSection";
import { BiodiversitySection } from "../../components/sections/BiodiversitySection";
import { CtaSection } from "../../components/sections/CtaSection";
import { GastronomySection } from "../../components/sections/GastronomySection";
import { HeroSection } from "../../components/sections/HeroSection";
import { HotelsSection } from "../../components/sections/HotelsSection";
import { TestimonialsSection } from "../../components/sections/TestimonialsSection";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <AttractionsSection />
      <GastronomySection />
      <BiodiversitySection />
      <ActivitiesSection />
      <HotelsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
