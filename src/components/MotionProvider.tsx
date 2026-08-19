'use client'

import { MotionConfig } from 'framer-motion'

/**
 * Honours the OS-level "reduce motion" setting across the whole site.
 * With reducedMotion="user", Framer keeps opacity fades but drops transforms,
 * so the staged hero reveal still reads as a sequence without the movement.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
