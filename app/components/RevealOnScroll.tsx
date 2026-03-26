"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    let revealObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    const observed = new WeakSet<Element>();

    const onReveal = (el: HTMLElement) => {
      el.classList.add("scrollchapters-reveal-in");
    };

    const observeExisting = () => {
      const revealEls = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]")
      );

      if (revealEls.length === 0) return false;

      if (reduce) {
        for (const el of revealEls) onReveal(el);
        return true;
      }

      if (!revealObserver) {
        revealObserver = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const el = entry.target as HTMLElement;
              onReveal(el);
              revealObserver?.unobserve(el);
            }
          },
          {
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px",
          }
        );
      }

      for (const el of revealEls) {
        if (observed.has(el)) continue;
        observed.add(el);
        revealObserver.observe(el);
      }

      return true;
    };

    // App Router can stream/hydrate children after this effect runs.
    // MutationObserver ensures we don't “miss” the elements.
    mutationObserver = new MutationObserver(() => {
      observeExisting();
    });
    mutationObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    // Also try immediately and on the next few ticks (cheap, avoids waiting on mutations).
    let tries = 0;
    const tryInit = () => {
      tries += 1;
      const ok = observeExisting();
      if (ok || tries > 30) return;
      window.setTimeout(tryInit, 50);
    };
    tryInit();

    return () => {
      revealObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return null;
}

