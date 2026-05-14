"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Send } from "lucide-react";
import { db } from "@/lib/firebase";

const initialState = { nombreCompleto: "", telefono: "", email: "", mensaje: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    try {
      await addDoc(collection(db, "contactos"), { ...form, fecha: serverTimestamp() });
      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg bg-white p-6 shadow-premium">
      <label className="grid gap-2 text-sm font-semibold">Nombre completo<input required name="nombreCompleto" value={form.nombreCompleto} onChange={handleChange} className="rounded-md border border-zinc-300 px-4 py-3 font-normal" placeholder="Tu nombre" /></label>
      <label className="grid gap-2 text-sm font-semibold">Telefono<input required name="telefono" value={form.telefono} onChange={handleChange} className="rounded-md border border-zinc-300 px-4 py-3 font-normal" placeholder="300 123 4567" /></label>
      <label className="grid gap-2 text-sm font-semibold">Email<input required type="email" name="email" value={form.email} onChange={handleChange} className="rounded-md border border-zinc-300 px-4 py-3 font-normal" placeholder="correo@ejemplo.com" /></label>
      <label className="grid gap-2 text-sm font-semibold">Mensaje<textarea required name="mensaje" value={form.mensaje} onChange={handleChange} rows={5} className="resize-none rounded-md border border-zinc-300 px-4 py-3 font-normal" placeholder="Cuentanos que necesitas" /></label>
      <button disabled={status === "loading"} className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 font-bold text-white hover:bg-red-700 disabled:opacity-70"><Send size={18} />{status === "loading" ? "Enviando..." : "Enviar solicitud"}</button>
      {status === "success" && <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">Solicitud enviada correctamente</p>}
      {status === "error" && <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">No pudimos enviar la solicitud. Revisa Firebase e intenta de nuevo.</p>}
    </form>
  );
}
