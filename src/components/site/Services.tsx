import { Wrench, Thermometer, ShowerHead, Wind, Zap, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  { icon: Wrench, title: "Reparații Sanitare", desc: "Robineți, baterii, țevi, obiecte sanitare montate sau înlocuite rapid." },
  { icon: Thermometer, title: "Centrale Termice", desc: "Montaj, reparații și service multimarcă pentru centrale pe gaz și electrice." },
  { icon: ShowerHead, title: "Instalații Noi", desc: "Montaj complet pentru baie, bucătărie și proiecte rezidențiale noi." },
  { icon: Wind, title: "Desfundare Canalizare", desc: "Desfundare WC, chiuvetă, canalizare și sisteme de drenaj." },
  { icon: Zap, title: "Urgențe Non-Stop", desc: "Intervenții 24/7, inclusiv noaptea, weekend și sărbători legale." },
  { icon: ShieldCheck, title: "Mentenanță", desc: "Contracte anuale și verificări periodice pentru liniște deplină." },
];

export function Services() {
  return (
    <section id="servicii" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
            Ce facem
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Servicii Complete <br />
            <span className="text-gradient-primary">de Instalații</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            De la o robinet picurător până la montaj complet — tratăm fiecare lucrare cu aceeași grijă.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-6 md:p-7 hover:-translate-y-2 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_oklch(0.62_0.22_255_/_0.4)] cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(400px at var(--mx,50%) var(--my,50%), oklch(0.62 0.22 255 / 0.15), transparent 60%)" }}
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Află mai mult <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
