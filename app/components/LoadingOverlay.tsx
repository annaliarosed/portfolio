"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LoadingOverlay.module.scss";

export default function LoadingOverlay() {
  // SSR-safe: server and first client render match (hidden).
  const [visible, setVisible] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Decide visibility only after mount to avoid hydration mismatch.
    try {
      const seen = window.sessionStorage.getItem("portfolio_loading_seen");
      if (seen === "1") return;
    } catch {
      // ignore
    }

    // Avoid setState directly in effect body (lint); schedule it.
    const showId = window.setTimeout(() => setVisible(true), 0);

    timeoutRef.current = window.setTimeout(() => {
      setVisible(false);
      try {
        window.sessionStorage.setItem("portfolio_loading_seen", "1");
      } catch {
        // ignore
      }
    }, 7000);

    return () => {
      window.clearTimeout(showId);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={styles.overlay}
      aria-label="Loading portfolio"
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          <div>
            <p className={styles.title}>
              Warming up the page
            </p>
            <p className={styles.subtitle}>
              A tiny intro screen (auto-dismisses in ~7 seconds).
            </p>
          </div>
          <div
            aria-hidden="true"
            className={styles.mark}
          >
            <div className={styles.markBg} />
            <div className={styles.markRing} />
            <div className={styles.markDot} />
          </div>
        </div>

        <div className={styles.footer}>
          <p
            className={styles.status}
            role="status"
            aria-live="polite"
          >
            Loading…
          </p>
          <button
            type="button"
            onClick={() => {
              setVisible(false);
              try {
                window.sessionStorage.setItem("portfolio_loading_seen", "1");
              } catch {
                // ignore
              }
            }}
            className={styles.enterButton}
          >
            Enter now
          </button>
        </div>
      </div>
    </div>
  );
}

