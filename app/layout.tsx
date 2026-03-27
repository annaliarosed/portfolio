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
        if (stored === "light" || stored === "dark") {
          document.documentElement.setAttribute("data-theme", stored);
        }
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
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
