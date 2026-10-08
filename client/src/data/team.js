// ---------------------------------------------------------------------------
// TopestTech team.
//
// Only add real, confirmed team members. To add someone, copy the object
// below and fill it in. Put photos in client/public/images/team/ and reference
// them as "/images/team/<file>". photo: null shows an initials avatar
// (or an AI avatar when isAI: true).
//
// socials: [{ label: "LinkedIn" | "GitHub" | "X" | "Facebook" | "Instagram" | "Email" | "Website", href: "..." }]
// ---------------------------------------------------------------------------

export const team = [
  {
    id: "edison-na",
    name: "Edison N.A",
    credentials: "PhD",
    role: "Founder & AI Tutor",
    photo: "/images/team/edison-na.jpg",
    shortBio: "Founder of TopestTech and AI tutor in TopestTech Academy. Holds a PhD.",
    bio:
      "Edison N.A (PhD) is the founder of TopestTech. He leads the company and teaches in TopestTech Academy as its AI tutor, helping learners build practical technology skills.", // TODO: review / expand
    expertise: ["Leadership", "Artificial intelligence", "Technology education"], // TODO: confirm
    socials: [],
  },
  {
    id: "anomah-bruno",
    name: "Anomah Bruno",
    credentials: "MSc Software Engineering",
    role: "Software Engineering Tutor",
    photo: null, // add "/images/team/anomah-bruno.jpg" when available
    shortBio: "Software engineering tutor in TopestTech Academy. Holds an MSc in Software Engineering.",
    bio:
      "Anomah Bruno (MSc Software Engineering) is a software engineering tutor in TopestTech Academy, guiding students through the principles and practice of building software.", // TODO: review / expand
    expertise: ["Software engineering", "Software development", "Technology education"], // TODO: confirm
    socials: [],
  },
  {
    id: "chefor-sylvan",
    name: "Chefor Sylvan",
    role: "Tech Tutor",
    photo: "/images/team/chefor-sylvan.jpg",
    shortBio: "Tech tutor in TopestTech Academy.",
    bio:
      "Chefor Sylvan is a tech tutor in TopestTech Academy, helping students learn through practical, hands-on sessions.", // TODO: review / expand
    expertise: ["Web development", "Software development", "Technology education"], // TODO: confirm
    socials: [],
  },
];

// Partner tutors – shown in their own section on the Team page.
// Same fields as above. The section is hidden while this list is empty.
export const partnerTutors = [];
