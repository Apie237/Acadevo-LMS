// ---------------------------------------------------------------------------
// Global site configuration for TopestTech.
// Edit the values here and every page (navbar, footer, contact page) updates.
// Leave a field as an empty string / empty array when the information is not
// available yet – the UI shows a tidy "coming soon" state instead of fake data.
// ---------------------------------------------------------------------------

export const site = {
  name: "TopestTech",
  wordmark: "TOPESTTECH",
  tagline: "Technology. Software. Skills for the Future.",
  description:
    "TopestTech builds digital solutions and provides practical technology education for aspiring developers and organizations.",

  // Where "Join the Academy" buttons point. The existing registration flow
  // creates a learner account on the learning platform.
  joinAcademyPath: "/register",

  // External student learning platform (learn-hub). Override with VITE_LEARNHUB_URL.
  learnHubUrl: import.meta.env.VITE_LEARNHUB_URL || "https://learnhubacadevo.vercel.app",

  contact: {
    email: "", // e.g. "hello@topesttech.com"
    whatsapp: "", // international format without "+" or spaces, e.g. "2376XXXXXXXX"
    whatsappDisplay: "", // e.g. "+237 6XX XXX XXX"
    location: "Cameroon",
  },

  // Add real profiles only, e.g. { label: "LinkedIn", href: "https://linkedin.com/company/..." }
  // Supported labels with icons: LinkedIn, GitHub, Facebook, Instagram, X, YouTube
  socials: [],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Works", to: "/works" },
  { label: "Academy", to: "/academy" },
  { label: "Reports", to: "/reports" },
  { label: "Team", to: "/team" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

// Homepage statistics strip – keep these truthful and update as TopestTech grows.
export const homeStats = [
  { value: "15+", label: "Students" },
  { value: "1", label: "Learning Session" },
  { value: "5+", label: "Projects" },
  { value: "1", label: "Growing Community" },
];

export const academyStats = [
  { value: "15+", label: "Students" },
  { value: "1+", label: "Learning Sessions" },
  { value: "Practical", label: "Hands-on Learning" },
  { value: "Real", label: "Projects" },
];

export const whatsappLink = (text = "") =>
  site.contact.whatsapp
    ? `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`
    : "";
