import { Link } from "react-router-dom";
import Countdown from "../Countdown";
import siteConfig from "../../siteConfig";

export default function Hero({ heroRef }) {
  return (
    <section ref={heroRef} className="mx-auto max-w-4xl px-5 pt-16 pb-10 text-center sm:pt-24">
      <p data-hero-eyebrow className="mb-4 inline-block rounded-full border border-edge px-4 py-1 font-mono text-xs text-signal2">
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

      {/* GSAP wrapper block to prevent transition layout shifts */}
      <div data-hero-cta className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/checkout"
          className="w-full sm:w-auto rounded-lg bg-linear-to-r from-signal to-signal2 px-7 py-3 font-display 
          text-sm font-bold text-ink shadow-glow  hover:brightness-110 active:scale-[0.98]"
        >
          Enroll Now — {siteConfig.price.currency} {siteConfig.price.amount}
        </Link>
        <a
          href="#pricing"
          className="w-full sm:w-auto rounded-lg border border-edge px-7 py-3 text-sm font-semibold text-cloud   hover:bg-panel"
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

      <div data-hero-image className="mt-14 overflow-hidden rounded-2xl border border-edge shadow-glow bg-panel">
        <img
          src={siteConfig.hero.videoThumb}
          alt="Course preview"
          className="h-64 w-full object-cover sm:h-96"
          loading="eager"
        />
      </div>
    </section>
  );
}