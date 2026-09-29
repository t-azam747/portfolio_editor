"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { personalEdits, creatorEdits, allProjects } from "@/data/projects";
import { content } from "@/data/content";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";
import YellowDoodleCard from "@/components/ui/YellowDoodleCard";
import { useLoading } from "@/context/LoadingContext";

export default function WorkPage() {
  const { isRevealed: globalRevealed } = useLoading();
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSeparated, setIsSeparated] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "personal" | "creator">("all");

  useEffect(() => {
    // When global preloader finishes (or on client-side navigation), trigger upward reveal then glide-apart separation
    if (globalRevealed) {
      setIsRevealed(false);
      setIsSeparated(false);

      const revealTimer = setTimeout(() => {
        setIsRevealed(true);
      }, 60);

      const separateTimer = setTimeout(() => {
        setIsSeparated(true);
      }, 620);

      return () => {
        clearTimeout(revealTimer);
        clearTimeout(separateTimer);
      };
    }
  }, [globalRevealed]);

  // Handle smooth scroll to anchor when redirected with #personal-vault or #creator-vault
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      if (hash === "#personal-vault") {
        setActiveTab("personal");
      } else if (hash === "#creator-vault") {
        setActiveTab("creator");
      }
      const scrollTimer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 750);
      return () => clearTimeout(scrollTimer);
    }
  }, [globalRevealed]);

  return (
    <div className="w-full min-h-screen px-6 py-12 sm:px-10 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-[92rem]">
        
        {/* =========================================================
            1. DISPLAY HEADER: "Ideas [Yellow Card] made real"
            ========================================================= */}
        <div className="pt-16 sm:pt-24 md:pt-28 pb-16 sm:pb-24 md:pb-28 flex items-center justify-center text-center select-none w-full">
          <div className="flex items-center justify-center select-none py-2 whitespace-nowrap max-w-full">
            {/* Word: Ideas */}
            <motion.span
              key={`ideas-${isRevealed}`}
              initial={{ opacity: 0, y: 70, filter: "blur(6px)" }}
              animate={
                isRevealed
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 70, filter: "blur(6px)" }
              }
              transition={{
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(2.25rem,6.2vw,6.5rem)] font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-none"
            >
              Ideas
            </motion.span>

            {/* Expanding Yellow Illustrated Doodle Card (Square, No rounded edges) */}
            <div
              className={`overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 ${
                isSeparated
                  ? "w-[1.12em] h-[1.12em] opacity-100 scale-100 mx-[0.25em] sm:mx-[0.32em]"
                  : "w-[0.2em] h-0 opacity-0 scale-50 mx-0 pointer-events-none"
              }`}
              style={{
                fontSize: "clamp(2.25rem, 6.2vw, 6.5rem)",
              }}
            >
              <div className="aspect-square w-full h-full rounded-none overflow-hidden shadow-md">
                <YellowDoodleCard />
              </div>
            </div>

            {/* Words: made real */}
            <motion.span
              key={`made-real-${isRevealed}`}
              initial={{ opacity: 0, y: 70, filter: "blur(6px)" }}
              animate={
                isRevealed
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 70, filter: "blur(6px)" }
              }
              transition={{
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(2.25rem,6.2vw,6.5rem)] font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-none"
            >
              made real
            </motion.span>
          </div>
        </div>

        {/* =========================================================
            2. BOTTOM META ROW (Separated by 1px light line)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-neutral-200 dark:border-neutral-800 pt-8 pb-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline text-sm"
        >
          {/* Left Tag */}
          <div className="md:col-span-3 text-neutral-500 dark:text-neutral-400 font-normal">
            <span>[ Work ]</span>
          </div>

          {/* Center Descriptive Text */}
          <div className="md:col-span-6 flex items-baseline gap-4">
            <span className="font-mono text-xs text-neutral-400">01</span>
            <p className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-snug max-w-md">
              A selection of work exploring different ideas, challenges, and ways of making things work.
            </p>
          </div>

          {/* Right Year Range */}
          <div className="md:col-span-3 md:text-right font-normal text-neutral-900 dark:text-neutral-100">
            <span>2019 - 2026</span>
          </div>
        </motion.div>

        {/* =========================================================
            3. VAULT NAVIGATION FILTER BAR
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="pb-14 pt-2 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider"
        >
          <span className="text-neutral-400 dark:text-neutral-500 mr-2">Vaults:</span>
          
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full border transition-all ${
              activeTab === "all"
                ? "bg-neutral-950 text-white dark:bg-white dark:text-black border-transparent shadow-sm"
                : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-neutral-300"
            }`}
          >
            All Vaults ({allProjects.length})
          </button>

          <a
            href="#personal-vault"
            onClick={() => setActiveTab("personal")}
            className={`px-4 py-2 rounded-full border transition-all ${
              activeTab === "personal"
                ? "bg-neutral-950 text-white dark:bg-white dark:text-black border-transparent shadow-sm"
                : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-neutral-300"
            }`}
          >
            01 / Personal Edits ({personalEdits.length})
          </a>

          <a
            href="#creator-vault"
            onClick={() => setActiveTab("creator")}
            className={`px-4 py-2 rounded-full border transition-all ${
              activeTab === "creator"
                ? "bg-neutral-950 text-white dark:bg-white dark:text-black border-transparent shadow-sm"
                : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-neutral-300"
            }`}
          >
            02 / Creator Edits ({creatorEdits.length})
          </a>
        </motion.div>

        {/* =========================================================
            SECTION 1: PERSONAL VAULT (ALL MY EDITS)
            ========================================================= */}
        {(activeTab === "all" || activeTab === "personal") && (
          <section id="personal-vault" className="scroll-mt-28 mb-24">
            {/* Vault Header Banner */}
            <div className="border-t border-neutral-300 dark:border-neutral-800 pt-10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                    [ 01 / Personal Vault ]
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {personalEdits.length} Projects
                  </span>
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-950 dark:text-neutral-50">
                  All My Edits — Personal Works &amp; Cuts
                </h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  Independent narrative short films, experimental visual cuts, kinetic showreels, and film stock color grades written, directed, and cut by Tousif Azam.
                </p>
              </div>

              <a
                href={content.socials.drive}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors shrink-0"
              >
                <span>Drive Archive Vault</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">&rarr;</span>
              </a>
            </div>

            {/* Grid of Personal Edits */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14 pt-4">
              {personalEdits.map((project, index) => (
                <FadeIn key={project.id} delay={index % 2 === 0 ? 0.1 : 0.22}>
                  <ProjectCard project={project} priority={index < 2} />
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================
            SECTION 2: CREATOR SHOWCASE (EDITS FOR OTHER CREATORS)
            ========================================================= */}
        {(activeTab === "all" || activeTab === "creator") && (
          <section id="creator-vault" className="scroll-mt-28 mb-24">
            {/* Vault Header Banner */}
            <div className="border-t border-neutral-300 dark:border-neutral-800 pt-10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
                    [ 02 / Creator Showcase ]
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {creatorEdits.length} Projects
                  </span>
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-950 dark:text-neutral-50">
                  Edits Done For Other Creators &amp; Clients
                </h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  High-retention storytelling, kinetic short-form reels, multi-camera podcast cuts, and brand collaboration edits crafted for creators and channels.
                </p>
              </div>

              <a
                href={content.socials.drive}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors shrink-0"
              >
                <span>Creator Drive Vault</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">&rarr;</span>
              </a>
            </div>

            {/* Grid of Creator Edits (3 Reels Showcase) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pt-4">
              {creatorEdits.map((project, index) => (
                <FadeIn key={project.id} delay={0.1 * (index + 1)}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* Back to Home CTA */}
        <FadeIn className="mt-20 pt-10 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs uppercase tracking-widest font-mono text-neutral-500">
          <Link
            href="/"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            &larr; Back to Home
          </Link>
          <span>{allProjects.length} Projects Total across 2 Vaults</span>
        </FadeIn>

      </div>
    </div>
  );
}
