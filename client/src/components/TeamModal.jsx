import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import MemberAvatar from "./MemberAvatar";
import SocialLinks from "./SocialLinks";

const TeamModal = ({ member, onClose }) => {
  useEffect(() => {
    if (!member) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close profile"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft transition hover:bg-white"
            >
              <X size={18} />
            </button>
            <div className="grid md:grid-cols-[280px_1fr]">
              <div className="aspect-square md:aspect-auto md:min-h-full">
                <MemberAvatar member={member} />
              </div>
              <div className="p-7 sm:p-9">
                <p className="eyebrow">{member.role}</p>
                <h3 id="team-modal-title" className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {member.name}
                </h3>
                {member.credentials && (
                  <p className="mt-1 text-sm font-semibold text-slate-500">{member.credentials}</p>
                )}
                <p className="mt-4 leading-relaxed text-slate-600">{member.bio}</p>
                {member.expertise?.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">Expertise</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.expertise.map((e) => (
                        <span key={e} className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {member.socials?.length > 0 && (
                  <div className="mt-6">
                    <SocialLinks links={member.socials} />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;
