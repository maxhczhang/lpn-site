import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import MissionSection from "@/components/home/MissionSection";
import CoreValuesTeaser from "@/components/home/CoreValuesTeaser";
import CompaniesMarquee from "@/components/home/CompaniesMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <MissionSection />
      <CoreValuesTeaser />
      <CompaniesMarquee />
    </>
  );
}
