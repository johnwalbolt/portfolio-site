import Image from 'next/image'
import Link from 'next/link'
import PageBackdrop from '@/components/PageBackdrop'
import { sites } from '@/lib/sites'

// Bebas Kai sets "JOHN WALBOLT" at 4.664em wide (measured from the live font).
// Dividing the target width by that ratio sizes the title to span it exactly.
const TITLE_EM_RATIO = 4.664

// Share of the viewport width the title and the thumbnail row each span.
const TITLE_WIDTH = 90
const THUMBS_WIDTH = 90

// Floor on the title's font size. The subheader is derived from the title
// *after* this floor is applied, so the exact 1:3 ratio still holds — it only
// stops the pair collapsing into illegibility on narrow screens.
const MIN_TITLE_FONT_PX = 42

const TITLE_FONT_SIZE = `max(${MIN_TITLE_FONT_PX}px, calc(${TITLE_WIDTH}cqw / ${TITLE_EM_RATIO}))`
const SUBHEAD_FONT_SIZE = `calc(${TITLE_FONT_SIZE} / 3)`

export default function Home() {
  return (
    <>
      <PageBackdrop />

      <section
        className="relative flex min-h-screen w-full flex-col items-center justify-center pb-10 pt-24"
        style={{ containerType: 'inline-size' }}
      >
        <h1
          className="whitespace-nowrap text-center font-display leading-[0.8] text-[#F40014]"
          style={{ fontSize: TITLE_FONT_SIZE }}
        >
          JOHN WALBOLT
        </h1>

        <p
          className="mt-5 max-w-[24ch] text-center font-serif leading-[1.15] text-[#222222] md:mt-7"
          style={{ fontSize: SUBHEAD_FONT_SIZE }}
        >
          A digital designer and builder with a storyteller background.
        </p>

        {/* id="work" is the target of the nav link; scroll-mt clears the
            fixed nav so the row is not tucked underneath it */}
        <ul
          id="work"
          className="mt-8 scroll-mt-24 grid grid-cols-2 gap-x-3 gap-y-10 md:mt-10 md:grid-cols-3 md:gap-x-5"
          style={{ width: `${THUMBS_WIDTH}cqw` }}
        >
          {sites.map((site) => (
            <SiteThumb key={site.url} site={site} />
          ))}
        </ul>
      </section>
    </>
  )
}

function SiteThumb({ site }: { site: (typeof sites)[number] }) {
  // No href means an unfilled slot: it holds the grid position but is not a link.
  const isPlaceholder = !site.href
  const isInternal = Boolean(site.href?.startsWith('/'))

  const content = (
    <>
      <div
        className={
          isPlaceholder
            ? 'relative flex aspect-[16/9] w-full items-center justify-center border-2 border-dashed border-neutral-300 bg-neutral-100'
            : 'relative aspect-[16/9] w-full overflow-hidden bg-neutral-200 ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1'
        }
      >
        {site.thumbnail ? (
          <Image
            src={site.thumbnail}
            alt={`${site.url} homepage`}
            fill
            sizes="(max-width: 768px) 45vw, 30vw"
            className="object-cover"
          />
        ) : (
          <span
            className="px-2 text-center text-neutral-400"
            style={{ fontSize: 'clamp(0.7rem, 0.95cqw, 0.95rem)' }}
          >
            {site.url}
          </span>
        )}
      </div>

      <div className="mt-3">
        {/* clamped, not raw cqw — at 375px a bare cqw size computes to ~4px */}
        <p
          className={`font-sans font-medium ${
            isPlaceholder
              ? 'text-neutral-400'
              : 'text-[#222222] transition-colors group-hover:text-[#F40014]'
          }`}
          style={{ fontSize: 'clamp(0.75rem, 1.15cqw, 1.05rem)' }}
        >
          {site.url}
          {site.category && (
            <>
              {' '}
              <span
                className="inline-block whitespace-nowrap font-normal text-neutral-500"
                style={{ fontSize: 'clamp(0.7rem, 0.95cqw, 0.95rem)' }}
              >
                ({site.category})
              </span>
            </>
          )}
        </p>
        <p
          className="mt-1 font-sans leading-snug text-neutral-500"
          style={{ fontSize: 'clamp(0.7rem, 0.95cqw, 0.95rem)' }}
        >
          {site.description}
        </p>
      </div>
    </>
  )

  if (isPlaceholder) {
    return <li>{content}</li>
  }

  return (
    <li>
      {isInternal ? (
        <Link href={site.href!} className="group block">
          {content}
        </Link>
      ) : (
        <a
          href={site.href!}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {content}
        </a>
      )}
    </li>
  )
}
