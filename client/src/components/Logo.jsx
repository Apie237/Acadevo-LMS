import React from "react";
import { site } from "../data/site";

// Official TopestTech emblem (public/images/brand/topesttech-mark.png) with the
// wordmark stacked underneath it. Used in every section (navbar, footer, auth pages).
const LOGO_MARK = "/images/brand/topesttech-mark.png";

const SIZES = {
  sm: { img: "h-9", text: "text-xs tracking-[0.14em]" }, // navbar
  md: { img: "h-11", text: "text-sm tracking-[0.14em]" }, // footer, auth panel
  lg: { img: "h-16", text: "text-base tracking-[0.16em]" }, // above forms
};

const Logo = ({ tone = "dark", size = "sm", className = "" }) => {
  const s = SIZES[size] || SIZES.sm;
  return (
    <span className={`inline-flex flex-col items-center gap-1 ${className}`}>
      <img src={LOGO_MARK} alt="" aria-hidden="true" className={`${s.img} w-auto`} />
      <span className={`font-extrabold leading-none ${s.text} ${tone === "light" ? "text-white" : "text-navy"}`}>
        {site.wordmark}
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
};

export default Logo;
