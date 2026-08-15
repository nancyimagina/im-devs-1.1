import { useEffect, useRef } from "react";

type P = {
  x: number;
  y: number;
  hx: number;
  hy: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

/**
 * Wordmark rendered as a field of particles that scatter away from the cursor
 * and ease back into place.
 */
export function ParticleText({ text = "IMAGINA" }: { text?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: P[] = [];
    const pointer = { x: -9999, y: -9999 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(rect.width, 1);
      h = Math.max(rect.height, 1);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = Math.floor(w);
      off.height = Math.floor(h);
      const octx = off.getContext("2d");
      if (!octx) return;

      const fontSize = Math.min(w / (text.length * 0.62), h * 0.5);
      octx.fillStyle = "#fff";
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.font = `500 ${fontSize}px "Outfit", ui-sans-serif, sans-serif`;
      octx.letterSpacing = `${fontSize * 0.02}px`;
      octx.fillText(text, w / 2, h / 2);

      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const gap = w < 640 ? 4 : 5;
      const next: P[] = [];
      for (let y = 0; y < off.height; y += gap) {
        for (let x = 0; x < off.width; x += gap) {
          const alpha = data[(y * off.width + x) * 4 + 3]!;
          if (alpha < 128) continue;
          next.push({
            x: x + (Math.random() - 0.5) * 2,
            y: y + (Math.random() - 0.5) * 2,
            hx: x,
            hy: y,
            vx: 0,
            vy: 0,
            r: 0.9 + Math.random() * 1.3,
            a: 0.35 + Math.random() * 0.6,
          });
        }
      }
      particles = next;
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    let raf = 0;
    let t = 0;
    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      const radius = Math.min(w, h) * 0.16;

      for (const p of particles) {
        if (!reduce) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < radius * radius && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = (1 - d / radius) * 3.2;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
          p.vx += (p.hx - p.x) * 0.045;
          p.vy += (p.hy - p.y) * 0.045;
          p.vx *= 0.87;
          p.vy *= 0.87;
          p.x += p.vx;
          p.y += p.vy;
        } else {
          p.x = p.hx;
          p.y = p.hy;
        }

        const off = Math.abs(p.x - p.hx) + Math.abs(p.y - p.hy);
        const lit = Math.min(off / 40, 1);
        const flicker = reduce ? 0 : Math.sin(t * 2 + p.hx * 0.05) * 0.12;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          lit > 0.12
            ? `rgba(146, 242, 82, ${(0.5 + lit * 0.45).toFixed(3)})`
            : `rgba(234, 255, 228, ${(p.a + flicker).toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [text]);

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />;
}
