import { Wrench, Facebook, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 pt-14 pb-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <div className="font-extrabold text-lg">
                Instalator <span className="text-gradient-primary">BUC</span> 24/7
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Instalator Non-Stop București & Ilfov. Urgențe rezolvate rapid, profesionist și
              cu garanție.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold tracking-widest text-accent uppercase mb-4">
              Link-uri
            </div>
            <ul className="space-y-2 text-sm">
              {[
                ["Servicii", "#servicii"],
                ["Urgențe", "#urgente"],
                ["Recenzii", "#recenzii"],
                ["Contact", "#contact"],
                ["Termeni și Condiții", "#"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-muted-foreground hover:text-foreground transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold tracking-widest text-accent uppercase mb-4">
              Contact
            </div>
            <a
              href="tel:0726001233"
              className="block text-2xl font-extrabold text-gradient-accent mb-3"
            >
              0726.001.233
            </a>
            <div className="text-sm text-muted-foreground mb-4">Non-Stop 24/7</div>
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Google Maps"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary/20 transition"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 text-center text-xs text-muted-foreground">
          © 2026 Instalator București 24/7 • Toate drepturile rezervate
        </div>
      </div>
    </footer>
  );
}
