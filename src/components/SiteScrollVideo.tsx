'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { SectionVideo } from '@/lib/projects'

// A recorded walkthrough of a live site. Renders whichever widths it is given:
// the desktop clip full width, the phone clip at a fixed narrow width, or both
// together (they are captured to the same schedule, so they stay in step).
//
// Three things this does that a bare autoplaying <video> does not:
//   - honours prefers-reduced-motion, holding on the poster until asked
//   - only downloads and plays while on screen, so a multi-megabyte clip
//     doesn't compete with the rest of the page for bandwidth
//   - exposes a real play/pause control, since autoplaying motion the reader
//     can't stop is a WCAG 2.2.2 failure
export default function SiteScrollVideo({
  video,
  className = '',
  showControl = true,
  showCaption = true,
}: {
  video: SectionVideo
  className?: string
  // The hero runs without either, by design decision — elsewhere both stay.
  // `alt` still labels the video elements themselves, so hiding the visible
  // caption doesn't cost the accessible name.
  showControl?: boolean
  showCaption?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videosRef = useRef<(HTMLVideoElement | null)[]>([])
  const [reduced, setReduced] = useState(false)
  const [playing, setPlaying] = useState(false)
  // Rendered markup has to match the server's, so the control only appears
  // once we know what the reader's motion preference actually is.
  const [ready, setReady] = useState(false)

  const each = (fn: (v: HTMLVideoElement) => void) => {
    videosRef.current.forEach((v) => v && fn(v))
  }

  const playAll = useCallback(() => {
    // No seeking here. Setting currentTime on a preload="none" element that
    // hasn't loaded yet aborts the load and leaves it stuck at HAVE_METADATA,
    // so playback is requested first and the clips are aligned once running.
    each((v) => void v.play().catch(() => {}))
  }, [])

  const pauseAll = useCallback(() => {
    each((v) => v.pause())
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    setReady(true)
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // `playing` follows the real element rather than intent, so the control
  // cannot claim to be playing while the video is still buffering.
  useEffect(() => {
    const v = videosRef.current[0]
    if (!v) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    // Both clips are the same length and start together, so this only has to
    // correct drift after a stall.
    const onPlaying = () => {
      const [lead, follow] = videosRef.current
      if (lead && follow && Math.abs(follow.currentTime - lead.currentTime) > 0.35) {
        follow.currentTime = lead.currentTime
      }
    }
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    v.addEventListener('playing', onPlaying)
    return () => {
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
      v.removeEventListener('playing', onPlaying)
    }
  }, [])

  // Play only while visible. Under reduced motion nothing starts on its own —
  // the reader can still press play.
  useEffect(() => {
    const el = containerRef.current
    if (!el || reduced) return

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? playAll() : pauseAll()),
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced, playAll, pauseAll])

  const toggle = useCallback(() => {
    if (playing) pauseAll()
    else playAll()
  }, [playing, playAll, pauseAll])

  // The desktop clip leads when present; otherwise the phone clip does.
  let slot = 0
  const desktopSlot = video.desktop ? slot++ : -1
  const mobileSlot = video.mobile ? slot++ : -1

  return (
    <div ref={containerRef} className={className}>
      {video.desktop && (
        <div className="overflow-hidden ring-1 ring-black/5">
          <video
            ref={(el) => {
              videosRef.current[desktopSlot] = el
            }}
            poster={video.desktop.poster}
            muted
            loop
            playsInline
            preload="none"
            aria-label={`${video.alt} — desktop`}
            className="block h-auto w-full"
          >
            {video.desktop.webm && <source src={video.desktop.webm} type="video/webm" />}
            <source src={video.desktop.src} type="video/mp4" />
          </video>
        </div>
      )}

      {video.mobile && (
        <div
          className={`flex flex-col items-start gap-5 sm:flex-row sm:items-end ${
            video.desktop ? 'mt-6' : ''
          }`}
        >
          <div className="w-[220px] shrink-0 overflow-hidden ring-1 ring-black/5 sm:w-[260px]">
            <video
              ref={(el) => {
                videosRef.current[mobileSlot] = el
              }}
              poster={video.mobile.poster}
              muted
              loop
              playsInline
              preload="none"
              aria-label={`${video.alt} — mobile`}
              className="block h-auto w-full"
            >
              {video.mobile.webm && <source src={video.mobile.webm} type="video/webm" />}
              <source src={video.mobile.src} type="video/mp4" />
            </video>
          </div>
          {video.mobileNote && (
            <p className="text-caption text-secondary sm:pb-1">{video.mobileNote}</p>
          )}
        </div>
      )}

      {(showControl || showCaption) && (
        <div className="mt-3 flex items-center gap-3">
          {showControl && ready && (
            <button
              type="button"
              onClick={toggle}
              aria-pressed={playing}
              className="text-caption text-secondary underline underline-offset-4 transition-colors hover:text-primary"
            >
              {playing ? 'Pause' : 'Play'} walkthrough
            </button>
          )}
          {showCaption && <span className="text-caption text-secondary">{video.alt}</span>}
        </div>
      )}
    </div>
  )
}
