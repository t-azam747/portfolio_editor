# Video Portfolio: Project Guide

Minimal, professional single-page portfolio for a video editor and cinematographer.
Shows projects and contact details only. Clicking a project opens its Google Drive link in a new tab.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll fade-ins only)
- Hosting: Vercel
- Videos: stay in Google Drive (no embeds, no uploads)

## How it works

```
Visitor -> Vercel (hosting + CDN) -> Next.js app
Next.js app:
  layout.tsx  -> Navbar, Footer, fonts, SEO metadata
  page.tsx    -> Hero, Work, About, Contact
  Sections read from src/data/content.ts and src/data/projects.ts
  Project card click -> opens Google Drive link (new tab)
```

Everything editable lives in two files: `src/data/content.ts` and `src/data/projects.ts`.

## Folder structure

```
video-portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg              # social share preview (1200x630)
│   ├── portrait.jpg              # About section photo
│   └── thumbnails/
│       ├── project-1.jpg         # one per project, 16:9
│       └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx            # fonts, metadata, Navbar + Footer
│   │   ├── page.tsx              # renders Hero, Work, About, Contact
│   │   └── globals.css           # Tailwind + color tokens
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Work.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── ProjectCard.tsx   # <a> that opens the Drive link
│   │       └── FadeIn.tsx        # scroll fade-in wrapper
│   ├── data/
│   │   ├── content.ts            # name, contact, socials, bio, skills
│   │   └── projects.ts           # title, category, year, thumbnail, driveUrl
│   └── lib/
│       └── utils.ts
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Data files

### src/data/content.ts

```ts
export const content = {
  name: "Your Name",
  title: "Video Editor & Cinematographer",
  tagline: "Stories shot and cut with intent.",
  email: "you@example.com",
  phone: "+91 00000 00000",
  bio: "Two or three sentences about you and your style.",
  skills: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Color grading", "Sony FX3"],
  socials: {
    instagram: "https://instagram.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    youtube: "https://youtube.com/@yourhandle",
  },
};
```

### src/data/projects.ts

```ts
export type Project = {
  id: string;
  title: string;
  category: string;     // e.g. "Short film", "Music video", "Commercial"
  year: string;
  thumbnail: string;    // path under /public, e.g. "/thumbnails/project-1.jpg"
  driveUrl: string;     // Google Drive share link
  description?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project title",
    category: "Short film",
    year: "2026",
    thumbnail: "/thumbnails/project-1.jpg",
    driveUrl: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
  },
  // add more entries here
];
```

## Google Drive links

1. Open the video in Drive, right click, Share.
2. Set General access to **Anyone with the link** and role to **Viewer**. If you skip this, visitors get an "access denied" page.
3. Click Copy link and paste it into `driveUrl`.
4. For a whole collection, you can share a folder link instead.

Drive does not give you clean thumbnails, so export one frame per project from your editor and save it in `public/thumbnails/`.

The card component (the whole card is the link):

```tsx
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${project.title} (opens in a new tab)`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
        />
        <span className="absolute bottom-3 right-3 text-xs tracking-widest uppercase opacity-0 transition group-hover:opacity-100">
          Watch ↗
        </span>
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <h3 className="text-lg">{project.title}</h3>
        <span className="text-sm text-neutral-400">
          {project.category} · {project.year}
        </span>
      </div>
    </a>
  );
}
```

## Step-by-step guide

### 1. Scaffold

```bash
npx create-next-app@latest video-portfolio --typescript --tailwind --app --src-dir --eslint --import-alias "@/*"
cd video-portfolio
npm install framer-motion
```

### 2. Create folders and files

```bash
mkdir -p public/thumbnails src/data src/lib src/components/sections src/components/ui
touch src/data/content.ts src/data/projects.ts src/lib/utils.ts
touch src/components/Navbar.tsx src/components/Footer.tsx
touch src/components/sections/{Hero,Work,About,Contact}.tsx
touch src/components/ui/{ProjectCard,FadeIn}.tsx
```

### 3. Prepare assets

- Set every Drive video to "Anyone with the link can view" and copy the links.
- Export one 16:9 frame per project (about 1600x900, JPG) into `public/thumbnails/`.
- Add `portrait.jpg`, `favicon.ico`, `og-image.jpg` to `public/`.

### 4. Fill the data files

Add your details to `content.ts` and one entry per video to `projects.ts` (schemas above).

### 5. Build in this order

1. `globals.css`: dark tokens (background `#0a0a0a`, text off-white, one accent), base font.
2. `layout.tsx`: font, metadata (title, description, Open Graph), Navbar, Footer.
3. `FadeIn.tsx`: small Framer Motion wrapper (opacity + slight y on scroll).
4. `ProjectCard.tsx`: use the snippet above.
5. Sections: Hero, Work (2-column grid on desktop, 1 on mobile), About, Contact.
6. `page.tsx`: render the four sections in order, each with an `id` (`work`, `about`, `contact`) for the navbar anchors.

### 6. Run and test

```bash
npm run dev
```

Check:

- [ ] Every card opens the correct Drive video in a new tab
- [ ] Videos play without asking for access (test in an incognito window)
- [ ] Layout is fine on mobile width
- [ ] Email link opens a mail client, social links go to the right profiles
- [ ] Tab key reaches every card and link with a visible focus state

### 7. Deploy

```bash
git init && git add . && git commit -m "portfolio"
```

Push to GitHub, import the repo at vercel.com, and deploy. No environment variables needed. Add a custom domain later if you want one.

## Prompt for Antigravity

```
Build a minimal, professional portfolio website for a video editor and cinematographer using Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion. Single page, no backend.

Follow the folder structure and data schemas in project.md exactly.

Design: dark cinematic look (#0a0a0a background, off-white text, one subtle accent), clean sans-serif body font, refined display font for headings, generous whitespace, subtle fade-in on scroll only. Mobile first.

Sections: sticky transparent Navbar (Work, About, Contact), full-screen Hero (name, title, tagline), Work grid, About (bio, portrait, skills), Contact (email, phone, Instagram, LinkedIn, YouTube), Footer.

Work: each project is a card with a 16:9 thumbnail, title, category and year. The entire card is an <a> tag that opens project.driveUrl in a new tab (target="_blank", rel="noopener noreferrer"). No modal, no embeds. Read projects from src/data/projects.ts and include 6 placeholders.

All editable content lives in src/data/content.ts and src/data/projects.ts. Use next/image, add SEO and Open Graph metadata, semantic HTML, alt text and visible focus states. No extra dependencies.
```