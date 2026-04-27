import { Phone, AlertTriangle, Check } from "lucide-react";

const items = [
  "Țeavă spartă sau fisurată",
  "Inundație în baie sau bucătărie",
  "Centrală termică defectă",
  "WC blocat / canalizare înfundată",
  "Presiune zero la apă caldă",
];

export function Urgency() {
  return (
    <section id="urgente" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-urgent animate-gradient opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.15),transparent_50%)]" />
          <div className="relative p-8 md:p-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/30 backdrop-blur px-4 py-1.5 mb-6">
              <AlertTriangle className="w-4 h-4 text-white animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-white">URGENȚĂ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              🚨 Ai o urgență acum?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Suntem disponibili <strong>NON-STOP</strong>. Intervenție în 5 până la 45 de minute.
            </p>

            <a
              href="tel:0726001233"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white text-urgent px-8 py-5 text-lg md:text-xl font-extrabold animate-pulse-ring hover:scale-105 transition-transform shadow-2xl"
            >
              <Phone className="w-6 h-6" strokeWidth={2.5} />
              0726.001.233 — Apelează ACUM
            </a>

            <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-2 rounded-xl bg-black/25 backdrop-blur px-4 py-3 text-white"
                >
                  <Check className="w-5 h-5 shrink-0 text-white" strokeWidth={3} />
                  <span className="text-sm font-medium">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
