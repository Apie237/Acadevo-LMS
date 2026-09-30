import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const ServiceCard = ({ icon: Icon, title, description, points, cta, index = 0 }) => (
  <Reveal delay={index * 0.06} className="h-full">
    <div className="group card flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition group-hover:bg-brand group-hover:text-white">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="mt-6 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {points?.length > 0 && (
        <ul className="mt-5 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
              <Check size={16} className="mt-0.5 shrink-0 text-brand" />
              {p}
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <Link to={cta.to} className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand">
          {cta.label} <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  </Reveal>
);

export default ServiceCard;
