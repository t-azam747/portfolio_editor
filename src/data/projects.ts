export type Project = {
  id: string;
  title: string;
  category: string; // e.g. "Short Film", "Creator Vault", "Personal Vault", etc.
  year: string;
  thumbnail: string; // path under /public
  driveUrl: string; // Video link (Drive / YouTube / Instagram) or internal page anchor
  description?: string;
  badge?: string; // Optional custom badge text e.g. "Personal Vault →", "Creator Vault →"
};

/**
 * Vault 1: All Personal Edits
 * Independent projects, narrative films, cinematography reels, and personal cuts
 */
export const personalEdits: Project[] = [
  {
    id: "personal-ag11111",
    title: "Aastha Gill - Artist Reel",
    category: "Artist Reel",
    year: "2025",
    thumbnail: "/thumbnails/aasthagill.png",
    driveUrl: "https://www.instagram.com/reel/DRMn3twCVwN/?stkn=MzRlODBiNWFlZA==",
    description: "High-octane kinetic sequence cut with speed ramps, audio hits, and dynamic pacing.",
  },
  {
    id: "personal-dww",
    title: "Atmospheric Visual Montage",
    category: "Cinematic Montage",
    year: "2025",
    thumbnail: "/thumbnails/drive-dww.jpg",
    driveUrl: "https://drive.google.com/file/d/18tdTyuIF_oXi_hTDtIXc-jdhTR9yhSr4/view?usp=drive_link",
    description: "Moody, low-light visual storytelling and natural atmospheric framing.",
  },
  {
    id: "personal-espektro2025",
    title: "Espektro 2025 — The Official Aftermovie",
    category: "Official Aftermovie",
    year: "2025",
    thumbnail: "/thumbnails/drive-espektro2025.jpg",
    driveUrl: "https://drive.google.com/file/d/1BETEvwLRVmEaPezpsc32oqn2S8MUfgZz/view?usp=drive_link",
    description: "Official festival aftermovie edited with rhythmic bass drops, crowd immersion, and stage lights.",
  },
  {
    id: "personal-75days",
    title: "Espektro '26 — 75 Days To Go",
    category: "Teaser & Countdown",
    year: "2026",
    thumbnail: "/thumbnails/drive-75days.jpg",
    driveUrl: "https://drive.google.com/file/d/1BszyAb6p5ssnTyUbWQl0wKKmqcszS6mJ/view?usp=drive_link",
    description: "Fast-paced countdown teaser building anticipation with sync audio and rhythmic cuts.",
  },
  {
    id: "personal-fight",
    title: "Fight Choreography & Action Sequence",
    category: "Action Sequence",
    year: "2025",
    thumbnail: "/thumbnails/drive-fight.jpg",
    driveUrl: "https://drive.google.com/file/d/1tC_NKRqu3fa036kiRHsq_oYsF7IyjnPu/view?usp=drive_link",
    description: "Martial arts and action sequence choreography cut for impactful kinetic delivery.",
  },
  {
    id: "personal-freshers",
    title: "Freshers 2026",
    category: "Event Highlight",
    year: "2026",
    thumbnail: "/thumbnails/freshers.png",
    driveUrl: "https://drive.google.com/file/d/1e30aPY5BuCj2j0mOm9ljkP2kBBZI3_V5/view?usp=drive_link",
    description: "Vibrant campus event highlight cut capturing the raw celebration and youthful energy.",
  },
  {
    id: "personal-garba",
    title: "Garba Night Celebration",
    category: "Cultural Cut",
    year: "2025",
    thumbnail: "/thumbnails/garba.jpg",
    driveUrl: "https://drive.google.com/file/d/1EY9JK2yLpnnaZM6NMh0HMSf5fVuT1CiC/view?usp=drive_link",
    description: "Traditional folk dance celebration cut with rhythmic musical synchronization and festive colors.",
  },
  {
    id: "personal-nec",
    title: "NEC — Kinetic Event Montage",
    category: "Event Montage",
    year: "2025",
    thumbnail: "/thumbnails/drive-nec.jpg",
    driveUrl: "https://drive.google.com/file/d/1W-bG_KQqe2amxSCJNN4kujbOvuK8Xj0u/view?usp=drive_link",
    description: "Dynamic multi-cam event montage capturing conference energy and keynote highlights.",
  },
  {
    id: "personal-r5",
    title: "R5 — Cinematic Rhythmic Reel",
    category: "Cinematography Reel",
    year: "2026",
    thumbnail: "/thumbnails/drive-r5.jpg",
    driveUrl: "https://drive.google.com/file/d/1JavgFf5wWWJ1lQuwLKKaqPMhSeyDiicL/view?usp=drive_link",
    description: "Canon R5 cinematic footage showcase featuring color depth and camera tracking.",
  },
  {
    id: "personal-rp7",
    title: "RP-7 — Visual Sequence & Grade",
    category: "Color Grading",
    year: "2025",
    thumbnail: "/thumbnails/drive-rp7.jpg",
    driveUrl: "https://drive.google.com/file/d/1UC9RlXWOcJH7y6ddEnixXmn1MFuqF7dY/view?usp=drive_link",
    description: "Atmospheric color grading and visual styling exploring print film emulation.",
  },
  {
    id: "personal-techtix",
    title: "Techtix — Tech Fest Promo Cut",
    category: "Promo Edit",
    year: "2026",
    thumbnail: "/thumbnails/drive-techtix.jpg",
    driveUrl: "https://drive.google.com/file/d/1Wn1TSA-COrNmF29li9URjR4psdyvo0S9/view?usp=drive_link",
    description: "High-tech festival promo engineered with fast glitch cuts, typographic hits, and futuristic beats.",
  },
  {
    id: "personal-yearrecap",
    title: "Cinematic Year Recap",
    category: "Year Recap",
    year: "2025",
    thumbnail: "/thumbnails/drive-yearrecap.jpg",
    driveUrl: "https://drive.google.com/file/d/1bi2i5unm9sKVzV2958i7CACsuBT5jq7K/view?usp=drive_link",
    description: "Emotional year-end retrospective cut woven together with voiceover and memorable milestones.",
  },
];

