"use client";

import ProjectPage, {
  ProjectHero,
  ProjectOverview,
  ProjectImage,
  ProjectImageRow,
} from "@/components/ProjectPage";
import FadeIn from "@/components/FadeIn";

export default function InLoop() {
  return (
    <ProjectPage>
      <ProjectHero
        src="/images/inloop-hero.png"
        alt="InLoop platform hero"
      />

      <ProjectOverview
        title="inLoop"
        overview="A CRM platform for non-profits, helping them manage contacts, campaigns, and documentation."
        involvement="I was the single designer, working directly with the Founder to create the visual design and design system for the platform's MVP."
        impact="The platform launched with a modern UI meeting WCAG accessibility standards."
      />

      <ProjectImageRow
        images={[
          { src: "/images/inloop-contact-1.png", alt: "InLoop contacts view" },
          { src: "/images/inloop-contact-2.png", alt: "InLoop contact detail" },
        ]}
      />

      <FadeIn>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
            Process
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I took an iterative design approach with founder feedback, progressing
            from style proposals to a specific design system and screen
            implementations.
          </p>
        </div>
      </FadeIn>

      <ProjectImageRow
        images={[
          { src: "/images/inloop-transactions-1.png", alt: "Transactions view" },
          { src: "/images/inloop-transactions-2.png", alt: "Transaction detail" },
        ]}
      />

      <ProjectImageRow
        images={[
          { src: "/images/inloop-subscriptions-1.png", alt: "Subscriptions view" },
          { src: "/images/inloop-subscriptions-2.png", alt: "Subscription detail" },
        ]}
      />

      <ProjectImage
        src="/images/inloop-design-system.png"
        alt="InLoop design system"
      />
    </ProjectPage>
  );
}
