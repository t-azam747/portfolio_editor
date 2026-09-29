"use client";

import Image from "next/image";
import { content } from "@/data/content";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";

export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-24 px-6 py-24 sm:px-8 lg:px-16 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14">
          <TextReveal as="span" delay={0.05} duration={0.8} className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono block">
            02 / Profile
          </TextReveal>
          <TextReveal as="h2" delay={0.15} duration={0.9} className="mt-2 text-3xl font-normal tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            About &amp; Craft
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait Photo */}
          <FadeIn className="lg:col-span-5" delay={0.2} duration={0.95}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm group">
              <Image
                src="/thumbnails/portrait.jpg"
                alt={`${content.name} — Video Editor & Cinematographer`}
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white/90 flex justify-between items-center">
                <span>{content.name.toUpperCase()}</span>
                <span className="text-neutral-300">PORTFOLIO</span>
              </div>
            </div>
          </FadeIn>

          {/* Bio & Skills */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <TextReveal as="h3" delay={0.25} duration={0.95} className="text-xl sm:text-2xl font-normal text-neutral-900 dark:text-neutral-100 leading-snug tracking-tight">
                Crafting visual stories where cadence, lighting, and sound converge into lasting emotion.
              </TextReveal>
              <TextReveal as="p" delay={0.35} duration={0.95} className="mt-6 text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                {content.bio}
              </TextReveal>
            </div>

            {/* Skills & Gear List */}
            <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800/80">
              <TextReveal as="span" delay={0.4} duration={0.8} className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono block mb-4">
                Disciplines &amp; Toolset
              </TextReveal>
              <FadeIn delay={0.48} duration={0.9}>
                <ul className="flex flex-wrap gap-2.5">
                  {content.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/70 px-3.5 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 font-mono tracking-wide transition-colors hover:border-neutral-400 dark:hover:border-neutral-600"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
