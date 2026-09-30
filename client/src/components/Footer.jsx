import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { site, whatsappLink } from "../data/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Works", to: "/works" },
      { label: "Services", to: "/services" },
      { label: "Team", to: "/team" },
    ],
  },
  {
    title: "Academy",
    links: [
      { label: "Academy", to: "/academy" },
      { label: "Programs", to: "/academy/programs" },
      { label: "Reports", to: "/reports" },
      { label: "Join the Academy", to: site.joinAcademyPath },
    ],
  },
];

const Footer = () => {
  const { email, whatsappDisplay, location } = site.contact;
  const wa = whatsappLink();

  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" aria-label={`${site.name} home`}>
              <Logo tone="light" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">{site.tagline}</p>
            {site.socials.length > 0 && (
              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Social Media</p>
                <SocialLinks links={site.socials} tone="dark" />
              </div>
            )}
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-slate-400 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/contact" className="text-slate-400 transition hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={15} className="shrink-0 text-brand-400" />
                {wa ? (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    {whatsappDisplay || "WhatsApp"}
                  </a>
                ) : (
                  <span className="text-slate-500">WhatsApp — coming soon</span>
                )}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-brand-400" />
                {email ? (
                  <a href={`mailto:${email}`} className="break-all text-slate-400 hover:text-white">
                    {email}
                  </a>
                ) : (
                  <span className="text-slate-500">Email — coming soon</span>
                )}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="shrink-0 text-brand-400" />
                <span className="text-slate-400">{location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Technology company &amp; academy · {location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
