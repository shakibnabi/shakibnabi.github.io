"use client";

import { useRef } from "react";
import { experience } from "@/lib/content";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

export function Experience() {
  const root = useRef<HTMLElement>(null);
  registerGsap();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".exp-card", {
          y: 32,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="experience" ref={root} className="section">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">Professional resume</h2>
          <p className="section-copy">
            Roles where I owned delivery — founding, engineering leadership, and
            hands-on full-stack work across startups and global clients.
          </p>
        </div>

        <ol className="mt-12 space-y-4">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="exp-card rounded-[var(--radius)] border border-[var(--line)] bg-white/75 p-5 shadow-[0_12px_40px_rgba(12,15,20,0.05)] md:p-7"
            >
              <div className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-8">
                <div>
                  <p className="text-sm font-bold text-[var(--accent)]">{job.dates}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {job.place}
                    {job.current ? (
                      <span className="ml-2 inline-flex rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-xs font-bold text-[var(--accent)]">
                        Current
                      </span>
                    ) : null}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="display text-2xl font-bold tracking-tight md:text-3xl">
                      {job.company}
                    </h3>
                    <span className="text-sm font-semibold text-[var(--muted)]">{job.role}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-[0.98rem] leading-relaxed text-[var(--muted)] before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
