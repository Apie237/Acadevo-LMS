import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ProgramCard from "../components/ProgramCard";
import CTASection from "../components/CTASection";
import usePageTitle from "../hooks/usePageTitle";
import { programs, PROGRAM_STATUS } from "../data/programs";
import { site } from "../data/site";

const FILTERS = [{ id: "all", label: "All" }, ...Object.entries(PROGRAM_STATUS).map(([id, s]) => ({ id, label: s.label }))];

const Programs = () => {
  usePageTitle("Academy Programs");
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? programs : programs.filter((p) => p.status === filter);
  const availableCount = programs.filter((p) => p.status === "available").length;

  return (
    <>
      <PageHeader
        eyebrow="Academy Programs"
        title="Programs that"
        highlight="grow with you"
        description="We're building a focused set of practical programs. Each one opens when it's ready to be delivered well — register your interest to hear first."
      />

      <section className="section pt-12 md:pt-16">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    filter === f.id
                      ? "bg-navy text-white"
                      : "border border-line bg-white text-slate-600 hover:border-brand hover:text-brand"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            {availableCount === 0 && (
              <p className="flex items-start gap-2 text-sm text-muted md:max-w-md">
                <Info size={16} className="mt-0.5 shrink-0 text-brand" />
                No program is open for enrolment right now. Our first one-week session has finished and the next programs
                are being prepared.
              </p>
            )}
          </div>

          {list.length ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => (
                <ProgramCard key={p.id} program={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-line py-16 text-center">
              <p className="font-semibold text-ink">No programs are available for enrolment yet.</p>
              <p className="mt-1 text-sm text-muted">
                <Link to={site.joinAcademyPath} className="font-semibold text-brand">
                  Join the Academy
                </Link>{" "}
                to be notified when they open.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Be part of the next cohort"
        description="Register your interest and we'll let you know when programs open."
        primary={{ label: "Join the Academy", to: site.joinAcademyPath }}
        secondary={{ label: "Read the Session Report", to: "/reports/one-week-session" }}
      />
    </>
  );
};

export default Programs;
