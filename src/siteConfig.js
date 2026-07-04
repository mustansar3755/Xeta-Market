// ------------------------------------------------------------------
// EDIT EVERYTHING HERE. This is the only file you need to touch to
// rebrand the whole site (name, price, bank details, WhatsApp number).
// ------------------------------------------------------------------

const siteConfig = {
  brand: "Xeta Marketing",
  tagline: "Digital creator • Social Media Agency • Other Business",

  hero: {
    eyebrow: "Digital creator • Social Media Agency • Other Business",
    titleLine1: "Elevate your skills.",
    titleHighlight: "Grow your brand",
    titleLine2: "with Xeta Marketing.",
    subtitle:
      "Premium courses aur powerful tools jo aapko AI content creator, viral shorts automation, aur high-converting creatives banana sikhayen — bilkul beginners ky liye.",
    videoThumb:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
  },

  // Countdown target (offer ends). Edit the date below.
  offerEndsAt: "2026-07-20T23:59:59",

  seatsLeftText: "180+ students enrolled this week",

  price: {
    currency: "Rs",
    amount: 999,
    originalAmount: 4999,
    note: "One-time payment · Lifetime access",
  },

  features: [
    {
      icon: "Rocket",
      title: "Income AI skill",
      desc: "Practical skill jo aap turant kaam mein la saken — sirf theory nahi.",
    },
    {
      icon: "Video",
      title: "Viral shorts content",
      desc: "Reels aur shorts jo dekhne walon ko rok len, step-by-step.",
    },
    {
      icon: "Sparkles",
      title: "AI creatives",
      desc: "Ads aur posts AI se professional level pe banana seekhein.",
    },
    {
      icon: "Youtube",
      title: "Faceless YouTube system",
      desc: "Bina camera ky ek poora channel chalane ka poora system.",
    },
    {
      icon: "Briefcase",
      title: "Freelance & monetize",
      desc: "Yeh skill client work aur apne channel dono mein kaam aati hai.",
    },
    {
      icon: "GraduationCap",
      title: "Built for beginners",
      desc: "Koi editing ya AI background zaroori nahi — sab kuch shuru se.",
    },
  ],

  showcase: [
    {
      label: "Realistic AI presenter reels",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "Scroll-stopping AI reels",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "High-converting AI ads",
      img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "Cinematic AI story reels",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "Cinematic AI promo videos",
      img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
    },
    {
      label: "AI animated films",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    },
  ],

  modules: [
    "Introduction to AI content creation",
    "Google Veo 3 mastery",
    "Google Flow workflow",
    "Whisk AI content system",
    "AI reel creation",
    "YouTube automation",
    "TikTok automation",
    "Instagram automation",
    "AI cartoon videos",
    "Viral hook creation",
    "AI voiceovers",
    "Ad creative creation",
    "Facebook & Instagram video ads",
    "Monetization methods",
    "Freelancing with AI skills",
  ],

  testimonials: [
    {
      name: "Bilal R.",
      role: "Student",
      quote:
        "Pehle mahine mein hi apni pehli AI reel client ko sell ki. Course simple aur practical hai.",
    },
    {
      name: "Sara M.",
      role: "Freelancer",
      quote:
        "Faceless YouTube module ny meri poori strategy badal di. Ab consistent content aata hai.",
    },
    {
      name: "Ahmed K.",
      role: "Student",
      quote:
        "Roman Urdu mein explain kiya gaya hai isliye samajhna bohat asaan raha.",
    },
    {
      name: "Hina T.",
      role: "Business owner",
      quote:
        "Apne shop ky ads khud AI se banana shuru kar diye — paisay bach gaye.",
    },
    {
      name: "Usman F.",
      role: "Student",
      quote:
        "15 modules mein poora system hai, kuch chorna nahi para khud sikhne ky liye.",
    },
    {
      name: "Zainab A.",
      role: "Content creator",
      quote:
        "Sirf ek price mein lifetime access — value bohat zyada hai.",
    },
  ],

  faqs: [
    {
      q: "Kya yeh course beginners ky liye hai?",
      a: "Bilkul. Course zero se shuru hota hai, koi pichla AI ya editing experience zaroori nahi.",
    },
    {
      q: "Access kitne arsy ky liye milta hai?",
      a: "Ek dafa payment ky baad access lifetime ky liye hai, saray future updates ky sath.",
    },
    {
      q: "Kya main mobile se seekh sakta/sakti hoon?",
      a: "Haan, poora course mobile aur laptop dono par asani se dekha ja sakta hai.",
    },
    {
      q: "Refund policy kya hai?",
      a: "Enroll karne ky 7 din ky andar agar course aap ky liye nahi hai to poori raqam wapas mil jaye gi.",
    },
  ],

  // ---- Payment / manual verification settings ----
  payment: {
    // WhatsApp number admin will verify payments on (with country code, no + or spaces)
    whatsappNumber: "923212416605",
    methods: [
      {
        label: "JazzCash",
        account: "0321 2416605",
        holder: "Xeta Marketing",
      },
      {
        label: "EasyPaisa",
        account: "0321 2416605",
        holder: "Xeta Marketing",
      },
      {
        label: "Bank Transfer",
        account: "PK00 BANK 0000 0000 0000 0000",
        holder: "Xeta Marketing — Meezan Bank",
      },
    ],
  },

  // Shown in footer, matches business card style contact info
  contact: {
    whatsappDisplay: "+92 321 2416605",
    status: "Open 24 hours",
    socials: {
      whatsapp: "https://wa.me/923212416605",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
};

export default siteConfig;
