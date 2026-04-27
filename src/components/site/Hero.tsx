import { Phone, Calendar, Star, ShieldCheck, Clock } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden gradient-hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Instalator profesionist la lucru cu țevi de cupru"
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 animate-float-slow"
            style={{
              left: `${(i * 8.3) % 100}%`,
              top: `${(i * 13.7) % 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-xs font-semibold tracking-wide">
              DISPONIBIL ACUM • Răspuns în câteva minute
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.02] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Instalator <span className="text-gradient-primary">Non-Stop</span>
            <br />
            în București
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Urgențe rezolvate în <span className="text-foreground font-semibold">5–45 minute</span>.
            Autorizat ANRE & ISCIR. Garanție{" "}
            <span className="text-foreground font-semibold">2–5 ani</span> pentru fiecare lucrare.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="tel:0726001233"
              className="inline-flex items-center justify-center gap-2 rounded-xl gradient-accent px-7 py-4 text-base font-bold text-accent-foreground glow-orange animate-pulse-orange hover:scale-[1.03] transition-transform"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} /> Sună Acum
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass-strong px-7 py-4 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              <Calendar className="w-5 h-5" /> Programează Intervenție
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Star, label: "4.9/5 pe Google", sub: "21 recenzii" },
              { icon: ShieldCheck, label: "Autorizat", sub: "ANRE & ISCIR" },
              { icon: Clock, label: "Non-Stop", sub: "24/7" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl glass px-4 py-2.5"
              >
                <Icon className="w-5 h-5 text-accent" strokeWidth={2.5} />
                <div className="leading-tight">
                  <div className="text-sm font-bold">{label}</div>
                  <div className="text-[11px] text-muted-foreground">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
