export const business = {
  name: "Cederhof Roofing",
  tagline: "Premium Residential Roofing for Johannesburg North",
  established: 2009,
  yearsActive: new Date().getFullYear() - 2009,
  registrations: [
    { short: "MBSA", long: "Master Builders South Africa" },
    { short: "CIPC", long: "Companies and Intellectual Property Commission" },
    { short: "PIRB", long: "Plumbing Industry Registration Board" },
  ],
  guarantee: "10-year workmanship guarantee",
  responseCommitment: "Free on-site quote within 48 hours",

  phone: "011 234 5678",
  phoneE164: "+27112345678",
  whatsapp: "082 654 3210",
  whatsappE164: "+27826543210",
  whatsappMessage: "Hi Cederhof, I'd like a free roof assessment for my home.",
  email: "hello@cederhofroofing.co.za",

  address: {
    line1: "Bryanston",
    city: "Johannesburg",
    region: "Gauteng",
    postalCode: "2191",
    country: "ZA",
    lat: -26.0624,
    lng: 28.0192,
  },

  hours: [
    { day: "Monday", short: "Mon", open: "07:30", close: "17:00", closed: false },
    { day: "Tuesday", short: "Tue", open: "07:30", close: "17:00", closed: false },
    { day: "Wednesday", short: "Wed", open: "07:30", close: "17:00", closed: false },
    { day: "Thursday", short: "Thu", open: "07:30", close: "17:00", closed: false },
    { day: "Friday", short: "Fri", open: "07:30", close: "17:00", closed: false },
    { day: "Saturday", short: "Sat", open: "08:00", close: "13:00", closed: false },
    { day: "Sunday", short: "Sun", open: "", close: "", closed: true },
  ],

  socials: {} as Record<string, string>,

  priceRange: "RRR",

  siteUrl: "https://cederhof-roofing-demo.vercel.app",
} as const;

export function whatsappHref(customMessage?: string): string {
  const msg = customMessage ?? business.whatsappMessage;
  return `https://wa.me/${business.whatsappE164.replace("+", "")}?text=${encodeURIComponent(msg)}`;
}

export function telHref(): string {
  return `tel:${business.phoneE164}`;
}
