import { FileText, ShieldCheck, Wallet, Sparkles } from "lucide-react";

const items = [
  { icon: FileText, title: "Factură și Garanție Scrisă", desc: "Garanție 2–5 ani pentru orice lucrare." },
  { icon: ShieldCheck, title: "Instalator Autorizat", desc: "Atestare profesională, autorizații ANRE." },
  { icon: Wallet, title: "Preț Transparent", desc: "Deviz gratuit înainte de începerea lucrării." },
  { icon: Sparkles, title: "Lucrare Curată", desc: "Curățenie completă după fiecare intervenție." },
];

export function Trust() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass rounded-2xl p-6 hover:border-accent/50 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent" strokeWidth={2.2} />
              </div>
              <h3 className="font-bold mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
