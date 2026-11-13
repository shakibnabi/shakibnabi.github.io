import { Briefcase, Mail, MessageCircle } from "lucide-react";
import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="section !pt-0">
      <div className="container">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-dark px-6 py-14 text-white shadow-[var(--shadow-lift)] md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker !text-[#5fd0c8]">{contact.eyebrow}</span>
            <h2 className="section-title text-white">{contact.title}</h2>
            <p className="section-copy mx-auto !text-white/65">{contact.body}</p>
            <p className="mt-3 text-sm text-white/45">{contact.note}</p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={contact.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <MessageCircle size={18} strokeWidth={1.75} />
                {contact.primary.label}
              </a>
              <a href={contact.secondary.href} className="btn btn-light">
                <Mail size={18} strokeWidth={1.75} />
                {contact.secondary.label}
              </a>
              <a
                href={contact.tertiary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Briefcase size={18} strokeWidth={1.75} />
                {contact.tertiary.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="container mt-12 border-t border-[var(--line)] pt-8 pb-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-2xl font-bold tracking-tight">{site.name}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {site.role} · {site.location}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[var(--muted)]">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-xs text-[var(--muted-soft)]">
          © 2026 {site.fullName}. Built as a living resume.
        </p>
      </footer>
    </section>
  );
}
