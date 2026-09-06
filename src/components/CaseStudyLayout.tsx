import type { ReactNode } from 'react'
import Link from 'next/link'
import ZoomableImage from '@/components/ZoomableImage'
import SectionDots from '@/components/SectionDots'
import SiteScrollVideo from '@/components/SiteScrollVideo'
import type { CaseSection, Highlight } from '@/lib/projects'

// Section anchors: derived from the label so the dot rail and the sections
// cannot drift apart.
const OVERVIEW_ID = 'overview'
const sectionId = (label: string, i: number) =>
  `${label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${i}`

// Summary paragraphs are plain strings so the data stays serialisable, so
// **double asterisks** mark an emphasised span rather than embedding JSX.
function renderEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-primary">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  )
}

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
        className="aspect-[16/9] w-full object-cover ring-1 ring-black/5"
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
  sections,
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
  // Titled sections between the summary and the supporting grid. Each is
  // divided by a rule and carries its own full-width image.
  sections?: CaseSection[]
  images: (string | null)[]
}) {
  return (
    <section className="pt-32 md:pt-44 pb-section-sm">
      {sections && sections.length > 0 && (
        <SectionDots
          targets={[
            { id: OVERVIEW_ID, label: 'Overview' },
            ...sections.map((section, i) => ({
              id: sectionId(section.label, i),
              label: section.label,
            })),
          ]}
        />
      )}

      <div className="container-main" id={OVERVIEW_ID}>
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
                <p key={paragraph}>{renderEmphasis(paragraph)}</p>
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
                    <p key={paragraph}>{renderEmphasis(paragraph)}</p>
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
                  <p key={paragraph}>{renderEmphasis(paragraph)}</p>
                ))}
              </div>
            </div>
          )
        )}

        {sections?.map((section, i) => {
          // Every section opens with a rule; the last also closes with one, so
          // the run reads as a bounded group rather than trailing off.
          const isLast = i === sections.length - 1
          // Diagrams and artwork are transparent, so the hairline frame
          // would outline empty space rather than the image itself.
          const frame = section.unframedImages ? '' : ' ring-1 ring-black/5'
          return (
            <div
              key={`${section.label}-${i}`}
              id={sectionId(section.label, i)}
              className={`scroll-mt-24 mt-12 border-t border-border pt-12 md:mt-16 md:pt-16 ${
                isLast ? 'border-b border-border pb-12 md:pb-16' : ''
              }`}
            >
              <div className="max-w-2xl">
                <p className="section-label mb-3">{section.label}</p>
                <h2 className="text-heading md:text-display-sm mb-6 font-semibold text-primary">
                  {section.heading}
                </h2>
                <p className="text-body-lg text-secondary">{section.body}</p>
              </div>

              {/* A recorded walkthrough sits above the still grid, since it
                  carries the motion the stills can only imply. */}
              {section.video && (
                <SiteScrollVideo video={section.video} className="mt-8 md:mt-10" />
              )}

              {/* leadImage runs full width above the grid. An omitted `images`
                  means "not filled in yet" and shows a placeholder; an explicit
                  [] means this section has no grid. */}
              {(section.leadImage ||
                section.images === undefined ||
                section.images.length > 0) && (
                <figure className="mt-8 md:mt-10">
                  {section.leadImage && (
                    <ZoomableImage
                      src={section.leadImage}
                      alt={`${name} — ${section.heading}`}
                      className={`w-full${frame}`}
                    />
                  )}

                  {section.images === undefined && !section.leadImage && (
                    <div className="flex aspect-[16/9] w-full items-center justify-center border-2 border-dashed border-neutral-300 bg-neutral-100">
                      <span className="text-caption text-neutral-400">Section image</span>
                    </div>
                  )}

                  {section.images && section.images.length === 1 && (
                    <ZoomableImage
                      src={section.images[0]}
                      alt={`${name} — ${section.heading}`}
                      className={`w-full${frame} ${
                        section.leadImage ? 'mt-6' : ''
                      }`}
                    />
                  )}

                  {section.images && section.images.length > 1 && (
                    // Images keep their own aspect rather than being forced to
                    // 16:9 — sources range from portrait screenshots to wide
                    // brand boards. items-start aligns a mixed row at the top.
                    <div
                      className={`grid grid-cols-1 items-start gap-6 ${
                        section.leadImage ? 'mt-6' : ''
                      } ${section.images.length % 3 === 0 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}
                    >
                      {section.images.map((image, j) => (
                        <ZoomableImage
                          key={image}
                          src={image}
                          alt={`${name} — ${section.heading} ${j + 1}`}
                          className={`w-full${frame}`}
                        />
                      ))}
                    </div>
                  )}

                  {section.caption && (
                    <figcaption className="mt-3 text-caption text-secondary">
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          )
        })}

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
