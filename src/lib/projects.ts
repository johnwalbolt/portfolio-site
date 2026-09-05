// New case studies for the site cards on the homepage. These are separate from
// the long-form studies in data.ts (rendered at /work/[slug]), which are left
// untouched. Text and images here are placeholders meant to be filled in.

export type Highlight = {
  label: string
  // An empty value leaves the row in place, ready to be filled in.
  value: string
}

export type CaseSection = {
  label: string
  heading: string
  body: string
  // Transparent artwork (diagrams, etc.) — skips the hairline frame.
  unframedImages?: boolean
  // Full-width image shown above the grid.
  leadImage?: string
  // none -> placeholder box; one -> full width; several -> a grid.
  // All render at their own aspect ratio, uncropped.
  images?: string[]
  caption?: string
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
  // Full-width image between the summary and the supporting grid.
  sections?: CaseSection[]
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
    heroImage: '/images/SBHeroTumb825.webp',
    highlights: [
      { label: 'Role', value: 'Designer & Builder' },
      { label: 'Team', value: 'Solo (working directly with stakeholders)' },
      { label: 'Client', value: 'Sound Bath' },
    ],
    summary: [
      'Sound Bath is a category-leading music producer with a strong presence across all major streaming platforms. Prior to this project they didn\u2019t have a website, and also lacked a central hub for showcasing their catalog and connecting with listeners.',
      '**The project resulted in an increase in user communications via the website.** The website was built and delivered by myself, and set up so that the client could make minor updates on their own using AI.',
    ],
    sections: [
      {
        label: 'The Problem',
        heading: 'A central hub, and an invitation to connect.',
        body: 'Sound Bath had a rich catalog of ambient music and sounds but no dedicated platform to showcase it. Their existing presence didn\u2019t communicate the depth of their catalog or make it easy for their two audience segments to explore and connect.',
        images: [
          '/images/soundbath-youtube2.webp',
          '/images/soundbath-spotify2.webp',
        ],
      },
      {
        label: 'Users',
        heading: 'Listeners and small businesses.',
        body: 'Individual listeners stream from the audio catalog as labeled for meditation, sleep, or starting the day. Small businesses use audio tracks to create the atmosphere for locations like yoga studios, daycares, or art installations.',
        images: ['/images/5users.webp'],
      },
      {
        label: 'User Flows',
        heading: 'User journeys from streaming to the new website.',
        body: 'We laid out the journeys of their users searching or browsing for music and potentially wanting more information about the brand. We established that if a user made it to the website, they were there intentionally to learn or connect, and that aligned with the client\u2019s goals of educating users on their catalog and encouraging more communication.',
        images: ['/images/sb-userflow1.webp'],
        unframedImages: true,
      },
      {
        label: 'Wireframes',
        heading: 'The framework for education and connection.',
        body: 'Lo-Fi wireframes were used to cement the hierarchy of goals and information for the client, while tying it back to the user flows.',
        images: ['/images/sb-frames.webp'],
        unframedImages: true,
      },
      {
        label: 'Visual Assets',
        heading: 'Building upon existing branding.',
        body: 'Sound Bath already had a great logo, some colors, and preferred fonts. I added some more colors and font styles (based on their existing ones) to cover everything I would need for the UI Designs.',
        images: [
          '/images/soundbath-logosnew.png',
          '/images/soundbath-colorsnew.png',
          '/images/soundbath-fonthierarchynew.png',
        ],
      },
      {
        label: 'UI Design',
        heading: 'Like stepping into a modern museum...',
        body: 'After discussions with the client, we agreed on an artistic direction that evoked the feel of visiting a modern museum using existing company visual assets. The idea was to have a bold first impression based on the company logo, that continued throughout the experience while becoming more subtle as the showcased work became the primary focus.',
        leadImage: '/images/SoundBath-Inspiration.webp',
        images: [
          '/images/SBHeroTumb825.webp',
          '/images/SBCatalog825.webp',
          '/images/SBConnect825.webp',
          '/images/SBCatalog2825.webp',
        ],
      },
      {
        label: 'Delivery',
        heading: 'Using AI to complete the project.',
        body: 'I built the final website using Claude Code, deployed it to a designated GitHub repo, set up and connected a Web3Forms account for the contact form, and then connected the domain. Since the client is actually a Claude Code user as well, I was able to add them as a Collaborator for the GitHub repo and then provide them with a .md file so that their Claude Code could connect directly to the website to make subtle changes to content without me.',
        // no image for this section
        images: [],
      },
    ],
    // every supporting image now lives in a section above
    images: [],
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
      'Ovata is a boutique landscape architecture studio that wanted to update their website as they prepared to approach new clients. After discussions with the client, we arrived at a modern styling using earthy colors and the existing company logo and font. I built the website using Claude Code, deployed it to their Bluehost hosting account, set up and connected Web3Forms for the contact form\u2019s functionality, and finally set up and connected Sanity for the blog\u2019s functionality.',
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
    heroImage: '/images/AHHeroThumb825.webp',
    highlights: [
      { label: 'Role', value: 'Designer & Builder' },
      { label: 'Team', value: 'Solo' },
      { label: 'Client', value: 'Andrew Heringer' },
    ],
    summary: [
      'The client needed a simple marketing website to offer essential contact information and redirection to other projects for visitors to explore. This project was initially designed in Figma and then built on Squarespace.',
      'A year later it was moved to GitHub Pages to save the client money on hosting, and also updated to enhance the visuals and design. This was done using Claude Code for the update and move, and then Web3Forms was used to make the contact form functional. Finally, the delivered website was set up so that the client could make small content updates to the website through their own Claude account. This was done by generating a PDF of instructions for the client, as well as an .md file they could upload to their Claude Code and automatically connect to the GitHub repo.',
    ],
    images: [
      '/images/AHMusic825.webp',
      '/images/AHAbout825.webp',
      '/images/AHContact825.webp',
    ],
  },
  {
    slug: 'pocket-pitch',
    name: 'Pocket Pitch - The Singer App',
    category: 'Consumer Mobile App',
    liveUrl: 'https://apps.apple.com/us/app/pocket-pitch-the-singer-app/id1005725401',
    liveUrlLabel: 'View on the App Store',
    heroImage: '/images/PocketPitchHero825.webp',
    highlights: [
      { label: 'Role', value: 'Founder & Designer' },
      {
        label: 'Team',
        value:
          'Solo (currently built with AI, previously hired developer contractors)',
      },
    ],
    summary: [
      'This started in 2015 as a passion project \u2014 a simple tool for singers, and since then it has grown to 50k Monthly Active Users with a 4.6-star rating. Core users are singers of all skill levels (including a large percentage of choral singers) and of all technical abilities. The user experience design includes audio and visual interactions with haptic feedback and use of the device\u2019s microphone.',
    ],
    images: [
      '/images/PocketPitchOnboarding825.webp',
      '/images/PocketPitchWarmups825.webp',
      '/images/PocketPitchPaywall825.webp',
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
