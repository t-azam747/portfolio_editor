"use client";

import { motion } from "framer-motion";

export default function YellowDoodleCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative aspect-square w-full h-full bg-[#ffea00] border border-black/10 select-none overflow-hidden rounded-none flex items-center justify-center p-2 shadow-sm"
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
        aria-label="Ideas made real creative illustration"
      >
        {/* Speed lines top left / right */}
        <path d="M22 42H36" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M128 36H142" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M132 46H146" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

        {/* Cloud Character Body */}
        <path
          d="M52 108C42 108 34 100 34 90C34 82 39 76 46 73C44 68 46 62 50 58C55 53 62 52 68 54C73 45 84 40 94 42C104 44 112 51 114 60C121 61 126 66 128 73C132 77 134 83 132 89C130 98 122 105 113 106C108 108 55 108 52 108Z"
          fill="#ffea00"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Eyes (Cute cartoon pupils looking left) */}
        <ellipse cx="64" cy="74" rx="4.5" ry="6.5" fill="#000000" />
        <circle cx="62.5" cy="72" r="1.5" fill="#ffea00" />

        <ellipse cx="88" cy="74" rx="4.5" ry="6.5" fill="#000000" />
        <circle cx="86.5" cy="72" r="1.5" fill="#ffea00" />

        {/* Happy Smile */}
        <path
          d="M71 85C74 88 80 88 83 85"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Rosy Cheeks */}
        <path d="M54 81C54 81 57 82 58 83" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        <path d="M94 81C94 81 97 82 98 83" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

        {/* Arms / Hand Gestures */}
        <path
          d="M40 86C32 88 28 94 34 98C38 100 42 96 44 92"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M122 84C130 86 136 91 132 97C128 100 124 96 120 91"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Legs with cute shoes */}
        <path d="M60 108V118" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
        <path
          d="M54 122C54 118 64 117 68 120C70 122 66 124 58 124C55 124 54 123 54 122Z"
          fill="#000000"
        />

        <path d="M96 108V117" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
        <path
          d="M90 121C90 117 100 116 104 119C106 121 102 123 94 123C91 123 90 122 90 121Z"
          fill="#000000"
        />

        {/* Skateboard Deck */}
        <path
          d="M42 125C42 125 54 128 80 128C106 128 120 124 124 123C126 122 128 124 126 126C122 129 108 132 80 132C52 132 40 128 38 126C36 124 38 123 42 125Z"
          fill="#000000"
        />

        {/* Wheels */}
        <circle cx="56" cy="135" r="4.5" fill="#000000" />
        <circle cx="56" cy="135" r="1.5" fill="#ffea00" />

        <circle cx="106" cy="135" r="4.5" fill="#000000" />
        <circle cx="106" cy="135" r="1.5" fill="#ffea00" />

        {/* Skateboard ground shadow & speed lines */}
        <path d="M28 141H72" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        <path d="M84 141H138" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 145H98" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
