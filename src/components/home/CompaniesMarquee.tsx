import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { companyLogos } from "@/lib/data/companyLogos";

export default function CompaniesMarquee() {
  // Double the array for seamless loop
  const doubled = [...companyLogos, ...companyLogos];

  return (
    <section className="py-24 section-padding max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-14">
        <SectionHeader
          eyebrow="Alumni & Active Brothers"
          title="Where We've Worked"
          subtitle="Our brothers have gone on to work at some of the world's most respected companies."
          centered
        />
      </AnimatedSection>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex gap-10 animate-marquee w-max">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 h-10 w-28 grayscale opacity-40 hover:grayscale-0 hover:opacity-90 transition-all duration-300"
            >
              <Image
                src={logo}
                alt="Company"
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
