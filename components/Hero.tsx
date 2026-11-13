"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { hero, proof, site } from "@/lib/content";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  registerGsap();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-media", {
          scale: 1.08,
          opacity: 0.35,
          duration: 1.25,
          ease: "power2.out",
        }).from(
          ".hero-left > *",
          {
            y: 28,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.85",
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-[100svh] overflow-hidden bg-dark pt-[var(--header-h)] text-white"
    >
      <div className="hero-media absolute inset-0">
        <Image
          src={hero.banner}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,10,14,0.94)_0%,rgba(8,10,14,0.78)_42%,rgba(8,10,14,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.55)_0%,transparent_28%,rgba(8,10,14,0.72)_100%)]" />
      </div>

      <div className="container-wide relative z-10 grid min-h-[calc(100svh-var(--header-h))] items-end gap-10 pb-12 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-16">
        <div className="hero-left max-w-3xl pb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white/90 backdrop-blur">
            <span className="status-dot" aria-hidden />
            {site.availability}
          </div>

          <p className="mt-8 text-lg font-medium text-white/70 md:text-xl">{hero.greeting}</p>

          <h1 className="display mt-2 text-[clamp(4.4rem,13vw,8.6rem)] font-bold text-white">
            {hero.name}
            <span className="block text-[#5fd0c8]">{hero.lastName}</span>
          </h1>

          <p className="mt-5 text-lg font-semibold tracking-tight text-white md:text-xl">
            {hero.title}
          </p>
          <p className="mt-4 max-w-xl text-[1.08rem] leading-relaxed text-white/75 md:text-[1.15rem]">
            {hero.headline}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/65">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} strokeWidth={1.75} />
              {site.location}
            </span>
            <span>·</span>
            <span>{site.remote}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn btn-accent">
              {hero.primaryCta.label}
              <ArrowDownRight size={18} strokeWidth={1.75} />
            </a>
            <a
              href="#contact"
              className="btn border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/16"
            >
              Start a conversation
              <ArrowUpRight size={18} strokeWidth={1.75} />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {proof.map((item) => (
              <div
                key={item.label}
                className="rounded-[14px] border border-white/12 bg-white/8 px-3 py-3 backdrop-blur-sm"
              >
                <p className="display text-2xl font-bold tracking-tight text-white md:text-[1.7rem]">
                  {item.value}
                </p>
                <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-white/55">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <figure className="hero-left relative mx-auto hidden w-full max-w-[430px] lg:mx-0 lg:block lg:justify-self-end">
          <div className="absolute -inset-4 rounded-[30px] bg-[radial-gradient(circle_at_30%_20%,rgba(95,208,200,0.28),transparent_55%)]" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="430px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(8,10,14,0.78)_100%)]" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5fd0c8]">
                Currently
              </p>
              <p className="display mt-1 text-xl font-semibold tracking-tight text-white">
                CEO @ Grench
              </p>
              <p className="text-sm text-white/70">VP Engineering @ Foxdos</p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
