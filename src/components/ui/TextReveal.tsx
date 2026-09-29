"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type TextRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
};

export default function TextReveal({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
  as = "div",
}: TextRevealProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Studio-grade cubic bezier ease
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
