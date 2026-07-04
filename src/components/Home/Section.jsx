export default function Section({ eyebrow, title, children, className = "", id }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-16 sm:py-20 will-change-transform ${className}`}>
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