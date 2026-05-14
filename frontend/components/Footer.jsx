import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573001234567";

  return (
    <footer className="bg-brand-black py-10 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl font-black">S<span className="text-brand-red">&</span>T</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">Construccion, remodelacion y mantenimiento locativo con servicio profesional en Cali.</p>
        </div>
        <div className="grid gap-2 text-sm text-white/70">
          <p>Camara de Comercio: pendiente por registrar</p>
          <p>RUT: pendiente por registrar</p>
          <p>Direccion: Cali, Valle del Cauca</p>
        </div>
        <div className="flex items-start gap-3 md:justify-end">
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-md bg-white/10 p-3 hover:bg-brand-red"><MessageCircle size={20} /></a>
          <a href="#" aria-label="Instagram" className="rounded-md bg-white/10 p-3 hover:bg-brand-red"><Instagram size={20} /></a>
          <a href="#" aria-label="Facebook" className="rounded-md bg-white/10 p-3 hover:bg-brand-red"><Facebook size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
