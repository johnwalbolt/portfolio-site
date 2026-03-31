export const siteConfig = {
  name: 'John Walbolt',
  role: 'Product Designer',
  tagline: 'My background as a creator and producer has led me to design digital products that people love to use. I use AI tools to rapidly craft, prototype, and ship.',
  email: 'johnwalbolt@gmail.com',
  location: 'SF Bay Area, CA',
  linkedin: 'https://linkedin.com/in/johnwalbolt',
  resume: '/resume.pdf',
  availability: 'Open to opportunities',
}

export const companies = [
  'inLoop',
  'Mobiquity',
  'Pocket Pitch',
  'Sound Bath',
]

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  hook: string
  role: string
  team: string
  timeline: string
  company: string
  year: string
  tags: string[]
  heroColor: string
  heroColorLight: string
  thumbnail?: string
  heroImage?: string
  beforeAfterImage?: string
  userRequestsImages?: (string | { src: string; caption?: string })[]
  requirements?: string[]
  decisionCards?: {
    image: string
    wideImage?: boolean
    caption?: string
    title: string
    description: string
  }[]
  deliverableImages?: {
    image: string
    caption: string
    wideImage?: boolean
  }[]
  figmaUrl?: string
  interactionShowcases?: {
    video?: string
    image?: string
    images?: { src: string; caption?: string }[]
    wideImage?: boolean
    title: string
    description: string
  }[]
  premiumFeatures?: {
    image: string
    title: string
    description: string
  }[]
  result: {
    metric: string
    description: string
  }
  challenge: {
    summary: string
    details: string[]
  }
  insights: {
    title: string
    description: string
    detail: string
  }[]
  process: {
    phase: string
    title: string
    description: string
  }[]
  solution: {
    summary: string
    highlights: string[]
  }
  impact: {
    metrics: { label: string; value: string; context: string }[]
    reflection: string
    learned: string[]
  }
  nextStudy: {
    slug: string
    title: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'pocketpitch-metronome',
    title: 'Designing a new feature with sight, sound, and touch.',
    subtitle: 'A user request that inspired a multi-sensory feature with technical challenges.',
    hook: 'Designed and shipped with AI-assisted development',
    role: 'Solo Founder & Designer',
    team: 'Solo (design, development)',
    timeline: '2026',
    company: 'Pocket Pitch',
    year: '2026',
    tags: ['Interaction Design', 'UI Design', 'Mobile App', 'Haptics'],
    heroColor: '#7C1A92',
    heroColorLight: '#f5d0fe',
    thumbnail: '/images/pocket-pitch-metronome-thumb.png',
    heroImage: '/images/pocket-pitch-metronome-hero.png',
    userRequestsImages: [
      { src: '/images/pocket-pitch-metronome-emails.png', caption: 'Email Feedback' },
      { src: '/images/pocket-pitch-metronome-reviews.png', caption: 'App Store Reviews' },
    ],
    requirements: [
      'Metronome must be available across all features where a user may get value from it (Pitch Pipe, Piano, etc.)',
      'Users need to control the tempo as Beats Per Minute',
      'Metronome must provide audio, visual, and haptic feedback channels that can be toggled independently',
      'UI must follow existing Pocket Pitch design patterns as much as possible',
      'Metronome should be as intuitive and obvious to operate as possible so no users are confused',
    ],
    interactionShowcases: [
      {
        image: '/images/pocket-pitch-metronome-which-screens.png',
        wideImage: true,
        title: 'Where is a metronome needed?',
        description: 'Pocket Pitch has five core features: Pitch Pipe, Piano, Tuner, Vocal Warmups and Practice Music Tests. These could be categorized into two groups: simple vs complex tools. The simple tools are almost like a Swiss-army knife and the metronome is a natural addition to that group. Because of this, it makes sense to integrate the metronome with the Pitch Pipe, Piano, and Tuner. Aside from that group of features, a metronome either would be redundant, lack any added value, or clash with the current structure of the Vocal Warmups or Practice Music Tests.',
      },
      {
        image: '/images/pocket-pitch-metronome-brainstorming-ux.png',
        wideImage: true,
        title: 'How does a metronome fit into the current experience?',
        description: 'I explored different approaches for integrating the metronome into the existing UI for the Pitch Pipe, Piano, and Tuner. There were some options, but I was bothered that there wasn\'t a solution that was consistent across all screens. What if a user wanted to run the metronome and actively switch between the pitch pipe and piano or tuner?',
      },
    ],
    decisionCards: [
      {
        image: '/images/pocket-pitch-metronome-fullscreen-approach.png',
        wideImage: true,
        caption: 'Proposed global metronome placement across Pitch Pipe, Piano, and Tuner screens (with and without ad banner for free users).',
        title: 'Designing a global solution',
        description: 'Because I work directly with the code for Pocket Pitch, I know how the files and code are structured. I knew that the tab bar\'s functionality and place in the code fit what I needed for the Metronome. Because of that, I had the Metronome follow suit. I also wanted to place the new global Metronome at the bottom of the screens because I had established a UX design pattern of placing local feature settings and messaging (like the Pitch Pipe) at the top.',
      },
      {
        image: '/images/pocket-pitch-metronome-drawer-style.png',
        wideImage: true,
        caption: 'Static variations and the eventual drawer style.',
        title: 'A drawer keeps it simple',
        description: 'As soon as I started testing UI designs for the metronome, it felt like I was introducing too many new buttons onto the screen. Also, it was taking up a good amount of real estate regardless if the user was actually using the metronome. I wanted to try having the minimum amount of space used with the minimum number of interactions, so I went with a 44px tall rectangle (almost like an extension of the tab bar) and 1 interaction to open the metronome settings. For the behavior of the interaction I decided to have a drawer that would slide out when the user tapped or swiped up on the Metronome. Tap and swipe were already established interactions for the app. For the buttons of the metronome, I used the already established style used for the pitch pipe\'s settings buttons.',
      },
    ],
    deliverableImages: [
      {
        image: '/images/metronome-drawer-states.png',
        caption: 'Metronome drawer states: collapsed, expanded, playing expanded, selecting tempo, and playing collapsed.',
      },
      {
        image: '/images/pocket-pitch-metronome-final-screens-2.png',
        caption: 'Metronome integrated across Pitch Pipe, Piano, and Tuner screens (with and without ads); plus the vibration conflict pop-up.',
      },
    ],
    result: {
      metric: 'Metronome for singers',
      description: 'Designed, built, and shipped a metronome for singers who were already using multiple features within an app.',
    },
    challenge: {
      summary: 'Most musicians (including singers) cannot produce a specific tempo without a point of reference, like a metronome, so musicians use it when a specific tempo is needed to ensure accuracy. A metronome is a device that produces a steady beat (sound, light, or vibration) at a set tempo (usually defined as beats per minute). This new feature needed to add the functionality of a metronome while seamlessly integrating into the current user experience.',
      details: [
        'Standard tab navigation destroys view state — switching to Pitch Pipe and back would restart the metronome',
        'The metronome isn\'t a feature of any one screen — it\'s a global tool that transcends navigation',
        'Audio feedback conflicts with active performance — a singer mid-song can\'t use an audio metronome',
        'The solution needed to work without demanding visual attention from a performing user',
      ],
    },
    insights: [
      {
        title: 'The metronome is architecturally like YouTube\'s miniplayer',
        description: 'The metronome needs to persist across navigation, just like video playback persists in YouTube\'s miniplayer.',
        detail: 'The metronome needed to exist at a layer above navigation — a persistent drawer that users can access from any screen without interrupting their current context or the metronome\'s state.',
      },
      {
        title: 'How do you keep someone in time when their eyes and ears are busy?',
        description: 'The answer: haptics. A non-audio, non-visual feedback channel for performers.',
        detail: 'The haptic pulse gives performers a timing reference they can feel without looking at the screen or competing with the music they\'re making.',
      },
      {
        title: 'Going beyond the ask reveals design judgment',
        description: 'The user request was "add a metronome." Identifying the navigation problem and the haptic opportunity turned a feature into a system-level improvement.',
        detail: 'The drawer architecture created a pattern for any future persistent tool. The haptic feedback showed understanding of the performance context that makes Pocket Pitch\'s users unique.',
      },
    ],
    process: [
      {
        phase: 'Request',
        title: 'User Feature Request',
        description: 'Users consistently requested a built-in metronome. Analyzed how they would actually use it during active music performance.',
      },
      {
        phase: 'Insight',
        title: 'Identifying the Deeper Problem',
        description: 'Standard navigation would break metronome state. Reframed: this isn\'t a "metronome screen" — it\'s a persistent tool that transcends navigation.',
      },
      {
        phase: 'Architecture',
        title: 'Persistent Drawer Pattern',
        description: 'Designed a drawer layer outside the navigation stack. Open from any screen, navigate freely, metronome continues uninterrupted.',
      },
      {
        phase: 'Enhancement',
        title: 'Haptic Feedback System',
        description: 'Added synchronized haptic feedback as a proactive enhancement — visual pulse, haptic tap, and toggleable audio.',
      },
    ],
    solution: {
      summary: 'A persistent drawer-based metronome that lives outside the navigation stack, with multi-modal feedback (visual, audio, haptic) designed for active musical performance.',
      highlights: [
        'Persistent drawer architecture — same concept as YouTube\'s miniplayer',
        'Haptic feedback — timing reference for performers whose eyes and ears are occupied',
        'Visual pulse — flash on beat when attention is available',
        'Audio toggle — disable when it conflicts with performance',
        'Accessible from any screen — no navigation interruption',
      ],
    },
    impact: {
      metrics: [
        { label: 'Architecture', value: 'Persistent', context: 'Drawer lives outside nav stack' },
        { label: 'Feedback Channels', value: '3', context: 'Visual, audio, haptic' },
        { label: 'State Persistence', value: '100%', context: 'No interruption across navigation' },
        { label: 'Proactive Addition', value: 'Haptics', context: 'Beyond the original request' },
      ],
      reflection: 'What seemed like a simple feature actually brought technical and design challenges. Ultimately my technical knowledge and AI familiarity allowed me to come up with a path forward and ship a solution.',
      learned: [
        'Design decisions go hand in hand with technical feasibility.',
        'I can add value for users relatively quickly with AI tools.',
      ],
    },
    nextStudy: {
      slug: 'pocketpitch-monetization',
      title: 'Pocket Pitch: Introducing Premium and Redesigning Monetization',
    },
  },
  {
    slug: 'pocketpitch-monetization',
    title: 'Introducing Premium and Redesigning Monetization.',
    subtitle: 'Pocket Pitch had a consistent 50K+ monthly active users, but a weak revenue model. I paired the introduction of new premium features with a redesigned monetization strategy. Beyond the price change, this monetization strategy focused on how and when to approach users about upgrading to a premium subscription.',
    hook: '+300% revenue, +12.5% time in app',
    role: 'Solo Designer & Developer',
    team: 'Solo (design, development, strategy)',
    timeline: 'Q1 2026',
    company: 'Pocket Pitch',
    year: '2026',
    tags: ['UX Strategy', 'Interaction Design', 'Monetization', 'Mobile App'],
    heroColor: '#7C1A92',
    heroColorLight: '#f5d0fe',
    thumbnail: '/images/pocket-pitch-premium.png',
    heroImage: '/images/pocket-pitch-premium-hero.png',
    beforeAfterImage: '/images/pocket-pitch-premium-before-after.png',
    premiumFeatures: [
      {
        image: '/images/pocket-pitch-premium-warmups.png',
        title: 'Vocal Warmups',
        description: 'Singers use vocal warmups to open up the full range and strength of their voice and prevent injury. Warmups are customizable based on vocal range, tempo, scale/exercise, and music visualization.',
      },
      {
        image: '/images/pocket-pitch-premium-practice.png',
        title: 'Practice Tests & Score History',
        description: 'Practice music tests allow singers to focus specifically on pitch accuracy and music notation knowledge; both crucial. Score history tracks the growth users want to achieve.',
      },
    ],
    decisionCards: [
      {
        image: '/images/pocket-pitch-premium-flows.png',
        wideImage: true,
        caption: 'User flows highlighting discovery of premium and a successful upgrade.',
        title: 'Mapping every path to premium',
        description: 'Before designing any screens, I mapped out the user flows for how and when users would discover the premium subscription. The goal was to make it accessible from just about anywhere in the app. There were four types of discovery points: the onboarding screen, the upgrade/premium button callout on each feature, warmup scale\'s limited free selection, and practice score\'s blocked history. I wanted the flow to feel natural rather than pushy, so I laid out the discovery and payment steps to ensure users understood the value before being asked to pay. Ultimately I chose not to mention premium in the onboarding screen (because it felt too pushy) and instead I made sure onboarding mentioned the Warmup and Practice features that benefited the most from an upgrade to premium.',
      },
    ],
    deliverableImages: [
      {
        image: '/images/pocket-pitch-premium-final-regular-flow.png',
        caption: 'Final flow from onboarding to Pitch Pipe home screen to the Premium upgrade paywall.',
      },
      {
        image: '/images/pocket-pitch-premium-final-warmup-flow.png',
        caption: 'Full warmup flow from Pitch Pipe to Warmups, Settings, Scale selection (with premium-gated scales marked), to the Premium paywall.',
      },
      {
        image: '/images/pocket-pitch-premium-final-practice-flow.png',
        caption: 'Practice flow from Pitch Pipe to Practice Tests, Score History (with premium gate on history), to the Premium paywall.',
      },
    ],
    figmaUrl: 'https://www.figma.com/design/SRGHKYXnhdGBPxbO4zd3ZO/Premium-Upsell?node-id=4001-8458&t=SN1nPmxBW4Ik1mMI-1',
    result: {
      metric: 'Revenue and usage increased!',
      description: 'Monetization didn\'t hurt the experience — it improved it.',
    },
    challenge: {
      summary: 'Pocket Pitch had been a "Swiss army knife for singers" with a Pitch Pipe, Piano, and Tuner, and the only in-app purchase offered to users was a one-time payment of $1.99 to remove ads from the app. New complex features of vocal warmups and practice music tests were being added with restrictions to justify launching a new subscription model starting at $0.99 per month and $8.99 per year. The previous monetization relied on users finding the In-App purchase on their own through the settings screen. This new premium launch needed a thorough plan for all the ways users could discover and purchase premium.',
      details: [
        'The old $1.99 one-time IAP created no recurring revenue and no reason to return to the purchase flow',
        'Users spanned all ages and technical abilities — church choirs, high school choirs, professional singers — the paywall needed to be approachable for everyone',
        'Had to decide what to gate behind premium vs. keep free without crippling the core experience',
        'One-person team: every design decision, engineering tradeoff, and business strategy was mine to make',
      ],
    },
    insights: [
      {
        title: 'Never interrupt a task to ask for money',
        description: 'The core design principle: premium prompts appear after a user has experienced value, not before. Users see what they\'re missing, then decide.',
        detail: 'Free users see the full list of premium warmup scales before hitting the upgrade prompt — they know exactly what they\'re getting. The upgrade button is always visible in the top right corner but never intrusive. No forced premium pitch on first launch. This approach treats the user with respect and lets the product sell itself.',
      },
      {
        title: 'What I chose NOT to build mattered as much as what I shipped',
        description: 'I originally planned a premium upsell during onboarding and an interstitial ad before warmups loaded. I removed both.',
        detail: 'The onboarding premium pitch felt too aggressive — asking for money before demonstrating value. The interstitial ad before warmups added friction to the exact flow that drives premium conversions. Removing it increased warmup usage, which increased conversions. Sometimes the best design decision is what you take away.',
      },
      {
        title: 'Three paywall states, not one',
        description: 'The paywall isn\'t a single screen — it\'s three distinct experiences based on user state: Upgrade (free user), Premium Active (subscriber), and Legacy Active (grandfathered early adopter).',
        detail: 'Legacy users who paid the original $1.99 are grandfathered into premium at no cost with a warm thank-you message and a crown icon. This was an empathy-driven decision — these early supporters helped build Pocket Pitch. Rewarding their loyalty felt more important than extracting a few more dollars.',
      },
    ],
    process: [
      {
        phase: 'Discovery',
        title: 'Understanding the Problem',
        description: 'Analyzed the existing monetization model: strong usage and retention, but a one-time $1.99 IAP generating no recurring revenue. Identified that the business needed to increase conversions to paying users without hurting the experience that drove retention.',
      },
      {
        phase: 'Strategy',
        title: 'Deciding What to Gate',
        description: 'Mapped every feature to free vs. premium. Core tools (Pitch Pipe, Piano, Tuner, Practice Tests) stayed fully free. Premium unlocked all warmup scales, practice score history, and removed ads. The free experience had to remain genuinely useful.',
      },
      {
        phase: 'Design',
        title: 'Paywall & Premium Flow',
        description: 'Designed the full premium flow: onboarding → warmups → scale selection → upgrade modal → purchase → premium active state. Three distinct paywall states for different user types. Persistent but passive upgrade path visible on every screen.',
      },
      {
        phase: 'Ship & Measure',
        title: 'Launch & Results',
        description: 'Built and shipped the full subscription system with StoreKit 2. Revenue increased 300%, MAU grew from 40K to 50K, and no significant drop in retention after adding usage limits. Designed and shipped entirely solo.',
      },
    ],
    solution: {
      summary: 'A subscription monetization system that respects users at every stage — free users get genuinely useful tools with tasteful ad integration, premium users get an ad-free experience with unlocked features, and legacy users are rewarded for their early loyalty.',
      highlights: [
        'Subscription pricing: $0.99/month, $8.99/year (save 24%) — monthly pre-selected to reduce commitment anxiety',
        'Three paywall states: Upgrade, Premium Active, and Legacy Active (grandfathered early adopters with crown icon)',
        'Feature gating that keeps core tools free — premium unlocks warmup scales, score history, and removes ads',
        'Persistent but passive upgrade path — always visible, never interrupts a task',
        'Discarded onboarding upsell and interstitial ads — removing friction increased the conversion flow',
        'Accessible color system with WCAG-compliant contrast ratios across all monetization surfaces',
      ],
    },
    impact: {
      metrics: [
        { label: 'In-App Revenue', value: '+300%', context: 'After monetization redesign' },
        { label: 'First-Time Downloads', value: '+9.7%', context: 'Increase in downloads after introducing premium.' },
        { label: 'Avg. Time in App', value: '+12.5%', context: 'Premium features increased engagement' },
      ],
      reflection: 'This project taught me that monetization is about providing value and making the financial offer to users. Asking for payments (especially subscriptions) was intimidating for me, but I found my way forward by asking myself "how do I provide more than enough value to my users?" This shift allowed me to focus on the best Premium experience possible and turning the paywall into an opportunity to have more users experience it.',
      learned: [
        'Always aim for a great user experience that helps them solve their core problem(s).',
        'People will pay for products and features that provide value to them.',
        'Introducing premium products and offerings can improve the experience for all users.',
      ],
    },
    nextStudy: {
      slug: 'inloop-design-system',
      title: 'Building a new Design System',
    },
  },
  {
    slug: 'inloop-design-system',
    title: 'Designing an MVP and building its scalable Design System.',
    subtitle: 'As the first designer at inLoop, I designed the product UI for launch and built an accessible design system from scratch.',
    hook: 'First designer, built from zero',
    role: 'First Designer',
    team: 'First designer + technical founder',
    timeline: '2025',
    company: 'inLoop',
    year: '2025',
    tags: ['Design System', 'Accessibility', 'First Designer', 'Cross-Functional'],
    heroColor: '#8b5cf6',
    heroColorLight: '#f3e8ff',
    heroImage: '/images/inloop-hero.png',
    thumbnail: '/images/inloop-dashboard.png',
    deliverableImages: [
      {
        image: '/images/inloop-final-1.png',
        caption: 'Contacts list view with filtering and search.',
      },
      {
        image: '/images/inloop-ui-screens.png',
        caption: 'Core product screens: subscriptions, account settings, lists, and contact details.',
        wideImage: true,
      },
    ],
    result: {
      metric: 'Design system built from scratch',
      description: 'Designed the product UI and built an accessible design system as the first designer at inLoop. Every token, component, and pattern was an original decision with accessibility built in from day one.',
    },
    challenge: {
      summary: 'inLoop is a CRM built for non-profits to track their fundraising efforts. The technical founder had already built working functionality, but the product needed a modern UI designed around what existed. As the first designer, there was no design system, no component library, and no established patterns. I needed to design a product UI that worked with the existing functionality while building the system that would scale the product beyond launch.',
      details: [
        'Create a modern UI for the MVP launch',
        'Create a scalable design system',
        'Follow WCAG accessibility standards',
      ],
    },
    insights: [
      {
        title: 'Designing the UI informed the system',
        description: 'Rather than building a design system in the abstract, I designed the product screens first. Real UI decisions surfaced the patterns, tokens, and components that the system actually needed.',
        detail: 'The technical founder had already built the core functionality, so my job was to design a modern UI around what existed. Working closely with him, I designed the core screens for the MVP: dashboard, contacts list, contact detail, and fundraising views. Each screen revealed which spacing values, color pairings, and component patterns would recur. The design system was extracted from real product needs, not theoretical ones.',
      },
      {
        title: 'Building accessible from the foundation',
        description: 'Accessibility was a design constraint from day one, not an audit after the fact. Every color pairing was tested against WCAG AA standards.',
        detail: 'Built a semantic color token system with explicit contrast ratio documentation. The system wasn\'t just accessible by coincidence. Accessibility shaped the entire token architecture: which colors could pair, which font sizes worked at which weights, and how interactive states communicated to all users.',
      },
      {
        title: 'Collaborating with a technical founder',
        description: 'A design system is a contract between design and engineering. Working directly with the technical founder meant engineering constraints shaped the system from day one.',
        detail: 'This tight feedback loop meant design decisions were pressure-tested against real implementation constraints. Components were technically feasible and performant. The system reflected both design ideals and engineering realities.',
      },
    ],
    process: [
      {
        phase: 'UI Design',
        title: 'Product Screens',
        description: 'Designed the core product UI for launch: dashboard, contacts, detail views, and fundraising tracking. These screens became the foundation for extracting design system patterns.',
      },
      {
        phase: 'System',
        title: 'Design System',
        description: 'Extracted tokens, components, and patterns from the product UI into a scalable design system with WCAG AA accessibility built into every decision.',
      },
      {
        phase: 'Document',
        title: 'Guidelines & Handoff',
        description: 'Documented usage guidelines, accessibility specs, and design rationale so the system could scale beyond the first designer.',
      },
    ],
    solution: {
      summary: 'A product UI designed for launch and an accessible design system built from real product decisions, not theoretical ones.',
      highlights: [
        'Product UI for the MVP: dashboard, contacts, detail views, fundraising tracking',
        'Accessible color system with WCAG AA-compliant contrast ratios built in from day one',
        'Semantic design tokens: color, typography, spacing — structured for scalability',
        'Component library with usage guidelines and accessibility specs',
        'Cross-functional collaboration with the technical founder throughout',
      ],
    },
    impact: {
      metrics: [
        { label: 'Accessibility', value: 'WCAG AA', context: 'Built in from day one' },
        { label: 'Role', value: 'First', context: 'Every decision was original' },
      ],
      reflection: 'Building a design system from scratch taught me that the hardest part isn\'t the components. It\'s the decisions behind them. Every token, every spacing value, every color pairing is a decision that will be inherited by everyone who uses the system. That responsibility shapes how you think about design.',
      learned: [
        'Designing the product first and extracting the system from real decisions produces a more useful design system than building one in the abstract.',
        'Design systems are communication tools between design and engineering. The documentation matters as much as the components.',
        'First designer judgment means every decision sets a precedent. Document the "why," not just the "what."',
      ],
    },
    nextStudy: {
      slug: 'soundbath',
      title: 'Sound Bath: Designing a Modern Music Catalog',
    },
  },
  {
    slug: 'soundbath',
    title: 'Designing a Modern Music Catalog.',
    subtitle: 'A category-leading music producer wanted to educate customers on their full ambient music and sound catalog and connect more with their audience.',
    hook: 'Sole designer and developer',
    role: 'Designer & Developer',
    team: 'Solo (working directly with stakeholders)',
    timeline: '2025',
    company: 'Sound Bath',
    year: '2025',
    tags: ['Web Design', 'Visual Design', 'Development'],
    heroColor: '#5B21B6',
    heroColorLight: '#EDE9FE',
    heroImage: '/images/soundbath-hero5.png',
    thumbnail: '/images/soundbath-thumb5.png',
    result: {
      metric: 'Increased user engagement',
      description: 'Sound Bath saw an increase in contact from users after the website launched.',
    },
    challenge: {
      summary: 'Sound Bath had a rich catalog of ambient music and sounds but no dedicated platform to showcase it. Their existing presence didn\'t communicate the depth of their catalog or make it easy for their two audience segments to explore and connect.',
      details: [
        'Two distinct audience segments: meditation/relaxation listeners and small businesses seeking atmospheric music',
        'Needed to educate users on the full breadth of the catalog across categories',
        'Stakeholders wanted a stronger connection with their customers',
        'Visual direction needed to honor existing brand assets including a distinctive logo',
      ],
    },
    insights: [
      {
        title: 'Two audiences, one experience',
        description: 'The site needed to serve both individual listeners and business clients without feeling split.',
        detail: 'I designed the information architecture so both audiences could navigate naturally to what they needed without the site feeling like two separate products.',
      },
      {
        title: 'Modern museum feel',
        description: 'After discussions with stakeholders, the agreed-upon vision was to feel like a modern museum.',
        detail: 'The visual direction leaned into clean layouts, generous whitespace, and letting the music and imagery breathe. The existing logo and visual assets informed the aesthetic without constraining it.',
      },
    ],
    process: [
      {
        phase: 'Discovery',
        title: 'Understanding the brand and audience',
        description: 'Worked directly with stakeholders to understand their catalog, their two audience segments, and their vision for a modern museum aesthetic.',
      },
      {
        phase: 'Design',
        title: 'Visual direction and layout',
        description: 'Designed the site around Sound Bath\'s existing visual assets and logo, creating a clean, immersive experience that showcases the catalog.',
      },
      {
        phase: 'Build',
        title: 'Design and development',
        description: 'Built the website end-to-end, handling both design and development to ship a cohesive final product.',
      },
    ],
    solution: {
      summary: 'A clean, immersive website that showcases Sound Bath\'s full catalog while making it easy for both audience segments to explore and connect.',
      highlights: [
        'Modern museum-inspired visual direction that honors the existing brand identity',
        'Category pages that educate users on the full breadth of the ambient music catalog',
        'Clear contact pathways that increased user engagement after launch',
        'Designed and built end-to-end as sole designer and developer',
      ],
    },
    impact: {
      metrics: [
        { label: 'Role', value: 'Solo', context: 'Design and development' },
        { label: 'Audiences', value: '2', context: 'Listeners and businesses' },
        { label: 'Contact', value: 'Up', context: 'Increased after launch' },
        { label: 'Vision', value: 'Museum', context: 'Modern, clean aesthetic' },
      ],
      reflection: 'This project reinforced how important it is to work closely with stakeholders to understand their vision and translate it into something that serves their users. The "modern museum" direction came directly from those conversations.',
      learned: [
        'Working directly with stakeholders and building it yourself creates a tight feedback loop that leads to a better result.',
        'Two distinct audiences can share one experience if the information architecture is thoughtful.',
      ],
    },
    nextStudy: {
      slug: 'pocketpitch-metronome',
      title: 'Pocket Pitch: Designing Sight, Sound, and Touch',
    },
  },
]

