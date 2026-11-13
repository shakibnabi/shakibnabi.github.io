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
        gsap.from(".exp-line", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".exp-track",
            start: "top 75%",
            end: "bottom 40%",
            scrub: 0.6,
          },
        });

        gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item) => {
          gsap.from(item, {
            x: -16,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
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
    <section id="experience" ref={root} className="section">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">Where the work actually happened</h2>
          <p className="section-copy">
            Ten-plus years across startups, agencies, and product teams — still writing code,
            still owning delivery.
          </p>
        </div>

        <div className="exp-track relative mt-12 max-w-3xl pl-6 md:pl-8">
          <span
            aria-hidden
            className="exp-line absolute left-[0.35rem] top-2 bottom-2 w-px origin-top bg-[var(--accent)] md:left-[0.55rem]"
          />

          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={`${job.company}-${job.dates}`} className="exp-item relative">
                <span
                  aria-hidden
                  className="absolute -left-[1.28rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--paper)] md:-left-[1.48rem]"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="display text-xl font-semibold md:text-2xl">{job.company}</h3>
                  <span className="text-sm text-[var(--slate)]">{job.role}</span>
                  {job.current ? (
                    <span className="rounded-full bg-[rgba(31,111,120,0.12)] px-2 py-0.5 text-xs font-medium text-[var(--accent)]">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-[var(--slate-soft)]">
                  {job.place} · {job.dates}
                </p>
                <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--slate)]">
                  {job.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
