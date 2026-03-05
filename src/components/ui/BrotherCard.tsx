"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BrotherCardProps {
  img: string;
  name: string;
  title?: string;
  logo?: string;
  company?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrotherCard({
  img,
  name,
  title,
  logo,
  company,
  href,
  size = "md",
  className,
}: BrotherCardProps) {
  const heightMap = { sm: "h-96", md: "h-96", lg: "h-60" };

  const Card = (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative rounded-xl overflow-hidden border border-border bg-surface cursor-pointer",
        className
      )}
    >
      {/* Photo */}
      <div className={cn("relative w-full", heightMap[size])}>
        <Image
          src={img}
          alt={name}
          fill
          className={cn(
            "object-cover object-top transition-all duration-500 group-hover:scale-105",
            logo && "group-hover:blur-sm"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Company logo overlay */}
        {logo && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src={logo}
              alt={company ?? "company"}
              width={96}
              height={96}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 text-center">
        <p className="font-semibold text-foreground text-sm leading-tight">{name}</p>
        <p className="text-xs text-muted-foreground mt-0.5 min-h-[1.25rem]">
          {title || company || "\u00A0"}
        </p>
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{Card}</Link>;
  }

  return Card;
}
