"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573001234567";

  return (
    <section id="inicio" className="relative min-h-[92vh] overflow-hidden bg-brand-black pt-20 text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div className="section-shell relative z-10 flex min-h-[calc(92vh-80px)] items-center py-16">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">Remodelaciones premium en Cali</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">S&T Construccion y Mantenimiento</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">Soluciones confiables en construccion, remodelacion y mantenimiento en Cali.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 font-semibold text-white hover:bg-red-700">Solicitar cotizacion <ArrowRight size={19} /></a>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white hover:text-brand-black"><MessageCircle size={19} />WhatsApp</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
