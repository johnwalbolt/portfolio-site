import type { ReactNode } from 'react'
import Link from 'next/link'
import ZoomableImage from '@/components/ZoomableImage'
import type { Highlight } from '@/lib/projects'

// Every image slot is 16:9 to match the homepage thumbnails.
export function ProjectImage({
  src,
  alt,
  label,
}: {
  src: string | null
  alt: string
  label: string
}) {
  if (src) {
    return (
      <ZoomableImage
        src={src}
        alt={alt}
        className="aspect-[16/9] w-full bg-neutral-100 object-cover ring-1 ring-black/5"
      />
    )
  }

  return (
    <div className="flex aspect-[16/9] w-full items-center justify-center border-2 border-dashed border-neutral-300 bg-neutral-100">
      <span className="text-caption text-neutral-400">{label}</span>
    </div>
  )
}

// Shared shell for the new case studies: hero, highlights beside a summary,
// then three supporting images. `hero` is a slot so a page can swap the single
// hero image for something else (the posters page shows a row of posters).
export default function CaseStudyLayout({
  name,
  category,
  liveUrl,
  liveUrlLabel = 'Visit the live site',
  hero,
  leadWithSummary = false,
  highlights,
  summary,
  images,
}: {
  name: string
  category: string
  liveUrl?: string
  liveUrlLabel?: string
  hero: ReactNode
  // Puts the summary above the hero instead of below it.
  leadWithSummary?: boolean
  highlights?: Highlight[]
  summary: string[]
  images: (string | null)[]
}) {
  return (
    <section className="pt-32 md:pt-44 pb-section-sm">
      <div className="container-main">
        <Link
          href="/"
          className="text-caption text-secondary hover:text-primary transition-colors"
        >
          ← Back
        </Link>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h1 className="text-display-sm md:text-display font-semibold text-primary">
            {name}
          </h1>
          <span className="text-caption text-secondary">({category})</span>
        </div>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-caption text-secondary underline underline-offset-4 hover:text-primary transition-colors"
          >
            {liveUrlLabel} ↗
          </a>
        )}

        {leadWithSummary && (
          <div className="mt-8 max-w-narrow">
            <p className="section-label mb-4">Summary</p>
            <div className="space-y-4 text-body text-secondary">
              {summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">{hero}</div>

        {/* Overview + summary. Without an overview the summary runs on its
            own at a readable measure instead of stranding an empty column. */}
        {highlights && highlights.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
            <div>
              <p className="section-label mb-4">Overview</p>
              <dl className="space-y-4">
                {highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <dt className="text-caption text-secondary">{highlight.label}</dt>
                    {/* a blank value keeps its row, so the layout does not jump
                        once the value is filled in */}
                    <dd className="text-body font-medium text-primary">
                      {highlight.value || '\u00A0'}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {!leadWithSummary && (
              <div>
                <p className="section-label mb-4">Summary</p>
                <div className="space-y-4 text-body text-secondary">
                  {summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          !leadWithSummary && (
            <div className="mt-12 max-w-narrow md:mt-16">
              <p className="section-label mb-4">Summary</p>
              <div className="space-y-4 text-body text-secondary">
                {summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          )
        )}

        {/* Supporting images */}
        {images.length > 0 && (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-16">
          {images.map((image, i) => (
            <ProjectImage
              key={i}
              src={image}
              alt={`${name} detail ${i + 1}`}
              label={`Image ${i + 1}`}
            />
          ))}
        </div>
        )}
      </div>
    </section>
  )
}
