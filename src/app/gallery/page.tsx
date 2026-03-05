import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { galleryPhotos } from "@/lib/data/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Lambda Phi Nu",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-24">
      <section className="section-padding max-w-7xl mx-auto py-16 text-center">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Memories"
            title="Gallery"
            subtitle="A look at the moments that define our brotherhood."
            centered
            gradient
          />
        </AnimatedSection>
      </section>

      <div className="section-padding max-w-7xl mx-auto">
        <AnimatedSection delay={0.2}>
          {/* Masonry-style CSS grid */}
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl break-inside-avoid mb-3 group"
                style={{ aspectRatio: photo.cols > photo.rows ? "16/9" : photo.rows > photo.cols ? "2/3" : "1/1" }}
              >
                <Image
                  src={photo.img}
                  alt={`LPN Gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
