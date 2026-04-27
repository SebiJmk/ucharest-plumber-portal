import { Phone, Search, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Suni sau trimiți mesaj",
    desc: "Răspundem în câteva minute, oricând, zi sau noapte.",
  },
  {
    icon: Search,
    title: "Diagnoză gratuită la fața locului",
    desc: "Stabilim împreună soluția. Preț transparent înainte de a începe.",
  },
  {
    icon: CheckCircle2,
    title: "Lucrare garantată",
    desc: "Factură fiscală și garanție scrisă 2–5 ani la fiecare intervenție.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
            Cum funcționează
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Trei pași până la <span className="text-gradient-primary">liniște</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* connecting line */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary glow-blue mb-5">
                <Icon className="w-9 h-9 text-primary-foreground" strokeWidth={2.2} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
