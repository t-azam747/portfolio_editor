"use client";

import { content } from "@/data/content";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";

export default function Contact() {
  return (
    <section id="contact" className="w-full scroll-mt-24 px-6 py-28 sm:px-8 lg:px-16 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="mx-auto max-w-4xl text-center">
        <div>
          <TextReveal as="span" delay={0.05} duration={0.8} className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono block">
            03 / Inquiries
          </TextReveal>
          {/* Big Call to Action */}
          <TextReveal as="h2" delay={0.15} duration={0.95} className="mt-4 text-4xl sm:text-6xl md:text-7xl font-normal tracking-[-0.03em] text-neutral-900 dark:text-neutral-100">
            Let&apos;s work together.
          </TextReveal>
          <TextReveal as="p" delay={0.25} duration={0.95} className="mx-auto mt-6 max-w-xl text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Available for commercial campaigns, narrative films, music videos, and creative post-production worldwide.
          </TextReveal>
        </div>

        {/* Primary Contact CTA (Email & Phone) */}
        <FadeIn delay={0.35} duration={0.9} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={`mailto:${content.email}`}
            className="group flex items-center gap-3 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-8 py-4 text-sm font-medium tracking-wide shadow-sm transition-all duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{content.email}</span>
          </a>

          {content.phone && (
            <a
              href={`tel:${content.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-300 hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
            >
              <span>{content.phone}</span>
            </a>
          )}
        </FadeIn>

        {/* Social Icons */}
        <div className="mt-14 pt-10 border-t border-neutral-200 dark:border-neutral-800/80">
          <TextReveal as="span" delay={0.4} duration={0.8} className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono block mb-6">
            Connect
          </TextReveal>
          <FadeIn delay={0.48} duration={0.9} className="flex items-center justify-center gap-6">
            {content.socials.instagram && (
              <a
                href={content.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="group p-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 transition-all hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-neutral-100 dark:hover:text-neutral-100 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            )}

            {content.socials.youtube && (
              <a
                href={content.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="group p-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 transition-all hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-neutral-100 dark:hover:text-neutral-100 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            )}

            {content.socials.drive && (
              <a
                href={content.socials.drive}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Drive Portfolio Archive"
                className="group p-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 transition-all hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-neutral-100 dark:hover:text-neutral-100 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.71 3.5L1.15 15l3.43 6 6.56-11.5L7.71 3.5zm3.14 0L17.41 15h6.86L17.71 3.5h-6.86zM8.57 16.5l-3.43 6h13.72l3.43-6H8.57z" />
                </svg>
              </a>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
