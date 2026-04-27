import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Urgency } from "@/components/site/Urgency";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Reviews } from "@/components/site/Reviews";
import { Coverage } from "@/components/site/Coverage";
import { Trust } from "@/components/site/Trust";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Instalator București 24/7 — Urgențe Non-Stop | 0726.001.233" },
      {
        name: "description",
        content:
          "Instalator non-stop în București & Ilfov. Urgențe rezolvate în 5–45 min. Autorizat ANRE & ISCIR. Garanție 2–5 ani. Sună: 0726.001.233",
      },
      {
        property: "og:image",
        content: "/og-cover.jpg",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pb-24 sm:pb-0">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <Urgency />
        <Reviews />
        <Coverage />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
      <Toaster />
    </div>
  );
}