// SF Perimeter Relay case study — saved for future use, not displayed on site
export const sfRelayStudy: CaseStudy = {
  slug: 'sf-relay',
  title: 'Vibe Coding a Race Platform.',
  subtitle: 'Designing and shipping a full-stack relay race platform with role-based interfaces — built with AI-assisted development from research to production.',
  hook: 'Shipped full-stack with AI-assisted development',
  role: 'Solo Designer & Developer',
  team: 'Solo (research, design, full-stack development)',
  timeline: '2026',
  company: 'SF Perimeter Relay',
  year: '2026',
  tags: ['Vibe Coding', 'Two-Sided Platform', 'User Research', 'Full-Stack'],
  heroColor: '#7c3aed',
  heroColorLight: '#ede9fe',
  thumbnail: '/images/sf-relay.png',
  result: {
    metric: 'Shipped live at sfrelay.xyz',
    description: 'Researched, designed, and shipped a full-stack two-sided platform for relay race management — from a 25+ runner survey to a live production app — using AI-assisted development.',
  },
  challenge: {
    summary: 'Relay race tracking was fragmented — organizers used spreadsheets, referees used paper, and participants had no visibility into scores or schedules. I identified this gap through primary research and decided to build a real solution, using it as an opportunity to push my AI-assisted development workflow to its limits.',
    details: [
      'No existing tool designed for relay race team registration, scoring, and real-time updates',
      'Two distinct user types (organizers/referees vs. participants) with fundamentally different needs from the same underlying data',
      'Organizers need advanced controls; participants need a focused, action-limited view',
      'Every design decision had to account for how it would appear across both role-based surfaces',
    ],
  },
  insights: [
    {
      title: 'Primary research surfaced the real problem',
      description: 'Conducted a 25+ runner survey to understand how people track participants during races. The findings shaped every design decision.',
      detail: 'Used a Google Form survey targeting runners and race organizers. Key finding: the biggest pain point wasn\'t scoring — it was coordination between organizers, referees, and participants. Everyone was working from different information. This reframed the product from "race tracker" to "shared race platform."',
    },
    {
      title: 'Role-based interfaces require dual-surface thinking',
      description: 'Organizers and referees need edit controls, scoreboard management, and team administration. Participants need a focused, read-heavy view of the same data.',
      detail: 'Designed role-based interfaces: same underlying system, different surfaces based on role and permission level. This maps directly to YouTube\'s dual-surface thinking — creator-facing tools vs. viewer-facing experiences built on the same content system.',
    },
    {
      title: 'AI-assisted development changes what a solo designer can ship',
      description: 'Using Cursor and Claude Code, I went from survey results to a live production app. This isn\'t a prototype or concept — it\'s a real, deployed platform.',
      detail: 'Built with Next.js, Supabase, and Vercel. The AI-assisted workflow let me move from prompt to prototype to shipped product, handling full-stack complexity (auth, database, real-time updates, role permissions) as a solo designer-developer.',
    },
  ],
  process: [
    {
      phase: 'Research',
      title: 'Primary User Research',
      description: 'Conducted a 25+ runner survey (Google Form) to understand race tracking pain points. Lean, founder-led primary research that directly informed design decisions.',
    },
    {
      phase: 'Design',
      title: 'Role-Based Interface Design',
      description: 'Designed two distinct interfaces from shared data: organizer/referee views with edit controls and scoreboard management, and participant views with focused, action-limited displays.',
    },
    {
      phase: 'Build',
      title: 'AI-Assisted Full-Stack Development',
      description: 'Built the complete platform using Next.js, Supabase, and Vercel with Cursor and Claude Code. Handled auth, real-time data, role-based permissions, and deployment.',
    },
    {
      phase: 'Ship',
      title: 'Production Deployment',
      description: 'Shipped to production at sfrelay.xyz. Live platform with team registration, real-time scoreboard, profile management, and role-based access control.',
    },
  ],
  solution: {
    summary: 'A live, full-stack relay race platform with role-based interfaces — organizers manage teams and scores, participants view and track progress — all built with AI-assisted development and deployed to production.',
    highlights: [
      'Role-based interfaces: organizers/referees get edit controls, participants get focused read views of the same data',
      'Real-time scoreboard with live updates across all user roles',
      'Team registration and management system',
      'Individual profile photo uploads',
      'Built full-stack with Next.js + Supabase + Vercel using Cursor and Claude Code',
      'Live, shipped product — not a concept or prototype (sfrelay.xyz)',
    ],
  },
  impact: {
    metrics: [
      { label: 'Status', value: 'Live', context: 'Shipped at sfrelay.xyz' },
      { label: 'Research', value: '25+', context: 'Runner survey respondents' },
      { label: 'User Roles', value: '3', context: 'Organizer, referee, participant' },
      { label: 'Stack', value: 'Full', context: 'Next.js, Supabase, Vercel' },
    ],
    reflection: 'SF Perimeter Relay proved that AI-assisted development fundamentally changes the scope of what a designer can ship solo. The limiting factor wasn\'t technical implementation — it was design judgment, research quality, and product thinking. Those are the skills that matter more, not less, in an AI-assisted workflow.',
    learned: [
      'Primary research, even lean founder-led surveys, transforms assumptions into design decisions with real evidence behind them.',
      'Two-sided platforms require thinking about every feature from multiple perspectives simultaneously — a skill that transfers directly to creator/viewer platform design.',
      'AI-assisted development doesn\'t replace design thinking — it amplifies it. The quality of the prompt depends on the quality of the design rationale behind it.',
    ],
  },
  nextStudy: {
    slug: 'pocketpitch-monetization',
    title: 'Pocket Pitch: Launching Premium Subscription',
  },
}
