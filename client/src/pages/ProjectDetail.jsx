import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Clock } from "lucide-react";
import { ProjectCover } from "../components/ProjectCard";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import usePageTitle from "../hooks/usePageTitle";
import { getProject, hasCaseStudy, projects } from "../data/projects";

const Block = ({ title, children }) => (
  <Reveal>
    <h2 className="text-2xl font-extrabold tracking-tight text-ink">{title}</h2>
    <div className="mt-4 leading-relaxed text-slate-600">{children}</div>
  </Reveal>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProject(id);
  usePageTitle(project ? project.name : "Project not found");

  if (!project) return <NotFound />;

  const related = projects
    .filter((p) => p.id !== project.id && p.categories.some((c) => project.categories.includes(c)))
    .concat(projects.filter((p) => p.id !== project.id))
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
    .slice(0, 3);

  const caseStudy = hasCaseStudy(project);

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="container-page relative pb-10 pt-10 md:pt-14">
          <Link to="/works" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
            <ArrowLeft size={16} /> All projects
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((c) => (
                  <span key={c} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-200">
                    {c}
                  </span>
                ))}
              </div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">{project.name}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{project.summary}</p>
              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              )}
            </Reveal>
            <Reveal delay={0.1}>
              <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <ProjectCover project={project} large />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            {caseStudy ? (
              <>
                {project.overview && <Block title="Overview">{project.overview}</Block>}
                {project.problem && <Block title="The Problem">{project.problem}</Block>}
                {project.solution && <Block title="Our Solution">{project.solution}</Block>}
                {project.features?.length > 0 && (
                  <Block title="Key Features">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 rounded-xl border border-line p-4 text-sm">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                          <span className="text-slate-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                )}
              </>
            ) : (
              <Reveal>
                <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-8 sm:flex-row sm:items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-soft">
                    <Clock size={22} />
                  </span>
                  <div>
                    <h2 className="font-bold text-ink">Full case study coming soon</h2>
                    <p className="mt-1 text-sm text-muted">
                      We're preparing a detailed write-up of this project — the problem, our solution, key features and
                      screenshots.
                    </p>
                  </div>
                </div>
              </Reveal>
            )}

            <div>
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">Screenshots</h2>
              </Reveal>
              {project.screenshots?.length > 0 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.screenshots.map((src, i) => (
                    <Reveal key={src} delay={i * 0.05}>
                      <img
                        src={src}
                        alt={`${project.name} screenshot ${i + 1}`}
                        loading="lazy"
                        className="w-full rounded-xl border border-line shadow-soft"
                      />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <p className="mt-4 rounded-xl border border-dashed border-line p-6 text-sm text-muted">
                  Screenshots will be added soon.
                </p>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted">Category</h3>
              <p className="mt-2 font-semibold text-ink">{project.category}</p>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-wider text-muted">Technologies</h3>
              {project.technologies?.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm text-muted">To be added.</p>
              )}
              <div className="mt-6 border-t border-line pt-6">
                <Link to="/contact?type=project" className="btn-primary w-full">
                  Start a similar project
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-page">
            <SectionHeading align="left" eyebrow="More Work" title="Related projects" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06} className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Let's build something useful."
        primary={{ label: "Work With Us", to: "/contact?type=project" }}
        secondary={{ label: "View All Projects", to: "/works" }}
      />
    </>
  );
};

export default ProjectDetail;
