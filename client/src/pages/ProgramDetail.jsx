import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, CalendarDays, MonitorSmartphone } from "lucide-react";
import { StatusBadge } from "../components/ProgramCard";
import ProgramCard from "../components/ProgramCard";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import usePageTitle from "../hooks/usePageTitle";
import { getProgram, programs } from "../data/programs";
import { site } from "../data/site";

const ProgramDetail = () => {
  const { id } = useParams();
  const program = getProgram(id);
  usePageTitle(program ? program.title : "Program not found");
  if (!program) return <NotFound />;

  const Icon = program.icon;
  const available = program.status === "available";
  const others = programs.filter((p) => p.id !== program.id).slice(0, 3);
  const facts = [
    { icon: Clock, label: "Duration", value: program.duration },
    { icon: MonitorSmartphone, label: "Format", value: program.format },
    { icon: CalendarDays, label: "Start date", value: program.startDate },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand/25 blur-[120px]" />
        <div className="container-page relative py-12 md:py-20">
          <Link to="/academy/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
            <ArrowLeft size={16} /> All programs
          </Link>
          <Reveal className="mt-8 max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                <Icon size={26} />
              </span>
              <StatusBadge status={program.status} />
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{program.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">{program.summary}</p>
            {program.note && <p className="mt-3 text-sm text-brand-200">{program.note}</p>}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">What you'll learn</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {program.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 rounded-xl border border-line p-4 text-sm">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-slate-700">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            {program.topics?.length > 0 && (
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">Planned topics</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {program.topics.map((t) => (
                    <span key={t} className="rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700">
                      {t}
                    </span>
                  ))}
                </div>
                {!available && (
                  <p className="mt-4 text-sm text-muted">
                    This outline is a preview and may be refined before the program opens.
                  </p>
                )}
              </Reveal>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <p className="font-bold text-ink">Program status</p>
                <StatusBadge status={program.status} />
              </div>
              <dl className="mt-6 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <f.icon size={18} className="mt-0.5 text-brand" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{f.label}</dt>
                      <dd className="text-sm font-medium text-ink">{f.value || "To be announced"}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-6 grid gap-3 border-t border-line pt-6">
                <Link to={site.joinAcademyPath} className="btn-primary w-full">
                  {available ? "Enrol Now" : "Register Interest"} <ArrowRight size={16} />
                </Link>
                <Link to="/contact?type=academy" className="btn-outline w-full">
                  Ask a question
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="Explore" title="Other programs" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <ProgramCard key={p.id} program={p} index={i} compact />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Be part of the next cohort"
        primary={{ label: "Join the Academy", to: site.joinAcademyPath }}
        secondary={{ label: "Back to the Academy", to: "/academy" }}
      />
    </>
  );
};

export default ProgramDetail;
