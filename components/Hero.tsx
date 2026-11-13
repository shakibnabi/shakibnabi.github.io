"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import { hero } from "@/lib/content";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  registerGsap();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-copy > *", {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
        }).from(
          ".hero-media",
          {
            scale: 1.06,
            opacity: 0,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.7",
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-copy > *", ".hero-media"], { clearProps: "all" });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-[100svh] overflow-hidden pt-[var(--header-h)]"
    >
      <div className="absolute inset-0">
        <div className="hero-media absolute inset-0">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,20,26,0.78)_0%,rgba(18,20,26,0.55)_42%,rgba(18,20,26,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,20,26,0.55)_0%,rgba(18,20,26,0.18)_18%,rgba(18,20,26,0.35)_62%,rgba(18,20,26,0.72)_100%)]" />
        </div>
      </div>

      <div className="container relative z-10 flex min-h-[calc(100svh-var(--header-h))] items-end pb-16 pt-20 md:pb-24">
        <div className="hero-copy max-w-3xl text-white">
          <p className="text-sm font-medium tracking-wide text-white/75 md:text-base">
            {hero.greeting}
          </p>
          <h1 className="display mt-3 text-[clamp(3.4rem,12vw,7.5rem)] font-semibold text-white">
            {hero.name}
          </h1>
          <p className="mt-5 max-w-xl text-[clamp(1.2rem,2.4vw,1.7rem)] font-medium leading-snug text-white">
            {hero.headline}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/78 md:text-lg">
            {hero.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn btn-accent">
              {hero.primaryCta.label}
              <ArrowDownRight size={18} strokeWidth={1.75} />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/18"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
