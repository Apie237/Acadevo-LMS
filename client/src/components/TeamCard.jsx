import React from "react";
import { ArrowUpRight, Bot } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import { getInitials } from "../utils/text";

const TeamCard = ({ member, onOpen }) => (
  <button
    type="button"
    onClick={() => onOpen(member)}
    className="group card flex h-full w-full flex-col overflow-hidden text-left transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    aria-label={`View profile of ${member.name}`}
  >
    <div className="aspect-[4/4] overflow-hidden">
      <div className="h-full w-full transition duration-500 group-hover:scale-[1.03]">
        <ImagePlaceholder
          src={member.photo}
          alt={member.name}
          initials={getInitials(member.name)}
          icon={member.isAI ? Bot : undefined}
          variant="navy"
        />
      </div>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-ink">{member.name}</h3>
        {member.isAI && (
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-700">
            AI
          </span>
        )}
      </div>
      <p className="mt-0.5 text-sm font-semibold text-brand">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{member.shortBio}</p>
      {member.expertise?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.expertise.slice(0, 3).map((e) => (
            <span key={e} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
              {e}
            </span>
          ))}
        </div>
      )}
      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand">
        View profile <ArrowUpRight size={15} />
      </span>
    </div>
  </button>
);

export default TeamCard;
