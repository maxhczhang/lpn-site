"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: 16, suffix: "+", label: "Years at UCI" },
  { value: 300, suffix: "+", label: "Active & Alumni Brothers" },
  { value: 100, suffix: "%", label: "Internship Placement Rate" },
  { value: 9, suffix: "", label: "Business Orgs Founded" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
