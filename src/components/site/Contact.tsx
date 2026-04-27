import { useState, type FormEvent } from "react";
import { Phone, Send, Clock } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Numele este prea scurt").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Număr de telefon invalid")
    .max(20)
    .regex(/^[0-9+\s().-]+$/, "Număr de telefon invalid"),
  message: z.string().trim().min(5, "Mesaj prea scurt").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mesaj trimis! Te contactăm în câteva minute.");
      e.currentTarget.reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative glass-strong rounded-3xl p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full gradient-primary opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full gradient-accent opacity-15 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
                Contact
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Ai nevoie de un <br />
                <span className="text-gradient-accent">instalator acum?</span>
              </h2>

              <div className="mt-10 flex flex-col items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full animate-pulse-ring" />
                  <a
                    href="tel:0726001233"
                    className="relative inline-flex items-center gap-3 rounded-2xl gradient-accent px-7 py-5 text-2xl md:text-3xl font-extrabold text-accent-foreground glow-orange hover:scale-105 transition-transform"
                  >
                    <Phone className="w-7 h-7" strokeWidth={2.5} />
                    0726.001.233
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">
                    <span className="text-success">●</span> Disponibil acum • Non-Stop 24/7
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
                  Nume
                </label>
                <input
                  name="name"
                  required
                  maxLength={80}
                  className="w-full rounded-xl glass px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition"
                  placeholder="Ion Popescu"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
                  Telefon
                </label>
                <input
                  name="phone"
                  required
                  maxLength={20}
                  type="tel"
                  className="w-full rounded-xl glass px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition"
                  placeholder="07XX XXX XXX"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
                  Mesaj
                </label>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full rounded-xl glass px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition resize-none"
                  placeholder="Descrie pe scurt problema..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 font-bold glow-blue hover:scale-[1.02] transition-transform disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Se trimite..." : "Trimite Mesaj"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Răspundem în maxim 5 minute în timpul zilei.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
