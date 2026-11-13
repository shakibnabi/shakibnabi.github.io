"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      className={`fixed inset-x-0 top-0 z-40 transition-[background,box-shadow,backdrop-filter,border-color] duration-200 ${
        solid
          ? "border-b border-[var(--line)] bg-[rgba(245,246,248,0.92)] shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-[var(--header-h)] items-center justify-between gap-4">
        <a
          href="#top"
          className={`display text-lg font-semibold tracking-tight transition-colors ${
            solid ? "text-[var(--ink)]" : "text-white"
          }`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                solid
                  ? "text-[var(--slate)] hover:text-[var(--ink)]"
                  : "text-white/78 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`btn !min-h-10 !px-4 !text-sm ${
              solid ? "btn-primary" : "border border-white/35 bg-white text-[var(--ink)] hover:bg-white/90"
            }`}
          >
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
            solid
              ? "border-[var(--line)] text-[var(--ink)]"
              : "border-white/35 text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-[var(--line)] bg-[rgba(245,246,248,0.97)] md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-2 py-3 text-base text-[var(--ink)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary mt-2"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
