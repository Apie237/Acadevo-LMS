import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessagesSquare, PencilRuler, Code2, Rocket } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import { services } from "../data/services";

const process = [
  { icon: MessagesSquare, title: "Understand", text: "We listen to your goals, users and constraints." },
  { icon: PencilRuler, title: "Design", text: "We plan the solution and design the experience." },
  { icon: Code2, title: "Build", text: "We develop, test and refine with you along the way." },
  { icon: Rocket, title: "Launch & support", text: "We deploy your product and help you keep it running." },
];

const Services = () => {
  usePageTitle("Services");
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Technology Solutions for"
        highlight="Your Business"
        description="From a professional website to a custom web application, we design and build practical digital solutions around what your organisation needs."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact?type=project" className="btn-primary">
            Start a Project <ArrowRight size={16} />
          </Link>
          <Link to="/works" className="btn-ghost-dark">
            See Our Works
          </Link>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            title="Services built around your goals"
            description="Choose a single service or combine them into one complete solution."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.id}
                {...s}
                index={i}
                cta={{ label: "Discuss this service", to: "/contact?type=project" }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="How We Work" title="A simple, transparent process" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="card relative h-full p-7">
                  <span className="absolute right-6 top-6 text-4xl font-extrabold text-slate-100">0{i + 1}</span>
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                    <p.icon size={20} />
                  </span>
                  <h3 className="relative mt-6 font-bold text-ink">{p.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Tell us about your project"
        description="Share your idea, and we'll get back to you to talk through scope, approach and next steps."
        primary={{ label: "Work With Us", to: "/contact?type=project" }}
        secondary={{ label: "View Our Works", to: "/works" }}
      />
    </>
  );
};

export default Services;
