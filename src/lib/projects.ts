// New case studies for the site cards on the homepage. These are separate from
// the long-form studies in data.ts (rendered at /work/[slug]), which are left
// untouched. Text and images here are placeholders meant to be filled in.

export type Highlight = {
  label: string
  // An empty value leaves the row in place, ready to be filled in.
  value: string
}

export type Project = {
  slug: string
  name: string
  category: string
  // Where the project lives, kept so the case study can still link out to it.
  liveUrl?: string
  // Defaults to "Visit the live site" when omitted.
  liveUrlLabel?: string
  heroImage: string | null
  highlights: Highlight[]
  summary: string[]
  // Three supporting images, shown 16:9 to match the homepage thumbnails.
  images: (string | null)[]
}

export const placeholderHighlights: Highlight[] = [
  { label: 'Role', value: 'Placeholder' },
  { label: 'Team', value: 'Placeholder' },
  { label: 'Client', value: 'Placeholder' },
]

export const placeholderSummary = [
  'Summary paragraph one. Set up the problem: who it was for, what was in the way, and why it mattered enough to solve.',
  'Summary paragraph two. Walk through the approach — what was tried, what was cut, and the reasoning behind the calls that stuck.',
  'Summary paragraph three. Close on the outcome and what it changed.',
]

export const placeholderImages = [null, null, null]

export const projects: Project[] = [
  {
    slug: 'soundbath',
    name: 'soundbathvibrations.com',
    category: 'Website',
    liveUrl: 'https://soundbathvibrations.com',
    heroImage: '/images/soundbath-hero5.png',
    highlights: [
      { label: 'Role', value: 'Designer & Builder' },
      { label: 'Team', value: 'Solo (working directly with stakeholders)' },
      { label: 'Client', value: 'Sound Bath' },
    ],
    summary: [
      'Sound Bath is a category-leading music producer with a strong presence across all major streaming platforms. Prior to this project they didn\u2019t have a website, and also lacked a central hub for showcasing their catalog and connecting with listeners.',
      'After discussions with the client, we agreed on an artistic direction that evoked the feel of visiting a modern museum using existing company visual assets. The idea was to have a bold first impression based on the company logo, that continued throughout the experience while becoming more subtle as the showcased work became the primary focus.',
    ],
    images: [
      '/images/soundbath-museum.png',
      '/images/soundbath-logosnew.png',
      '/images/soundbath-colorsnew.png',
      '/images/soundbath-final1.png',
      '/images/soundbath-final2.png',
      '/images/soundbath-final4.png',
    ],
  },
  {
    slug: 'ovata',
    name: 'ovataworks.com',
    category: 'Website',
    liveUrl: 'https://ovataworks.com',
    heroImage: '/images/OvataHero.png',
    highlights: [
      { label: 'Role', value: 'Designer & Builder' },
      { label: 'Team', value: 'Solo' },
      { label: 'Client', value: 'Ovata' },
    ],
    summary: [
      'Ovata is a boutique landscape architect studio that wanted to update their website as they prepare to approach new clients. After discussions with the client, we arrived at a modern styling using earthy colors and the existing company logo and font. I built the website using Claude Code, deployed it to their Bluehost hosting account, setup and connected Web3Forms for the contact form\u2019s functionality, and finally setup and connected Sanity for the blog\u2019s functionality.',
    ],
    images: [
      '/images/OvataProjects.png',
      '/images/OvataProject.png',
      '/images/OvataAbout.png',
    ],
  },
  {
    slug: 'andrew-heringer',
    name: 'andrewheringer.com',
    category: 'Website',
    liveUrl: 'https://andrewheringer.com',
    heroImage: '/images/AndrewOldHero.png',
    highlights: [
      { label: 'Role', value: 'Designer & Builder' },
      { label: 'Team', value: 'Solo' },
      { label: 'Client', value: 'Andrew Heringer' },
    ],
    summary: [
      'The client needed a simple marketing website to offer essential contact information and redirection to other projects for visitors to explore. This project was designed in Figma and then built on Squarespace.',
    ],
    images: [
      '/images/AndrewOld1.png',
      '/images/AndrewOld2.png',
      '/images/AndrewOld3.png',
    ],
  },
  {
    slug: 'pocket-pitch',
    name: 'Pocket Pitch - The Singer App',
    category: 'Consumer Mobile App',
    liveUrl: 'https://apps.apple.com/us/app/pocket-pitch-the-singer-app/id1005725401',
    liveUrlLabel: 'View on the App Store',
    heroImage: '/images/PocketPitchHero.png',
    highlights: [
      { label: 'Role', value: 'Founder & Designer' },
      {
        label: 'Team',
        value:
          'Solo (Currently build with AI, previously hired developer contractors)',
      },
    ],
    summary: [
      'This started as a passion project in 2015 as a simple tool for singers, and since then it has grown to 50k Monthly Active Users with a 4.6-star rating. Core users are singers of all skills (including a large percentage of choral singers) and of all technical abilities. The user experience design includes audio and visual interactions with haptic feedback and use of devices\u2019 microphone.',
    ],
    images: [
      '/images/PocketPitchOnboarding.png',
      '/images/PocketPitchWarmups.png',
      '/images/PocketPitchPaywall.png',
    ],
  },
  {
    slug: 'inloop',
    name: 'inLoop',
    category: 'Web-based B2B SaaS',
    heroImage: '/images/inLoopHero.png',
    highlights: [
      { label: 'Role', value: 'Founding Designer' },
      { label: 'Team', value: 'Direct report to Founder' },
      { label: 'Company', value: 'inLoop' },
    ],
    summary: [
      'inLoop is a CRM built for non-profits to track their fundraising efforts. The technical founder had already built the working functionality, but there was no design system, no component library, and no established patterns to design the product around.',
      'As the first designer, I designed the core screens for the MVP: dashboard, contacts, contact detail, and fundraising views. Every color pairing was tested against WCAG AA from day one, working directly with the technical founder so each component stayed feasible to build.',
    ],
    images: [
      '/images/inLoop1.png',
      '/images/inLoop2.png',
      '/images/inLoop3.png',
    ],
  },
]
