"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Portafolio" title="Trabajos realizados con acabados que generan confianza" description="Galeria inicial para mostrar remodelaciones, cocinas, pintura, construccion y antes/despues." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="rounded-md bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wide">{item.type}</span>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-white/75">{item.category}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
