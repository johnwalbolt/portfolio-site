'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { CycleImage } from '@/lib/projects'

const INTERVAL = 3500

/**
 * A set of screenshots that cycles on its own, with the labels doubling as
 * controls so any one can be reached directly.
 *
 * Only advances while on screen, holds while the reader is hovering or
 * tabbing through it, and never starts on its own under
 * prefers-reduced-motion. The pause control is not decoration: motion that
 * starts by itself and runs longer than five seconds needs a way to stop it
 * (WCAG 2.2.2).
 */
export default function ImageCycle({
  images,
  alt,
  caption,
  className = '',
}: {
  images: CycleImage[]
  alt: string
  // Sits ahead of the labels, so the row reads as one caption.
  caption?: string
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [ready, setReady] = useState(false)
  // Paused by the reader (the button) vs. held while hovered/focused or
  // scrolled out of view — tracked apart so leaving the element doesn't
  // silently undo an explicit pause.
  const [paused, setPaused] = useState(false)
  const [held, setHeld] = useState(false)
  const [onScreen, setOnScreen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    setReady(true)
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), {
      threshold: 0.3,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const running = ready && !reduced && !paused && !held && onScreen && images.length > 1

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      INTERVAL
    )
    return () => window.clearInterval(id)
  }, [running, images.length])

  const show = useCallback((i: number) => {
    setIndex(i)
    // Choosing a screenshot is a deliberate act; stop moving it out from under them.
    setPaused(true)
  }, [])

  return (
    <div ref={containerRef} className={className}>
      <div
        className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 ring-1 ring-black/5"
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocusCapture={() => setHeld(true)}
        onBlurCapture={() => setHeld(false)}
      >
        {images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={`${alt} — ${image.label}`}
            fill
            sizes="(max-width: 768px) 100vw, 568px"
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            // Only the visible one is exposed; the rest are decorative duplicates.
            aria-hidden={i !== index}
          />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        {caption && <span className="text-caption text-secondary">{caption}</span>}
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => show(i)}
            aria-current={i === index ? 'true' : undefined}
            className={`text-caption transition-colors ${
              i === index
                ? 'text-primary underline underline-offset-4'
                : 'text-secondary hover:text-primary'
            }`}
          >
            {image.label}
          </button>
        ))}
      </div>
    </div>
  )
}
