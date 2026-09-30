import React, { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import ProjectGrid from "../components/ProjectGrid";
import CTASection from "../components/CTASection";
import usePageTitle from "../hooks/usePageTitle";
import { projects, projectCategories } from "../data/projects";

const Works = () => {
  usePageTitle("Works");
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.categories.includes(active))),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Our Works"
        title="Projects We've Built"
        description="Explore some of the websites, software applications, and digital solutions we've created."
      />

      <section className="section pt-12 md:pt-16">
        <div className="container-page">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {projectCategories.map((c) => {
              const count = c === "All" ? projects.length : projects.filter((p) => p.categories.includes(c)).length;
              const isActive = active === c;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-navy text-white shadow-soft"
                      : "border border-line bg-white text-slate-600 hover:border-brand hover:text-brand"
                  }`}
                >
                  {c}
                  <span className={`ml-2 text-xs ${isActive ? "text-brand-200" : "text-slate-400"}`}>{count}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-10">
            <ProjectGrid projects={filtered} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have a project in mind?"
        description="Tell us what you're trying to build. We'll help you shape it into a practical, well-built digital solution."
        primary={{ label: "Work With Us", to: "/contact?type=project" }}
        secondary={{ label: "Our Services", to: "/services" }}
      />
    </>
  );
};

export default Works;
