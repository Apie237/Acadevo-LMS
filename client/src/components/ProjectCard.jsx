import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Cover image for a project; falls back to a branded "browser window" mockup
// showing the project name until a real screenshot is added.
export const ProjectCover = ({ project, className = "", large = false }) => {
  const [failed, setFailed] = useState(false);

  if (project.image && !failed) {
    return (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${project.name} preview`}
      className={`relative flex h-full w-full items-end justify-center overflow-hidden bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 px-6 pt-8 ${className}`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
      <div className="relative w-full max-w-[88%] rounded-t-xl border border-white/10 bg-white/[0.06] backdrop-blur">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
        </div>
        <div className={`px-5 ${large ? "py-14" : "py-8"}`}>
          <p className={`font-extrabold tracking-tight text-white ${large ? "text-3xl sm:text-4xl" : "text-xl"}`}>
            {project.name}
          </p>
          <div className="mt-3 space-y-2">
            <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <Link
    to={`/works/${project.id}`}
    className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <div className="h-full w-full transition duration-500 group-hover:scale-[1.03]">
        <ProjectCover project={project} />
      </div>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        {project.category}
      </span>
      <h3 className="mt-4 text-xl font-bold text-ink">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      {project.technologies?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="rounded-md border border-line px-2 py-0.5 text-[11px] font-medium text-slate-600">
              {t}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1 py-0.5 text-[11px] font-medium text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      )}
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        View Project
        <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </div>
  </Link>
);

export default ProjectCard;
