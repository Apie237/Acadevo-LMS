import { Layers, LayoutTemplate, Server, Code2, PenTool, ShieldCheck } from "lucide-react";

// ---------------------------------------------------------------------------
// TopestTech Academy programs.
//
// status: "available"   -> currently running / open for enrolment
//         "coming-soon" -> planned, not yet running
//
// All programs are "coming-soon" until they actually open. Flip the status to
// "available" (and fill in duration/format/startDate) when a program launches.
// ---------------------------------------------------------------------------

export const PROGRAM_STATUS = {
  available: { label: "Available", className: "bg-emerald-50 text-emerald-700 ring-emerald-600/20" },
  "coming-soon": { label: "Coming Soon", className: "bg-brand-50 text-brand-700 ring-brand-600/20" },
};

export const programs = [
  {
    id: "full-stack-web-development",
    title: "Full-Stack Web Development",
    icon: Layers,
    status: "coming-soon",
    summary:
      "Build complete web applications, from the user interface to the server and database behind it.",
    outcomes: [
      "Build responsive user interfaces",
      "Create APIs and connect to a database",
      "Handle user accounts and authentication",
      "Deploy a full-stack project",
    ],
    topics: ["HTML, CSS & JavaScript", "React", "Node.js & Express", "Databases", "Deployment"],
    duration: "",
    format: "",
    startDate: "",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    icon: LayoutTemplate,
    status: "coming-soon",
    note: "Builds on the HTML, CSS and JavaScript foundations from our first learning session.",
    summary:
      "Go deeper into building modern, responsive and interactive websites and web interfaces.",
    outcomes: [
      "Write semantic HTML and modern CSS",
      "Build responsive, mobile-first layouts",
      "Add interactivity with JavaScript",
      "Build component-based interfaces with React",
    ],
    topics: ["Semantic HTML", "Modern CSS & layouts", "JavaScript", "React basics", "Git & GitHub"],
    duration: "",
    format: "",
    startDate: "",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    icon: Server,
    status: "coming-soon",
    summary:
      "Learn how servers, APIs and databases work, and build the logic that powers web applications.",
    outcomes: [
      "Design and build REST APIs",
      "Model and query data",
      "Secure applications with authentication",
      "Structure maintainable server code",
    ],
    topics: ["Node.js", "Express", "Databases", "Authentication", "API design"],
    duration: "",
    format: "",
    startDate: "",
  },
  {
    id: "python-django",
    title: "Python & Django",
    icon: Code2,
    status: "coming-soon",
    summary:
      "Learn Python programming and use the Django framework to build robust web applications.",
    outcomes: [
      "Write clean Python code",
      "Build web apps with Django",
      "Work with models, views and templates",
      "Use Django's admin and authentication",
    ],
    topics: ["Python fundamentals", "Django project structure", "Models & ORM", "Views & templates"],
    duration: "",
    format: "",
    startDate: "",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: PenTool,
    status: "coming-soon",
    summary:
      "Learn to design clear, attractive and user-friendly digital products.",
    outcomes: [
      "Understand user needs and flows",
      "Create wireframes and prototypes",
      "Apply layout, typography and colour principles",
      "Hand designs off to developers",
    ],
    topics: ["Design principles", "Wireframing", "Prototyping", "Design systems"],
    duration: "",
    format: "",
    startDate: "",
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    icon: ShieldCheck,
    status: "coming-soon",
    summary:
      "Understand the core ideas of keeping systems, data and people safe online.",
    outcomes: [
      "Recognise common security threats",
      "Apply good security habits",
      "Understand secure web practices",
      "Know the basics of networks and access control",
    ],
    topics: ["Security basics", "Common threats", "Web security", "Networking fundamentals"],
    duration: "",
    format: "",
    startDate: "",
  },
];

export const getProgram = (id) => programs.find((p) => p.id === id);
