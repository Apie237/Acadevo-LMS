import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Logo from "./Logo";
import { site } from "../data/site";

// Split layout for Login / Register: navy brand panel + form panel.
const AuthLayout = ({ title, subtitle, points = [], children, footer }) => (
  <section className="grid min-h-[calc(100vh-72px)] bg-white lg:grid-cols-[1fr_1.1fr]">
    <div className="relative hidden overflow-hidden bg-navy text-white lg:flex">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
      <div className="absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-brand/30 blur-[120px]" />
      <div className="relative flex w-full flex-col justify-between p-12 xl:p-16">
        <Link to="/" aria-label="TopestTech home">
          <Logo tone="light" size="md" />
        </Link>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">TopestTech Academy</p>
          <h2 className="mt-4 max-w-md text-4xl font-extrabold leading-tight tracking-tight">
            Learn. Build. <span className="text-brand-400">Grow.</span>
          </h2>
          {points.length > 0 && (
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-brand-400" /> {p}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="text-xs font-bold tracking-[0.14em] text-slate-500">{site.tagline}</p>
      </div>
    </div>

    <div className="flex items-center justify-center px-4 py-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Link to="/" aria-label="TopestTech home" className="mb-8 inline-block">
          <Logo size="lg" />
        </Link>
        <h1 className="text-3xl font-extrabold tracking-tight text-ink">{title}</h1>
        {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
        <div className="mt-8">{children}</div>
        {footer && <div className="mt-8 text-center text-sm text-muted">{footer}</div>}
      </motion.div>
    </div>
  </section>
);

export default AuthLayout;