/**
 * Vault 2: Creator Showcase — Edits for Other Creators
 * Client projects and social reels made for other creators
 */
export const creatorEdits: Project[] = [
  {
    id: "creator-reel-sikkim",
    title: "East Sikkim Paragliding — 'And Then I Was Flying'",
    category: "Adventure Reel",
    year: "2026",
    thumbnail: "/thumbnails/reel-sikkim.jpg",
    driveUrl: "https://www.instagram.com/reel/DW0ApRXk_Hx/",
    description: "High-adrenaline paragliding video edit over Sikkim featuring kinetic transitions and atmospheric sound design for @thebangaliexplorer.",
  },
  {
    id: "creator-reel-samay",
    title: "Productivity & Travel Reel — @thebangaliexplorer",
    category: "Creator Reel",
    year: "2026",
    thumbnail: "/thumbnails/reel-samay.jpg",
    driveUrl: "https://www.instagram.com/reel/DXCBXxwE2ke/",
    description: "Dynamic travel cut featuring Samay Raina audio, seamless pacing, and micro-zooms crafted for @thebangaliexplorer.",
  },
  {
    id: "creator-reel-manali",
    title: "Manali Calling — Cinematic Mountain Reel",
    category: "Travel Reel",
    year: "2026",
    thumbnail: "/thumbnails/reel-manali.jpg",
    driveUrl: "https://www.instagram.com/reel/DXJm0PMk64j/",
    description: "Atmospheric, color-graded mountain showcase with rhythmic beat pacing and scenic cuts for @thebangaliexplorer.",
  },
];

/**
 * Main landing page featured grid (6 cards):
 * Card 5 and 6 act as the portal vaults linking to their respective sections on /work
 */
export const projects: Project[] = [
  {
    id: "short-film",
    title: "Original Short Film",
    category: "Short Film",
    year: "2025",
    thumbnail: "/thumbnails/short-film.jpg",
    driveUrl: "https://www.youtube.com/watch?v=UyKsfXrS_40",
    description: "Narrative short film directed, shot, and edited by Tousif Azam.",
  },
  {
    id: "recent-work",
    title: "Cinematic Reel",
    category: "Recent Work",
    year: "2026",
    thumbnail: "/thumbnails/75 days to go.jpg",
    driveUrl: "https://www.instagram.com/p/DTXypmDCatG/",
    description: "Latest cinematography and rhythmic editing showcase.",
  },
  {
    id: "Flashmob",
    title: "Flashmob - Shot and Edited by me",
    category: "Cinematic Edit",
    year: "2026",
    thumbnail: "/thumbnails/flashmob.jpg",
    driveUrl: "https://www.youtube.com/watch?v=qSSAFm-WPKk",
    description: "High energy dance performance captured and cut with dynamic edits.",
  },
  {
    id: "Aftermovie",
    title: "Espektro - Aftermovie",
    category: "Aftermovie",
    year: "2026",
    thumbnail: "/thumbnails/aftermovie.jpg",
    driveUrl: "https://www.youtube.com/watch?v=thz4lJmRO74",
    description: "A high-energy aftermovie edited with rhythmic precision and engaging visuals.",
  },
  // 5th Card: Personal Vault
  {
    id: "personal-vault-portal",
    title: "Personal Vault — All My Edits",
    category: "Personal Vault",
    year: "2024 - 2026",
    thumbnail: "/thumbnails/drive-75days.jpg",
    driveUrl: "/work#personal-vault",
    description: "A comprehensive vault of all my personal creative cuts, narrative experiments, cinematic showreels, and color grades.",
    badge: "Open Vault →",
  },
  // 6th Card: Creator Showcase
  {
    id: "creator-vault-portal",
    title: "Creator Showcase — Edits for Creators",
    category: "Creator Vault",
    year: "2024 - 2026",
    thumbnail: "/thumbnails/reel-sikkim.jpg",
    driveUrl: "/work#creator-vault",
    description: "Showcasing commercial cuts, creator collaborations, dynamic pacing, and high-retention edits made for other creators.",
    badge: "Open Vault →",
  },
];

/** Full collection used for counts and archive views */
export const allProjects: Project[] = [
  ...personalEdits,
  ...creatorEdits,
];
