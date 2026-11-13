"use client";

import { useRef } from "react";
import { proof } from "@/lib/content";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

export function Proof() {
  const root = useRef<HTMLElement>(null);
  registerGsap();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".proof-item", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-label="Resume highlights" className="section !py-14">
      <div className="container">
        <div className="grid gap-4 rounded-[var(--radius)] border border-[var(--line)] bg-white/70 p-3 shadow-[var(--shadow-lift)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-2 lg:p-4">
          {proof.map((item) => (
            <div
              key={item.label}
              className="proof-item rounded-[14px] bg-[var(--bg)] px-5 py-6"
            >
              <p className="text-sm font-semibold text-[var(--muted)]">{item.label}</p>
              <p className="display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-[var(--muted-soft)]">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
