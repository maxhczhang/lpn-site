import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { homeCoreValues } from "@/lib/data/coreValues";

export default function CoreValuesTeaser() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/Values_Separator.jpg"
          alt="Our Values"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <SectionHeader
            eyebrow="Our Foundation"
            title="Our Core Values"
            subtitle="The principles that define our brotherhood and guide everything we do."
            centered
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {homeCoreValues.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.12}>
              <div className="glass rounded-xl p-8 h-full hover:border-white/10 transition-colors">
                <div className="w-8 h-0.5 bg-burgundy mb-5" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={0.4}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            See all 5 Core Values
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
