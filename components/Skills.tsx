import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="section border-y border-white/10 bg-dark text-white">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-kicker !text-[#5fd0c8]">Skills</span>
          <h2 className="section-title text-white">{skills.title}</h2>
          <p className="section-copy !text-white/65">{skills.note}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-[var(--radius)] border border-white/10 bg-dark-elevated p-6"
            >
              <h3 className="display text-xl font-semibold tracking-tight text-white">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
