'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { caseStudies } from '@/lib/data'
import { fadeInUp } from '@/lib/animations'
import SectionReveal from '@/components/SectionReveal'

function ImagePlaceholder({ label, aspect = 'aspect-[2/1]' }: { label: string; aspect?: string }) {
  return (
    <div className={`rounded-2xl ${aspect} bg-neutral-100 border-2 border-dashed border-neutral-300 flex items-center justify-center`}>
      <div className="text-center px-4">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-3 text-neutral-300">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-caption text-neutral-400">{label}</p>
      </div>
    </div>
  )
}

function CaseStudyImage({ src, alt, aspect = 'aspect-[2/1]', placeholder }: { src?: string; alt: string; aspect?: string; placeholder: string }) {
  if (src) {
    return (
      <div className={`rounded-2xl overflow-hidden bg-neutral-100`}>
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
    )
  }
  return <ImagePlaceholder label={placeholder} aspect={aspect} />
}

export default function CaseStudyPage() {
  const params = useParams()
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    return (
      <div className="pt-44 pb-section container-main text-center">
        <h1 className="text-display-sm font-semibold text-primary mb-4">Case study not found</h1>
        <Link href="/" className="text-accent hover:underline">Back to home</Link>
      </div>
    )
  }

  const hasVisualLayout = study.decisionCards || study.beforeAfterImage || study.deliverableImages || study.interactionShowcases

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-section-sm">
        <div className="container-main">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-caption text-secondary hover:text-primary transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all work
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.15 }}
              className="flex flex-wrap items-center gap-2 mb-4"
            >
              {study.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </motion.div>

            <motion.h1
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-display-sm md:text-display font-semibold text-primary mb-4"
            >
              {study.title}
            </motion.h1>

            <motion.p
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.25 }}
              className="text-body-lg text-secondary mb-8"
            >
              {study.subtitle}
            </motion.p>

            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { label: 'Role', value: study.role },
                { label: 'Team', value: study.team },
                { label: 'Timeline', value: study.timeline },
                { label: 'Company', value: study.company },
              ].map((meta) => (
                <div key={meta.label}>
                  <p className="text-caption text-secondary mb-1">{meta.label}</p>
                  <p className="text-sm font-medium text-primary">{meta.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-section-sm">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: study.heroColorLight }}
          >
            {study.heroImage ? (
              <img
                src={study.heroImage}
                alt={`${study.title} — key screens`}
                className="w-full h-auto"
              />
            ) : (
              <div className="aspect-[2/1] flex items-center justify-center">
                <ImagePlaceholder label="Hero image — key screens overview" />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* THE RESULT + Metrics */}
      <section className="py-section-sm">
        <div className="container-narrow">
          <SectionReveal>
            <div className="text-center">
              <p className="section-label mb-4">The Result</p>
              <h2
                className="text-display-sm md:text-display font-semibold mb-4"
                style={{ color: study.heroColor }}
              >
                {study.result.metric}
              </h2>
              <p className="text-body-lg text-secondary max-w-xl mx-auto">
                {study.result.description}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {study.slug !== 'pocketpitch-metronome' && study.slug !== 'soundbath' && (
      <section className="pb-section-sm">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {study.impact.metrics.map((metric, i) => (
              <SectionReveal key={metric.label} delay={i * 0.1}>
                <div className="metric-card">
                  <p
                    className="text-display-sm font-bold mb-1"
                    style={{ color: study.heroColor }}
                  >
                    {metric.value}
                  </p>
                  <p className="text-sm font-medium text-primary mb-1">{metric.label}</p>
                  <p className="text-caption text-secondary">{metric.context}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* USER REQUESTS — if available */}
      {study.userRequestsImages && study.userRequestsImages.length > 0 && (
        <section className="py-section">
          <div className="container-main">
            <SectionReveal>
              <div className="max-w-2xl mb-10">
                <p className="section-label mb-3">The Starting Point</p>
                <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-4">
                  Users kept asking for the same thing
                </h2>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.userRequestsImages.map((img, i) => {
                  const src = typeof img === 'string' ? img : img.src
                  const caption = typeof img === 'string' ? undefined : img.caption
                  return (
                    <div key={i}>
                      <CaseStudyImage
                        src={src}
                        alt={caption || `User feedback requesting a metronome feature ${i + 1}`}
                        aspect="aspect-auto"
                        placeholder="User feedback"
                      />
                      {caption && (
                        <p className="text-caption text-secondary mt-3 text-center">{caption}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* METRONOME DEFINITION — only for metronome case study */}

      {/* THE PROBLEM — with before/after image if available */}
      <section className="py-section bg-muted">
        <div className="container-main">
          <SectionReveal>
            <div className="max-w-2xl mb-10">
              <p className="section-label mb-3">{study.slug === 'pocketpitch-metronome' ? 'The Scope' : study.slug === 'inloop-design-system' ? 'The Product' : 'The Problem'}</p>
              <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-6">
                {study.slug === 'pocketpitch-metronome' ? 'Understanding the feature requirements.' : study.slug === 'pocketpitch-premium' ? 'Preparing for launch.' : study.slug === 'inloop-design-system' ? 'A CRM for non-profit fundraising.' : 'Understanding the problem'}
              </h2>
              <p className="text-body-lg text-secondary">
                {study.challenge.summary}
              </p>
            </div>
          </SectionReveal>

          {study.beforeAfterImage ? (
            <SectionReveal delay={0.1}>
              <CaseStudyImage
                src={study.beforeAfterImage}
                alt={`${study.title} — before and after comparison`}
                placeholder="Before/After flow comparison"
              />
              {study.slug === 'pocketpitch-monetization' && (
                <p className="text-sm text-secondary mt-3 text-center">Left: Old path to user purchase via settings. Right: New premium paywall accessible throughout app.</p>
              )}
            </SectionReveal>
          ) : null}

          {study.requirements && study.requirements.length > 0 && (
            <SectionReveal delay={0.2}>
              <div className="bg-white rounded-xl p-6 md:p-8 mt-8">
                <p className="text-sm font-semibold text-primary mb-5">Design Requirements</p>
                <ol className="space-y-3">
                  {study.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-body text-secondary">
                      <span
                        className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                        style={{ backgroundColor: study.heroColor }}
                      >
                        {i + 1}
                      </span>
                      {req}
                    </li>
                  ))}
                </ol>
              </div>
            </SectionReveal>
          )}

          {!study.beforeAfterImage && !study.requirements?.length && study.slug !== 'soundbath' && (
            <SectionReveal delay={0.1}>
              <div className="bg-white rounded-xl p-6 md:p-8">
                <p className="text-sm font-semibold text-primary mb-4">{study.slug === 'inloop-design-system' ? 'Design Requirements:' : 'Key pain points:'}</p>
                {study.slug === 'inloop-design-system' ? (
                  <ol className="space-y-3">
                    {study.challenge.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-body text-secondary">
                        <span
                          className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                          style={{ backgroundColor: study.heroColor }}
                        >
                          {i + 1}
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-3">
                    {study.challenge.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-body text-secondary">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: study.heroColor }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </SectionReveal>
          )}

          {study.slug === 'inloop-design-system' && (
            <SectionReveal delay={0.2}>
              <div className="mt-8">
                <CaseStudyImage
                  src="/images/inloop-old-screens.png"
                  alt="inLoop existing screens built by the technical founder"
                  aspect="aspect-auto"
                  placeholder="Founder's existing UI screens"
                />
                <p className="text-caption text-secondary mt-3 text-center">The technical founder&apos;s existing screens that I used as a starting point for the UI redesign.</p>
              </div>
            </SectionReveal>
          )}

          {study.slug === 'soundbath' && (
            <SectionReveal delay={0.1}>
              <div className="mt-8">
                <div className="rounded-2xl overflow-hidden bg-neutral-100">
                  <img src="/images/soundbath-streaming4.png" alt="Sound Bath across streaming platforms: Spotify, Apple, Bandcamp, YouTube, Amazon" className="w-full h-auto" />
                </div>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* PREMIUM FEATURES — what premium unlocks */}
      {study.premiumFeatures && (
        <section className="py-section">
          <div className="container-main">
            <SectionReveal>
              <div className="max-w-2xl mb-12">
                <p className="section-label mb-3">What Premium Unlocks</p>
                <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-4">
                  Increasing value for power users
                </h2>
                <p className="text-body-lg text-secondary">
                  The new features attached to the launch of premium are vocal warmups and practice music tests. Both are offered free as limited versions with ads. With a premium subscription, users can unlock a long list of vocal scales for their warmups (like different exercises and machines at a gym), track their score history from practice music tests, and remove ads from all the core features of the app. Premium helps users be strong and better prepared for practice, rehearsals, and performances.
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {study.premiumFeatures.map((feature, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="bg-muted rounded-2xl overflow-hidden h-full">
                    <CaseStudyImage
                      src={feature.image}
                      alt={feature.title}
                      aspect="aspect-[4/3]"
                      placeholder={feature.title}
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                      <p className="text-body text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INTERACTION SHOWCASES — video/image demos */}
      {study.interactionShowcases && (
        <section className="py-section">
          <div className="container-main">
            <SectionReveal>
              <p className="section-label mb-3">{study.slug === 'pocketpitch-metronome' ? 'Brainstorming UX' : 'Interaction Design'}</p>
              <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-12">
                {study.slug === 'pocketpitch-metronome' ? 'How does this fit in?' : 'Motion, transitions, and logic'}
              </h2>
            </SectionReveal>

            <div className="space-y-16">
              {study.interactionShowcases.map((showcase, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  {showcase.images ? (
                    <div className="space-y-6">
                      <div>
                        <span
                          className="text-caption font-mono mb-3 block"
                          style={{ color: study.heroColor }}
                        >
                          {study.slug === 'pocketpitch-metronome' ? 'Brainstorm' : 'Showcase'} {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {showcase.title}
                        </h3>
                        <p className="text-body text-secondary max-w-2xl">
                          {showcase.description}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {showcase.images.map((img, j) => (
                          <div key={j}>
                            <CaseStudyImage
                              src={img.src}
                              alt={img.caption || showcase.title}
                              aspect="aspect-auto"
                              placeholder={img.caption || showcase.title}
                            />
                            {img.caption && (
                              <p className="text-caption text-secondary mt-3 text-center">{img.caption}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : showcase.wideImage ? (
                    <div className="space-y-6">
                      <div>
                        <span
                          className="text-caption font-mono mb-3 block"
                          style={{ color: study.heroColor }}
                        >
                          {study.slug === 'pocketpitch-metronome' ? 'Brainstorm' : 'Showcase'} {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {showcase.title}
                        </h3>
                        <p className="text-body text-secondary max-w-2xl">
                          {showcase.description}
                        </p>
                      </div>
                      <CaseStudyImage
                        src={showcase.image!}
                        alt={showcase.title}
                        aspect="aspect-auto"
                        placeholder={showcase.title}
                      />
                    </div>
                  ) : (
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                      <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                        {showcase.video ? (
                          <div className="rounded-2xl overflow-hidden bg-neutral-100">
                            <video
                              src={showcase.video}
                              poster={showcase.image}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-auto"
                            />
                          </div>
                        ) : (
                          <CaseStudyImage
                            src={showcase.image}
                            alt={showcase.title}
                            aspect="aspect-[4/3]"
                            placeholder={showcase.title}
                          />
                        )}
                      </div>
                      <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                        <span
                          className="text-caption font-mono mb-3 block"
                          style={{ color: study.heroColor }}
                        >
                          {study.slug === 'pocketpitch-metronome' ? 'Brainstorm' : 'Showcase'} {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {showcase.title}
                        </h3>
                        <p className="text-body text-secondary">
                          {showcase.description}
                        </p>
                      </div>
                    </div>
                  )}
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* KEY DECISIONS — visual cards if available, otherwise text insights */}
      {hasVisualLayout && study.decisionCards ? (
        <section className="py-section">
          <div className="container-main">
            <SectionReveal>
              {study.slug === 'pocketpitch-monetization' ? (
                <div className="max-w-2xl mb-12">
                  <p className="section-label mb-3">User Flows</p>
                  <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-4">
                    Mapping the paths to premium
                  </h2>
                  <p className="text-body-lg text-secondary">
                    {study.decisionCards[0].description}
                  </p>
                </div>
              ) : (
                <>
                  <p className="section-label mb-3">Key Decisions</p>
                  <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-12">
                    {study.slug === 'pocketpitch-metronome' ? 'From concept to interaction pattern' : 'Design choices that shaped the product'}
                  </h2>
                </>
              )}
            </SectionReveal>

            {study.slug === 'pocketpitch-monetization' ? (
              <SectionReveal delay={0.1}>
                <CaseStudyImage
                  src={study.decisionCards[0].image}
                  alt={study.decisionCards[0].title}
                  aspect="aspect-auto"
                  placeholder={study.decisionCards[0].title}
                />
                {study.decisionCards[0].caption && (
                  <p className="text-caption text-secondary mt-3 text-center">{study.decisionCards[0].caption}</p>
                )}
              </SectionReveal>
            ) : (
            <div className="space-y-16">
              {study.decisionCards.map((card, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  {card.wideImage ? (
                    <div className="space-y-6">
                      <div>
                        <span
                          className="text-caption font-mono mb-3 block"
                          style={{ color: study.heroColor }}
                        >
                          Decision {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {card.title}
                        </h3>
                        <p className="text-body text-secondary max-w-2xl">
                          {card.description}
                        </p>
                      </div>
                      <CaseStudyImage
                        src={card.image}
                        alt={card.title}
                        aspect="aspect-auto"
                        placeholder={card.title}
                      />
                      {card.caption && (
                        <p className="text-caption text-secondary mt-3 text-center">{card.caption}</p>
                      )}
                    </div>
                  ) : (
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                      <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                        <CaseStudyImage
                          src={card.image}
                          alt={card.title}
                          aspect="aspect-[4/3]"
                          placeholder={card.title}
                        />
                      </div>
                      <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                        <span
                          className="text-caption font-mono mb-3 block"
                          style={{ color: study.heroColor }}
                        >
                          Decision {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {card.title}
                        </h3>
                        <p className="text-body text-secondary">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  )}
                </SectionReveal>
              ))}
            </div>
            )}
          </div>
        </section>
      ) : null}

      {/* inLoop — UI Design */}
      {study.slug === 'inloop-design-system' && (
        <section className="py-section">
          <div className="container-main">
            <SectionReveal>
              <div className="max-w-2xl mb-12">
                <p className="section-label mb-3">UI Design</p>
                <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-4">
                  Designing the product screens for launch
                </h2>
                <p className="text-body-lg text-secondary">
                  {study.insights[0].detail}
                </p>
              </div>
            </SectionReveal>
            <div className="space-y-8">
              <SectionReveal delay={0.1}>
                <CaseStudyImage
                  src="/images/inloop-ui-design-1.png"
                  alt="inLoop UI design screens"
                  aspect="aspect-[2/1]"
                  placeholder="UI design image 1 (2500×1250)"
                />
                <p className="text-caption text-secondary mt-3 text-center">Contacts screen with highlighted design changes.</p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <CaseStudyImage
                  src="/images/inloop-ui-screens.png"
                  alt="inLoop product screens: subscriptions, account settings, lists, and contact details"
                  aspect="aspect-[2/1]"
                  placeholder="Core product screens (2500×1250)"
                />
                <p className="text-caption text-secondary mt-3 text-center">Assorted screens after updating the UI Design.</p>
              </SectionReveal>
            </div>
          </div>
        </section>
      )}

      {/* inLoop — Design System */}
      {study.slug === 'inloop-design-system' && (
        <section className="py-section bg-muted">
          <div className="container-main">
            <SectionReveal>
              <div className="max-w-2xl mb-12">
                <p className="section-label mb-3">Design System</p>
                <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-4">
                  Extracting patterns into a scalable system
                </h2>
                <p className="text-body-lg text-secondary">
                  {study.insights[1].detail}
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden bg-neutral-100">
                <img src="/images/inloop-process.png" alt="inLoop design system: color tokens, typography, and component states" className="w-full h-auto" />
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* UI DESIGN — monetization only */}
      {study.slug === 'pocketpitch-monetization' && (
        <section className="py-section bg-muted">
          <div className="container-main">
            <SectionReveal>
              <div className="max-w-2xl mb-12">
                <p className="section-label mb-3">UI Design</p>
                <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-4">
                  New elements with established styles
                </h2>
                <p className="text-body-lg text-secondary">
                  The new screens for the premium subscription started with a generic paywall layout that would be familiar to users based on what was common in mobile app experiences. From there I used established colors, fonts, and spacing styles to complete the UI design. Then I made the onboarding, premium active, and legacy active screens to match the look and feel of the paywall. Finally I made a &quot;Upgrade&quot; and &quot;Premium&quot; button based on the app's small button style, but adding a star emoji to grab attention (and hopefully more sales).
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <CaseStudyImage
                src="/images/pocket-pitch-premium-ui-design.png"
                alt="Premium UI design screens"
                aspect="aspect-auto"
                placeholder="Premium UI design screens"
              />
              <p className="text-sm text-secondary mt-3 text-center">Onboarding, Upgrade/Premium Button (shown 2x larger), Premium Paywall, Premium Subscription Active.</p>
            </SectionReveal>
          </div>
        </section>
      )}

      {!study.decisionCards && !study.beforeAfterImage && !study.deliverableImages && !study.interactionShowcases && (
        <section className="py-section">
          <div className="container-main">
            <SectionReveal>
              <p className="section-label mb-3">Key Insights</p>
              <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-12">
                What research revealed
              </h2>
            </SectionReveal>

            <div className="space-y-8">
              {study.insights.map((insight, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
                    <div className="lg:col-span-2">
                      <span
                        className="text-caption font-mono mb-3 block"
                        style={{ color: study.heroColor }}
                      >
                        Insight {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-body text-secondary">
                        {insight.description}
                      </p>
                    </div>
                    <div className="lg:col-span-3">
                      <div className="bg-muted rounded-xl p-6">
                        <p className="text-caption font-medium text-secondary mb-2">Supporting evidence</p>
                        <p className="text-body text-primary">{insight.detail}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {study.slug === 'soundbath' && (
              <SectionReveal delay={0.2}>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden bg-neutral-100">
                    <img src="/images/soundbath-museum.png" alt="Modern museum inspiration: Guggenheim exterior and interior, minimalist gallery spaces" className="w-full h-auto" />
                  </div>
                </div>
              </SectionReveal>
            )}
          </div>
        </section>
      )}

      {/* RAPID PROTOTYPING — metronome only */}
      {study.slug === 'pocketpitch-metronome' && (
        <section className="py-section bg-muted">
          <div className="container-main">
            <SectionReveal>
              <div className="max-w-2xl mb-10">
                <p className="section-label mb-3">Rapid <span className="line-through">Prototyping</span> Testing</p>
                <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-6">
                  From ideas to my phone in hours
                </h2>
                <p className="text-body-lg text-secondary">
                  Once the concept was solidified, I used Claude and Xcode to rapidly build a working version I could test on my phone.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CaseStudyImage
                  src="/images/xcode-prototyping.png"
                  alt="Xcode showing MetronomeManager.swift — the Swift class powering Pocket Pitch's metronome engine"
                  aspect="aspect-[4/3]"
                  placeholder="Claude Code prototyping session"
                />
                <div className="rounded-2xl overflow-hidden bg-neutral-100">
                  <video
                    src="/images/metronome-simulator-test.mov"
                    controls
                    loop
                    playsInline
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* FIGMA DELIVERABLES — if available (skip for inLoop, shown in UI Design section) */}
      {study.deliverableImages && study.slug !== 'inloop-design-system' && (
        <section className="py-section bg-muted">
          <div className="container-main">
            <SectionReveal>
              <p className="section-label mb-3">Final Designs</p>
              <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-6">
                Adjusting and shipping the polished feature!
              </h2>
              <p className="text-body-lg text-secondary mb-12 max-w-2xl">
                Testing had revealed that the haptic feedback for the metronome's vibration could not be used while the tuner was active. In order to keep the metronome's vibration for the rest of the experience and avoid confusing users, I made an explanative pop-up message for when users tried to use the vibration and tuner at the same time. Additionally, I rearranged the settings buttons so that the tempo and play/stop (likely the 2 most used buttons) were both on the right side together to allow for easier one-handed use (maybe the user needs to hold sheet music or a microphone in their other hand).
              </p>
            </SectionReveal>

            <div className="space-y-8">
              {study.deliverableImages.map((item, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div>
                    <CaseStudyImage
                      src={item.image}
                      alt={item.caption}
                      aspect="aspect-[2.5/1]"
                      placeholder={item.caption}
                    />
                    <p className="text-caption text-secondary mt-3 text-center">{item.caption}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {study.figmaUrl && (
              <SectionReveal delay={0.2}>
                <div className="mt-10 text-center">
                  <a
                    href={study.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border text-primary px-6 py-3 rounded-full font-medium hover:bg-white transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="#F24E1E"/>
                      <path d="M12 2h3.5a3.5 3.5 0 010 7H12V2z" fill="#FF7262"/>
                      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="#1ABCFE"/>
                      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z" fill="#0ACF83"/>
                      <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF"/>
                    </svg>
                    View Figma File Copy
                  </a>
                </div>
              </SectionReveal>
            )}
          </div>
        </section>
      )}

      {/* PROCESS — only show for non-visual layouts */}
      {!hasVisualLayout && (
        <>
          <section className="py-section bg-muted">
            <div className="container-main">
              <SectionReveal>
                <p className="section-label mb-3">The Process</p>
                <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-12">
                  How we got there
                </h2>
              </SectionReveal>

              {study.slug === 'soundbath' ? (
              <div className="space-y-16">
                {study.process.map((step, i) => {
                  const images = ['/images/soundbath-logosnew.png', '/images/soundbath-colorsnew.png', '/images/soundbath-fonthierarchynew.png'];
                  return (
                  <SectionReveal key={i} delay={i * 0.1}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? '' : ''}`}>
                      <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="rounded-2xl overflow-hidden bg-neutral-100">
                          <img src={images[i]} alt={step.title} className="w-full h-auto" />
                        </div>
                      </div>
                      <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                        <span className="text-caption font-medium text-secondary uppercase tracking-wider">{step.phase}</span>
                        <h3 className="text-lg font-semibold text-primary mt-2 mb-3">{step.title}</h3>
                        <p className="text-body text-secondary">{step.description}</p>
                      </div>
                    </div>
                  </SectionReveal>
                  );
                })}
              </div>
              ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {study.process.map((step, i) => (
                  <SectionReveal key={i} delay={i * 0.1}>
                    <div className="bg-white rounded-xl p-6 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: study.heroColor }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-caption font-medium text-secondary uppercase tracking-wider">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-secondary">{step.description}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
              )}
            </div>
          </section>

          {/* Process Image — hide for Sound Bath */}
          {study.slug !== 'soundbath' && (
          <section className="py-section-sm">
            <div className="container-main">
              <SectionReveal>
                <div className="rounded-2xl overflow-hidden bg-neutral-100">
                  <img src="/images/inloop-process.png" alt="inLoop design system: color tokens, typography, and component states" className="w-full h-auto" />
                </div>
              </SectionReveal>
            </div>
          </section>
          )}

          {/* THE SOLUTION */}
          <section className="py-section">
            <div className="container-narrow">
              <SectionReveal>
                <p className="section-label mb-3">The Solution</p>
                <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-4">
                  What we built
                </h2>
                <p className="text-body-lg text-secondary mb-8">
                  {study.solution.summary}
                </p>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="bg-muted rounded-xl p-6 md:p-8">
                  <p className="text-sm font-semibold text-primary mb-4">Key design decisions:</p>
                  <ul className="space-y-3">
                    {study.solution.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-body text-secondary">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: study.heroColor }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* Solution Screens */}
          <section className="pb-section">
            <div className="container-main">
              <SectionReveal>
                {study.slug === 'soundbath' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden bg-neutral-100">
                    <img src="/images/soundbath-final1.png" alt="Sound Bath website: homepage with hero and catalog section" className="w-full h-auto" />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-neutral-100">
                    <img src="/images/soundbath-final2.png" alt="Sound Bath website: catalog page with category cards" className="w-full h-auto" />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-neutral-100">
                    <img src="/images/soundbath-final3.png" alt="Sound Bath website: connect page with contact form" className="w-full h-auto" />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-neutral-100">
                    <img src="/images/soundbath-final4.png" alt="Sound Bath website: meditation category page with playlist embed" className="w-full h-auto" />
                  </div>
                </div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden bg-neutral-100">
                    <img src="/images/inloop-final-1.png" alt="inLoop contacts list view with filtering" className="w-full h-auto" />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-neutral-100">
                    <img src="/images/inloop-final-2.png" alt="inLoop contact detail profile view" className="w-full h-auto" />
                  </div>
                </div>
                )}
              </SectionReveal>
            </div>
          </section>
        </>
      )}

      {/* REFLECTION */}
      <section className="py-section">
        <div className="container-narrow">
          <SectionReveal>
            <p className="section-label mb-3">Reflection</p>
            <h2 className="text-heading md:text-display-sm font-semibold text-primary mb-6">
              What I learned
            </h2>
            <p className="text-body-lg text-secondary mb-8">
              {study.impact.reflection}
            </p>
            <div className="space-y-4">
              {study.impact.learned.map((lesson, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    className="mt-1.5 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ backgroundColor: study.heroColor }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-body text-primary">{lesson}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-section">
        <div className="container-main text-center">
          <SectionReveal>
            <p className="section-label mb-4">Next Case Study</p>
            <Link
              href={`/work/${study.nextStudy.slug}`}
              className="group inline-block"
            >
              <h2 className="text-display-sm md:text-display font-semibold text-primary group-hover:text-accent transition-colors">
                {study.nextStudy.title}
                <span className="inline-block ml-3 transition-transform group-hover:translate-x-2">
                  &rarr;
                </span>
              </h2>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
