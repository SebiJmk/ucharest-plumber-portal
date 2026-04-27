import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, decimals = 0, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(target * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, value: decimals ? val.toFixed(decimals) : Math.round(val).toString() };
}

function Stat({
  target,
  decimals,
  prefix = "",
  suffix = "",
  label,
  raw,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  raw?: string;
}) {
  const { ref, value } = useCountUp(target, decimals);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-gradient-primary tracking-tight">
        {raw ?? `${prefix}${value}${suffix}`}
      </div>
      <div className="mt-2 text-xs md:text-sm text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <Stat target={500} suffix="+" label="Clienți mulțumiți" />
            <Stat target={4.9} decimals={1} suffix="★" label="Rating Google" />
            <Stat raw="5–45" target={45} suffix=" min" label="Timp de răspuns" />
            <Stat raw="2–5" target={5} suffix=" ani" label="Garanție lucrări" />
            <Stat target={10} suffix="+" label="Ani experiență" />
          </div>
        </div>
      </div>
    </section>
  );
}
