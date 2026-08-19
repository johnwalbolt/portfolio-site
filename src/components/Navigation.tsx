'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/lib/data'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // The glass only appears once there is content passing under the bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll() // the browser may restore a scroll position on load
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The homepage is static — nothing on it animates in, so the nav should not
  // either. Other routes keep the entrance.
  const isHome = pathname === '/'

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={isHome ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={isHome ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
        className={`glass-nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'is-scrolled' : ''}`}
      >
        <div className="container-main relative z-10 flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-primary hover:text-accent transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#work"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              About
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-white bg-primary hover:bg-primary/80 px-4 py-2 rounded-full transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-between"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="glass-panel fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <Link
              href="/#work"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-primary"
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-primary"
            >
              About
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-accent"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
