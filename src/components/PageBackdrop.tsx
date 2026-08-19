'use client'

import { useEffect } from 'react'

// Off-white drifting to a light grey-blue. BASE_TINT is the flat colour behind
// everything (overscroll, and any gap the backdrop does not paint).
const BASE_TINT = '#F7F9FC'
const SURFACE_GRADIENT =
  'linear-gradient(160deg, #FCFCFD 0%, #F4F7FB 50%, #E8EEF6 100%)'

/**
 * Fixed full-viewport backdrop: an off-white field with a slight grey-blue
 * gradient.
 */
export default function PageBackdrop() {
  // globals.css paints `body` white, and that background sits *above* this
  // element's negative z-index layer — which hid the backdrop past the sticky
  // panel. Clearing it lets this show through the full scroll, and it is
  // restored on unmount so the other routes keep their own background.
  useEffect(() => {
    const body = document.body.style.backgroundColor
    const root = document.documentElement.style.backgroundColor
    document.body.style.backgroundColor = 'transparent'
    // The canvas paints below everything, so tinting the root keeps overscroll
    // from flashing plain white against the off-white page.
    document.documentElement.style.backgroundColor = BASE_TINT
    return () => {
      document.body.style.backgroundColor = body
      document.documentElement.style.backgroundColor = root
    }
  }, [])

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: SURFACE_GRADIENT }}
    />
  )
}
