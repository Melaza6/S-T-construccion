import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573001234567";

  return (
    <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-premium hover:scale-105 hover:bg-green-600">
      <MessageCircle size={28} />
    </a>
  );
}
