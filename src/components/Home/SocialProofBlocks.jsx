import { Link } from "react-router-dom";
import Countdown from "../Countdown";
import siteConfig from "../../siteConfig";
import Section from "./Section";

export function Testimonials() {
  return (
    <Section eyebrow="Student results" title="Loved by 2000+ students.">
      <div className="reveal-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.testimonials.map((t, i) => (
          <div key={i} className="rounded-xl border border-edge bg-panel p-5">
            <p className="text-signal2 tracking-tight">★★★★★</p>
            <p className="mt-2 text-sm text-cloud/90 leading-relaxed">"{t.quote}"</p>
            <p className="mt-4 text-xs font-semibold text-mist">
              {t.name} · <span className="text-signal2/80">{t.role}</span>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section eyebrow="One price · Lifetime access" title="Simple pricing." className="pb-8!">
      <div id="pricing" className="reveal mx-auto max-w-md scroll-mt-24 rounded-2xl border border-signal/30 bg-panel2 p-8 text-center shadow-glow">
        <p className="text-sm text-mist line-through opacity-70">
          {siteConfig.price.currency} {siteConfig.price.originalAmount}
        </p>
        <p className="font-display text-5xl font-extrabold text-cloud mt-1">
          {siteConfig.price.currency} {siteConfig.price.amount}
        </p>
        <p className="mt-1 text-sm text-mist">{siteConfig.price.note}</p>

        <div className="mt-6 flex justify-center">
          <Countdown target={siteConfig.offerEndsAt} />
        </div>

        <Link
          to="/checkout"
          className="mt-7 block rounded-lg bg-linear-to-r from-signal to-signal2 py-3 font-display text-sm font-bold text-ink  hover:scale-[1.01] active:scale-[0.99]"
        >
          Enroll Now
        </Link>
      </div>
    </Section>
  );
}

export function FAQ() {
  return (
    <Section eyebrow="Sawal jawab" title="Questions, answered.">
      <div className="reveal-grid mx-auto max-w-2xl space-y-4">
        {siteConfig.faqs.map((f, i) => (
          <div key={i} className="rounded-xl border border-edge p-5  duration-200 hover:border-edge/80">
            <p className="font-display text-sm font-semibold text-cloud">
              {f.q}
            </p>
            <p className="mt-1.5 text-sm text-mist leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}