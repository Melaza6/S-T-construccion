import { Camera, ClipboardList, ImagePlus, LayoutDashboard } from "lucide-react";

const modules = [
  { title: "Solicitudes de contacto", description: "Ver clientes potenciales, cambiar estado y agregar notas.", icon: ClipboardList },
  { title: "Servicios", description: "Crear, editar, activar o desactivar servicios.", icon: LayoutDashboard },
  { title: "Portafolio", description: "Subir fotos, ordenar proyectos y clasificar categorias.", icon: Camera },
  { title: "Antes y despues", description: "Preparado para comparar imagenes de obras.", icon: ImagePlus }
];



export default function AdminPage() {
  return (
    <main className="min-h-screen bg-brand-light py-14">
      <section className="section-shell">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">Fase 2</p>
        <h1 className="text-4xl font-black text-brand-black">Panel administrativo</h1>
        <p className="mt-4 max-w-3xl leading-7 text-zinc-600">Base para conectar Firebase Authentication, Firestore y Storage. Desde aqui el cliente podra administrar fotos, servicios y solicitudes.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {modules.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-lg bg-white p-6 shadow-sm">
              <Icon className="mb-4 text-brand-red" size={28} />
              <h2 className="text-xl font-bold text-brand-black">{title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
