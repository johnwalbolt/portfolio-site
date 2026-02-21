"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { ReactNode } from "react";

interface ProjectPageProps {
  children: ReactNode;
}

export function ProjectHero({ src, alt }: { src: string; alt: string }) {
  return (
    <FadeIn>
      <div className="w-full overflow-hidden rounded-lg ">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </FadeIn>
  );
}

export function ProjectOverview({
  title,
  overview,
  involvement,
  impact,
}: {
  title: string;
  overview: string;
  involvement: string;
  impact: string | ReactNode;
}) {
  return (
    <div className="space-y-8">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FadeIn delay={0.1}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">{overview}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
              My Involvement
            </h3>
            <p className="text-gray-600 leading-relaxed">{involvement}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
              Impact
            </h3>
            <div className="text-gray-600 leading-relaxed">{impact}</div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export function ProjectSection({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <FadeIn>
      <div className={className}>
        {title && (
          <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        )}
        {children}
      </div>
    </FadeIn>
  );
}

export function ProjectImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <FadeIn>
      <div className={`overflow-hidden rounded-lg  ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </FadeIn>
  );
}

export function ProjectImageRow({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((img, i) => (
        <FadeIn key={img.src} delay={i * 0.1}>
          <div className="overflow-hidden rounded-lg ">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default function ProjectPage({ children }: ProjectPageProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 space-y-16 md:space-y-20">
        {children}
      </div>
    </div>
  );
}
