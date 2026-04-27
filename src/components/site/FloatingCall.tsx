import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <>
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
