import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MotionProvider from '@/components/MotionProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasKai = localFont({
  src: '../fonts/BebasKai.otf',
  variable: '--font-bebas',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'John Walbolt — Digital Designer',
  description: 'Digital designer and builder with a storyteller background. Designs and ships websites, apps, and design systems, using AI tools to rapidly craft, prototype, and ship.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'John Walbolt — Digital Designer',
    description: 'Digital designer and builder with a storyteller background. Uses AI tools to rapidly craft, prototype, and ship.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasKai.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        <MotionProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
