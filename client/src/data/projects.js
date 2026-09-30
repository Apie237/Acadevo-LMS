// ---------------------------------------------------------------------------
// ToppestTech projects ("Works").
//
// IMPORTANT: Only Acadevo Africa has details that could be verified from this
// codebase. The other projects are listed by name with neutral descriptions.
// Fill in the fields marked TODO with real information – never invent them.
//
// Field reference
//   id           URL slug  -> /works/:id
//   name         Project name
//   categories   Any of: "Web Applications", "Websites", "Education",
//                "Business", "Management Systems" (used by the filter bar)
//   category     Primary label shown on the card
//   summary      One or two sentences for the card
//   image        Cover image path, e.g. "/images/projects/eduvest.jpg"
//                (put the file in client/public/images/projects/). null = placeholder
//   screenshots  Array of image paths for the detail page
//   technologies Array of strings
//   overview / problem / solution  Paragraphs for the case study (optional)
//   features     Array of strings (optional)
//   liveUrl / githubUrl  Real links only. Leave "" if unknown.
//   featured     Show on the homepage
// ---------------------------------------------------------------------------

export const projectCategories = [
  "All",
  "Web Applications",
  "Websites",
  "Education",
  "Business",
  "Management Systems",
];

export const projects = [
  {
    id: "eduvest",
    name: "EduVest",
    category: "Education",
    categories: ["Education", "Web Applications"], // TODO: confirm categories
    summary: "A digital platform project built by the ToppestTech team.", // TODO: real summary
    image: null,
    screenshots: [],
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
    id: "acadevo",
    name: "Acadevo Africa",
    category: "Education",
    categories: ["Education", "Web Applications", "Management Systems"],
    summary:
      "An online learning platform with a public course catalogue, a student learning hub, an admin dashboard and secure course payments.",
    image: null,
    screenshots: [],
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
      "Acadevo Africa is a learning management platform made up of four connected applications: a public website where learners discover courses, a student learning hub, an administration dashboard, and a REST API that powers them all.",
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
    id: "wwm",
    name: "World Wide Missions",
    category: "Websites",
    categories: ["Websites"], // TODO: confirm categories
    summary: "A website project for World Wide Missions.", // TODO: real summary
    image: null,
    screenshots: [],
    technologies: [],
    overview: "",
    problem: "",
    solution: "",
    features: [],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "treasurit",
    name: "Treasurit",
    category: "Web Applications",
    categories: ["Web Applications", "Business"], // TODO: confirm categories
    summary: "A digital product built by the ToppestTech team.", // TODO: real summary
    image: null,
    screenshots: [],
    technologies: [],
    overview: "",
    problem: "",
    solution: "",
    features: [],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "mirage-rent-car",
    name: "Mirage Rent Car",
    category: "Business",
    categories: ["Websites", "Business"], // TODO: confirm categories
    summary: "A website project for Mirage Rent Car, a car rental business.", // TODO: real summary
    image: null,
    screenshots: [],
    technologies: [],
    overview: "",
    problem: "",
    solution: "",
    features: [],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "flower-station-dubai",
    name: "Flower Station Dubai",
    category: "Business",
    categories: ["Websites", "Business"], // TODO: confirm categories
    summary: "A website project for Flower Station Dubai.", // TODO: real summary
    image: null,
    screenshots: [],
    technologies: [],
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
