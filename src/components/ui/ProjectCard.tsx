import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const isInternal = project.driveUrl.startsWith("/");
  const isVault = project.category.toLowerCase().includes("vault");

  const cardContent = (
    <>
      <div className="relative aspect-video overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors duration-300 group-hover:border-neutral-400 dark:group-hover:border-neutral-700">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Vault indicator tag on top left if it's a vault card */}
        {isVault && (
          <div className="absolute top-3 left-3">
            <span className="rounded-none bg-black/80 dark:bg-white/95 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-white dark:text-black backdrop-blur-sm shadow-sm border border-white/10 dark:border-black/10">
              Vault Collection
            </span>
          </div>
        )}

        <span className="absolute bottom-3 right-3 text-xs tracking-widest uppercase opacity-0 transform translate-y-1 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded font-mono border border-neutral-700/60">
          {project.badge || (isInternal ? "Open Vault →" : "Watch ↗")}
        </span>
      </div>
      <div className="mt-3.5 flex items-baseline justify-between gap-3">
        <h3 className="text-base sm:text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:opacity-75 transition-opacity flex items-center gap-1.5">
          <span>{project.title}</span>
          {isInternal && (
            <span className="text-xs text-blue-600 dark:text-blue-400 transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          )}
        </h3>
        <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono shrink-0">
          {project.category} · {project.year}
        </span>
      </div>
      {project.description && (
        <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      )}
    </>
  );

  const containerClassName =
    "group block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 focus-visible:outline-offset-4";

  if (isInternal) {
    return (
      <Link href={project.driveUrl} className={containerClassName}>
        {cardContent}
      </Link>
    );
  }

  return (
    <a
      href={project.driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${project.title} (opens in a new tab)`}
      className={containerClassName}
    >
      {cardContent}
    </a>
  );
}
