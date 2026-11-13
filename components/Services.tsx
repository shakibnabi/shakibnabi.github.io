import {
  Cloud,
  Layers,
  Monitor,
  Server,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  server: Server,
  layers: Layers,
  monitor: Monitor,
  sparkles: Sparkles,
  shoppingBag: ShoppingBag,
  cloud: Cloud,
};

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-kicker">Services</span>
          <h2 className="section-title">How I can help your team</h2>
          <p className="section-copy">
            One senior engineer who can own architecture through shipping —
            without splitting every piece across a different vendor.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <li
                key={service.title}
                className="group rounded-[var(--radius)] border border-[var(--line)] bg-white/70 p-6 transition-colors hover:border-[rgba(17,100,102,0.35)] hover:bg-white"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon size={20} strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="display text-sm font-semibold text-[var(--muted-soft)]">
                    {service.index}
                  </span>
                </div>
                <h3 className="display mt-5 text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-[var(--muted)]">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
