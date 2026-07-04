import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import siteConfig from "../siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-edge/60 py-12 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-1 px-5">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-linear-to-br from-signal to-signal2 font-display text-base font-bold text-ink">
          {siteConfig.brand.charAt(0)}
        </span>
        <p className="mt-2 font-display text-sm font-semibold text-cloud">
          {siteConfig.brand}
        </p>
        <a
          href={siteConfig.contact.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-signal2 hover:underline"
        >
          {siteConfig.contact.whatsappDisplay}
        </a>
        <p className="text-xs text-mist">{siteConfig.tagline}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-go">
          <span className="h-1.5 w-1.5 rounded-full bg-go" />
          {siteConfig.contact.status}
        </p>

        <div className="mt-4 flex items-center gap-4 text-mist">
          <a
            href={siteConfig.contact.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-signal2"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href={siteConfig.contact.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-signal2"
            aria-label="Facebook"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href={siteConfig.contact.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-signal2"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        <p className="mt-6 text-xs text-mist/70">
          © {new Date().getFullYear()} {siteConfig.brand}. Sab huqooq
          mahfooz hain.
        </p>
      </div>
    </footer>
  );
}
