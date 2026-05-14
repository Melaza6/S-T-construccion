import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573001234567";

  return (
    <section id="contacto" className="bg-brand-light py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">Contacto</p>
          <h2 className="text-3xl font-bold text-brand-black md:text-4xl">Solicita una cotizacion para tu proyecto</h2>
          <p className="mt-5 leading-7 text-zinc-600">Dejanos tus datos y te contactaremos para entender el alcance, tiempos y presupuesto.</p>
          <div className="mt-8 grid gap-4">
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-700"><MessageCircle className="text-brand-red" />WhatsApp: +57 300 123 4567</a>
            <p className="flex items-center gap-3 text-zinc-700"><Phone className="text-brand-red" />Atencion en Cali y alrededores</p>
            <p className="flex items-center gap-3 text-zinc-700"><Mail className="text-brand-red" />contacto@stconstruccion.com</p>
            <p className="flex items-center gap-3 text-zinc-700"><MapPin className="text-brand-red" />Cali, Valle del Cauca</p>
          </div>

          
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
