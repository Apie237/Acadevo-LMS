// ---------------------------------------------------------------------------
// TopestTech projects ("Works").
//
// IMPORTANT: Only Acadevo has a full case study (verified from this codebase).
// The other projects are listed with neutral descriptions.
// Fill in the fields marked TODO with real information – never invent them.
//
// Field reference
//   id           URL slug  -> /works/:id
//   name         Project name
//   categories   Any of the projectCategories below (used by the filter bar)
//   category     Primary label shown on the card
//   summary      One or two sentences for the card
//   image        Cover image URL, or a local path like "/images/projects/x.jpg"
//                (file in client/public/images/projects/). null = placeholder
//   screenshots  Array of image paths for the detail page
//   technologies Array of strings
//   overview / problem / solution  Paragraphs for the case study (optional)
//   features     Array of strings (optional)
//   liveUrl / githubUrl  Real links only. Leave "" if unknown.
//   featured     Show on the homepage
// ---------------------------------------------------------------------------

export const projectCategories = ["All", "Education", "E-Commerce", "Automotive", "Fintech"];

export const projects = [
  {
    id: "acadevo",
    name: "Acadevo",
    category: "Education",
    categories: ["Education"],
    summary:
      "An online learning platform with a public course catalogue, a student learning hub, an admin dashboard and secure course payments.",
    image: "https://image2url.com/r2/default/images/1770053296924-5e0541b4-b8fe-4233-8513-8afc0657f7c5.png",
    screenshots: ["https://image2url.com/r2/default/images/1770053296924-5e0541b4-b8fe-4233-8513-8afc0657f7c5.png"],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Stripe",
      "Cloudinary",
      "Docker",
    ],
    overview:
      "Acadevo is a learning management platform made up of four connected applications: a public website where learners discover courses, a student learning hub, an administration dashboard, and a REST API that powers them all.",
    problem:
      "Learners need one place to discover courses, pay for access and then actually follow their lessons, while administrators need a simple way to publish and manage that content.",
    solution:
      "We split the product into focused applications that share one API: a marketing and catalogue site, a dedicated learning hub for enrolled students, and an admin dashboard for course and lesson management. Payments and enrolment are handled through a checkout flow that unlocks courses automatically.",
    features: [
      "Public course catalogue with category filtering and search",
      "Account registration and JWT-based login",
      "Stripe checkout with automatic course enrolment",
      "Student learning hub with lessons and progress tracking",
      "Course discussion posts and notifications",
      "In-platform learning assistant",
      "Admin dashboard for managing courses and lessons",
      "Media uploads through Cloudinary",
    ],
    liveUrl: "", // TODO: acadevo.vercel.app currently hosts THIS client – add the real Acadevo URL if it stays live elsewhere
    githubUrl: "",
    featured: true,
  },
  {
    id: "flower-oasis",
    name: "Flower Oasis",
    category: "E-Commerce",
    categories: ["E-Commerce"],
    summary: "An e-commerce website for Flower Oasis.", // TODO: expand with real details
    image: "https://image2url.com/r2/default/images/1770053596120-ca8257d8-f731-4bbb-8ec7-b484f9d794b7.png",
    screenshots: ["https://image2url.com/r2/default/images/1770053596120-ca8257d8-f731-4bbb-8ec7-b484f9d794b7.png"],
    technologies: [], // TODO
    overview: "",
    problem: "",
    solution: "",
    features: [],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "mokex-car-rentals",
    name: "Mokex Car Rentals",
    category: "Automotive",
    categories: ["Automotive"],
    summary: "A car rental website for Mokex Car Rentals.", // TODO: expand with real details
    image: "https://image2url.com/r2/default/images/1769788558521-d936e42e-1b45-40fb-8268-6c0eb1f35052.png",
    screenshots: ["https://image2url.com/r2/default/images/1769788558521-d936e42e-1b45-40fb-8268-6c0eb1f35052.png"],
    technologies: [], // TODO
    overview: "",
    problem: "",
    solution: "",
    features: [],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "penwallet",
    name: "Penwallet",
    category: "Fintech",
    categories: ["Fintech"],
    summary: "A fintech project built by the TopestTech team.", // TODO: expand with real details
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop&q=80",
    screenshots: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop&q=80"],
    technologies: [], // TODO
    overview: "",
    problem: "",
    solution: "",
    features: [],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);

export const hasCaseStudy = (p) =>
  Boolean(p.overview || p.problem || p.solution || (p.features && p.features.length));
