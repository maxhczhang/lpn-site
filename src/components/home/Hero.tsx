"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import WordRotate from "@/components/ui/WordRotate";

export default function Hero() {
  return (
    <>
      {/* Full-screen background section — logo + identity only */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/backgrounds/Home.jpg"
            alt="Lambda Phi Nu"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        </div>

        {/* Logo + identity */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-4"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="/assets/lpn_assets/logo_white.png"
                alt="Lambda Phi Nu"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-serif text-4xl font-bold text-foreground mb-3 tracking-widest"
          >
            ΛΦΝ
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif text-l font-semibold tracking-[0.3em] uppercase text-muted-foreground"
          >
            Lambda Phi Nu · UC Irvine&apos;s Business Leadership Fraternity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-sm tracking-[0.2em] uppercase text-muted-foreground/70"
          >
            <WordRotate
              words={["Integrity", "Curiosity", "Altruism", "Relationships", "Excellence"]}
              className="font-serif text-muted-foreground font-medium"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Legacy content section */}
      <section className="relative z-10 py-28 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4"
        >
          Our Legacy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-10"
        >
          Grow Forward.{" "}
          <span className="text-foreground font-medium">Give Back.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
        >
          We&apos;re a UC Irvine-founded business fraternity for students seeking
          leadership development and coaching. We immerse our members into an
          environment that emulates the professional world and form strong bonds
          that last a lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/active-brothers"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-burgundy hover:bg-[hsl(var(--burgundy-hover))] text-white font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-burgundy/20"
          >
            Meet Our Brothers
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/recruitment"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground hover:bg-white/5 font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Rush LPN
          </Link>
        </motion.div>
      </section>
    </>
  );
}
