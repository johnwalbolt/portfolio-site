'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/data'
import { fadeInUp } from '@/lib/animations'
import SectionReveal from '@/components/SectionReveal'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-section-sm">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Text */}
            <div>
              <motion.p
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ ...fadeInUp.transition, delay: 0.1 }}
                className="section-label mb-4"
              >
                About Me
              </motion.p>
              <motion.h1
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                className="text-display-sm md:text-display font-serif text-primary mb-6"
              >
                My design instinct comes from creating experiences.
              </motion.h1>
              <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ ...fadeInUp.transition, delay: 0.3 }}
                className="space-y-4 text-body-lg text-secondary"
              >
                <p>
                  Digital design, for me, has always been connected to the things I&apos;ve loved making: concerts, films, podcasts, and theatre. Every project taught me how to manage complexity, communicate and collaborate across disciplines, and build things that resonate with an audience. Design grew naturally alongside my other creative work.
                </p>
                <p>
                  Early projects for me included designing{' '}
                  <Link
                    href="/posters"
                    className="underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    posters for concerts
                  </Link>{' '}
                  to be used for printed posters and social media posts, as well as founding a mobile app for singers called{' '}
                  <Link
                    href="/projects/pocket-pitch"
                    className="underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    Pocket Pitch
                  </Link>
                  . Designing and founding mobile apps showed me my love and talent for product design, and today my &ldquo;passion projects&rdquo; have been downloaded nearly 1 million times. (expected to cross 1 million downloads on Sept 1st, 2026)
                </p>
                {/* Pulled from the paragraph above — aria-hidden so screen
                    readers do not hear the same sentence twice. */}
                <p
                  aria-hidden="true"
                  className="py-2 font-serif text-heading leading-snug text-primary"
                >
                  &hellip;my &ldquo;passion projects&rdquo; have been downloaded nearly 1 million times.
                </p>
                <p>
                  Additionally, I have worked solo and on cross-functional teams to design and ship websites and enterprise SaaS products. Currently, I do freelance and entrepreneurial design work as I work with clients and continue to grow my own products. I also regularly attend events in SF to keep learning and exchanging ideas with others.
                </p>
              </motion.div>
            </div>

            {/* Photo placeholder */}
            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
              className="relative flex flex-col gap-3"
            >
              <div>
                <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
                  <img src="/images/about-producing.jpg" alt="Producing a concert in New York at the Duplex" className="w-full h-full object-cover" />
                </div>
                <p className="text-caption text-secondary mt-2">↑ Producing a concert in New York at the Duplex.</p>
              </div>
              <div>
                <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
                  <img src="/images/about-directing.jpg" alt="Directing a short film I wrote titled Non-Eq" className="w-full h-full object-cover" />
                </div>
                <p className="text-caption text-secondary mt-2">↑ Directing a short film I wrote titled Non-Eq.</p>
              </div>
              <div>
                <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
                  <img src="/images/about-ai-talk.png" alt="Speaking at an event for AI User Group in San Francisco" className="w-full h-full object-cover" />
                </div>
                <p className="text-caption text-secondary mt-2">↑ Speaking at an event for AI User Group in San Francisco.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-section">
        <div className="container-main">
          <SectionReveal>
            <p className="section-label mb-3">Skills & Tools</p>
            <h2 className="text-display-sm font-semibold text-primary mb-8">
              What I work with
            </h2>
          </SectionReveal>

          <div className="space-y-8">
            {[
              {
                category: 'Design',
                skills: ['Figma', 'Interaction Design', 'Motion Design', 'Design Systems', 'Accessibility (WCAG)'],
              },
              {
                category: 'Development',
                skills: ['Swift/SwiftUI', 'Supabase', 'Xcode', 'HTML', 'CSS', 'JavaScript', 'Vercel', 'Git'],
              },
              {
                category: 'AI-Assisted',
                skills: ['Claude Code', 'Cursor', 'Figma MCP', 'Vibe Coding'],
              },
              {
                category: 'Research & Strategy',
                skills: ['User Surveys', 'Usability Testing', 'Ad Mediation', 'Firebase', 'App Store Connect', 'AdMob'],
              },
              {
                category: 'Certifications',
                skills: ['Nielsen Norman Group', 'freeCodeCamp', 'DesignLab'],
              },
            ].map((group, i) => (
              <SectionReveal key={group.category} delay={i * 0.1}>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
