"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "@/data/siteData";
import SectionHeading from "./SectionHeading";
import { values } from "@/data/siteData";

export default function About() {
  const blocks = [
    { title: "Historia", text: "S&T nace para ofrecer soluciones integrales en obra civil, remodelacion y mantenimiento locativo con atencion personalizada en Cali." },
    { title: "Mision", text: "Ofrecemos construccion de viviendas hasta tres pisos, remodelaciones y mantenimiento locativo con calidad, seguridad y cumplimiento." },
    { title: "Vision", text: "Para el ano 2030, S&T sera una empresa reconocida en Cali por su confiabilidad, acabados profesionales y transparencia." }
  ];

  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading eyebrow="Quienes somos" title="Experiencia, orden y cumplimiento para cada obra" description="Acompanamos proyectos residenciales y comerciales con un servicio cercano, tecnico y transparente." />
        <div className="grid gap-6 lg:grid-cols-3">
          {blocks.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-brand-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{item.text}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {values.map((value) => (
            <div key={value} className="flex min-h-28 flex-col items-center justify-center rounded-lg bg-brand-light p-4 text-center">
              <ShieldCheck className="mb-3 text-brand-red" size={24} />
              <span className="text-sm font-semibold text-brand-black">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
