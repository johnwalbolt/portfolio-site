import { notFound } from 'next/navigation'
import CaseStudyLayout, { ProjectImage } from '@/components/CaseStudyLayout'
import { projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Not Found' }

  return {
    title: `${project.name} — John Walbolt`,
    description: project.summary[0],
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <CaseStudyLayout
      name={project.name}
      category={project.category}
      liveUrl={project.liveUrl}
      liveUrlLabel={project.liveUrlLabel}
      hero={
        <ProjectImage
          src={project.heroImage}
          alt={`${project.name} hero`}
          label="Hero image"
        />
      }
      highlights={project.highlights}
      summary={project.summary}
      sections={project.sections}
      images={project.images}
    />
  )
}
