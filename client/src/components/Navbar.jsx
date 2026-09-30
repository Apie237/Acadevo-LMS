import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "../data/site";

// Pages where the primary CTA should be "Work With Us" instead of "Join the Academy".
const COMPANY_PATHS = ["/works", "/services", "/contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCompanyPage = COMPANY_PATHS.some((p) => pathname.startsWith(p));
  const cta = isCompanyPage
    ? { label: "Work With Us", to: "/contact" }
    : { label: "Join the Academy", to: site.joinAcademyPath };

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-[13.5px] font-semibold transition-colors ${
      isActive ? "text-brand" : "text-slate-600 hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-lg transition-shadow ${
        scrolled ? "border-line shadow-soft" : "border-transparent"
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between gap-6" aria-label="Main">
        <Link to="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === "/"} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-brand"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <Link to="/login" className="hidden text-[13.5px] font-semibold text-slate-600 hover:text-ink xl:inline">
            Log in
          </Link>
          <Link to={cta.to} className="btn-primary px-5 py-2.5">
            {cta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 72px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <div className="container-page flex min-h-full flex-col py-4">
              <ul className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-line py-4 text-base font-semibold ${
                          isActive ? "text-brand" : "text-ink"
                        }`
                      }
                    >
                      {l.label}
                      <ArrowRight size={16} className="text-slate-400" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3 pb-6">
                <Link to={site.joinAcademyPath} className="btn-primary">
                  Join the Academy
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/contact" className="btn-outline">
                    Work With Us
                  </Link>
                  <Link to="/login" className="btn-outline">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
