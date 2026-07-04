# Xeta Marketing — Course Site (React + Vite + Tailwind v4)

2 pages:
- `/` — Landing / sales page
- `/checkout` — Checkout + manual payment verification

## Stack

- React + Vite
- **Tailwind CSS v4** (CSS-first config — see `src/index.css`, no `tailwind.config.js` needed)
- **lucide-react** + **react-icons** for icons
- **GSAP** (+ ScrollTrigger) for hero entrance and scroll-reveal animations

## Setup

```bash
npm install
npm run dev
```

Browser mein `http://localhost:5173` khol lein.

Production build:

```bash
npm run build
```

## Sab kuch customize karne ky liye — SIRF EK FILE

`src/siteConfig.js` khol lein:

- Brand name, tagline, hero text
- Price, discount, offer end date/time (countdown ky liye)
- Features (har feature ka `icon` naam `src/lib/icons.js` mein map hota hai — naya icon add karna ho to wahan register kar dein)
- Showcase images, modules list, testimonials, FAQs
- **`payment.methods`** — JazzCash / EasyPaisa / Bank account details
- **`payment.whatsappNumber`** — WhatsApp number jahan students verification bhejein gy
- **`contact`** — footer ky liye WhatsApp display number, status, social links

## Tailwind v4 notes

Colors/fonts `src/index.css` ky `@theme` block mein defined hain (`--color-signal`, `--color-signal2` waghera — Xeta Marketing ka maroon/crimson palette). Rang change karne ho to yahin edit karein, poore project mein automatically apply ho jaye ga.

## Animations (GSAP)

`src/pages/Home.jsx` mein:
- Hero load hotay hi elements stagger ky sath fade/slide in hotay hain
- `.reveal` aur `.reveal-grid` class waly elements scroll par animate hotay hain (`ScrollTrigger`)

## Manual Payment Verification kaise kaam karta hai

1. Student checkout page par payment methods dekhta hai aur payment kar deta hai.
2. Naam, contact aur payment ka screenshot upload karta hai (sirf preview ky liye, kahin upload nahi hota).
3. "WhatsApp par bhejein" button dabata hai → WhatsApp khulta hai, details pehle se likhi hoti hain.
4. Student manually screenshot attach kar ky message send karta hai.
5. Admin WhatsApp par screenshot check kar ky manually access enroll/activate karta hai.

Baad mein automatic payment gateway lagana ho to checkout ka submit function backend API call se replace karna hoga — baqi UI wesay hi rahega.
