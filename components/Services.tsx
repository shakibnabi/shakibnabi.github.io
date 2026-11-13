import {
  Cloud,
  Layers,
  Monitor,
  Server,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { services, skills } from "@/lib/content";

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
    <section id="services" className="section border-y border-[var(--line)] bg-[rgba(255,255,255,0.4)]">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-kicker">Services</span>
          <h2 className="section-title">How I can help your team</h2>
          <p className="section-copy">
            One person who can take a product from architecture through shipping —
            without handing every piece to a different vendor.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <li key={service.title} className="border-t border-[var(--line)] pt-5">
                <Icon
                  className="text-[var(--accent)]"
                  size={22}
                  strokeWidth={1.6}
                  aria-hidden
                />
                <h3 className="display mt-4 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--slate)]">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 rounded-[var(--radius-md)] border border-[var(--line)] bg-[rgba(245,246,248,0.7)] p-6 md:p-8">
          <h3 className="display text-2xl font-semibold tracking-tight">{skills.title}</h3>
          <p className="mt-2 max-w-2xl text-[var(--slate)]">{skills.note}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skills.groups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-medium text-[var(--ink)]">{group.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--slate)]">{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
