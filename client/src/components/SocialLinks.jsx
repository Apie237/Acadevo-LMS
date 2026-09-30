import React from "react";
import { Linkedin, Github, Facebook, Instagram, Twitter, Youtube, Mail, Globe, MessageCircle } from "lucide-react";

const ICONS = {
  linkedin: Linkedin,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  x: Twitter,
  twitter: Twitter,
  youtube: Youtube,
  email: Mail,
  website: Globe,
  whatsapp: MessageCircle,
};

// Renders a row of icon links from [{ label, href }]. Renders nothing if empty.
const SocialLinks = ({ links = [], tone = "light", size = 18 }) => {
  if (!links.length) return null;
  const cls =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-slate-300 hover:border-brand hover:bg-brand hover:text-white"
      : "border-line bg-white text-slate-600 hover:border-brand hover:text-brand";
  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ label, href }) => {
        const Icon = ICONS[label.toLowerCase()] || Globe;
        return (
          <a
            key={label + href}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${cls}`}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
