import { Wrench, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const PHONE = "0726.001.233";
const TEL = "tel:0726001233";

const links = [
  { href: "#servicii", label: "Servicii" },
  { href: "#urgente", label: "Urgențe" },
  { href: "#recenzii", label: "Recenzii" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-xl gradient-primary flex items-center justify-center glow-blue">
              <Wrench className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-base md:text-lg tracking-tight">
                Instalator <span className="text-gradient-primary">BUC</span>
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground -mt-0.5">
                24/7 • Non-Stop
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={TEL}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl gradient-accent px-4 md:px-5 py-2.5 text-sm font-bold text-accent-foreground glow-orange animate-pulse-orange hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden md:inline">Sună Acum –</span> {PHONE}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg glass"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={TEL}
                className="sm:hidden mt-2 inline-flex items-center justify-center gap-2 rounded-xl gradient-accent px-4 py-3 text-sm font-bold text-accent-foreground"
              >
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
