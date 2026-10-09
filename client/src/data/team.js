// ---------------------------------------------------------------------------
// TopestTech team.
//
// Only add real, confirmed team members. To add someone, copy the object
// below and fill it in. Put photos in client/public/images/team/ and reference
// them as "/images/team/<file>". photo: null shows a generated avatar.
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
    shortBio: "Founder of TopestTech and AI Tutor in TopestTech Academy. Holds a PhD.",
    bio:
      "Edison N.A (PhD) is the founder of TopestTech. He leads the company and teaches in TopestTech Academy as its AI Tutor, helping learners build practical technology skills.", // TODO: review / expand
    expertise: ["Leadership", "Artificial intelligence", "Technology education"], // TODO: confirm
    socials: [],
  },
  {
    id: "anomah-bruno",
    name: "Anomah Bruno",
    credentials: "MSc Software Engineering",
    role: "Software Engineering Tutor",
    photo: null, // add "/images/team/anomah-bruno.jpg" when available
    shortBio: "Software Engineering Tutor in TopestTech Academy. Holds an MSc in Software Engineering.",
    bio:
      "Anomah Bruno (MSc Software Engineering) is a Software Engineering Tutor in TopestTech Academy, guiding students through the principles and practice of building software.", // TODO: review / expand
    expertise: ["Software engineering", "Software development", "Technology education"], // TODO: confirm
    socials: [],
  },
  {
    id: "chefor-sylvan",
    name: "Chefor Sylvan",
    credentials: "ALX Expert",
    role: "Tech Tutor",
    photo: "/images/team/chefor-sylvan.jpg",
    shortBio: "Tech Tutor in TopestTech Academy and ALX Expert.",
    bio:
      "Chefor Sylvan is an ALX Expert and a Tech Tutor in TopestTech Academy, helping students learn through practical, hands-on sessions.", // TODO: review / expand
    expertise: ["Web development", "Software development", "Technology education"], // TODO: confirm
    socials: [],
  },
  {
    id: "harrison-mbiseh",
    name: "Harrison Mbiseh",
    credentials: "EduVest Founder · Treasurit Founder · Award-winning Expert",
    role: "Tech Coach",
    photo: "/images/team/harrison-mbiseh.jpg",
    shortBio: "Tech Coach in TopestTech Academy, founder of EduVest and Treasurit, and an award-winning expert.",
    bio:
      "Harrison Mbiseh is the founder of EduVest and Treasurit and an award-winning expert. As a Tech Coach in TopestTech Academy, he supports and guides students as they build their technology skills.", // TODO: review / expand
    expertise: ["Coaching", "Technology education", "Student support"], // TODO: confirm
    socials: [],
  },
];

// Partner Tutors – shown in their own section on the Team page.
// Same fields as above. The section is hidden while this list is empty.
export const partnerTutors = [];
