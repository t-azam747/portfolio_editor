"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "none";
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.85,
  direction = "up",
  className = "",
}: FadeInProps) {
  const initialY = direction === "up" ? 24 : direction === "down" ? -24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Studio-grade fluid easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
