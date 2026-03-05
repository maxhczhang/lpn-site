import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { profiles } from "@/lib/data/profiles";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

interface Props {
  params: { name: string };
}

export async function generateStaticParams() {
  return Object.keys(profiles).map((name) => ({ name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const profile = profiles[params.name];
  if (!profile) return {};
  return {
    title: `${params.name.replace(/_/g, " ")} | Lambda Phi Nu`,
  };
}

export default function ProfilePage({ params }: Props) {
  const profile = profiles[params.name];
  if (!profile) notFound();

  const displayName = params.name.replace(/_/g, " ");

  return (
    <div className="pt-24 pb-24">
      <div className="section-padding max-w-5xl mx-auto">
        {/* Back */}
        <AnimatedSection>
          <Link
            href="/active-brothers"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to Brothers
          </Link>
        </AnimatedSection>

        {/* Profile header */}
        <div className="grid md:grid-cols-[320px_1fr] gap-10 mb-12">
          <AnimatedSection direction="left">
            <div className="relative h-96 rounded-2xl overflow-hidden border border-border">
              <Image
                src={profile.img}
                alt={displayName}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="py-4">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {profile.class} Class · {profile.pronouns}
              </p>
              <h1 className="font-serif text-5xl font-bold text-foreground mb-1">{displayName}</h1>
              <p className="text-lg text-muted-foreground mb-4">{profile.year} Year</p>

              {profile.linkedIn && (
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-muted-foreground transition-colors mb-6"
                >
                  LinkedIn Profile
                  <ExternalLink size={14} />
                </a>
              )}

              <div className="space-y-3 mt-6 text-base">
                {profile.homeTown && (
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Hometown: </span>
                    {profile.homeTown}
                  </p>
                )}
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Major: </span>
                  {profile.major}
                </p>
                {profile.minor && (
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Minor: </span>
                    {profile.minor}
                  </p>
                )}
                {profile.emphasis && (
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Emphasis: </span>
                    {profile.emphasis}
                  </p>
                )}
                {profile.practice && (
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Practice Area: </span>
                    {profile.practice}
                  </p>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Why LPN */}
        {profile.whyLPN && (
          <AnimatedSection delay={0.15} className="mb-10">
            <div className="glass rounded-xl p-8">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Why ΛΦΝ?
              </p>
              <blockquote className="text-foreground text-xl leading-relaxed font-serif italic border-l-2 border-burgundy pl-6">
                &ldquo;{profile.whyLPN}&rdquo;
              </blockquote>
            </div>
          </AnimatedSection>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          {profile.experience && Object.keys(profile.experience).length > 0 && (
            <AnimatedSection delay={0.2}>
              <div className="glass rounded-xl p-6 h-full">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-5">
                  Experience
                </p>
                <div className="space-y-4">
                  {Object.entries(profile.experience).map(([role, company]) => (
                    <div key={`${role}-${company}`} className="border-l border-border pl-4">
                      <p className="text-base font-medium text-foreground">{role}</p>
                      <p className="text-sm text-muted-foreground">{company}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Campus Involvements */}
          {profile.campusInvolvements && Object.keys(profile.campusInvolvements).length > 0 && (
            <AnimatedSection delay={0.25}>
              <div className="glass rounded-xl p-6 h-full">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-5">
                  Campus Involvement
                </p>
                <div className="space-y-4">
                  {Object.entries(profile.campusInvolvements).map(([role, org]) => (
                    <div key={`${role}-${org}`} className="border-l border-border pl-4">
                      <p className="text-base font-medium text-foreground">{role}</p>
                      <p className="text-sm text-muted-foreground">{org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>

        {/* Interests */}
        {profile.interests && profile.interests.length > 0 && (
          <AnimatedSection delay={0.3} className="mt-8">
            <div className="glass rounded-xl p-6">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
