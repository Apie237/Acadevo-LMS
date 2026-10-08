import React, { useState } from "react";
import { getInitials } from "../utils/text";

// Brand-toned backgrounds; each member gets one based on their name so avatars differ.
const TONES = [
  ["#0C2552", "#146EF5"],
  ["#071A3D", "#3D8BF8"],
  ["#12336B", "#0F5AD0"],
  ["#0C47A6", "#6FA9FB"],
];

const toneFor = (name = "") => TONES[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % TONES.length];

// Illustrated avatar (head and shoulders + initials) for team members without a photo.
export const IllustratedAvatar = ({ name }) => {
  const [from, to] = toneFor(name);
  const id = `av-${(name || "x").replace(/[^a-z0-9]/gi, "")}`;
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={`${name} avatar`} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <linearGradient id={`${id}-fg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.92" />
          <stop offset="1" stopColor="#D6E7FF" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <circle cx="320" cy="70" r="120" fill="#FFFFFF" opacity="0.06" />
      {/* shoulders */}
      <path d="M70 400c0-86 58-140 130-140s130 54 130 140z" fill={`url(#${id}-fg)`} />
      {/* head */}
      <circle cx="200" cy="170" r="72" fill={`url(#${id}-fg)`} />
      {/* initials badge */}
      <rect x="150" y="318" width="100" height="44" rx="22" fill={from} opacity="0.9" />
      <text x="200" y="348" textAnchor="middle" fontFamily="Plus Jakarta Sans, system-ui, sans-serif" fontSize="22" fontWeight="800" fill="#FFFFFF" letterSpacing="1">
        {getInitials(name)}
      </text>
    </svg>
  );
};

// Shows the member's photo, or the illustrated avatar if there is none (or it fails to load).
const MemberAvatar = ({ member, className = "" }) => {
  const [failed, setFailed] = useState(false);
  if (member.photo && !failed) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return <IllustratedAvatar name={member.name} />;
};

export default MemberAvatar;
