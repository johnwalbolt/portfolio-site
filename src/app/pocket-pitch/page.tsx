"use client";

import ProjectPage, {
  ProjectHero,
  ProjectOverview,
  ProjectSection,
  ProjectImage,
  ProjectImageRow,
} from "@/components/ProjectPage";
import FadeIn from "@/components/FadeIn";

export default function PocketPitch() {
  return (
    <ProjectPage>
      <ProjectHero
        src="/images/pocket-pitch-hero.png"
        alt="Pocket Pitch app hero"
      />

      <ProjectOverview
        title="Pocket Pitch"
        overview="95%+ of singers have relative pitch and cannot identify notes without a reference tool. Pocket Pitch solves this problem as a mobile app."
        involvement="I founded and designed this app since 2015, collaborated with freelance developers through 2023, worked with a music producer for audio, and now develop updates using AI."
        impact={
          <div className="space-y-2">
            <p>Monthly Active Users: <strong>40,000+</strong></p>
            <p>Average Rating: <strong>4.6 Stars</strong></p>
            <p>Total Reviews: <strong>1,900+</strong></p>
            <p className="text-sm italic">#1 result for Pitch Pipe on App Store</p>
          </div>
        }
      />

      <ProjectImage
        src="/images/pocket-pitch-features.png"
        alt="Pitch Pipe and Piano features"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FadeIn delay={0.1}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
              Users
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The largest demographic of users are non-professional singers who
              are performing or practicing fairly regularly. For example, this
              could mean members of a church or school choir. Additionally there
              are also other musicians and singers who just want a handy tool for
              personal use.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
              Key Features
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The pitch pipe, piano, and tuner are the key features of Pocket
              Pitch, and they were added to the app in that order. Each
              additional feature or feature&apos;s settings were added over time
              based on user feedback collected via email or public reviews.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
              Goal
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The goal of Pocket Pitch is to offer these basic tools to singers
              for free, and make their practicing and performances easier and
              more successful. Revenue is generated via Ads and in-app purchases.
            </p>
          </div>
        </FadeIn>
      </div>

      <ProjectImage
        src="/images/pocket-pitch-tuner.png"
        alt="Pocket Pitch tuner feature"
      />

      <FadeIn>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
            Premium Offerings
          </h3>
          <p className="text-gray-600 leading-relaxed">
            As of late 2025, I am adding Vocal Warmups as a premium feature
            that will be offered as part of a in-app subscription. This will
            not only include custom Vocal Warmups, but also the ability for
            users to track how much time they are spending warming up and
            practicing each day, week, month.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            An introductory free version of this feature is currently available
            for users to try.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="overflow-hidden rounded-lg  w-full" style={{ aspectRatio: "1800 / 735" }}>
          <img
            src="/images/pocket-pitch-warmups.png"
            alt="Vocal Warmups premium feature"
            className="w-auto h-full mx-auto object-contain"
          />
        </div>
      </FadeIn>

      <FadeIn>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
            Fun Milestones
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I founded this app in 2015 while working as a singer (pictured as
            Santa Claus) and then in 2024 Pocket Pitch became the official app
            of a Broadway Show (pictured still from social media post). A very
            cool full circle moment for myself!
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-center">
          <div className="overflow-hidden rounded-lg ">
            <img
              src="/images/pocket-pitch-santa.jpg"
              alt="John as Santa Claus performing"
              className="h-auto w-full md:h-96 md:w-auto"
            />
          </div>
          <div className="overflow-hidden rounded-lg ">
            <img
              src="/images/pocket-pitch-harmony.png"
              alt="Broadway show social media post"
              className="h-auto w-full md:h-96 md:w-auto"
            />
          </div>
        </div>
      </FadeIn>
    </ProjectPage>
  );
}
