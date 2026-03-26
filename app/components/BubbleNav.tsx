"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./BubbleNav.module.scss";

type NavItem = { href: string; label: string };

const ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
];

export default function BubbleNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Close menu on route change (mobile).
    const id = window.setTimeout(() => setOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const prev = document.activeElement as HTMLElement | null;

    const focusFirst = () => {
      const first = panelRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }

      // Simple focus trap
      if (e.key === "Tab") {
        const focusables = Array.from(
          panelRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          ) ?? []
        ).filter((el) => !el.hasAttribute("disabled"));

        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node | null;
      if (!t) return;
      if (panelRef.current?.contains(t)) return;
      if (buttonRef.current?.contains(t)) return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    focusFirst();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      prev?.focus?.();
    };
  }, [open]);

  return (
    <div className={styles.wrap}>
      {/* Desktop: always-visible pill nav */}
      <nav
        aria-label="Primary"
        className={styles.desktopNav}
      >
        {ITEMS.map((it) => {
          const isActive =
            (it.href === "/" && pathname === "/") ||
            (it.href === "/experience" && pathname === "/experience");
          return (
            <Link
              key={it.href}
              href={it.href}
              aria-current={isActive ? "page" : undefined}
              className={[
                styles.link,
                isActive ? styles.active : "",
              ].join(" ")}
            >
              {it.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile: button + popover */}
      <div className={styles.mobileWrap}>
        <button
          ref={buttonRef}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className={styles.menuButton}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden="true"
            className={[styles.burgerLine, open ? styles.burgerLineTopOpen : ""].join(" ")}
          />
          <span
            aria-hidden="true"
            className={[styles.burgerLine, open ? styles.burgerLineBottomOpen : ""].join(" ")}
          />
        </button>

        {open ? (
          <div
            id={panelId}
            ref={panelRef}
            role="dialog"
            aria-label="Site navigation"
            className={styles.panel}
          >
            <div className={styles.panelList}>
              {ITEMS.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className={styles.panelLink}
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

