import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import { carouselPhotos1 } from "@/lib/data/companyLogos";

const pillars = [
  {
    title: "Professionalism",
    body: "With 16+ years of history at UCI, we have an expansive network of alumni in different industries and companies. Our Active and Alumni brothers help guide and support you to succeed in the professional world.",
    link: "/careers",
    linkLabel: "View Careers",
  },
  {
    title: "Brotherhood",
    body: "We aspire to become visionaries, influencers, and mobilizers. We help shape the next generation of business leaders, all while taking care of our brothers, giving back to our community, and making memories.",
    link: "/gallery",
    linkLabel: "View Gallery",
  },
];

export default function MissionSection() {
  return (
    <section className="py-28 section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <AnimatedSection>
            <SectionHeader
              eyebrow="Who We Are"
              title="Built for the Business Leaders of Tomorrow"
              subtitle="Lambda Phi Nu is a co-ed business leadership fraternity committed to inspiring the best in everyone. Our brothers aspire to become the innovative leaders of tomorrow."
            />
          </AnimatedSection>

          <div className="mt-12 space-y-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={0.1 * (i + 1)}>
                <div className="border-l-2 border-burgundy pl-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {pillar.body}
                  </p>
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {pillar.linkLabel}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Right: photo grid */}
        <AnimatedSection direction="right" delay={0.2}>
          <div className="grid grid-cols-2 gap-3 h-[520px]">
            <div className="relative rounded-xl overflow-hidden row-span-2">
              <Image
                src={carouselPhotos1[0]}
                alt="LPN Brotherhood"
                fill
                className="object-cover object-top"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={carouselPhotos1[1]}
                alt="LPN Brothers"
                fill
                className="object-cover object-top"
                sizes="20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={carouselPhotos1[2]}
                alt="LPN Events"
                fill
                className="object-cover object-top"
                sizes="20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
