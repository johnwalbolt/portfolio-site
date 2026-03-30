'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/lib/data'

interface CaseStudyCardProps {
  study: CaseStudy
  index: number
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <Link href={`/work/${study.slug}`} className="case-study-card group block">
        {/* Image */}
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{ backgroundColor: study.heroColorLight }}
        >
          {study.thumbnail ? (
            <Image
              src={study.thumbnail}
              alt={study.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] max-w-md">
                <div
                  className="rounded-xl shadow-2xl p-6 bg-white/90 backdrop-blur"
                  style={{ boxShadow: `0 25px 50px -12px ${study.heroColor}30` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: study.heroColor }} />
                    <div className="h-2 rounded-full bg-neutral-200 w-24" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-neutral-100 w-full" />
                    <div className="h-2 rounded-full bg-neutral-100 w-4/5" />
                    <div className="h-2 rounded-full bg-neutral-100 w-3/5" />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <div className="h-8 rounded-lg w-20" style={{ backgroundColor: study.heroColorLight }} />
                    <div className="h-8 rounded-lg bg-neutral-50 w-20" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-caption font-medium" style={{ color: study.company === 'Pocket Pitch' ? '#C400F0' : study.heroColor }}>
              {study.company}
            </span>
            <span className="text-neutral-300">/</span>
            <span className="text-caption text-secondary">{study.year}</span>
          </div>
          <h3 className="text-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
            {study.title}
          </h3>
          <p className="text-body text-secondary mb-4 line-clamp-2">
            {study.subtitle}
          </p>

          {/* Hook metric */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.heroColor }} />
            <span className="text-caption font-medium text-primary">{study.hook}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {study.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
