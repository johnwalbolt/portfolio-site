'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/data'
import { fadeInUp } from '@/lib/animations'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* CTA Section */}
      <div className="container-main py-section">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          transition={fadeInUp.transition}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <p className="section-label mb-4">Available for new opportunities</p>
          <h2 className="text-display-sm md:text-display font-semibold text-primary mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-body-lg text-secondary max-w-lg mx-auto mb-8">
            I&apos;m exploring design roles at product-driven companies
            where I can bring my producer and creator background, technical fluency, and
            AI-assisted development to the team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary/80 transition-colors"
            >
              <span>Send an Email</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-secondary">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Designed & built with care.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-secondary hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-caption text-secondary hover:text-primary transition-colors"
            >
              Email
            </a>
            <Link
              href="/#work"
              className="text-caption text-secondary hover:text-primary transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-caption text-secondary hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
