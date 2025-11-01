import dynamic from 'next/dynamic';
import HeroSection from "./_components/home/herosection";
import HeroAbout from "./_components/home/heroabout";
import HeroStory from "./_components/home/hero-story";
import CollectionsSection from "./_components/home/collections-section";
import PartnersSection from "./_components/home/partners-section";
import TestimonialsSection from "./_components/home/testimonials-section";
import HomeContact from "./_components/shared/home-contact";

// Dynamic import for below-the-fold content
// This reduces initial bundle size and improves Time to Interactive (TTI)
// GSAP library (~30KB) and ScrollTrigger (~8KB) are loaded on-demand
const StatsSection = dynamic(
  () => import("./_components/home/stats-section"),
  {
    loading: () => (
      // Optional: Skeleton loader while component loads
      // Remove this if you want instant render without placeholder
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white py-10 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="h-20 w-3/4 mx-auto mb-10 bg-gray-200 animate-pulse rounded-lg" />
          <div className="grid grid-cols-2 gap-3 px-2 mb-10 sm:gap-6 md:gap-8 lg:gap-10">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-48 bg-gray-200 animate-pulse rounded-3xl"
              />
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: true, // Enable SSR for SEO (renders on server, hydrates on client)
  }
);

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HeroAbout />
      <StatsSection />
      <HeroStory />
      <CollectionsSection />
      <PartnersSection />
      <TestimonialsSection />
      <HomeContact />
    </>
  );
}