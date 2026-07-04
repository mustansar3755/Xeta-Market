import siteConfig from "../../siteConfig";
import { featureIcons } from "../../lib/icons";
import Section from "./Section";

export function Features() {
  return (
    <Section
      eyebrow="What Includes ?"
      title="Everything you need to earn with AI."
    >
      <div className="reveal-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.features.map((f, i) => {
          const Icon = featureIcons[f.icon];
          return (
            <div
              key={i}
              className="rounded-xl border border-edge bg-panel p-5 transition-all duration-300 hover:border-signal/60 hover:-translate-y-0.5"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-linear-to-br from-signal to-signal2 text-ink">
                {Icon && <Icon size={18} strokeWidth={2.25} />}
              </div>
              <h3 className="font-display text-base font-semibold text-cloud">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm text-mist">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Showcase() {
  return (
    <Section
      eyebrow="What you'll create"
      title="Learn to create videos like these."
    >
      <div className="reveal-grid grid grid-cols-2 gap-4 sm:grid-cols-3">
        {siteConfig.showcase.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl border border-edge bg-panel"
          >
            <img
              src={s.img}
              alt={s.label}
              className="aspect-3/4 w-full object-cover transition-transform duration-500 group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/90 via-ink/40 to-transparent p-3-3 pt-8">
              <p className="text-lg mb-10 ml-4 font-medium text-cloud">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Curriculum() {
  return (
    <Section
      eyebrow="Complete curriculum"
      title="15 modules. One complete system."
    >
      <div className="reveal-grid mx-auto max-w-2xl divide-y divide-edge overflow-hidden rounded-xl border border-edge bg-panel">
        {siteConfig.modules.map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/1 transition-colors"
          >
            <span className="font-mono text-xs text-signal2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-cloud">{m}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
