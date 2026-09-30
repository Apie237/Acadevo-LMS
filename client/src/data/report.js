import {
  Target,
  FileText,
  Dumbbell,
  MonitorCog,
  UserPlus,
  Wrench,
  MessagesSquare,
  Presentation,
  Rocket,
  FolderGit2,
  Layers3,
  BookMarked,
  HeartHandshake,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// ---------------------------------------------------------------------------
// 1-Week Learning Session report content.
// Everything on /reports/one-week-session is driven from this file.
// ---------------------------------------------------------------------------

export const reportMeta = {
  id: "one-week-session",
  title: "1-Week Learning Session Report",
  subtitle:
    "A look at how we prepared, what we taught, what we achieved, and what we are embarking on next.",
  cardSummary:
    "How we prepared, what we taught during our first hands-on week of web development, and where ToppestTech Academy is heading next.",
  dateLabel: "", // e.g. "August 2026" – add the real dates of the session
  cover: null, // e.g. "/images/reports/cover.jpg"
};

// Session highlights – truthful numbers only.
export const sessionHighlights = [
  { value: "15+", label: "Students" },
  { value: "5", label: "Days" },
  { value: "1", label: "Learning Session" },
  { value: "Practical", label: "Learning" },
  { value: "Hands-on", label: "Projects" },
];

// PART 1 — Preparation
export const preparation = {
  intro:
    "Before the first class, we set out to make the week focused, practical and easy to follow — so that students would spend their time building, not waiting.",
  items: [
    { icon: Target, title: "Defined goals & structure", text: "Set clear goals for the week and organised the topics into a logical, step-by-step flow." },
    { icon: FileText, title: "Prepared learning materials", text: "Put together notes and examples to support each topic covered during the week." },
    { icon: Dumbbell, title: "Prepared practical exercises", text: "Designed exercises so every concept could be practised immediately after it was introduced." },
    { icon: MonitorCog, title: "Organised the learning platform", text: "Set up where materials, instructions and resources would be shared with students." },
    { icon: UserPlus, title: "Mobilised & registered students", text: "Reached out to interested learners and registered participants for the session." },
    { icon: Wrench, title: "Prepared development tools", text: "Made sure the tools needed to write and preview code were ready for use." },
    { icon: MessagesSquare, title: "Tested communication tools", text: "Checked our communication and learning channels ahead of the session." },
    { icon: Presentation, title: "Prepared the teaching environment", text: "Got the teaching space and setup ready so sessions could run smoothly." },
  ],
};

// PART 2 — Teaching
export const teaching = {
  intro:
    "The week introduced students to web development and moved quickly from ideas to practice. Rather than focusing only on theory, each topic was paired with hands-on exercises so students could see their code come to life.",
  topics: [
    "Introduction to web development",
    "HTML fundamentals",
    "CSS fundamentals",
    "Page structure and styling",
    "Landing page development",
    "Introduction to JavaScript",
    "JavaScript basics",
    "Interactive web elements",
    "Practical exercises",
    "Hands-on projects",
  ],
  // The learning journey through the week. `label` is shown on the timeline.
  // If you want to show exact days, set label to "Day 1", "Day 2", etc.
  // once the day-by-day schedule has been confirmed.
  timeline: [
    {
      label: "Stage 1",
      title: "Orientation & Introduction",
      text: "Getting to know the group, the goals of the week and how the web works.",
    },
    {
      label: "Stage 2",
      title: "HTML & CSS",
      text: "Structuring content with HTML and styling it with CSS.",
    },
    {
      label: "Stage 3",
      title: "Landing Pages",
      text: "Combining structure and styling to build a complete landing page.",
    },
    {
      label: "Stage 4",
      title: "JavaScript",
      text: "An introduction to JavaScript basics and adding interactivity to web pages.",
    },
    {
      label: "Stage 5",
      title: "Practice & Review",
      text: "Practical exercises, hands-on project work and a review of what was learned.",
    },
  ],
  approach: [
    { title: "Learn by doing", text: "Concepts were introduced and practised straight away." },
    { title: "Build real pages", text: "Students worked towards building actual web pages, not just reading about them." },
    { title: "Step by step", text: "Each topic built on the previous one, from structure to style to interactivity." },
  ],
};

// PART 3 — What we are embarking on (future direction, not achievements)
export const embarking = {
  intro:
    "Our first session was a starting point. Here is the direction ToppestTech Academy is working towards next.",
  items: [
    { icon: Layers3, title: "Structured learning", text: "Moving from short tutorials toward structured programs with clear learning paths." },
    { icon: FolderGit2, title: "More practical projects", text: "Giving learners more opportunities to build real, complete projects." },
    { icon: Rocket, title: "Deeper technical training", text: "Going further into topics such as JavaScript, frameworks and backend development." },
    { icon: BookMarked, title: "Better learning resources", text: "Improving our materials, exercises and learning platform." },
    { icon: HeartHandshake, title: "Mentorship & support", text: "Offering more guidance and support to students as they learn." },
    { icon: Users, title: "A stronger community", text: "Growing a community where learners help and motivate each other." },
    { icon: Briefcase, title: "Real-world readiness", text: "Preparing learners to take part in real-world technology projects." },
    { icon: GraduationCap, title: "Future programs", text: "Launching structured programs through ToppestTech Academy." },
  ],
};

// Session photos. Put image files in client/public/images/reports/ and add them here:
// { src: "/images/reports/session-01.jpg", caption: "Students working on their landing pages" }
// While src is null, a tidy placeholder tile is shown.
export const sessionPhotos = [
  { src: null, caption: "Session photo" },
  { src: null, caption: "Session photo" },
  { src: null, caption: "Session photo" },
  { src: null, caption: "Session photo" },
  { src: null, caption: "Session photo" },
  { src: null, caption: "Session photo" },
];

// List of all published reports (shown on /reports).
export const reports = [
  {
    ...reportMeta,
    path: "/reports/one-week-session",
    tag: "Academy",
  },
];
