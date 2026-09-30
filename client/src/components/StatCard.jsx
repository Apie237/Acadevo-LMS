import React from "react";
import { motion } from "framer-motion";

export const StatCard = ({ value, label, index = 0, tone = "light", className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className={`px-4 py-6 text-center sm:py-8 ${tone === "dark" ? "" : "bg-white"} ${className}`}
  >
    <p
      className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
        tone === "dark" ? "text-white" : "text-navy"
      }`}
    >
      {value}
    </p>
    <p className={`mt-1.5 text-sm font-medium ${tone === "dark" ? "text-slate-300" : "text-muted"}`}>
      {label}
    </p>
  </motion.div>
);

// A row of stats inside a single card. Pass `stats` = [{ value, label }].
export const StatsStrip = ({ stats, className = "" }) => (
  <div className={`card overflow-hidden ${className}`}>
    {/* gap-px over a line-coloured background draws clean 1px dividers */}
    <div
      className={`grid grid-cols-2 gap-px bg-line ${
        stats.length === 5 ? "md:grid-cols-5" : "md:grid-cols-4"
      }`}
    >
      {stats.map((s, i) => (
        <StatCard
          key={s.label}
          {...s}
          index={i}
          className={stats.length % 2 === 1 && i === stats.length - 1 ? "col-span-2 md:col-span-1" : ""}
        />
      ))}
    </div>
  </div>
);

export default StatCard;
