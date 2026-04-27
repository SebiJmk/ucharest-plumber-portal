import { Star, ExternalLink } from "lucide-react";

const reviews = [
  { name: "Florin-Alin Iorga", date: "4 luni în urmă", text: "Mulțumit de colaborare, mi s-a explicat ce și de ce trebuie făcut pentru reparație. Intervenție rapidă." },
  { name: "Cristian Coban", date: "2 ani în urmă", text: "Am fost foarte mulțumit, a lucrat curat ca și pentru el însuși, profesionist și perfecționist, nu lasă nimic decât când e perfect! Recomand cu mare încredere!" },
  { name: "Visan Andrei", date: "3 ani în urmă", text: "E genul de om care îți lucrează atât de bine încât îi salvezi numărul în telefon, și pt orice problemă din aria sa de competențe, nu vrei să mai suni pe altcineva." },
  { name: "Doina Simona", date: "4 ani în urmă", text: "Cel mai bun instalator cu care am lucrat vreodată. Eficient. Politicos. Curat. Un contrast major cu alți 2 instalatori cu care am încercat să rezolv o problemă." },
  { name: "Mihai R", date: "3 ani în urmă", text: "Foarte mulțumit. Transparență totală, se lucrează cu materiale noi - cu garanție. Am avut de schimbat o țeavă spartă care prezenta o urgență. Am sunat și au venit repede." },
  { name: "antoaneta cicioiu", date: "3 ani în urmă", text: "Pentru astfel de meșteșugari, de altfel foarte greu de găsit, nu pot avea decât cuvinte de laudă. OM BINE-CRESCUT, A VENIT CÂND A PROMIS, A FĂCUT LUCRARE CA LA CARTE." },
  { name: "Bobocea Andrei", date: "3 ani în urmă", text: "Servicii de nota 10, a rezolvat problema telefonic în câteva minute în timp ce alți instalatori sugerau rezolvări mult mai ample." },
  { name: "Prunaru Cosmin", date: "2 ani în urmă", text: "Servicii de calitate și rapide. Domnul instalator este profesionist, cu experiență, transparent și lucrează foarte curat." },
  { name: "Laurentiu Turcu", date: "5 ani în urmă", text: "Gabriel, un om de nota 20! O dovadă clară de profesionalism, punctualitate! Sunt foarte mulțumit de serviciile tale." },
  { name: "Răzvan Brișcariu", date: "6 ani în urmă", text: "Contactat seara la ora 19:00, iar la ora 20:30 s-a prezentat la reparație. Durată reparație 30 de minute, a curățat după el la sfârșit, simplu și eficient. Recomand!" },
  { name: "Cata Teo", date: "3 ani în urmă", text: "Super tare, meșteșugar ca ăia după vremuri, găsește soluții, nu probleme!" },
  { name: "Denisa Stancu", date: "6 ani în urmă", text: "Au lucrat impecabil. Domnul care a sosit (extrem de rapid) a fost drăguț. Foarte curată lucrarea." },
];

const colors = [
  "from-blue-500 to-indigo-600",
  "from-orange-500 to-red-600",
  "from-emerald-500 to-teal-600",
  "from-purple-500 to-fuchsia-600",
  "from-amber-500 to-orange-600",
  "from-cyan-500 to-blue-600",
];

function Card({ r, i }: { r: (typeof reviews)[number]; i: number }) {
  const initials = r.name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <article className="w-[340px] md:w-[380px] shrink-0 glass rounded-2xl p-6 hover:border-primary/40 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm truncate">{r.name}</div>
          <div className="text-xs text-muted-foreground">{r.date}</div>
        </div>
        <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0">
          <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.7 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 1.1 8.3 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
        </svg>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">{r.text}</p>
    </article>
  );
}

export function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section id="recenzii" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
            Recenzii Google
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Ce spun <span className="text-gradient-primary">clienții noștri</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground text-sm">din 21 recenzii Google</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee w-max">
          {doubled.map((r, i) => (
            <Card key={i} r={r} i={i} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center mt-12">
        <a
          href="https://www.google.com/search?q=instalator+crangasi&oq=instalator+crangasi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIHCAIQABjvBTIHCAMQABjvBTIKCAQQABiABBiiBDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDMwMjhqMGo0qAIDsAIB8QX0jsqmvXCISQ&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
        >
          Vezi toate recenziile pe Google <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
