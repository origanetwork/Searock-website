import HeroSection from "./_components/home/herosection";
import HeroAbout from "./_components/home/heroabout";
import StatsSection from "./_components/home/stats-section";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HeroAbout />
      <StatsSection />
    </>
  );
}