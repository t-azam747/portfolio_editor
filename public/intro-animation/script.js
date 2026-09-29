/**
 * =======================================================================
 * SWISS-STYLE HERO PAGE-LOAD INTRO ANIMATION (GSAP Timeline)
 * =======================================================================
 * 
 * Animation Sequence (~3.5s total):
 * 1. LOADER: 0% → 33% → 100% non-linear counter in center of white screen.
 * 2. CURTAIN LIFT: Overlay retracts upward with darkening shadow, revealing page.
 * 3. TEXT REVEAL: Nav & bottom row fade in; name & subtitle rise up from baseline masks.
 * 4. IMAGE SLOT: Gap opens between "Matt" and "hieu", 3D flip reveals square image with purple tint.
 * 5. LOOP: Thumbnails cycle indefinitely every 1.2s.
 */

// =======================================================================
// CONFIGURATION CONSTANTS (Easily tweak timing and behavior here)
// =======================================================================
const CONFIG = {
  loaderDuration: 1.4,         // Total duration of non-linear 0% -> 100% count
  curtainDuration: 0.7,        // Upward curtain retract duration
  textRevealOverlap: 0.2,      // Overlap before curtain finishes
  letterStagger: 0.04,         // Stagger between individual letters
  subtitleLineStagger: 0.1,    // Stagger between subtitle lines
  slotOpenDuration: 1.0,       // Duration of image slot opening and 3D flip
  cycleInterval: 1.2,          // Indefinite thumbnail slideshow interval (seconds)
};

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const loaderOverlay = document.getElementById("loaderOverlay");
  const loaderCounter = document.getElementById("loaderCounter");
  const curtainPanel = document.getElementById("curtainPanel");
  const slotWrapper = document.getElementById("slotWrapper");
  const slotCard = document.getElementById("slotCard");
  const slotTint = document.getElementById("slotTint");
  const chars = document.querySelectorAll(".char");
  const subtitleLines = document.querySelectorAll(".subtitle-line");
  const navItems = document.querySelectorAll(".nav-item");
  const bottomItems = document.querySelectorAll(".bottom-item");
  const slides = document.querySelectorAll(".thumb-slide");

  // =======================================================================
  // PREFERS-REDUCED-MOTION SUPPORT
  // =======================================================================
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Skip straight to final state
    document.body.classList.remove("loading");
    if (loaderOverlay) loaderOverlay.remove();
    if (curtainPanel) curtainPanel.remove();

    gsap.set(chars, { yPercent: 0 });
    gsap.set(subtitleLines, { yPercent: 0 });
    gsap.set([navItems, bottomItems], { y: 0, opacity: 1 });
    gsap.set(slotWrapper, { width: "clamp(3.2rem, 11vw, 10.5rem)" });
    gsap.set(slotCard, { rotateY: 0, opacity: 1 });
    gsap.set(slotTint, { opacity: 0 });

    startThumbnailSlideshow();
    return;
  }

  // =======================================================================
  // MAIN GSAP MASTER TIMELINE
  // =======================================================================
  const masterTimeline = gsap.timeline({
    onComplete: () => {
      // Unlock body scroll once the intro sequence concludes
      document.body.classList.remove("loading");
      // Start the infinite thumbnail cycler
      startThumbnailSlideshow();
    }
  });

  // Proxy object to interpolate the 0 -> 100 counter smoothly
  const counterObj = { value: 0 };

  // -----------------------------------------------------------------------
  // STEP 1: LOADER (0 to ~1.5s)
  // -----------------------------------------------------------------------
  masterTimeline.addLabel("loaderStart");

  // Hold briefly at 0%, jump to ~33% (power1.in), then ramp to 100% (power2.out)
  masterTimeline.to(counterObj, {
    value: 33,
    duration: CONFIG.loaderDuration * 0.42,
    ease: "power2.in",
    onUpdate: () => {
      loaderCounter.textContent = `${Math.floor(counterObj.value)}%`;
    }
  }, "loaderStart+=0.1");

  masterTimeline.to(counterObj, {
    value: 100,
    duration: CONFIG.loaderDuration * 0.58,
    ease: "power3.out",
    onUpdate: () => {
      loaderCounter.textContent = `${Math.floor(counterObj.value)}%`;
    }
  }, ">");

  // Brief beat at 100% before lifting
  masterTimeline.addLabel("loaderComplete", "+=0.15");

  // Fade out the counter and loader overlay
  masterTimeline.to(loaderOverlay, {
    opacity: 0,
    duration: 0.15,
    ease: "none",
    onComplete: () => {
      loaderOverlay.remove();
    }
  }, "loaderComplete");

  // -----------------------------------------------------------------------
  // STEP 2: CURTAIN LIFT (~0.7s)
  // Panel bottom edge retracts upward; gets darker grey (shadow effect)
  // -----------------------------------------------------------------------
  masterTimeline.addLabel("curtainLift", "loaderComplete");

  // Prepare curtain panel
  masterTimeline.set(curtainPanel, {
    display: "block",
    opacity: 1,
    yPercent: 0,
    backgroundColor: "#fafafa"
  }, "curtainLift");

  masterTimeline.to(curtainPanel, {
    yPercent: -100,
    backgroundColor: "#cccccc", // Darkens towards #ccc like a shadow as it retracts
    duration: CONFIG.curtainDuration,
    ease: "power3.inOut",
    onComplete: () => {
      curtainPanel.remove(); // Cleanly remove from DOM
    }
  }, "curtainLift");

  // -----------------------------------------------------------------------
  // STEP 3: TEXT REVEAL (Starts overlapping curtain finish by ~0.2s)
  // -----------------------------------------------------------------------
  const textRevealStart = `curtainLift+=${CONFIG.curtainDuration - CONFIG.textRevealOverlap}`;
  masterTimeline.addLabel("textReveal", textRevealStart);

  // 3A: Nav and Bottom row fade in with small upward movement (y: 20 -> 0)
  masterTimeline.to(navItems, {
    y: 0,
    opacity: 1,
    duration: 0.65,
    stagger: 0.05,
    ease: "power2.out"
  }, "textReveal");

  masterTimeline.to(bottomItems, {
    y: 0,
    opacity: 1,
    duration: 0.65,
    stagger: 0.05,
    ease: "power2.out"
  }, "textReveal+=0.1");

  // 3B: Big name letters rise up from baseline mask (translateY 100% -> 0)
  // Staggered by ~0.04s per letter
  masterTimeline.to(chars, {
    yPercent: 0,
    duration: 0.85,
    stagger: CONFIG.letterStagger,
    ease: "power3.out"
  }, "textReveal+=0.05");

  // 3C: Subtitle lines reveal line-by-line right after name
  masterTimeline.to(subtitleLines, {
    yPercent: 0,
    duration: 0.8,
    stagger: CONFIG.subtitleLineStagger,
    ease: "power3.out"
  }, "textReveal+=0.35");

  // -----------------------------------------------------------------------
  // STEP 4: IMAGE SLOT OPENING (~1s)
  // Gap opens between "Matt" and "hieu"; 3D flip card appears with purple tint
  // -----------------------------------------------------------------------
  masterTimeline.addLabel("imageSlotOpen", "+=0.15");

  // 4A: Gap opens smoothly (width 0 -> ~1.1x cap height)
  masterTimeline.to(slotWrapper, {
    width: "clamp(3.2rem, 11vw, 10.5rem)",
    duration: CONFIG.slotOpenDuration,
    ease: "power3.inOut"
  }, "imageSlotOpen");

  // 4B: Image card 3D flip from rotateY 80° to 0°
  masterTimeline.fromTo(slotCard, 
    {
      rotateY: 80,
      opacity: 0,
      scale: 0.88
    },
    {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      duration: CONFIG.slotOpenDuration,
      ease: "power3.out"
    },
    "imageSlotOpen+=0.05"
  );

  // 4C: Light purple tint settles into image
  masterTimeline.to(slotTint, {
    opacity: 0,
    duration: 0.85,
    ease: "power2.inOut"
  }, "imageSlotOpen+=0.25");

  // =======================================================================
  // STEP 5: THUMBNAIL SLIDESHOW CYCLE (Every ~1.2s indefinitely)
  // =======================================================================
  function startThumbnailSlideshow() {
    if (!slides.length) return;

    let currentIndex = 0;

    setInterval(() => {
      const currentSlide = slides[currentIndex];
      currentIndex = (currentIndex + 1) % slides.length;
      const nextSlide = slides[currentIndex];

      // Crossfade transition
      currentSlide.classList.remove("active");
      nextSlide.classList.add("active");
    }, CONFIG.cycleInterval * 1000);
  }
});
