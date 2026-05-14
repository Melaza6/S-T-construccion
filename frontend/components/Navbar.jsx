"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573001234567";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-black/90 backdrop-blur">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="text-xl font-black text-white">S<span className="text-brand-red">&</span>T</a>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-white/80 hover:text-white">{item.label}</a>)}
        </div>
        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 lg:inline-flex"><MessageCircle size={18} />WhatsApp</a>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-brand-black lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-3 text-sm font-medium text-white/80 hover:bg-white/10">{item.label}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}
