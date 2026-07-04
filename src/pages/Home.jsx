import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Countdown from "../components/Countdown";
import siteConfig from "../siteConfig";

// Component Imports
import Hero from "../components/Home/Hero";
import { Features, Showcase, Curriculum } from "../components/Home/FeatureBlocks";
import { Testimonials, Pricing, FAQ } from "../components/Home/SocialProofBlocks";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    // Avoid running animations if dom isn't structured
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero entrance (clean sequence)
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-eyebrow]", { y: 15, opacity: 0, duration: 0.5 })
        .from("[data-hero-title]", { y: 20, opacity: 0, duration: 0.6 }, "-=0.35")
        .from("[data-hero-sub]", { y: 15, opacity: 0, duration: 0.5 }, "-=0.4")
        .from("[data-hero-cta] > *", { y: 12, opacity: 0, duration: 0.4, stagger: 0.08 }, "-=0.3")
        .from("[data-hero-countdown]", { y: 12, opacity: 0, duration: 0.4 }, "-=0.25")
        .from("[data-hero-image]", { y: 25, opacity: 0, duration: 0.7, clearProps: "transform" }, "-=0.2");

      // 2. Individual Section Title reveals
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // 3. Grid elements stagger reveal
      gsap.utils.toArray(".reveal-grid").forEach((grid) => {
        gsap.from(grid.children, {
          y: 24,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
          clearProps: "opacity,transform", // Clears properties so CSS hovers don't break
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, rootRef);

    // Dynamic height correction if images update layouts late
    const handleLayoutRefresh = () => ScrollTrigger.refresh();
    
    const imgs = rootRef.current.querySelectorAll("img");
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", handleLayoutRefresh);
      img.addEventListener("error", handleLayoutRefresh);
    });

    window.addEventListener("load", handleLayoutRefresh);

    return () => {
      window.removeEventListener("load", handleLayoutRefresh);
      imgs.forEach((img) => {
        img.removeEventListener("load", handleLayoutRefresh);
        img.removeEventListener("error", handleLayoutRefresh);
      });
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="overflow-hidden">
      <Hero heroRef={heroRef} />
      <Features />
      <Showcase />
      <Curriculum />
      <Testimonials />
      <Pricing />
      <FAQ />

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
          className="reveal mt-7 inline-block rounded-lg bg-linear-to-r from-signal to-signal2 px-8 py-3 font-display text-sm font-bold text-ink shadow-glow hover:brightness-110"
        >
          Enroll Now — {siteConfig.price.currency} {siteConfig.price.amount}
        </Link>
      </section>
    </div>
  );
}