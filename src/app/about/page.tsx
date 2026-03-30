'use client'

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
                className="text-display-sm md:text-display font-semibold text-primary mb-6"
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
                  Product design, for me, has always been connected to the things I&apos;ve loved making: concerts, films, podcasts, and theatre. Every project taught me how to manage complexity, communicate and collaborate across disciplines, and build things that resonate with an audience. Design grew naturally alongside my other creative work.
                </p>
                <p>
                  I started Pocket Pitch as a tool for myself and other performers while chasing Broadway. That dream eventually came full circle when a Broadway show approached me for a brand partnership with my app. Today, Pocket Pitch has 780K+ downloads and 50K monthly active users. I continue to grow Pocket Pitch using my design and technical skills to create experiences people love. For my passion of running, I vibe-coded a full-stack relay race platform so my friends could organize teams and track the race live on a scoreboard.
                </p>
                <p>
                  I have previously worked on cross-functional teams to design startup and enterprise products, and currently my day-to-day involves a packed combination of design, product, and developer tools. I&apos;m always exploring new ways to use AI tools in my creative workflow, and I regularly attend events in SF to keep learning and exchanging ideas with others.
                </p>
                <p>
                  I&apos;m looking for a role where I can bring my passion for crafting impactful experiences, surrounded by positive and talented people.
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
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-neutral-100">
                  <img src="/images/about-producing.jpg" alt="John producing a short film in New York" className="w-full h-full object-cover" />
                </div>
                <p className="text-caption text-secondary mt-2">↑ Producing a concert in New York at the Duplex.</p>
              </div>
              <div>
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-neutral-100">
                  <img src="/images/about-directing.jpg" alt="John directing actors in a rehearsal" className="w-full h-full object-cover" />
                </div>
                <p className="text-caption text-secondary mt-2">↑ Directing a short film I wrote titled Non-Eq.</p>
              </div>
              <div>
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-neutral-100">
                  <img src="/images/about-ai-talk.png" alt="John speaking about AI tools on a podcast" className="w-full h-full object-cover" />
                </div>
                <p className="text-caption text-secondary mt-2">↑ Speaking at an event for AI User Group in San Francisco.</p>
              </div>
              <div>
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-neutral-100">
                  <img src="/images/about-race-org.jpg" alt="John organizing the SF Perimeter Relay with friends" className="w-full h-full object-cover" />
                </div>
                <p className="text-caption text-secondary mt-2">↑ Organizing runners at the start of a relay race around San Francisco.</p>
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
