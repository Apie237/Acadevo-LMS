import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Code2 } from "lucide-react";
import { site } from "../data/site";

// Generic developer-workspace photo (no people). Replace with a local file in
// /public/images/ (e.g. "/images/hero.jpg") whenever you have your own.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";

const ease = [0.22, 1, 0.36, 1];

const CodeWindow = () => (
  <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-navy-900/85 p-4 shadow-2xl backdrop-blur-md">
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      <span className="ml-3 text-[11px] font-medium text-slate-500">topesttech.js</span>
    </div>
    <pre className="mt-3 overflow-hidden font-mono text-[12px] leading-6 text-slate-300">
      <code>
        <span className="text-brand-300">const</span> topesttech = {"{"}
        {"\n"}  build: [<span className="text-emerald-300">"websites"</span>, <span className="text-emerald-300">"apps"</span>],
        {"\n"}  teach: <span className="text-emerald-300">"practical skills"</span>,
        {"\n"}  grow: <span className="text-amber-300">true</span>,
        {"\n"}{"}"};
      </code>
    </pre>
  </div>
);

const Hero = () => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />
      <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[140px]" />
      <div className="absolute -right-20 bottom-[-20%] h-[420px] w-[420px] rounded-full bg-brand-400/20 blur-[140px]" />

      <div className="container-page relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-brand-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Technology Company &amp; Academy · Cameroon
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]"
          >
            Technology. Software.{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-200 bg-clip-text text-transparent">
              Skills for the Future.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            TopestTech is a technology company and academy focused on building digital solutions and providing
            practical technology skills for aspiring developers and professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link to="/works" className="btn-primary">
              Explore Our Works <ArrowRight size={16} />
            </Link>
            <Link to={site.joinAcademyPath} className="btn-ghost-dark">
              Join the Academy
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-brand-300 ring-1 ring-white/10">
                <Code2 size={17} />
              </span>
              <span className="text-slate-300">We build software</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-brand-300 ring-1 ring-white/10">
                <GraduationCap size={17} />
              </span>
              <span className="text-slate-300">We train developers</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-navy-600 to-navy-900 shadow-2xl sm:aspect-[4/3.2]">
            {!imgFailed && (
              <img
                src={HERO_IMAGE}
                alt="Laptop showing code on a developer's desk"
                onError={() => setImgFailed(true)}
                className="h-full w-full object-cover opacity-80"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
              <CodeWindow />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="absolute -right-2 top-6 hidden rounded-2xl bg-white p-4 text-ink shadow-lift sm:block lg:-right-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <GraduationCap size={20} />
              </span>
              <div>
                <p className="text-sm font-bold">First learning session</p>
                <p className="text-xs text-muted">Completed · 15+ students</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
