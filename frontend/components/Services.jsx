"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="servicios" className="bg-brand-light py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Servicios" title="Soluciones completas para construir, renovar y mantener" description="Servicios pensados para dar claridad en la cotizacion y resultados duraderos." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, image, icon: Icon }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <div className="relative h-52 overflow-hidden"><Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-red-50 text-brand-red"><Icon size={23} /></div>
                <h3 className="text-xl font-bold text-brand-black">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{description}</p>
                <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-red-800">Cotizar <ArrowRight size={17} /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
