"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";

export default function Work() {
  return (
    <section id="work" className="w-full scroll-mt-24 px-6 py-20 sm:px-8 lg:px-16 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800/80 pb-6">
            <div>
              <TextReveal as="span" delay={0.05} duration={0.8} className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono block">
                01 / Portfolio
              </TextReveal>
              <TextReveal as="h2" delay={0.15} duration={0.9} className="mt-2 text-3xl font-normal tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                Selected Work
              </TextReveal>
            </div>
            <TextReveal delay={0.2} duration={0.85}>
              <Link
                href="/work"
                className="group inline-flex w-fit items-center gap-1.5 text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 font-mono transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
              >
                See all works
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
            </TextReveal>
          </div>
        </div>

        {/* Responsive Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index % 2 === 0 ? 0.1 : 0.22} duration={0.9}>
              <ProjectCard project={project} priority={index < 2} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
