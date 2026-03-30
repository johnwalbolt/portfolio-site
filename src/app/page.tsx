'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig, caseStudies } from '@/lib/data'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import CaseStudyCard from '@/components/CaseStudyCard'
import SectionReveal from '@/components/SectionReveal'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-section">
        <div className="container-main">
          <motion.div
            initial={staggerContainer.animate}
            animate={staggerContainer.animate}
            className="max-w-3xl"
          >
            <motion.p
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="section-label mb-4"
            >
              {siteConfig.role} &mdash; {siteConfig.location}
            </motion.p>

            <motion.h1
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-display-sm md:text-display lg:text-display-lg font-semibold text-primary mb-6"
            >
              Designing for real people,{' '}
              <span className="text-accent">building for the real world.</span>
            </motion.h1>

            <motion.p
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="text-body-lg text-secondary max-w-xl mb-8"
            >
              My background as a creator and producer has led me to design digital products that people love to use. I use AI tools to rapidly craft, prototype, and ship.
            </motion.p>

            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/80 transition-colors"
              >
                <span>View Case Studies</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-border text-primary px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="pb-section">
        <div className="container-main">
          <SectionReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-label mb-3">Selected Work</p>
                <h2 className="text-display-sm md:text-display font-semibold text-primary">
                  Case Studies
                </h2>
              </div>
              <p className="hidden md:block text-body text-secondary max-w-xs text-right">
                From app monetization to vibe coding.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>


    </>
  )
}
