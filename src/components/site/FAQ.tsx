import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Cât costă o intervenție de urgență?", a: "Prețul variază în funcție de tip. Oferim deviz gratuit înainte de orice lucrare, fără costuri ascunse." },
  { q: "Cât de repede ajungeți?", a: "Pentru urgențe: 5–45 minute în funcție de sector. Program non-stop 24/7." },
  { q: "Oferiți garanție pentru lucrări?", a: "Da, oferim garanție scrisă 2–5 ani pentru orice tip de reparație sau montaj." },
  { q: "Lucrați și noaptea sau în weekend?", a: "Da, suntem disponibili non-stop inclusiv noaptea, weekenduri și sărbători legale." },
  { q: "Acceptați plata cu cardul sau doar cash?", a: "Acceptăm cash, transfer bancar și emitem factură fiscală." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-accent uppercase mb-3">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Întrebări <span className="text-gradient-primary">frecvente</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`glass rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-primary/40" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-semibold text-base md:text-lg">{f.q}</span>
                  <Plus
                    className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
