import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "../data/site";

const CTASection = ({
  title = "Ready to build or learn with us?",
  description = "Whether you have a project in mind or want to grow your technology skills, we'd love to hear from you.",
  primary = { label: "Work With Us", to: "/contact" },
  secondary = { label: "Join the Academy", to: site.joinAcademyPath },
}) => (
  <section className="bg-white py-16 md:py-24">
    <div className="container-page">
      <Reveal className="relative overflow-hidden rounded-4xl bg-navy px-6 py-14 text-center sm:px-12 md:py-20">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/30 blur-[100px]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {primary && (
              <Link to={primary.to} className="btn-primary">
                {primary.label} <ArrowRight size={16} />
              </Link>
            )}
            {secondary && (
              <Link to={secondary.to} className="btn-ghost-dark">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
