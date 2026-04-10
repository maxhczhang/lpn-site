"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  involvements2025,
  involvements2024,
  involvements2023,
  involvements2022,
  involvements2021,
  involvements2020,
  involvements2019,
  involvements2018,
  foundedOrgs,
} from "@/lib/data/involvements";
import type { Involvement } from "@/lib/data/involvements";
import { cn } from "@/lib/utils";

const orgsLogos = [
  { img: "/assets/orgsLogos/MUSA.jpeg", title: "Merage Undergraduate Student Association", link: "http://www.businessuci.com" },
  { img: "/assets/orgsLogos/AA.png", title: "Accounting Association", link: "https://www.accountinguci.com" },
  { img: "/assets/orgsLogos/BAP.png", title: "Beta Alpha Psi", link: "https://www.accountinguci.com/aboutbap.html" },
  { img: "/assets/orgsLogos/HRMA.png", title: "Human Resources Management Association", link: "https://hrmauci.wixsite.com/hrma" },
  { img: "/assets/orgsLogos/MAISS.png", title: "Management Information Student Society", link: "http://www.maissuci.com" },
  { img: "/assets/orgsLogos/SMIF.png", title: "Student Managed Investment Fund", link: "https://ucismif.weebly.com" },
  { img: "/assets/orgsLogos/UFA.png", title: "Undergraduate Finance Association", link: "https://ufauci.wixsite.com/ufauci" },
  { img: "/assets/orgsLogos/ISBA.png", title: "International Student Business Association", link: "https://campusgroups.uci.edu/iba/home/" },
];

const yearTabs = [
  { label: "2025", data: involvements2025 },
  { label: "2024", data: involvements2024 },
  { label: "2023", data: involvements2023 },
  { label: "2022", data: involvements2022 },
  { label: "2021", data: involvements2021 },
  { label: "2020", data: involvements2020 },
  { label: "2019", data: involvements2019 },
  { label: "2018", data: involvements2018 },
];

export default function CampusInvolvementsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const currentData = yearTabs[activeTab].data;
  const orgNames = Object.keys(currentData);

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="section-padding max-w-7xl mx-auto py-20 text-center">
        <AnimatedSection>
          <SectionHeader
            eyebrow="On Campus"
            title="Campus Involvements"
            centered
            gradient
          />
        </AnimatedSection>
      </section>

      {/* Org logos */}
      <section className="section-padding max-w-5xl mx-auto pb-16">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {orgsLogos.map((org, i) => (
            <AnimatedSection key={org.title} delay={i * 0.06}>
              <a
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-110"
              >
                <Image
                  src={org.img}
                  alt={org.title}
                  width={120}
                  height={90}
                  className="object-scale-down h-[70px] md:h-[90px] w-auto"
                />
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="max-w-3xl mx-auto mt-12">
          <p className="text-muted-foreground text-lg leading-relaxed text-center">
            Our brothers have founded eight of Merage&apos;s premier business organizations,
            including Beta Alpha Psi&apos;s Nu Pi Chapter, Management Information Student Society,
            Undergraduate Finance Association, and more! Many of our Active Brothers still hold
            positions in these amazing organizations, developing themselves as leaders and
            impacting the community around them in the process.
          </p>
        </AnimatedSection>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Year tabs */}
      <section className="section-padding max-w-6xl mx-auto py-16">
        <AnimatedSection>
          <div className="flex justify-center mb-12">
            <div className="glass rounded-lg p-1 inline-flex gap-1">
              {yearTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "px-6 py-2.5 rounded-md text-sm font-semibold transition-all",
                    activeTab === i
                      ? "bg-burgundy text-white"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Involvement cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {orgNames.map((orgName, i) => {
            const members = currentData[orgName];
            const isFounded = foundedOrgs.includes(orgName);
            return (
              <AnimatedSection key={orgName} delay={i * 0.06}>
                <div className="glass rounded-xl p-6 h-full hover:-translate-y-1 transition-transform">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {orgName}
                    </h3>
                    {isFounded && (
                      <span className="shrink-0 text-[10px] font-semibold tracking-widest uppercase text-burgundy border border-burgundy/30 rounded-full px-2.5 py-0.5">
                        Founded
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    {members.map((member: Involvement, j: number) => (
                      <div
                        key={`${member.name}-${j}`}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="text-foreground">{member.name}</span>
                        <span className="text-muted-foreground text-right text-xs">
                          {member.position}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </div>
  );
}
