import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import ZoomableImage from '@/components/ZoomableImage'

export const metadata: Metadata = {
  title: 'Show Posters — John Walbolt',
  description:
    'Posters designed for concerts, cabarets, and a short film in New York.',
}

const posters = [
  {
    image: '/images/posters/Kristen.png',
    title: 'Kristen Plati',
    detail: 'Debut album release concert — The Triad Theater',
  },
  {
    image: '/images/posters/Justin.png',
    title: 'Justin Luciano',
    detail: 'Cabaret — The Duplex',
  },
  {
    image: '/images/posters/Francesca.jpeg',
    title: 'Francesca',
    detail: 'Concert — The Triad Theater',
  },
  {
    image: '/images/posters/Non-Eq.png',
    title: 'Non-Eq',
    detail: 'Short film I wrote and directed',
  },
  {
    image: '/images/posters/Chrissy.png',
    title: 'Chrissy Albanese',
    detail: 'Solo cabaret debut \u2014 The Duplex',
  },
  {
    image: '/images/posters/Kristen3.png',
    title: 'Kristen Plati',
    detail: 'Rockwood Music Hall',
  },
  {
    image: '/images/posters/krampus-poster-print.png',
    title: 'Krampus Holiday Horror!',
    detail: 'Miracle on Christopher St. \u2014 The Duplex',
  },
  {
    image: '/images/posters/DoubleFeature.png',
    title: 'Double Feature',
    detail: 'Johnny Beirne and The Jingle Boys \u2014 The Duplex',
  },
  {
    image: '/images/posters/Fran1.jpg',
    title: 'Francesca Loeber',
    detail: 'Solo concert debut \u2014 The Duplex',
  },
  {
    image: '/images/posters/K1.jpg',
    title: 'Kristen Plati',
    detail: 'The Duplex, July 24',
  },
  {
    image: '/images/posters/Miracle1.png',
    title: 'Miracle on Christopher Street',
    detail: 'Holiday variety show \u2014 The Duplex',
  },
  {
    image: '/images/posters/vistaprint.png',
    title: 'Gabrielle Elisabeth',
    detail: 'The Duplex, July 15',
  },
]

export default function Posters() {
  return (
    <CaseStudyLayout
      name="Show Posters"
      category="Print & Digital"
      // The posters stand in for the hero image.
      hero={
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posters.map((poster) => (
            <li key={poster.image}>
              {/* posters vary slightly in ratio, so let each keep its own */}
              <ZoomableImage
                src={poster.image}
                alt={`${poster.title} poster \u2014 ${poster.detail}`}
                className="w-full h-auto bg-neutral-100 ring-1 ring-black/5"
              />
            </li>
          ))}
        </ul>
      }
      leadWithSummary
      summary={[
        'Various show posters I designed between 2018 and 2020, many of which I was also involved in as a producer.',
      ]}
      images={[]}
    />
  )
}
