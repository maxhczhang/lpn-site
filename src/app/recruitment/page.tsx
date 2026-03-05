import Link from "next/link";
import { Calendar, Clock, MapPin, Shirt, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { rushEvents } from "@/lib/data/rushEvents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment | Lambda Phi Nu",
};

export default function RecruitmentPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="section-padding max-w-7xl mx-auto py-20 text-center">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Alpha Delta Class Recruitment"
            title="Fall Rush 2025"
            centered
            gradient
          />
        </AnimatedSection>
        <AnimatedSection delay={0.15} className="max-w-3xl mx-auto mt-8">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Lambda Phi Nu is a co-ed Business Leadership Fraternity founded at UC Irvine in 2010 for
            students seeking to develop their leadership potential and to foster their professional
            and personal growth. With over 300 Active and Alumni brothers, we are now actively
            recruiting for our Alpha Delta class!
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Many of our brothers began their college experiences feeling unsure of their potential.
            Through our development curriculum and lifelong support, they went on to become leaders
            in campus organizations and excel in internships and full-time roles at companies like
            Microsoft, Goldman Sachs, Deloitte, and more!
          </p>
        </AnimatedSection>

        {/* Application deadline */}
        <AnimatedSection delay={0.25} className="mt-10">
          <div className="inline-block glass rounded-xl px-8 py-5 text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Application Deadline
            </p>
            <p className="font-serif text-2xl font-bold text-foreground">
              October 9th, 2025 · 6:30 PM PST
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.35} className="mt-8">
          <a
            href="http://tinyurl.com/lpnfallrush2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-burgundy hover:bg-[hsl(var(--burgundy-hover))] text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Apply Now
            <ArrowRight size={16} />
          </a>
        </AnimatedSection>
      </section>

      {/* Rush Events */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <AnimatedSection className="mb-10">
          <SectionHeader eyebrow="Rush Schedule" title="Recruitment Events" />
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-5">
          {rushEvents.map((event, i) => (
            <AnimatedSection key={event.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 h-full hover:-translate-y-1 transition-transform">
                <div className="w-8 h-0.5 bg-burgundy mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shirt size={14} />
                    {event.dressCode}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                {event.calendly && (
                  <a
                    href={event.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors mt-4"
                  >
                    Sign up on Calendly
                    <ArrowRight size={13} />
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA row */}
      <section className="section-padding max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="glass rounded-2xl p-10 text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Ready to Join Lambda Phi Nu?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              If you&apos;re looking to grow professionally, be part of a lifelong community, and leave
              your legacy on the UCI community, join us this fall.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/about"
                className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-white/5 font-medium transition-colors"
              >
                Why LPN?
              </Link>
              <Link
                href="/faqs"
                className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-white/5 font-medium transition-colors"
              >
                FAQs
              </Link>
              <a
                href="http://tinyurl.com/lpnfallrush2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-burgundy hover:bg-[hsl(var(--burgundy-hover))] text-white font-medium transition-all duration-200"
              >
                Apply
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
