import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Countdown from "../components/Countdown";
import siteConfig from "../siteConfig";
import { featureIcons } from "../lib/icons";

gsap.registerPlugin(ScrollTrigger);

function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 sm:py-20 ${className}`}>
      {eyebrow && (
        <p className="reveal mb-2 text-center font-mono text-xs uppercase tracking-[0.2em] text-signal2">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="reveal mb-10 text-center font-display text-2xl font-bold text-cloud sm:text-3xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance — runs once on load, not scroll-linked
      gsap.timeline({ defaults: { ease: "power2.out" } })
        .from("[data-hero-eyebrow]", { y: 12, opacity: 0, duration: 0.5 })
        .from("[data-hero-title]", { y: 18, opacity: 0, duration: 0.55 }, "-=0.3")
        .from("[data-hero-sub]", { y: 12, opacity: 0, duration: 0.5 }, "-=0.35")
        .from("[data-hero-cta] > *", { y: 10, opacity: 0, duration: 0.4, stagger: 0.08 }, "-=0.25")
        .from("[data-hero-countdown]", { y: 10, opacity: 0, duration: 0.4 }, "-=0.2")
        .from("[data-hero-image]", { y: 20, opacity: 0, duration: 0.6 }, "-=0.2");

      // Simple, single-pass scroll reveals (no reverse -> nothing gets stuck hidden)
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 16,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.utils.toArray(".reveal-grid").forEach((grid) => {
        gsap.from(grid.children, {
          y: 16,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: grid,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, rootRef);

    // Images (showcase, hero) load after mount and shift layout height,
    // which throws off ScrollTrigger's saved start positions and can leave
    // later sections stuck at opacity 0. Refresh once everything settles.
    const imgs = rootRef.current ? rootRef.current.querySelectorAll("img") : [];
    let pending = imgs.length;
    const onImgLoad = () => {
      pending -= 1;
      if (pending <= 0) ScrollTrigger.refresh();
    };
    if (imgs.length === 0) {
      ScrollTrigger.refresh();
    } else {
      imgs.forEach((img) => {
        if (img.complete) {
          onImgLoad();
        } else {
          img.addEventListener("load", onImgLoad);
          img.addEventListener("error", onImgLoad);
        }
      });
    }

    const onWindowLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onWindowLoad);

    return () => {
      window.removeEventListener("load", onWindowLoad);
      imgs.forEach((img) => {
        img.removeEventListener("load", onImgLoad);
        img.removeEventListener("error", onImgLoad);
      });
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="grid-fade">
      {/* HERO */}
      <section ref={heroRef} className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:pt-24">
        <p data-hero-eyebrow className="mb-4 inline-block rounded-full border border-edge bg-panel px-4 py-1 font-mono text-xs text-signal2">
          {siteConfig.hero.eyebrow}
        </p>
        <h1 data-hero-title className="font-display text-4xl font-extrabold leading-tight text-cloud sm:text-5xl">
          {siteConfig.hero.titleLine1}{" "}
          <span className="bg-linear-to-r from-signal to-signal2 bg-clip-text text-transparent">
            {siteConfig.hero.titleHighlight}
          </span>{" "}
          {siteConfig.hero.titleLine2}
        </h1>
        <p data-hero-sub className="mx-auto mt-5 max-w-xl text-base text-mist">
          {siteConfig.hero.subtitle}
        </p>

        <div data-hero-cta className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/checkout"
            className="rounded-lg bg-linear-to-r from-signal to-signal2 px-7 py-3 font-display text-sm font-bold text-ink shadow-glow  hover:opacity-90"
          >
            Enroll Now — {siteConfig.price.currency} {siteConfig.price.amount}
          </Link>
          <a
            href="#pricing"
            className="rounded-lg border border-edge px-7 py-3 text-sm font-semibold text-cloud  hover:bg-panel"
          >
            Price dekhein
          </a>
        </div>

        <div data-hero-countdown className="mt-10 flex justify-center">
          <Countdown target={siteConfig.offerEndsAt} />
        </div>
        <p className="mt-4 font-mono text-xs text-mist">
          🔥 {siteConfig.seatsLeftText}
        </p>

        <div data-hero-image className="mt-14 overflow-hidden rounded-2xl border border-edge shadow-glow">
          <img
            src={siteConfig.hero.videoThumb}
            alt="Course preview"
            className="h-64 w-full object-cover sm:h-96"
          />
        </div>
      </section>

      {/* FEATURES */}
      <Section eyebrow="What Includes ?" title="Everything you need to earn with AI.">
        <div className="reveal-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.features.map((f, i) => {
            const Icon = featureIcons[f.icon];
            return (
              <div
                key={i}
                className="rounded-xl border border-edge bg-panel p-5  hover:border-signal/60"
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

      {/* SHOWCASE */}
      <Section eyebrow="What you'll create" title="Learn to create videos like these.">
        <div className="reveal-grid grid grid-cols-2 gap-4 sm:grid-cols-3">
          {siteConfig.showcase.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-edge"
            >
              <img
                src={s.img}
                alt={s.label}
                className="aspect-3/4 w-full object-cover  group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/90 to-transparent p-3">
                <p className="text-xs font-medium text-cloud">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* MODULES */}
      <Section eyebrow="Complete curriculum" title="15 modules. One complete system.">
        <div className="reveal-grid mx-auto max-w-2xl divide-y divide-edge overflow-hidden rounded-xl border border-edge bg-panel">
          {siteConfig.modules.map((m, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5">
              <span className="font-mono text-xs text-signal2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-cloud">{m}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Student results" title="Loved by 2000+ students.">
        <div className="reveal-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-edge bg-panel p-5">
              <p className="text-signal2">★★★★★</p>
              <p className="mt-2 text-sm text-cloud/90">"{t.quote}"</p>
              <p className="mt-4 text-xs font-semibold text-mist">
                {t.name} · {t.role}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section eyebrow="One price · Lifetime access" title="Simple pricing." className="pb-8!">
        <div id="pricing" className="reveal mx-auto max-w-md scroll-mt-24 rounded-2xl border border-signal/40 bg-panel2 p-8 text-center shadow-glow">
          <p className="text-sm text-mist line-through">
            {siteConfig.price.currency} {siteConfig.price.originalAmount}
          </p>
          <p className="font-display text-5xl font-extrabold text-cloud">
            {siteConfig.price.currency} {siteConfig.price.amount}
          </p>
          <p className="mt-1 text-sm text-mist">{siteConfig.price.note}</p>

          <div className="mt-6 flex justify-center">
            <Countdown target={siteConfig.offerEndsAt} />
          </div>

          <Link
            to="/checkout"
            className="mt-7 block rounded-lg bg-linear-to-r from-signal to-signal2 py-3 font-display text-sm font-bold text-ink  hover:opacity-90"
          >
            Enroll Now
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Sawal jawab" title="Questions, answered.">
        <div className="reveal-grid mx-auto max-w-2xl space-y-4">
          {siteConfig.faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-edge bg-panel p-5">
              <p className="font-display text-sm font-semibold text-cloud">
                {f.q}
              </p>
              <p className="mt-1.5 text-sm text-mist">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-2xl px-5 pb-24 text-center">
        <h2 className="reveal font-display text-2xl font-bold text-cloud sm:text-3xl">
          Start your{" "}
          <span className="bg-linear-to-r from-signal to-signal2 bg-clip-text text-transparent">
            AI journey
          </span>{" "}
          today.
        </h2>
        <div className="reveal mt-6 flex justify-center">
          <Countdown target={siteConfig.offerEndsAt} />
        </div>
        <Link
          to="/checkout"
          className="reveal mt-7 inline-block rounded-lg bg-linear-to-r from-signal to-signal2 px-8 py-3 font-display text-sm font-bold text-ink shadow-glow  hover:opacity-90"
        >
          Enroll Now — {siteConfig.price.currency} {siteConfig.price.amount}
        </Link>
      </section>
    </div>
  );
}