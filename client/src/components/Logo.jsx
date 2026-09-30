import React from "react";
import { site } from "../data/site";

// ToppestTech mark + wordmark. `tone` controls the wordmark colour.
const Logo = ({ tone = "dark", className = "" }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="tt-logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3D8BF8" />
          <stop offset="1" stopColor="#0F5AD0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#tt-logo-g)" />
      <path d="M16 20h32v8H36v22h-8V28H16z" fill="#fff" />
      <path
        d="M40 38l6-6 6 6"
        fill="none"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".85"
      />
    </svg>
    <span
      className={`text-lg font-extrabold tracking-[0.08em] ${
        tone === "light" ? "text-white" : "text-navy"
      }`}
    >
      {site.wordmark}
    </span>
    <span className="sr-only">{site.name}</span>
  </span>
);

export default Logo;
