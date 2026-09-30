import React from "react";
import { Quote, MessageSquareDashed } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import { getInitials } from "../utils/text";

const TestimonialCard = ({ name, role, message, photo }) => (
  <figure className="card flex h-full flex-col p-7">
    <Quote size={28} className="text-brand-200" />
    <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">“{message}”</blockquote>
    <figcaption className="mt-6 flex items-center gap-3">
      <div className="h-11 w-11 overflow-hidden rounded-full">
        <ImagePlaceholder src={photo} alt={name} initials={getInitials(name)} className="[&_span]:text-sm" />
      </div>
      <div>
        <p className="text-sm font-bold text-ink">{name}</p>
        {role && <p className="text-xs text-muted">{role}</p>}
      </div>
    </figcaption>
  </figure>
);

// Shown while no real testimonials have been added.
export const TestimonialEmpty = () => (
  <div className="flex flex-col items-center rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 px-6 py-14 text-center">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand shadow-soft">
      <MessageSquareDashed size={22} />
    </div>
    <p className="mt-4 font-semibold text-ink">Student feedback will appear here.</p>
    <p className="mt-1 max-w-md text-sm text-muted">
      We're collecting feedback from participants of our first learning session and will share it here with their permission.
    </p>
  </div>
);

export default TestimonialCard;
