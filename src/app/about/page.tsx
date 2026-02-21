"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <FadeIn>
              <h1 className="text-3xl md:text-4xl font-semibold mb-8">
                About Me
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-gray-600 leading-relaxed mb-4">
                I run a lot. I&apos;ve completed 11 marathons. Most recent was the
                2025 San Francisco Marathon (my second time), and when I
                previously lived in New York, I ran the New York City Marathon
                five times.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <a
                href="https://www.strava.com/athletes/108952965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-black hover:underline mb-6"
              >
                My Strava →
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-600 leading-relaxed">
                Prior to my career in tech I worked in the performing arts and the
                service industry. I did quite a few things, including: cruise ship
                singer, introductory level sommelier, and short film
                writer/director.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn delay={0.2} direction="right">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/about-1.png"
                  alt="John Walbolt"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="right">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/about-2.png"
                  alt="John Walbolt"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
