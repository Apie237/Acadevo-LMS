import React, { useCallback, useState } from "react";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TeamCard from "../components/TeamCard";
import TeamModal from "../components/TeamModal";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import SectionHeading from "../components/SectionHeading";
import { team, partnerTutors } from "../data/team";

const Team = () => {
  usePageTitle("Team");
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Meet the"
        highlight="TopestTech Team"
        description="Meet the people helping us build digital solutions, develop technology talent, and grow our community."
      />

      <section className="section pt-14 md:pt-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.06} className="h-full">
                <TeamCard member={m} onOpen={setSelected} />
              </Reveal>
            ))}

            <Reveal delay={team.length * 0.06} className="h-full">
              <Link
                to="/contact?type=general"
                className="group flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-line p-8 text-center transition hover:border-brand hover:bg-brand-50/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <UserPlus size={22} />
                </span>
                <p className="mt-4 font-bold text-ink">Our team is growing</p>
                <p className="mt-1 max-w-[220px] text-sm text-muted">
                  Interested in building or teaching with us? Get in touch.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {partnerTutors.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-page">
            <SectionHeading
              align="left"
              eyebrow="Partner Tutors"
              title="Our partner tutors"
              description="Tutors who partner with TopestTech Academy to teach and mentor our students."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {partnerTutors.map((m, i) => (
                <Reveal key={m.id} delay={i * 0.06} className="h-full">
                  <TeamCard member={m} onOpen={setSelected} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <TeamModal member={selected} onClose={close} />

      <CTASection title="Work with the team behind TopestTech" />
    </>
  );
};

export default Team;
