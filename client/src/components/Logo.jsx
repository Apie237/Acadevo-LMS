import React from "react";
import { site } from "../data/site";

// Official TopestTech logo assets (public/images/brand/).
//   topesttech-logo.png  full logo incl. "TOPESTTECH ACADEMY" text – use on light backgrounds
//   topesttech-mark.png  the emblem only – paired with a live text wordmark below
const LOGO_FULL = "/images/brand/topesttech-logo.png";
const LOGO_MARK = "/images/brand/topesttech-mark.png";

// variant="full" renders the complete logo image exactly as supplied.
// Default renders the emblem + wordmark, which stays legible at navbar size and on navy.
const Logo = ({ tone = "dark", variant = "mark", className = "" }) => {
  if (variant === "full") {
    return <img src={LOGO_FULL} alt={`${site.name} Academy logo`} className={`h-auto w-40 ${className}`} />;
  }
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={LOGO_MARK} alt="" aria-hidden="true" className="h-10 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-[0.06em] ${tone === "light" ? "text-white" : "text-navy"}`}>
          {site.wordmark}
        </span>
        <span
          className={`mt-1 text-[9px] font-bold tracking-[0.42em] ${tone === "light" ? "text-brand-300" : "text-brand"}`}
        >
          ACADEMY
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
};

export default Logo;
