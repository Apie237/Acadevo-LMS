import React from "react";
import Reveal from "./Reveal";

// One of the three major parts of a report (Preparation, Teaching, Embarking).
const ReportSection = ({ id, part, title, intro, tone = "light", children }) => {
  const dark = tone === "dark";
  const tinted = tone === "tint";
  return (
    <section
      id={id}
      className={`section scroll-mt-20 ${dark ? "bg-navy text-white" : tinted ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${
                dark ? "bg-white/10 text-brand-200" : "bg-brand-50 text-brand-700"
              }`}
            >
              {part}
            </span>
            <h2 className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
              {title}
            </h2>
          </div>
          {intro && (
            <p className={`self-end text-base leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-muted"}`}>
              {intro}
            </p>
          )}
        </Reveal>
        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
};

export default ReportSection;
