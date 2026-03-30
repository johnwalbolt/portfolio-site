import { caseStudies } from '@/lib/data'
import CaseStudyContent from './CaseStudyContent'

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug)
  if (!study) return { title: 'Case Study Not Found' }

  return {
    title: `${study.title} — John Walbolt`,
    description: study.subtitle,
  }
}

export default function CaseStudyPage() {
  return <CaseStudyContent />
}
