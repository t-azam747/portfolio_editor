import { content } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#0a0a0a] py-10 px-6 text-center transition-colors">
      <p className="text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 font-mono">
        &copy; {currentYear} {content.name}. All rights reserved.
      </p>
    </footer>
  );
}
