import { marquee } from "@/lib/content";

export function Marquee() {
  const items = [...marquee, ...marquee];

  return (
    <section aria-label="Technologies" className="border-y border-white/10 bg-dark py-5 text-white">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
