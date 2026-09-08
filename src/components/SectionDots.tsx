'use client'

import { useEffect, useState } from 'react'

export type DotTarget = { id: string; label: string }

// How far down the viewport the "you are here" line sits. A section becomes
// active once its top crosses this line, so the highlight changes at a
// predictable point rather than when a section merely peeks into view.
const ACTIVE_LINE = 0.4

/**
 * Fixed dot rail in the left margin: one dot per section, the current one
 * highlighted, each dot a real button that scrolls to its section.
 *
 * Only shown from xl up — below that the centred container leaves no margin to
 * put it in, and it would overlap the content.
 */
export default function SectionDots({ targets }: { targets: DotTarget[] }) {
  const [active, setActive] = useState(targets[0]?.id ?? '')

  useEffect(() => {
    if (targets.length === 0) return

    // Section offsets are measured up front and cached, so the scroll handler
    // is pure arithmetic — no layout reads while scrolling. Remeasured whenever
    // the document height changes (images finishing, viewport resize).
    let offsets: { id: string; top: number }[] = []

    const measure = () => {
      offsets = targets
        .map((target) => {
          const el = document.getElementById(target.id)
          return el ? { id: target.id, top: el.getBoundingClientRect().top + window.scrollY } : null
        })
        .filter((entry): entry is { id: string; top: number } => entry !== null)
      update()
    }

    const update = () => {
      if (offsets.length === 0) return
      const line = window.scrollY + window.innerHeight * ACTIVE_LINE
      let current = offsets[0].id
      for (const entry of offsets) {
        if (entry.top <= line) current = entry.id
      }
      // near the bottom the last section may never reach the line, so pin it
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      setActive(atBottom ? offsets[offsets.length - 1].id : current)
    }

    measure()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', measure)
    const ro = new ResizeObserver(measure)
    ro.observe(document.documentElement)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', measure)
      ro.disconnect()
    }
  }, [targets])

  const goTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // offset clears the fixed nav
    window.scrollTo({ top: el.offsetTop - 96, behavior: reduced ? 'auto' : 'smooth' })
  }

  if (targets.length === 0) return null

  return (
    <nav
      aria-label="Sections"
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col items-start gap-4">
        {targets.map((target) => {
          const isActive = target.id === active
          return (
            <li key={target.id}>
              <button
                type="button"
                onClick={() => goTo(target.id)}
                // Kept even though the label is visible: below 2xl that span is
                // display:none, which would leave the button with no name.
                aria-label={target.label}
                aria-current={isActive ? 'true' : undefined}
                className="group flex items-center gap-2.5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? 'h-2.5 w-2.5 bg-primary'
                        : 'h-1.5 w-1.5 bg-neutral-300 group-hover:bg-neutral-500'
                    }`}
                  />
                </span>
                {/* Label tracks the dot's colour: light grey at rest, darker on
                    hover, primary when this is the section you're in.
                    From 1440 only. Measured against the text edge (the
                    container carries 32px of padding of its own), the labelled
                    rail clears the content by 37px at 1440, but overlaps it by
                    3px at 1360 and 43px at 1280. */}
                <span
                  className={`hidden whitespace-nowrap text-[11px] leading-none transition-colors duration-300 min-[1440px]:inline ${
                    isActive ? 'text-primary' : 'text-neutral-500 group-hover:text-neutral-700'
                  }`}
                >
                  {target.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
