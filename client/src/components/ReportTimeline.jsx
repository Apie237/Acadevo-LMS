import React from "react";
import { motion } from "framer-motion";

// Vertical timeline on mobile, horizontal on large screens.
const ReportTimeline = ({ steps }) => (
  <ol className="relative grid gap-0 lg:grid-cols-5 lg:gap-6">
    {/* connecting line (desktop) */}
    <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand-200 via-brand to-brand-200 lg:block" />
    {steps.map((step, i) => (
      <motion.li
        key={step.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: i * 0.1 }}
        className="relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0"
      >
        {/* connecting line (mobile) */}
        {i < steps.length - 1 && (
          <div className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-brand-200 lg:hidden" />
        )}
        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand text-sm font-bold text-white shadow-glow">
          {i + 1}
        </div>
        <div className="card flex-1 p-5 lg:mt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-brand">{step.label}</p>
          <h4 className="mt-1.5 font-bold text-ink">{step.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
        </div>
      </motion.li>
    ))}
  </ol>
);

export default ReportTimeline;
