"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { careersData, careerYears } from "@/lib/data/careers";

export default function CareersClient() {
  const [year, setYear] = useState(careerYears[0]);
  const [tab, setTab] = useState<"internships" | "fullTimes">("internships");

  const data = careersData[year];
  const categories = data[tab];
  const nonEmpty = Object.entries(categories).filter(([, entries]) => entries.length > 0);

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="section-padding max-w-7xl mx-auto py-20 text-center">
        <AnimatedSection>
          <SectionHeader
            title="Careers"
            subtitle="Our brothers have secured internships and full-time positions at some of the world's leading companies."
            centered
            gradient
          />
        </AnimatedSection>
      </section>

      {/* Year tabs */}
      <section className="section-padding max-w-7xl mx-auto pb-8">
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-2">
            {careerYears.map((y) => (
              <button
                key={y}
                onClick={() => { setYear(y); setTab("internships"); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  year === y
                    ? "bg-burgundy text-white"
                    : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-white/20"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Internships / Full Times toggle */}
      <section className="section-padding max-w-7xl mx-auto pb-10">
        <AnimatedSection>
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-border bg-surface p-1 gap-1">
              <button
                onClick={() => setTab("internships")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  tab === "internships" ? "bg-burgundy text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Internships
              </button>
              <button
                onClick={() => setTab("fullTimes")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  tab === "fullTimes" ? "bg-burgundy text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Full-Time
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Category grid */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        {nonEmpty.length === 0 ? (
          <AnimatedSection>
            <p className="text-center text-muted-foreground text-sm">No data yet for {year}.</p>
          </AnimatedSection>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nonEmpty.map(([category, entries], i) => (
              <AnimatedSection key={category} delay={i * 0.04}>
                <div className="glass rounded-xl p-5 h-full">
                  <h3 className="text-xs uppercase tracking-widest text-burgundy mb-4 font-medium">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {entries.map((entry, j) => (
                      <li key={j} className="border-l-2 border-border pl-3">
                        <p className="text-sm font-medium text-foreground leading-tight">{entry.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{entry.position}</p>
                        <p className="text-xs text-burgundy/80 mt-0.5">{entry.company}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
