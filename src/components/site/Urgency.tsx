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
    <section id="urgente" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-strong">
          {/* Subtle accent glow instead of bright animated gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.65_0.24_30/0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,oklch(0.62_0.22_255/0.12),transparent_55%)]" />

          <div className="relative p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-urgent/40 bg-urgent/10 px-3 py-1.5 mb-5">
                  <AlertTriangle className="w-3.5 h-3.5 text-urgent" />
                  <span className="text-[11px] font-bold tracking-widest text-urgent">URGENȚĂ</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Ai o urgență acum?
                </h2>
                <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl">
                  Suntem disponibili <strong className="text-foreground">non-stop</strong>. Intervenție în 5 până la 45 de minute.
                </p>

                <a
                  href="tel:0726001233"
                  className="mt-6 inline-flex items-center gap-2.5 rounded-2xl gradient-accent text-accent-foreground px-6 py-4 text-base md:text-lg font-bold glow-orange hover:scale-105 transition-transform"
                >
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  0726.001.233
                </a>
              </div>

              <ul className="grid sm:grid-cols-2 gap-2.5">
                {items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                  >
                    <Check className="w-4 h-4 shrink-0 text-success" strokeWidth={3} />
                    <span className="text-sm font-medium text-foreground/90">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
