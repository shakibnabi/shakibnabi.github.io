import { proof } from "@/lib/content";

export function Proof() {
  return (
    <section aria-label="Proof points" className="border-y border-[var(--line)] bg-[var(--ink)] text-white">
      <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-14">
        {proof.map((item) => (
          <div key={item.label}>
            <p className="text-sm text-white/55">{item.label}</p>
            <p className="display mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-white/65">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
