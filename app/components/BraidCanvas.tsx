"use client";

import { useEffect, useRef } from "react";

const STRAND_COLORS = [
  "rgba(99, 102, 241, 0.45)", // indigo
  "rgba(14, 165, 233, 0.35)", // sky
  "rgba(249, 115, 22, 0.28)", // orange
  "rgba(236, 72, 153, 0.22)", // pink
];

export default function BraidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let last = 0;
    let running = true;

    const resize = () => {
      const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
      dpr = nextDpr;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const mouse = { x: 0.5, y: 0.35, tx: 0.5, ty: 0.35 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const px = (event.clientX - rect.left) / Math.max(1, rect.width);
      const py = (event.clientY - rect.top) / Math.max(1, rect.height);
      mouse.tx = Math.min(1, Math.max(0, px));
      mouse.ty = Math.min(1, Math.max(0, py));
    };

    window.addEventListener("resize", resize);
    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    resize();

    const start = performance.now();
    const strands = reduceMotion ? 0 : 6;
    const points = reduceMotion ? 0 : 60;

    const drawStrand = (strandIndex: number, t: number) => {
      const phase = (strandIndex / strands) * Math.PI * 2;
      const color = STRAND_COLORS[strandIndex % STRAND_COLORS.length];

      ctx.beginPath();
      for (let i = 0; i < points; i++) {
        const p = i / (points - 1);
        const x = p * width;

        // "Weave" produces crossings; "braid" adds a slower shift.
        const weave =
          Math.sin(p * Math.PI * 10 + t * 1.3 + phase) *
          (0.45 + mouse.x * 0.15);
        const braid =
          Math.sin(p * Math.PI * 2 + t * 0.7 - phase) * 0.28;

        const yCenter = height * 0.48;
        const y =
          yCenter +
          (weave * height * 0.18 + braid * height * 0.14) +
          (mouse.y - 0.5) * height * 0.10;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 1.1;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 0.55;
      ctx.strokeStyle = "rgba(99, 102, 241, 0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      const y = height * 0.45;
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(width * 0.25, y - 22, width * 0.6, y + 18, width, y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      if (!running) return;
      if (document.visibilityState === "hidden") {
        raf = window.requestAnimationFrame(tick);
        return;
      }

      // Cap to ~30fps (cheaper on laptops).
      if (last && now - last < 33) {
        raf = window.requestAnimationFrame(tick);
        return;
      }
      last = now;

      const t = (now - start) / 1000;

      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      // Clear fully; the page content sits underneath.
      ctx.clearRect(0, 0, width, height);

      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.95;

      for (let s = 0; s < strands; s++) drawStrand(s, t);

      ctx.restore();

      raf = window.requestAnimationFrame(tick);
    };

    if (reduceMotion) {
      drawStatic();
    } else {
      raf = window.requestAnimationFrame(tick);
    }

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="h-full w-full opacity-35"
    />
  );
}

