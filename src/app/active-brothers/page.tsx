import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BrotherCard from "@/components/ui/BrotherCard";
import { csuite } from "@/lib/data/csuite";
import { directors } from "@/lib/data/directors";
import { brothers } from "@/lib/data/brothers";
import { profiles } from "@/lib/data/profiles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Active Brothers | Lambda Phi Nu",
};

function getProfileKey(name: string): string | undefined {
  const key = name.replace(/\s+/g, "_").replace(/[^a-zA-Z_]/g, "");
  const profileKeys = Object.keys(profiles);
  return profileKeys.find(
    (k) => k.toLowerCase() === key.toLowerCase() ||
      k.toLowerCase().replace(/_/g, "") === key.toLowerCase().replace(/_/g, "")
  );
}

export default function ActiveBrothersPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="section-padding max-w-7xl mx-auto py-20 text-center">
        <AnimatedSection>
          <SectionHeader
            title="Active Brothers"
            subtitle="Meet the current leadership and active members of Lambda Phi Nu."
            centered
            gradient
          />
        </AnimatedSection>
      </section>

      {/* C-Suite */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <AnimatedSection className="mb-10">
          <SectionHeader eyebrow="Executive Board" title="C-Suite" centered />
        </AnimatedSection>
        <div className="bg-burgundy/10 border border-burgundy/20 rounded-2xl p-6">
          <div className="flex flex-wrap justify-center gap-4">
          {csuite.map((member, i) => {
            const profileKey = getProfileKey(member.name);
            const profile = profileKey ? profiles[profileKey] : undefined;
            return (
              <div key={member.name} className="w-full md:w-[calc(33.33%-11px)] lg:w-[calc(25%-12px)]">
                <AnimatedSection delay={i * 0.06}>
                  <BrotherCard
                    img={member.img}
                    name={member.name}
                    title={member.title}
                    logo={profile?.logo}
                    company={profile?.company}
                    size="md"
                    href={profileKey ? `/active-brothers/${profileKey}` : undefined}
                  />
                </AnimatedSection>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="section-padding max-w-screen-2xl mx-auto pb-20">
        <AnimatedSection className="mb-10">
          <SectionHeader eyebrow="Leadership" title="Directors & Recruiters" centered />
        </AnimatedSection>
        <div className="bg-burgundy/10 border border-burgundy/20 rounded-2xl p-6">
          <div className="flex flex-wrap justify-center gap-4">
          {directors.map((director, i) => {
            const profileKey = getProfileKey(director.name);
            const profile = profileKey ? profiles[profileKey] : undefined;
            return (
              <div key={director.name} className="w-full md:w-[calc(33.33%-11px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)]">
                <AnimatedSection delay={(i % 5) * 0.06}>
                  <BrotherCard
                    img={director.img}
                    name={director.name}
                    title={director.title}
                    logo={profile?.logo}
                    company={profile?.company}
                    href={profileKey ? `/active-brothers/${profileKey}` : undefined}
                  />
                </AnimatedSection>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Active Brothers */}
      <section className="section-padding max-w-screen-2xl mx-auto pb-20">
        <AnimatedSection className="mb-10">
          <SectionHeader eyebrow="Brotherhood" title="Active Members" centered />
        </AnimatedSection>
        <div className="bg-burgundy/10 border border-burgundy/20 rounded-2xl p-6">
          <div className="flex flex-wrap justify-center gap-4">
          {brothers.map((brother, i) => {
            const profileKey = getProfileKey(brother.name);
            const profile = profileKey ? profiles[profileKey] : undefined;
            return (
              <div key={brother.name} className="w-full md:w-[calc(33.33%-11px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)]">
                <AnimatedSection delay={(i % 5) * 0.04}>
                  <BrotherCard
                    img={brother.img}
                    name={brother.name}
                    logo={profile?.logo}
                    company={profile?.company}
                    size="sm"
                    href={profileKey ? `/active-brothers/${profileKey}` : undefined}
                  />
                </AnimatedSection>
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </div>
  );
}
