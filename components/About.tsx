import Image from "next/image";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section border-y border-[var(--line)] bg-[rgba(255,255,255,0.45)]">
      <div className="container grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12 lg:gap-16">
        <figure className="relative w-full overflow-hidden rounded-[var(--radius-md)] bg-[var(--paper-deep)]">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={about.image}
              alt="Shakib Nabi"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <figcaption className="sr-only">Portrait of Shakib Nabi</figcaption>
        </figure>

        <div>
          <span className="section-kicker">{about.eyebrow}</span>
          <h2 className="section-title">{about.title}</h2>
          <p className="mt-3 text-base font-medium text-[var(--ink)]">{about.roleLine}</p>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-xl text-[1.02rem] leading-relaxed text-[var(--slate)]">
                {p}
              </p>
            ))}
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
