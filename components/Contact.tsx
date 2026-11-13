import { Mail, MessageCircle, Briefcase } from "lucide-react";
import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{contact.eyebrow}</span>
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-copy mx-auto">{contact.body}</p>
          <p className="mt-3 text-sm text-[var(--slate-soft)]">{contact.note}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={contact.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <MessageCircle size={18} strokeWidth={1.75} />
              {contact.primary.label}
            </a>
            <a href={contact.secondary.href} className="btn btn-primary">
              <Mail size={18} strokeWidth={1.75} />
              {contact.secondary.label}
            </a>
            <a
              href={contact.tertiary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Briefcase size={18} strokeWidth={1.75} />
              {contact.tertiary.label}
            </a>
          </div>
        </div>
      </div>

      <footer className="container mt-20 border-t border-[var(--line)] pt-8 pb-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display text-xl font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-[var(--slate)]">
              {site.role} · {site.location}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--slate)]">
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
        <p className="mt-8 text-xs text-[var(--slate-soft)]">
          © 2026 {site.fullName}
        </p>
      </footer>
    </section>
  );
}
