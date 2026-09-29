"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type PreloaderProps = {
  onComplete: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Keep a stable ref for onComplete to prevent any restart cycles
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // Ensure the page always starts at the very top on refresh so the hero section loads in view
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Lock background scroll during preloader
    document.body.style.overflow = "hidden";

    const totalDuration = 2200; // 2.2s calm, luxury pacing
    let animationFrameId: number;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / totalDuration);

      // Smooth custom ease-out cubic curve
      const eased = 1 - Math.pow(1 - t, 3.2);
      const current = Math.min(100, Math.floor(eased * 100));
      setProgress(current);

      if (t < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        // Firmly stop at 100%
        setProgress(100);

        if (!hasTriggeredRef.current) {
          hasTriggeredRef.current = true;

          // Deliberate hold on 100% before curtain lifts
          setTimeout(() => {
            setIsSlidingUp(true);
            onCompleteRef.current();
          }, 350);

          // Clean unmount from DOM after curtain slide finishes
          setTimeout(() => {
            setIsRemoved(true);
            document.body.style.overflow = "";
          }, 1550);
        }
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, []); // Run strictly once on mount

  if (isRemoved) return null;

  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: isSlidingUp ? "-100%" : "0%" }}
      transition={{
        duration: 1.1,
        ease: [0.85, 0, 0.15, 1], // Studio-grade luxury curtain ease
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#e7e7e7] dark:bg-[#141414] text-neutral-900 dark:text-neutral-100 select-none pointer-events-auto"
    >
      {/* Centered Refined Counter (3x smaller, minimal editorial aesthetic) */}
      <div className="flex items-center justify-center">
        <span className="font-sans text-xl sm:text-2xl md:text-3xl font-normal tracking-tight tabular-nums select-none">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
}
