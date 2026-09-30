import React from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Hammer, Lightbulb, Users, Code2, GraduationCap, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We take pride in doing things well — in the software we build and in the way we teach.",
  },
  {
    icon: Hammer,
    title: "Practical Learning",
    description: "We believe skills are built by doing. Our learning is hands-on and project-focused.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We look for better, simpler ways to solve problems with technology.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We grow together — learners, developers and technology enthusiasts supporting each other.",
  },
];

const About = () => {
  usePageTitle("About");
  return (
    <>
      <PageHeader
        eyebrow="About ToppestTech"
        title="Building technology."
        highlight="Developing talent."
        description="ToppestTech is a technology company and academy focused on creating digital solutions and developing practical technology talent."
      />

      {/* Who we are */}
      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Who We Are" title="One organisation, two connected sides" />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-muted">
                On one side, we design and build websites, web applications and digital platforms for businesses,
                organisations and institutions. On the other, ToppestTech Academy helps aspiring developers build
                practical technology skills.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                The two sides strengthen each other: real project experience shapes what we teach, and the Academy
                helps grow the technology talent we believe Africa needs. We are an emerging company — we have
                completed our first hands-on learning session with around 15 students and we are building from there,
                step by step.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Code2,
                title: "ToppestTech Technology",
                text: "Websites, web applications, school management systems, business software, e-commerce and UI/UX.",
                to: "/services",
                cta: "Our services",
              },
              {
                icon: GraduationCap,
                title: "ToppestTech Academy",
                text: "Practical, hands-on technology education for aspiring developers and technology professionals.",
                to: "/academy",
                cta: "The Academy",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1} className="h-full">
                <Link
                  to={c.to}
                  className={`group flex h-full flex-col rounded-2xl p-7 transition hover:-translate-y-1 ${
                    i === 0 ? "bg-navy text-white" : "border border-line bg-brand-50"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      i === 0 ? "bg-brand text-white" : "bg-white text-brand shadow-soft"
                    }`}
                  >
                    <c.icon size={22} />
                  </span>
                  <h3 className={`mt-6 text-lg font-bold ${i === 0 ? "text-white" : "text-ink"}`}>{c.title}</h3>
                  <p className={`mt-2 flex-1 text-sm leading-relaxed ${i === 0 ? "text-slate-300" : "text-muted"}`}>
                    {c.text}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                      i === 0 ? "text-brand-300" : "text-brand"
                    }`}
                  >
                    {c.cta} <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section bg-slate-50">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To build useful digital solutions and provide practical technology education that empowers individuals and organizations.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become a growing technology company and academy creating opportunities for technology talent and digital innovation in Africa.",
            },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1} className="h-full">
              <div className="card relative h-full overflow-hidden p-8 sm:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-50" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-glow">
                  <m.icon size={22} />
                </span>
                <h3 className="relative mt-6 text-2xl font-extrabold tracking-tight text-ink">{m.title}</h3>
                <p className="relative mt-3 text-lg leading-relaxed text-muted">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Values"
            title="What guides our work"
            description="Four values shape how we build software and how we teach."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ServiceCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's build what's next, together." />
    </>
  );
};

export default About;
