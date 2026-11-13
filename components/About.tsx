import Image from "next/image";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section border-y border-[var(--line)] bg-[rgba(255,255,255,0.42)]">
      <div className="container grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <figure className="relative overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg)] shadow-[var(--shadow-lift)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={about.image}
                alt="Shakib Nabi"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </figure>
          <div className="mt-5 rounded-[var(--radius)] border border-[var(--line)] bg-white/80 p-5">
            <p className="text-sm font-semibold text-[var(--accent)]">Education</p>
            <p className="mt-2 font-bold tracking-tight">{about.education.degree}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{about.education.school}</p>
          </div>
        </div>

        <div>
          <span className="section-kicker">{about.eyebrow}</span>
          <h2 className="section-title">{about.title}</h2>
          <p className="mt-4 text-base font-semibold text-[var(--ink-soft)]">{about.roleLine}</p>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 28)}
                className="max-w-2xl text-[1.05rem] leading-relaxed text-[var(--muted)]"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-[var(--ink)]">Focus areas</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.focus.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {about.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn btn-ghost"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
