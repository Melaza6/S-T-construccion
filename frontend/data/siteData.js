import { Brush, Building2, Droplets, Hammer, Paintbrush, Plug, ShieldCheck, Star, Wrench } from "lucide-react";

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" }
];

export const values = ["Calidad", "Responsabilidad", "Honestidad", "Transparencia", "Cumplimiento", "Seguridad"];

export const services = [
  { title: "Construccion", description: "Construccion de viviendas hasta tres pisos con planeacion y acabados profesionales.", icon: Building2, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80" },
  { title: "Remodelacion", description: "Transformacion de cocinas, banos, viviendas y locales comerciales.", icon: Hammer, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80" },
  { title: "Electricidad", description: "Instalaciones, reparaciones y mantenimiento electrico.", icon: Plug, image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80" },
  { title: "Plomeria", description: "Soluciones de redes hidraulicas, fugas y puntos de agua.", icon: Droplets, image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80" },
  { title: "Pintura", description: "Pintura interior y exterior con preparacion de superficies.", icon: Paintbrush, image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=900&q=80" },
  { title: "Drywall", description: "Muros, cielos rasos y divisiones en drywall.", icon: Brush, image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80" },
  { title: "Mantenimiento locativo", description: "Atencion integral para hogares, oficinas y locales.", icon: Wrench, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80" }
];

export const portfolio = [
  { title: "Cocina moderna", category: "Remodelaciones", type: "Despues", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80" },
  { title: "Obra residencial", category: "Construccion", type: "Proceso", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80" },
  { title: "Acabados interiores", category: "Pintura", type: "Despues", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80" },
  { title: "Bano renovado", category: "Remodelaciones", type: "Antes y despues", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80" },
  { title: "Mantenimiento comercial", category: "Mantenimiento", type: "Despues", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80" },
  { title: "Zona social", category: "Drywall", type: "Despues", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" }
];

export const testimonials = [
  { name: "Carolina M.", comment: "Cumplieron los tiempos acordados y dejaron la cocina impecable." },
  { name: "Andres R.", comment: "Muy organizados, claros con la cotizacion y responsables." },
  { name: "Marcela G.", comment: "Respuesta rapida y trabajo limpio para mantenimiento locativo." }
];

export { ShieldCheck, Star };
