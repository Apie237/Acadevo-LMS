import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { PROGRAM_STATUS } from "../data/programs";

export const StatusBadge = ({ status }) => {
  const s = PROGRAM_STATUS[status] || PROGRAM_STATUS["coming-soon"];
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${s.className}`}>
      {s.label}
    </span>
  );
};

const ProgramCard = ({ program, index = 0, compact = false }) => {
  const Icon = program.icon;
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <Link
        to={`/academy/programs/${program.id}`}
        className="group card flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
            <Icon size={22} />
          </div>
          <StatusBadge status={program.status} />
        </div>
        <h3 className="mt-6 text-lg font-bold text-ink">{program.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{program.summary}</p>
        {!compact && (
          <ul className="mt-5 space-y-2">
            {program.outcomes.slice(0, 3).map((o) => (
              <li key={o} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" />
                {o}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand">
          View Details <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
        </span>
      </Link>
    </Reveal>
  );
};

export default ProgramCard;
