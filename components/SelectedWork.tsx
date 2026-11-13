"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

export function SelectedWork() {
  const root = useRef<HTMLElement>(null);

  registerGsap();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".work-figure").forEach((figure) => {
          gsap.from(figure, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: figure,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="work" ref={root} className="section">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-kicker">Selected work</span>
          <h2 className="section-title">Projects that had to work in the wild</h2>
          <p className="section-copy">
            A short list of builds I&apos;ve shipped — commerce, fintech, alumni tooling,
            and mobile flows. Each one had real users and real constraints.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {projects.map((project) => {
            const body = (
              <figure className="work-figure group">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[var(--radius-md)] bg-[var(--paper-deep)]">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <figcaption className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-[var(--accent)]">{project.tag}</p>
                    <h3 className="display mt-1 text-2xl font-semibold tracking-tight md:text-[1.7rem]">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-[var(--slate)]">
                      {project.blurb}
                    </p>
                  </div>
                  {project.href ? (
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                      <ArrowUpRight size={18} strokeWidth={1.75} />
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            );

            return project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                {body}
              </a>
            ) : (
              <div key={project.title}>{body}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
