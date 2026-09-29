"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

export default function Hero() {
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const [isSeparated, setIsSeparated] = useState(false);
  const { isRevealed } = useLoading();

  useEffect(() => {
    if (isRevealed) {
      setIsSeparated(false);
      // Once curtain lifts and name slides up, trigger separation
      const timer = setTimeout(() => {
        setIsSeparated(true);
      }, 550);
      return () => clearTimeout(timer);
    } else {
      setIsSeparated(false);
    }
  }, [isRevealed]);

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col justify-center items-center px-4 py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Main Centered Content */}
      <div className="w-full max-w-[92rem] mx-auto flex flex-col items-center justify-center text-center">
        {/* Animated Name: Bold, commanding typography spanning the screen */}
        <div className="flex items-center justify-center select-none py-2 whitespace-nowrap overflow-hidden">
          {/* First Name: Tousif - Bold display type */}
          <motion.span
            key={`tousif-${isRevealed}`}
            initial={{ opacity: 0, y: 80, filter: "blur(6px)" }}
            animate={
              isRevealed
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 80, filter: "blur(6px)" }
            }
            transition={{
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[13rem] font-bold tracking-[-0.05em] text-neutral-950 dark:text-neutral-50 leading-none"
          >
            Tousif
          </motion.span>

          {/* Entirely Square Middle Video Element (No rounded edges) */}
          <div
            className={`overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 ${
              isSeparated
                ? "w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 opacity-100 scale-100 mx-2 sm:mx-3 md:mx-4"
                : "w-[0.22em] h-0 opacity-0 scale-50 mx-0 pointer-events-none"
            }`}
          >
            <div
              onClick={() => setIsPlayingModal(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsPlayingModal(true);
                }
              }}
              aria-label="Play showreel full video"
              className="group relative block aspect-square w-full h-full cursor-pointer overflow-hidden rounded-none border border-neutral-300 dark:border-neutral-700 shadow-md shadow-neutral-900/5 dark:shadow-black/50 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
            >
              {/* Professional Auto-playing Muted Showreel Loop - Clean Square */}
              <video
                src="/showreel.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/thumbnails/aftermovie.jpg"
                className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Minimalist studio gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

              {/* Subtle hover badge */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="rounded-none bg-black/80 px-2.5 py-1 text-[9px] font-mono tracking-wider text-white uppercase backdrop-blur-sm shadow-sm">
                  Watch Reel ↗
                </span>
              </div>
            </div>
          </div>

          {/* Last Name: Azam - Bold display type */}
          <motion.span
            key={`azam-${isRevealed}`}
            initial={{ opacity: 0, y: 80, filter: "blur(6px)" }}
            animate={
              isRevealed
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 80, filter: "blur(6px)" }
            }
            transition={{
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[13rem] font-bold tracking-[-0.05em] text-neutral-950 dark:text-neutral-50 leading-none"
          >
            Azam
          </motion.span>
        </div>

        {/* Subtitle Lines - Bold, expansive typography matching the reference layout */}
        <div className="mt-10 sm:mt-14 md:mt-16 max-w-3xl px-4 flex flex-col items-center overflow-hidden">
          <motion.p
            key={`sub1-${isRevealed}`}
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={
              isRevealed
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 40, filter: "blur(4px)" }
            }
            transition={{
              duration: 0.95,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.2]"
          >
            Video editor and
            <br />
            cinematographer — based in India
          </motion.p>

          <motion.p
            key={`sub2-${isRevealed}`}
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={
              isRevealed
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 30, filter: "blur(4px)" }
            }
            transition={{
              duration: 0.95,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl font-normal text-neutral-600 dark:text-neutral-400 tracking-tight"
          >
            [ Narrative &amp; Commercial ]
          </motion.p>
        </div>

        {/* Quick Action Button - Upward revealing animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 sm:mt-14"
        >
          <a
            href="#work"
            className="inline-block rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100/80 dark:bg-neutral-900/80 px-7 py-3 text-xs font-mono uppercase tracking-widest text-neutral-800 dark:text-neutral-200 transition-all hover:border-neutral-900 dark:hover:border-neutral-200 hover:text-neutral-950 dark:hover:text-white"
          >
            Explore Projects ↓
          </a>
        </motion.div>
      </div>

      {/* Full Reel Video Modal */}
      <AnimatePresence>
        {isPlayingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setIsPlayingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-none overflow-hidden shadow-2xl border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/thz4lJmRO74?autoplay=1"
                title="Tousif Azam Featured Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
              <button
                type="button"
                onClick={() => setIsPlayingModal(false)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/70 p-2.5 text-white/80 hover:text-white hover:bg-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Close video player"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
