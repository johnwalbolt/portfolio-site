'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-caption text-secondary">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-caption text-secondary hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-caption text-secondary hover:text-primary transition-colors"
          >
            Email
          </a>
          <Link
            href="/#work"
            className="text-caption text-secondary hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-caption text-secondary hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
