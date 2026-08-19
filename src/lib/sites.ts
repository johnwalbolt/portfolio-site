export type Site = {
  url: string
  // An absolute URL opens the live site in a new tab; a path routes internally.
  // null renders an empty slot instead of a link.
  href: string | null
  description: string
  thumbnail: string | null
  // Rendered in parentheses after the url, in a lighter weight.
  category?: string
}

// Row one is live client and personal sites; row two is product work backed by
// case studies. Descriptions come from the case studies in data.ts, or from the
// sites themselves. All of it is John's own design-and-build work.
export const sites: Site[] = [
  {
    url: 'soundbathvibrations.com',
    href: '/projects/soundbath',
    description:
      'A modern catalog site helping an ambient music producer showcase their full library to listeners and businesses alike.',
    thumbnail: '/images/SoundBathOldHero.png',
    category: 'Website',
  },
  {
    url: 'ovataworks.com',
    href: '/projects/ovata',
    description:
      'A site for a boutique landscape architecture studio, designed and built to turn project browsing into new enquiries.',
    thumbnail: '/images/OvataThumb.png',
    category: 'Website',
  },
  {
    url: 'andrewheringer.com',
    href: '/projects/andrew-heringer',
    description:
      'An artist site for a music producer and singer/songwriter, designed and built around their releases and projects.',
    thumbnail: '/images/AndrewOldHero.png',
    category: 'Website',
  },
  {
    url: 'Pocket Pitch - The Singer App',
    href: '/projects/pocket-pitch',
    description:
      'A pitch, metronome, and warmup app for singers, designed and shipped solo with AI-assisted development.',
    thumbnail: '/images/PocketPitchHero.png',
    category: 'Consumer Mobile App',
  },
  {
    url: 'inLoop',
    href: '/projects/inloop',
    description:
      'As the first designer at inLoop, I designed the product UI for launch and built an accessible design system from scratch.',
    thumbnail: '/images/inLoopHero.png',
    category: 'Web-based B2B SaaS',
  },
  {
    url: 'Show Posters',
    href: '/posters',
    description:
      'Posters designed for concerts, cabarets, and a short film, from years spent producing live shows in New York.',
    thumbnail: '/images/posters/PostersThumb.png',
    category: 'Print & Digital',
  },
]
