import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { facts } from "@/lib/data/facts";
import { coreValues } from "@/lib/data/coreValues";
import { chartData } from "@/lib/data/chartData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lambda Phi Nu",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="section-padding max-w-7xl mx-auto py-20 text-center">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Lambda Phi Nu"
            title="Who Are We?"
            centered
            gradient
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="max-w-3xl mx-auto mt-8">
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            Lambda Phi Nu is a co-ed business leadership fraternity founded at UCI committed to inspiring
            the best in everyone. Our brothers aspire to become the innovative leaders of tomorrow
            in fields such as Consulting, Software Engineering, Product Marketing, and more.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            During their time on campus, each of our brothers left behind a legacy because they saw
            a need to fill, a problem to solve, or someone to care about. We are inspired to carry
            on the torch they left us.
          </p>
        </AnimatedSection>
      </section>

      {/* Stats bento */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <AnimatedSection className="mb-10">
          <SectionHeader eyebrow="By The Numbers" title="Our Brotherhood" />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "Gender", items: chartData.Gender.data },
            { title: "Major", items: chartData.Major.data },
            { title: "Industry", items: chartData.Industry.data },
          ].map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 h-full">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  {category.title}
                </p>
                <div className="space-y-2.5">
                  {category.items.map((item) => {
                    const total = category.items.reduce((s, x) => s + x.value, 0);
                    const pct = Math.round((item.value / total) * 100);
                    return (
                      <div key={item.title}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">{item.title}</span>
                          <span className="text-foreground font-medium">{pct}%</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${pct}%`, backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why LPN - Facts */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <AnimatedSection className="mb-10">
          <SectionHeader eyebrow="By The Numbers" title="Why ΛΦΝ?" />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {facts.map((fact, i) => (
            <AnimatedSection key={fact.title} delay={i * 0.08}>
              <div className="glass rounded-xl p-8 text-center hover:border-white/10 transition-all hover:-translate-y-1 cursor-default">
                <p className="font-serif text-4xl font-bold text-foreground mb-2">{fact.answer}</p>
                <p className="text-sm text-muted-foreground">{fact.title}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <AnimatedSection className="mb-10">
          <SectionHeader eyebrow="Our Foundation" title="Core Values" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreValues.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.08}>
              <div className="glass rounded-xl p-8 h-full hover:-translate-y-1 transition-transform">
                <div className="w-8 h-0.5 bg-burgundy mb-5" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* History parallax divider */}
      <div className="relative h-[50vh] overflow-hidden my-10">
        <Image
          src="/assets/about/Founders.png"
          alt="LPN Founders"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/65 flex items-center justify-center">
          <AnimatedSection>
            <h2 className="font-serif text-6xl md:text-7xl font-bold text-foreground">History</h2>
          </AnimatedSection>
        </div>
      </div>

      {/* Heritage section */}
      <section className="section-padding max-w-4xl mx-auto py-20">
        <AnimatedSection>
          <SectionHeader eyebrow="Our Story" title="Our Heritage" />
        </AnimatedSection>

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <AnimatedSection delay={0.1}>
            <p>
              The 2008 Financial Crisis was the catalyst for starting Lambda Phi Nu. At a macro level,
              the housing bubble burst, the Dow Jones crashed to a historical low, and 1.2 million jobs
              were lost within one year. At a micro-level, students felt the impact with rising tuition,
              curtailed financial aid, and faculty shortages. To make matters worse, UCI&apos;s business
              program was still young; its undergraduate business program initiated its first 200
              students in the Fall of 2008.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p>
              In the midst of these challenging times, a group of student leaders wanted to create
              opportunities for UCI&apos;s business students. It began with the Accounting Association
              Officer Board seeking to make UCI a target school for public accounting firms. In the
              summer of 2010, our founding Chief Executive Officer decided to extend this spirit of
              brotherhood to student leaders in other organizations. Lambda Phi Nu was born.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p>
              Although a majority of the Founders already received full-time offers, they spent their
              senior years mentoring students, growing sponsorships, and launching new initiatives.
              Their motive was to give back to UCI and cultivate a legacy of student leaders who also
              wanted to give back. In the words of the Apostle Paul, &ldquo;do nothing out of selfish
              ambition or vain conceit.&rdquo; Our reason to exist has been, and will always be, to &ldquo;Grow
              Forward, Give Back.&rdquo;
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-16">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Chapter Founding & Rebranding
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The Chapter was founded in 2010 as Beta Alpha Psi and re-branded into Lambda Phi Nu in
            2014 due to fundamental differences within organizational structures. Standard Beta Alpha
            Psi chapters operate under an honor society structure; however the Irvine chapter sought
            to operate as a fraternity.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="glass rounded-xl p-6">
              <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                Founding C-Suite
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mr. Dennis Yu (CEO), Mr. Michael Wen (CFO), Mr. Brandon Shiaw (CIO), Mr. Art Reyes (COO),
                Ms. Emily Rong (CTO)
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                Founding Fathers
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ms. Iris Chan, Mr. Edward Chow, Mr. Nathan Kobayashi, Ms. Christine Liao, Ms. Lucy Luxiao,
                Ms. Michelle Nguyen, Ms. Eva Park, Mr. James Shen, Mr. Adam Whitescarver, Ms. Jessica Wong,
                Ms. Tonie Zhu
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
