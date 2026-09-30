import React from "react";
import { motion } from "framer-motion";

// Navy header band used at the top of inner pages.
const PageHeader = ({ eyebrow, title, highlight, description, children }) => (
  <section className="relative overflow-hidden bg-navy text-white">
    <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
    <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand/25 blur-[120px]" />
    <div className="container-page relative py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="text-brand-400">{highlight}</span>}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
