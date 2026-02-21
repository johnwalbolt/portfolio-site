"use client";

import ProjectPage, {
  ProjectHero,
  ProjectOverview,
  ProjectImage,
} from "@/components/ProjectPage";
import FadeIn from "@/components/FadeIn";

export default function Soundbath() {
  return (
    <ProjectPage>
      <ProjectHero
        src="/images/soundbath-hero.png"
        alt="Sound Bath website hero"
      />

      <ProjectOverview
        title="Sound Bath"
        overview="This category-leading music producer wanted to educate their customers on their full ambient music and sound catalog, and they wanted to connect more with their customers as well."
        involvement="I was the sole designer, working directly with the stakeholders, and I built out the website for them as well."
        impact="Sound Bath had an increase in contact from users after the website launched."
      />

      <ProjectImage
        src="/images/soundbath-contact.png"
        alt="Sound Bath contact page"
      />

      <ProjectImage
        src="/images/soundbath-categories.png"
        alt="Sound Bath category pages"
      />

      <FadeIn>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
            Users
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Two audience segments — meditation/relaxation listeners and small
            businesses seeking atmospheric music.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-3">
            Artistic Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Sound Bath already had visual assets, including a very cool logo. After
            discussions with stakeholders, the agreed upon vision was to feel like
            a modern museum.
          </p>
        </div>
      </FadeIn>

      <ProjectImage
        src="/images/soundbath-branding.png"
        alt="Sound Bath logo and inspiration"
      />

      <ProjectImage
        src="/images/soundbath-styles.png"
        alt="Sound Bath design styles and typography"
      />
    </ProjectPage>
  );
}
