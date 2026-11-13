"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,box-shadow,border-color] duration-200 ${
        solid
          ? "border-b border-[var(--line)] bg-[rgba(247,246,243,0.92)] shadow-[0_10px_40px_rgba(12,15,20,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-[var(--header-h)] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <span
            className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${
              solid ? "bg-ink text-[#f7f6f3]" : "bg-white text-ink"
            }`}
          >
            SN
          </span>
          <span
            className={`display hidden text-[1.15rem] font-semibold tracking-tight sm:block ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            {site.name}
          </span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full p-1.5 backdrop-blur-md lg:flex ${
            solid
              ? "border border-[var(--line)] bg-white/70"
              : "border border-white/15 bg-white/10"
          }`}
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                solid
                  ? "text-[var(--muted)] hover:bg-white hover:text-ink"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={`btn !hidden !min-h-10 !px-4 !text-sm sm:!inline-flex ${
              solid ? "btn-primary" : "btn-light"
            }`}
          >
            Hire me
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
              solid
                ? "border-[var(--line)] bg-white/80 text-ink"
                : "border-white/20 bg-white/10 text-white"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-[var(--line)] bg-[rgba(247,246,243,0.98)] lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-2 py-3 text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
