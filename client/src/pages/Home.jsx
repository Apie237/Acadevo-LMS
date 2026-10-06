import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, GraduationCap, Sparkles, Users, FileText, CheckCircle2 } from "lucide-react";
import Hero from "../components/Hero";
import { StatsStrip } from "../components/StatCard";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProgramCard from "../components/ProgramCard";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import { homeStats, site } from "../data/site";
import { projects } from "../data/projects";
import { programs } from "../data/programs";
import { reportMeta } from "../data/report";

const whatWeDo = [
  {
    icon: Code2,
    title: "Build Software",
    description: "Modern websites and web applications for businesses, organizations, and institutions.",
  },
  {
    icon: GraduationCap,
    title: "Train Developers",
    description: "Practical technology training focused on building real skills through projects.",
  },
  {
    icon: Sparkles,
    title: "Create Opportunities",
    description: "Helping aspiring developers turn technical skills into real-world opportunities.",
  },
  {
    icon: Users,
    title: "Grow a Tech Community",
    description: "Building a community of learners, developers, and technology enthusiasts.",
  },
];

const Home = () => {
  usePageTitle(null);
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />

      {/* Stats strip overlapping the hero */}
      <section className="relative z-10 -mt-10 sm:-mt-12">
        <div className="container-page">
          <StatsStrip stats={homeStats} className="shadow-lift" />
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Focus"
            title="What We Do"
            description="We combine software development, practical technology education, and digital innovation to create real opportunities."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item, i) => (
              <ServiceCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured works */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Our Works"
              title="What We've Built"
              description="A selection of websites, applications and digital platforms built by the TopestTech team."
            />
            <Reveal>
              <Link to="/works" className="btn-outline">
                View All Projects <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academy */}
      <section className="section relative overflow-hidden bg-navy text-white">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]" />
        <div className="absolute right-[-10%] top-1/3 h-[400px] w-[400px] rounded-full bg-brand/20 blur-[120px]" />
        <div className="container-page relative grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              tone="light"
              eyebrow="TopestTech Academy"
              title="Learn. Build. Grow."
              description="Practical technology education for aspiring developers. We are starting small and building carefully — our first one-week, hands-on learning session is complete, and more structured programs are on the way."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-3">
                {["Hands-on, project-based learning", "Real web development skills", "A growing community of learners"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 size={18} className="text-brand-400" /> {t}
                    </li>
                  )
                )}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/academy" className="btn-primary">
                  Explore the Academy <ArrowRight size={16} />
                </Link>
                <Link to={site.joinAcademyPath} className="btn-ghost-dark">
                  Join the Academy
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {programs.slice(0, 4).map((p, i) => (
              <div key={p.id} className={i >= 2 ? "hidden sm:block" : ""}>
                <ProgramCard program={p} index={i} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report teaser */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <Link
              to="/reports/one-week-session"
              className="group grid overflow-hidden rounded-4xl border border-line bg-gradient-to-br from-brand-50 via-white to-white shadow-soft transition hover:shadow-lift md:grid-cols-[1.3fr_1fr]"
            >
              <div className="p-8 sm:p-12">
                <span className="eyebrow">
                  <FileText size={14} /> Report
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{reportMeta.title}</h3>
                <p className="mt-4 max-w-lg leading-relaxed text-muted">{reportMeta.subtitle}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand">
                  Read the report <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </div>
              <div className="relative hidden items-center justify-center bg-navy p-10 md:flex">
                <div className="bg-grid-dark absolute inset-0" />
                <div className="relative grid w-full max-w-xs gap-3">
                  {["Preparation", "Teaching", "What We Are Embarking On"].map((s, i) => (
                    <div
                      key={s}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white backdrop-blur"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;
