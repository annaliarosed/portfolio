import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import BubbleNav from "@/app/components/BubbleNav";
import RevealOnScroll from "@/app/components/RevealOnScroll";
import ThemeToggle from "@/app/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Annalia DeStefano | Frontend Engineer",
  description:
    "Accessible, measurable React and TypeScript interfaces for SaaS and AI-driven products. Design systems, testing, and performance in regulated environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const themeInitScript = `
    (function() {
      try {
        var stored = localStorage.getItem("theme");
        var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        var resolved = (stored === "light" || stored === "dark") ? stored : (prefersDark ? "dark" : "light");

        var root = document.documentElement;
        root.style.colorScheme = resolved;
        if (resolved === "dark") {
          root.style.backgroundColor = "#0f1115";
          root.style.color = "#f3f4f6";
        } else {
          root.style.backgroundColor = "#fbf9f4";
          root.style.color = "#443627";
        }

        // Set attribute for both: keeps CSS variables consistent immediately.
        root.setAttribute("data-theme", resolved);
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#about"
          className="skipLink"
        >
          Skip to content
        </a>
        <BubbleNav />
        <RevealOnScroll />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
