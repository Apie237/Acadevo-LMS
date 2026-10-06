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
    id: "chefor-sylvanus",
    name: "Chefor Sylvanus",
    role: "Founder & Lead Instructor",
    photo: null, // e.g. "/images/team/chefor-sylvanus.jpg"
    shortBio:
      "Leads TopestTech's software work and teaches in the Academy.",
    bio:
      "Chefor is the founder of TopestTech. He works across the company's software projects and teaches in TopestTech Academy, with a focus on practical, project-based learning.", // TODO: review / expand
    expertise: [
      "Software development",
      "Web development",
      "Technology education",
      "Project mentorship",
    ],
    socials: [],
  },
  {
    id: "edison-an",
    name: "Edison A.N",
    role: "AI Tutor",
    isAI: true, // shows an AI avatar instead of a photo
    photo: null,
    shortBio: "TopestTech Academy's AI tutor, supporting students as they learn.",
    bio:
      "Edison A.N is the AI tutor of TopestTech Academy. Edison supports students alongside our instructors — helping them work through questions, explaining concepts in different ways and guiding them as they practise.", // TODO: review / expand
    expertise: ["Answering student questions", "Explaining concepts", "Practice support"],
    socials: [],
  },
];
