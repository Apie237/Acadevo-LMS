import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Camera } from "lucide-react";
import ReportSection from "../components/ReportSection";
import ReportTimeline from "../components/ReportTimeline";
import { StatsStrip } from "../components/StatCard";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import TestimonialCard, { TestimonialEmpty } from "../components/TestimonialCard";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import {
  reportMeta,
  sessionHighlights,
  preparation,
  teaching,
  embarking,
  sessionPhotos,
} from "../data/report";
import { testimonials } from "../data/testimonials";
import { site } from "../data/site";

const parts = [
  { id: "preparation", n: "01", label: "Preparation" },
  { id: "teaching", n: "02", label: "Teaching" },
  { id: "embarking", n: "03", label: "What We Are Embarking On" },
];

// Tile sizes for a 6-photo mosaic: fills a 2-col (mobile) and 4-col (desktop) grid with no gaps.
const GALLERY_SPANS = [
  "col-span-2 md:row-span-2",
  "",
  "",
  "md:col-span-2",
  "md:col-span-2",
  "col-span-2",
];

const IconGrid =({ items, tone = "light" }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item, i) => (
      <Reveal key={item.title} delay={(i % 4) * 0.06} className="h-full">
        <div
          className={`h-full rounded-2xl p-6 ${
            tone === "dark" ? "border border-white/10 bg-white/[0.04]" : "card"
          }`}
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${
              tone === "dark" ? "bg-brand text-white" : "bg-brand-50 text-brand"
            }`}
          >
            <item.icon size={20} />
          </span>
          <h3 className={`mt-5 font-bold ${tone === "dark" ? "text-white" : "text-ink"}`}>{item.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${tone === "dark" ? "text-slate-300" : "text-muted"}`}>
            {item.text}
          </p>
        </div>
      </Reveal>
    ))}
  </div>
);

const SessionReport = () => {
  usePageTitle(reportMeta.title);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="container-page relative pb-24 pt-10 md:pb-28 md:pt-14">
          <Link to="/reports" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
            <ArrowLeft size={16} /> All reports
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-10 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-brand-200">
              TopestTech Academy · Report{reportMeta.dateLabel ? ` · ${reportMeta.dateLabel}` : ""}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              2-Week Learning <span className="text-brand-400">Session Report</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {reportMeta.subtitle}
            </p>
          </motion.div>

          {/* Part navigation */}
          <nav aria-label="Report sections" className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {parts.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-brand hover:bg-white/10"
              >
                <span className="text-sm font-extrabold text-brand-300">{p.n}</span>
                <span className="text-sm font-semibold text-white">{p.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10 -mt-12">
        <div className="container-page">
          <StatsStrip stats={sessionHighlights} className="shadow-lift" />
        </div>
      </section>

      {/* PART 1 */}
      <ReportSection id="preparation" part="Part 1" title="Preparation" intro={preparation.intro}>
        <IconGrid items={preparation.items} />
      </ReportSection>

      {/* PART 2 */}
      <ReportSection id="teaching" part="Part 2" title="Teaching" intro={teaching.intro} tone="tint">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="card p-7">
            <h3 className="font-bold text-ink">Topics covered</h3>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {teaching.topics.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {teaching.approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl bg-navy p-6 text-white">
                  <span className="text-2xl font-extrabold text-brand-400">0{i + 1}</span>
                  <div>
                    <h4 className="font-bold">{a.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal className="mb-8 max-w-2xl">
            <h3 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">The learning journey</h3>
            <p className="mt-2 text-sm text-muted">
              How the two weeks progressed, from first introductions to hands-on practice.
            </p>
          </Reveal>
          <ReportTimeline steps={teaching.timeline} />
        </div>
      </ReportSection>

      {/* Photos */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments From the Session"
            description="A few snapshots from our first two-week learning session."
          />
          <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
            {sessionPhotos.map((photo, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 0.05}
                className={`overflow-hidden rounded-2xl ${GALLERY_SPANS[i % GALLERY_SPANS.length]}`}
              >
                {photo.src ? (
                  <figure className="group relative h-full">
                    <ImagePlaceholder src={photo.src} alt={photo.caption} className="transition duration-500 group-hover:scale-105" />
                    {photo.caption && (
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-4 text-sm font-medium text-white">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 border border-dashed border-brand-200 bg-gradient-to-br from-brand-50 to-white text-center">
                    <Camera size={i === 0 ? 30 : 22} strokeWidth={1.5} className="text-brand-300" />
                    <span className="text-xs font-semibold text-brand-600">Photo coming soon</span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="Student Feedback" title="What participants said" />
          <div className="mt-12">
            {testimonials.length ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                  <Reveal key={t.id} delay={i * 0.06} className="h-full">
                    <TestimonialCard {...t} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <TestimonialEmpty />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* PART 3 */}
      <ReportSection id="embarking" part="Part 3" title="What We Are Embarking On" intro={embarking.intro} tone="dark">
        <IconGrid items={embarking.items} tone="dark" />
        <Reveal className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-brand to-brand-700 p-8 text-center sm:p-12">
          <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Be Part of the Next Cohort</h3>
          <p className="mx-auto mt-3 max-w-xl text-brand-50/90">
            Join TopestTech Academy and be among the first to hear when our next sessions and programs open.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to={site.joinAcademyPath} className="btn bg-white text-navy shadow-lift hover:-translate-y-0.5 hover:bg-brand-50">
              Join the Academy <ArrowRight size={16} />
            </Link>
            <Link to="/academy/programs" className="btn border border-white/30 text-white hover:bg-white/10">
              View Programs
            </Link>
          </div>
        </Reveal>
      </ReportSection>
    </>
  );
};

export default SessionReport;
