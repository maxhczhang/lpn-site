import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  gradient = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center" : "", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight",
          gradient ? "gradient-text" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
