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
        gsap.utils.toArray<HTMLElement>(".work-row").forEach((row) => {
          gsap.from(row, {
            y: 56,
            opacity: 0,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
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
    <section id="work" ref={root} className="section !pt-4">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker">Selected work</span>
            <h2 className="section-title">Case highlights from production</h2>
            <p className="section-copy">
              Real products with real constraints — commerce, FinTech, alumni
              platforms, and mobile systems I&apos;ve shipped end to end.
            </p>
          </div>
          <p className="text-sm font-semibold text-[var(--muted)] md:pb-2">
            06 featured · 210+ delivered
          </p>
        </div>

        <div className="mt-14 space-y-8 md:space-y-12">
          {projects.map((project, i) => {
            const reverse = i % 2 === 1;
            const body = (
              <article
                className={`work-row group grid items-center gap-6 overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-white/75 p-3 shadow-[var(--shadow-lift)] md:grid-cols-2 md:gap-0 md:p-0 ${
                  reverse ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[16/11] overflow-hidden rounded-[14px] bg-[var(--bg)] md:rounded-none">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
                </figure>

                <div className="flex flex-col justify-center px-4 pb-4 md:px-10 md:py-10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="display text-sm font-semibold tracking-normal text-[var(--accent)]">
                      {project.index}
                    </span>
                    <span className="chip chip-accent">{project.tag}</span>
                  </div>
                  <h3 className="display mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-[var(--muted)]">
                    {project.blurb}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[var(--ink-soft)]">
                    {project.outcome}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.href ? (
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
                      View project
                      <ArrowUpRight size={16} strokeWidth={1.75} />
                    </span>
                  ) : null}
                </div>
              </article>
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
