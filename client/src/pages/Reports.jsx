import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import { reports } from "../data/report";
import { site } from "../data/site";

const Reports = () => {
  usePageTitle("Reports");
  return (
    <>
      <PageHeader
        eyebrow="Reports"
        title="Reports & Updates"
        description="Transparent write-ups of what we do at ToppestTech Academy — how we prepare, what we teach, and what we learn along the way."
      />

      <section className="section pt-12 md:pt-16">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            {reports.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.08}>
                <Link
                  to={r.path}
                  className="group card flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lift sm:flex-row"
                >
                  <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-navy p-8 sm:w-56 sm:shrink-0">
                    <div className="bg-grid-dark absolute inset-0" />
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-brand/40 blur-2xl" />
                    <FileText size={44} strokeWidth={1.4} className="relative text-brand-300" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">{r.tag}</span>
                      {r.dateLabel && <span className="text-muted">{r.dateLabel}</span>}
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-ink">{r.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{r.cardSummary}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Read report <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-line p-8 text-center">
                <p className="font-semibold text-ink">More reports coming</p>
                <p className="mt-1 max-w-xs text-sm text-muted">
                  We'll publish a report after each future session and program.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Be part of the next cohort"
        primary={{ label: "Join the Academy", to: site.joinAcademyPath }}
        secondary={{ label: "Explore the Academy", to: "/academy" }}
      />
    </>
  );
};

export default Reports;
