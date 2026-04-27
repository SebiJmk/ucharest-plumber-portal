import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <>
      {/* Floating button - desktop & mobile bottom-right */}
      <a
        href="tel:0726001233"
        aria-label="Sună acum"
        className="fixed bottom-5 right-5 z-40 hidden sm:inline-flex items-center gap-2 rounded-full gradient-accent px-5 py-4 font-bold text-accent-foreground glow-orange animate-pulse-orange hover:scale-110 transition-transform"
      >
        <Phone className="w-5 h-5" strokeWidth={2.5} /> Sună Acum
      </a>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden p-3 pointer-events-none">
        <a
          href="tel:0726001233"
          className="pointer-events-auto flex items-center justify-center gap-2 rounded-2xl gradient-accent px-5 py-4 font-bold text-accent-foreground glow-orange animate-pulse-orange"
        >
          <Phone className="w-5 h-5" strokeWidth={2.5} /> Sună Acum • 0726.001.233
        </a>
      </div>
    </>
  );
}
