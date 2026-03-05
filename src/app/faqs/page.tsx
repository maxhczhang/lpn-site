import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Lambda Phi Nu",
};

export default function FAQsPage() {
  return (
    <div className="pt-24 pb-24">
      <section className="section-padding max-w-3xl mx-auto py-20">
        <AnimatedSection className="text-center mb-14">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Lambda Phi Nu and our recruitment process."
            centered
            gradient
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl border-0 px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-14 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-burgundy hover:bg-[hsl(var(--burgundy-hover))] text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
