import { useEffect, useRef } from "react";

export type NetworkMode = "staff" | "salesforce";

type P = {
  x: number;
  y: number;
  z: number;
  tx: number;
  ty: number;
  tz: number;
  seed: number;
};

const COUNT = 420;

function gauss(): number {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// Aesthetic nebula: a soft spiral haze with a dense luminous core.
function nebulaTargets(
  count: number,
  opts: { arms: number; twist: number; spread: number; flat: number },
): [number, number, number][] {
  const out: [number, number, number][] = [];
  for (let i = 0; i < count; i++) {
    const core = Math.random() < 0.22;
    if (core) {
      const r = Math.pow(Math.random(), 1.8) * 0.16;
      const a = Math.random() * Math.PI * 2;
      out.push([Math.cos(a) * r, Math.sin(a) * r * 0.9, gauss() * 0.08]);
      continue;
    }
    const arm = Math.floor(Math.random() * opts.arms);
    const t = Math.pow(Math.random(), 0.7);
    const radius = 0.12 + t * opts.spread;
    const angle = (arm / opts.arms) * Math.PI * 2 + t * opts.twist;
    const jitter = 0.055 + t * 0.09;
    out.push([
      Math.cos(angle) * radius + gauss() * jitter,
      Math.sin(angle) * radius * 0.72 + gauss() * jitter * 0.7,
      gauss() * opts.flat,
    ]);
  }
  return out;
}


export function ParticleNetwork({ mode }: { mode: NetworkMode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef<NetworkMode>(mode);
  modeRef.current = mode;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sets = {
      staff: nebulaTargets(COUNT, { arms: 3, twist: 2.4, spread: 0.42, flat: 0.14 }),
      salesforce: nebulaTargets(COUNT, { arms: 2, twist: 3.4, spread: 0.46, flat: 0.2 }),
    };


    const particles: P[] = Array.from({ length: COUNT }, (_, i) => {
      const t = sets.staff[i]!;
      return { x: t[0], y: t[1], z: t[2], tx: t[0], ty: t[1], tz: t[2], seed: Math.random() * 100 };
    });

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let current: NetworkMode = modeRef.current;
    const applyTargets = (m: NetworkMode) => {
      const t = sets[m];
      particles.forEach((p, i) => {
        p.tx = t[i]![0];
        p.ty = t[i]![1];
        p.tz = t[i]![2];
      });
    };
    applyTargets(current);

    let raf = 0;
    let time = 0;

    const render = () => {
      time += 0.006;
      if (modeRef.current !== current) {
        current = modeRef.current;
        applyTargets(current);
      }

      ctx.clearRect(0, 0, w, h);
      const scale = Math.min(w, h * 1.5) * 0.52;
      const rot = reduce ? 0 : time * 0.22;
      const cos = Math.cos(rot);
      const sin = Math.sin(rot);

      const pts: { x: number; y: number; s: number }[] = [];

      for (const p of particles) {
        const ease = reduce ? 1 : 0.045;
        p.x += (p.tx - p.x) * ease;
        p.y += (p.ty - p.y) * ease;
        p.z += (p.tz - p.z) * ease;

        const drift = reduce ? 0 : Math.sin(time * 1.4 + p.seed) * 0.012;
        const x = p.x + drift;
        const y = p.y + Math.cos(time * 1.1 + p.seed) * (reduce ? 0 : 0.01);
        const z = p.z;

        const rx = x * cos - z * sin;
        const rz = x * sin + z * cos;
        const persp = 1.9 / (1.9 + rz);

        pts.push({
          x: w / 2 + rx * scale * persp,
          y: h / 2 + y * scale * persp,
          s: persp,
        });
      }

      // connections
      const linkDist = current === "salesforce" ? 62 : 78;
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]!;
          const b = pts[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > linkDist * linkDist) continue;
          const alpha = (1 - Math.sqrt(d2) / linkDist) * 0.28 * a.s;
          ctx.strokeStyle = `rgba(146, 242, 82, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const p of pts) {
        const r = 1.35 * p.s;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 255, 228, ${(0.35 + p.s * 0.45).toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="h-full w-full"
    />
  );
}
