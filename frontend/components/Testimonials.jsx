import { Star } from "lucide-react";
import { testimonials } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-brand-black py-20 text-white">
      <div className="section-shell">
        <SectionHeading dark eyebrow="Testimonios" title="Clientes que confian en S&T" description="Opiniones de referencia para reforzar confianza desde la primera visita." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-lg border border-white/10 bg-white/10 p-6">
              <div className="mb-5 flex gap-1 text-brand-red">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>
              <p className="leading-7 text-white/78">"{item.comment}"</p>
              <h3 className="mt-5 font-bold text-white">{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
