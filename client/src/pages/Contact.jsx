import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send, AlertCircle, CheckCircle2, Share2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SocialLinks from "../components/SocialLinks";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";
import { site, whatsappLink } from "../data/site";

const INQUIRY_TYPES = [
  { id: "project", label: "Project Inquiry" },
  { id: "academy", label: "Academy" },
  { id: "partnership", label: "Partnership" },
  { id: "general", label: "General Inquiry" },
];

const empty = { name: "", email: "", phone: "", type: "general", subject: "", message: "" };

// Builds the message text used for email / WhatsApp delivery.
const composeMessage = (f, typeLabel) =>
  [
    `Inquiry type: ${typeLabel}`,
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    f.phone && `Phone: ${f.phone}`,
    "",
    f.message,
  ]
    .filter((l) => l !== false && l !== undefined && l !== "")
    .join("\n");

const Contact = () => {
  usePageTitle("Contact");
  const [params] = useSearchParams();
  const initialType = INQUIRY_TYPES.some((t) => t.id === params.get("type")) ? params.get("type") : "general";
  const [form, setForm] = useState({ ...empty, type: initialType });
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null); // null | "sent" | "unconfigured"

  const { email, phone, whatsappDisplay, location } = site.contact;
  const wa = whatsappLink();

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const typeLabel = INQUIRY_TYPES.find((t) => t.id === form.type)?.label || "General Inquiry";
    const subject = form.subject.trim() || `${typeLabel} from ${form.name}`;
    const body = composeMessage(form, typeLabel);

    // No backend endpoint exists for contact messages yet, so the form hands the
    // message to the visitor's email app or WhatsApp — whichever is configured.
    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    } else if (wa) {
      window.open(whatsappLink(`${subject}\n\n${body}`), "_blank", "noopener");
      setStatus("sent");
    } else {
      setStatus("unconfigured");
    }
  };

  const info = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: email ? `mailto:${email}` : "",
    },
    {
      icon: Phone,
      label: "Phone",
      value: whatsappDisplay || phone,
      href: phone ? `tel:${phone}` : "",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: wa ? "Chat on WhatsApp" : "",
      href: wa,
    },
    { icon: MapPin, label: "Location", value: location, href: "" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Work"
        highlight="Together"
        description="Have a project in mind, a question, or want to join the Academy? We'd love to hear from you."
      />

      <section className="section pt-12 md:pt-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          {/* Contact info */}
          <Reveal className="space-y-4">
            {info.map((item) => (
              <div key={item.label} className="card flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <item.icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">{item.label}</p>
                  {item.value ? (
                    item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block truncate font-semibold text-ink hover:text-brand"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-ink">{item.value}</p>
                    )
                  ) : (
                    <p className="text-sm font-medium text-slate-400">Coming soon</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card p-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <Share2 size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">Social Media</p>
                  {site.socials.length === 0 && <p className="text-sm font-medium text-slate-400">Coming soon</p>}
                </div>
              </div>
              {site.socials.length > 0 && (
                <div className="mt-4">
                  <SocialLinks links={site.socials} />
                </div>
              )}
            </div>

            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="font-bold">Looking to join the Academy?</p>
              <p className="mt-1 text-sm text-slate-300">
                Choose “Academy” as your inquiry type and tell us a little about your goals.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <div className="card p-6 sm:p-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">Send us a message</h2>
              <p className="mt-1 text-sm text-muted">Fields marked * are required.</p>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                  >
                    <AlertCircle size={18} className="mt-0.5 shrink-0" /> {error}
                  </motion.div>
                )}
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    Your message is ready — please send it from the app that just opened. Thank you!
                  </motion.div>
                )}
                {status === "unconfigured" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800"
                  >
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    Online message delivery is still being set up. Please check back soon — thank you for your patience.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="label">Name *</label>
                  <input id="c-name" className="input" value={form.name} onChange={update("name")} placeholder="Your full name" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="c-email" className="label">Email *</label>
                  <input id="c-email" type="email" className="input" value={form.email} onChange={update("email")} placeholder="you@example.com" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="c-phone" className="label">Phone</label>
                  <input id="c-phone" type="tel" className="input" value={form.phone} onChange={update("phone")} placeholder="Optional" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="c-type" className="label">Inquiry type</label>
                  <select id="c-type" className="input appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2364748B%22 stroke-width=%222%22 viewBox=%220 0 24 24%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px] bg-[right_14px_center] bg-no-repeat pr-10" value={form.type} onChange={update("type")}>
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-subject" className="label">Subject</label>
                  <input id="c-subject" className="input" value={form.subject} onChange={update("subject")} placeholder="What is this about?" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="label">Message *</label>
                  <textarea id="c-message" rows={6} className="input resize-y" value={form.message} onChange={update("message")} placeholder="Tell us about your project, question or goals…" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
