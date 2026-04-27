import { MapPin } from "lucide-react";

const zones = ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6", "Ilfov"];

export function Coverage() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="relative glass-strong rounded-3xl overflow-hidden p-8 md:p-14">
          {/* Map background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.07]"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <circle cx="400" cy="300" r="220" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="400" cy="300" r="160" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="400" cy="300" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M180 300 L620 300 M400 80 L400 520 M250 150 L550 450 M550 150 L250 450" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <div className="relative text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
              Acoperire
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Acoperire completă <br />
              <span className="text-gradient-primary">București & Ilfov</span>
            </h2>
          </div>

          <div className="relative flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {zones.map((z) => (
              <button
                key={z}
                className="group inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all"
              >
                <MapPin className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                {z}
              </button>
            ))}
          </div>

          <p className="relative mt-8 text-center text-sm text-muted-foreground">
            Intervenție non-stop în toate sectoarele.{" "}
            <span className="text-foreground font-medium">Ilfov doar cu programare.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
