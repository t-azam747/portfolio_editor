"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content } from "@/data/content";
import { useLoading } from "@/context/LoadingContext";
import { allProjects } from "@/data/projects";

export default function Navbar() {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work";
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isRevealed } = useLoading();

  useEffect(() => {
    // Check initial preference, defaulting to light mode to match the reference design
    const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to light
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === "light" ? "dark" : "light";

    const applyTheme = (newTheme: "light" | "dark") => {
      setTheme(newTheme);
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("portfolio-theme", newTheme);
    };

    type DocumentWithViewTransition = Document & {
      startViewTransition?: (callback: () => void | Promise<void>) => {
        ready: Promise<void>;
        finished: Promise<void>;
      };
    };

    const doc = typeof document !== "undefined" ? (document as DocumentWithViewTransition) : null;

    // Fallback if View Transitions API is not supported or reduced motion preferred
    if (
      !doc?.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyTheme(nextTheme);
      return;
    }

    // Get click origin coordinates from the toggle button
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate maximum radius to cover the furthest corner of the screen
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath,
        },
        {
          duration: 750,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        {/* Left: Brand / Copyright */}
        <Link
          href="/"
          className="group inline-flex items-center text-sm sm:text-base font-medium tracking-tight text-neutral-900 dark:text-neutral-100 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
        >
          <span>&copy;TousifAzam</span>
        </Link>

        {/* Center: Clean Nav links (Work, Archive, About) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-10 text-sm font-normal text-neutral-800 dark:text-neutral-200"
        >
          <Link
            href="/work"
            className={`group inline-flex items-baseline transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 ${
              isWorkPage ? "font-medium text-neutral-950 dark:text-white" : ""
            }`}
          >
            <span>Work</span>
            {isWorkPage ? (
              <sup className="ml-1 text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold tracking-tight">
                [{allProjects.length}]
              </sup>
            ) : (
              <sup className="ml-0.5 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                ({allProjects.length})
              </sup>
            )}
          </Link>

          <a
            href={content.socials.drive}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
          >
            <span>Archive</span>
            <sup className="ml-0.5 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
              (16)
            </sup>
          </a>

          <Link
            href="/#about"
            className="transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
          >
            About
          </Link>
        </nav>

        {/* Right: Get in touch CTA & Theme Toggle */}
        <div className="flex items-center gap-5 sm:gap-6">
          <Link
            href="/#contact"
            className="text-sm font-normal text-neutral-900 dark:text-neutral-100 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
          >
            Get in touch
          </Link>

          {/* Theme switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
          >
            {theme === "light" ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1 text-neutral-900 dark:text-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0a0a0a]/95 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-5 text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between"
            >
              <span className={isWorkPage ? "font-bold text-neutral-950 dark:text-white" : ""}>Work</span>
              <span className={`font-mono text-xs ${isWorkPage ? "text-blue-600 dark:text-blue-400 font-bold" : "text-neutral-400"}`}>
                [{allProjects.length}]
              </span>
            </Link>
            <a
              href={content.socials.drive}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between"
            >
              <span>Archive</span>
              <span className="font-mono text-xs text-neutral-400">(16)</span>
            </a>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="pt-2 text-neutral-900 dark:text-neutral-100 font-semibold"
            >
              Get in touch &rarr;
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
