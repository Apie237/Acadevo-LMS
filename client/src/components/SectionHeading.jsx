import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
  children,
}) => {
  const centered = align === "center";
  const light = tone === "light";
  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-brand-300" : ""}`}>
          <span className={`h-px w-6 ${light ? "bg-brand-300" : "bg-brand"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-slate-300" : "text-muted"}`}>
          {description}
        </p>
      )}
      {children}
    </Reveal>
  );
};

export default SectionHeading;
