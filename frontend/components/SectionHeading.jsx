export default function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">{eyebrow}</p>}
      <h2 className={`text-3xl font-bold md:text-4xl ${dark ? "text-white" : "text-brand-black"}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? "text-white/68" : "text-zinc-600"}`}>{description}</p>}
    </div>
  );
}
