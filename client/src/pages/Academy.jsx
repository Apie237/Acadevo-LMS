import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Hammer,
  FolderKanban,
  HeartHandshake,
  Users,
  FileText,
  LogIn,
  BookOpen,
  MonitorPlay,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { StatsStrip } from "../components/StatCard";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProgramCard from "../components/ProgramCard";
import TestimonialCard, { TestimonialEmpty } from "../components/TestimonialCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import { academyStats, site } from "../data/site";
import { programs } from "../data/programs";
import { testimonials } from "../data/testimonials";
import { reportMeta } from "../data/report";

const approach = [
  { icon: Hammer, title: "Hands-on Learning", description: "Every concept is practised straight away. You learn by writing code, not only by listening." },
  { icon: FolderKanban, title: "Real Projects", description: "You work towards building real pages and applications you can show and improve." },
  { icon: HeartHandshake, title: "Mentorship", description: "Guidance from people who build software, so you can ask questions and get unstuck." },
  { icon: Users, title: "Community", description: "Learn alongside other aspiring developers who share your goals." },
];

const Academy = () => {
  usePageTitle("Academy");
  return (
    <>
      <PageHeader
        eyebrow="TopestTech Academy"
        title="Learn. Build."
        highlight="Grow."
        description="TopestTech Academy helps aspiring developers build practical technology skills through hands-on learning, projects, mentorship, and community."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={site.joinAcademyPath} className="btn-primary">
            Join the Academy <ArrowRight size={16} />
          </Link>
          <Link to="/academy/programs" className="btn-ghost-dark">
            View Programs
          </Link>
        </div>
      </PageHeader>

      <section className="relative z-10 -mt-10">
        <div className="container-page">
          <StatsStrip stats={academyStats} className="shadow-lift" />
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How We Teach"
            title="Practical skills, built by doing"
            description="Our learning is designed around one idea: the best way to learn technology is to use it."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <ServiceCard key={a.title} {...a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* First session */}
      <section className="section bg-slate-50">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Where We Are"
              title="Our first learning session is complete"
              description="32 students joined our first one-week, hands-on session, covering the foundations of web development — HTML, CSS, landing pages and an introduction to JavaScript."
            />
            <Reveal delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted">
                We are now preparing deeper and more structured training programs. Read the full report to see how we
                prepared, what we taught and where we're heading next.
              </p>
              <Link to="/reports/one-week-session" className="btn-primary mt-8">
                <FileText size={16} /> Read the Session Report
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-4xl bg-navy p-8 text-white sm:p-10">
              <div className="bg-grid-dark absolute inset-0" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">Report</p>
                <h3 className="mt-3 text-2xl font-extrabold">{reportMeta.title}</h3>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {[
                    ["32", "Students"],
                    ["5", "Days"],
                    ["1", "Session"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <p className="text-2xl font-extrabold sm:text-3xl">{v}</p>
                      <p className="text-xs text-slate-400 sm:text-sm">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Programs"
              title="Programs we're building"
              description="Our program catalogue is growing. Each program will open once it is ready to deliver properly."
            />
            <Reveal>
              <Link to="/academy/programs" className="btn-outline">
                All Programs <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map((p, i) => (
              <ProgramCard key={p.id} program={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="Student Feedback" title="What students say" />
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

      {/* Learning platform (existing LMS) */}
      <section className="section">
        <div className="container-page">
          <Reveal className="card grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow">
                <MonitorPlay size={14} /> Learning Platform
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Already a student?
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Log in to your account to access your courses and continue learning on the TopestTech learning
                platform.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link to="/login" className="btn-primary">
                <LogIn size={16} /> Log in
              </Link>
              <Link to="/courses" className="btn-outline">
                <BookOpen size={16} /> Browse Courses
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Be part of the next cohort"
        description="Register your interest and we'll keep you updated as new sessions and programs open."
        primary={{ label: "Join the Academy", to: site.joinAcademyPath }}
        secondary={{ label: "Ask a Question", to: "/contact?type=academy" }}
      />
    </>
  );
};

export default Academy;
