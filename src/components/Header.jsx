import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import siteConfig from "../siteConfig";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-edge/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-signal to-signal2 font-display text-sm font-bold text-ink">
            {siteConfig.brand.charAt(0)}
          </span>
          <span className="font-display text-sm font-semibold text-cloud">
            {siteConfig.brand}
          </span>
        </Link>
        <Link
          to="/checkout"
          className="flex items-center gap-1.5 rounded-md bg-gradient-to-r from-signal to-signal2 px-4 py-2 text-sm font-semibold text-ink shadow-glow transition hover:opacity-90"
        >
          Enroll — {siteConfig.price.currency} {siteConfig.price.amount}
          <ArrowRight size={15} />
        </Link>
      </div>
    </header>
  );
}
