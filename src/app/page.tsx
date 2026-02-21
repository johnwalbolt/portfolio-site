"use client";

import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Nearly 1 million downloads from products I designed and grew end to
            end.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg text-gray-500">
            Currently seeking full-time roles in San Francisco; open to remote.
          </p>
        </FadeIn>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-24 md:space-y-32">
        <ProjectCard
          title="Pocket Pitch"
          subtitle="Mobile app, 0 → 40k+ MAU"
          description="A consumer mobile app I founded that eventually became the official app of a Broadway show. I continue to update this app regularly."
          skills="UX Research, UX/UI Design, Project Management"
          href="/pocket-pitch"
          image="/images/pocket-pitch-thumbnail.png"
          imageAlt="Pocket Pitch app mockup"
        />

        <ProjectCard
          title="InLoop"
          subtitle="CRM platform, 0 → 1"
          description="CRM for nonprofits that recently launched. I worked directly with the Founder to create the visual design for the platform's MVP."
          skills="UX/UI Design, Design System"
          href="/inloop"
          image="/images/inloop-thumbnail.png"
          imageAlt="InLoop platform mockup"
          reverse
        />

        <ProjectCard
          title="Soundbath"
          subtitle="Marketing Website"
          description="A music brand's first website, connecting their digital presence across multiple major streaming platforms using existing branding."
          skills="UX/UI Design"
          href="/soundbath"
          image="/images/soundbath-thumbnail.png"
          imageAlt="Soundbath website mockup"
        />
      </section>
    </div>
  );
}
