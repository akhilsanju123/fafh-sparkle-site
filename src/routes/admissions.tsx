import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Check, FileText, Phone, Calendar, GraduationCap, ChevronDown } from "lucide-react";
import activity5 from "@/assets/activity-5.png";
import { SCHOOL } from "@/lib/school";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
});

const steps = [
  { icon: Phone, title: "Enquire", desc: "Submit the form below or call us to schedule a campus visit." },
  { icon: Calendar, title: "Visit & Interact", desc: "Tour the campus, meet teachers and understand our programs." },
  { icon: FileText, title: "Submit Documents", desc: "Provide required documents along with the admission form." },
  { icon: GraduationCap, title: "Confirmation", desc: "Receive admission confirmation and joining instructions." },
];

const docs = [
  "Birth certificate of the student",
  "Previous school transfer certificate (if applicable)",
  "Aadhar card copy of student and parents",
  "Recent passport-size photographs",
  "Address proof of parents",
];

const faqs = [
  { q: "What is the medium of instruction?", a: "Holy Fathima High School is an English-medium institution from Nursery through Class 10 — CBSE for Nursery–5th and SSC for 6th–10th." },
  { q: "What is the age criterion for Nursery?", a: "Children should be between 2.5 and 3.5 years old as on 1st June of the academic year." },
  { q: "Do you provide transport?", a: "Yes, we operate a safe school transport service with trained drivers and dedicated attendants." },
  { q: "How can I schedule a campus visit?", a: "Submit the inquiry form below or call us at " + SCHOOL.phones[0] + " to schedule a visit at your convenience." },
];

function AdmissionsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Inquiry received!", { description: "Our admissions team will contact you within 24 hours." });
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <PageHero eyebrow="Admissions Open · 2026–27" title={<>Give your child the start they <span className="text-gradient-gold">deserve</span></>} description="Limited seats available across all classes. Apply now to secure admission for the upcoming academic year." image={activity5} />

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How to Apply" title={<>A simple <span className="text-gradient-gold">4-step</span> process</>} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="relative glass rounded-3xl p-6 shadow-glow">
                <div className="absolute -top-3 -right-3 size-10 grid place-items-center rounded-full gradient-gold font-display font-bold text-[color:var(--navy)] shadow-gold">{i + 1}</div>
                <div className="size-12 grid place-items-center rounded-2xl gradient-royal text-white"><s.icon className="size-5" /></div>
                <h3 className="mt-4 font-display text-lg font-bold text-[color:var(--navy)]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          {/* Form */}
          <div className="rounded-3xl gradient-royal text-white p-8 sm:p-10 shadow-glow relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
            <div className="relative">
              <span className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 px-3 py-1.5 rounded-full">Inquiry Form</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold">Tell us about your child</h3>
              <p className="mt-2 text-white/80 text-sm">Our admissions team will reach out within 24 hours.</p>

              <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Student name" name="student" required />
                <Field label="Parent name" name="parent" required />
                <Field label="Phone number" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" />
                <SelectField label="Class applying for" name="class" options={["Nursery", "Preschool", "LKG", "UKG", "Class 1-5 (CBSE)", "Class 6-10 (SSC)", "Abacus (1-5)", "IIT Foundation (5-10)"]} required />
                <Field label="City" name="city" defaultValue="Hyderabad" />
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-white/70 mb-1.5">Message (optional)</label>
                  <textarea name="message" rows={3} className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[color:var(--gold)]" placeholder="Anything you'd like us to know..." />
                </div>
                <button type="submit" disabled={submitting}
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 font-bold shadow-gold hover:-translate-y-0.5 transition disabled:opacity-70">
                  {submitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>

          {/* Documents */}
          <div className="rounded-3xl bg-card border border-border p-8 sm:p-10 shadow-glow">
            <span className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--royal)] bg-[color:var(--gold)]/15 px-3 py-1.5 rounded-full">Required Documents</span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-[color:var(--navy)]">Documents to bring along</h3>
            <ul className="mt-6 space-y-3">
              {docs.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <span className="size-6 grid place-items-center rounded-full gradient-gold text-[color:var(--navy)] shrink-0"><Check className="size-3.5" /></span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 rounded-2xl bg-[color:var(--gold)]/10 border border-[color:var(--gold)]/30">
              <div className="text-sm font-semibold">Need help with documents?</div>
              <div className="text-sm text-muted-foreground mt-1">Call <a href={`tel:${SCHOOL.phones[0]}`} className="text-[color:var(--royal)] font-semibold">{SCHOOL.phones[0]}</a> or <a href={`tel:${SCHOOL.phones[1]}`} className="text-[color:var(--royal)] font-semibold">{SCHOOL.phones[1]}</a> — we're happy to help.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient-gold">questions</span></>} />
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-3 p-5 text-left">
                  <span className="font-semibold text-[color:var(--navy)]">{f.q}</span>
                  <ChevronDown className={`size-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-5 pb-5 text-sm text-muted-foreground">
                    {f.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, defaultValue }: { label: string; name: string; type?: string; required?: boolean; defaultValue?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/70 mb-1.5">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} defaultValue={defaultValue}
        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[color:var(--gold)]" />
    </div>
  );
}

function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/70 mb-1.5">{label}{required && " *"}</label>
      <select name={name} required={required} defaultValue=""
        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--gold)]">
        <option value="" disabled className="text-[color:var(--navy)]">Select class</option>
        {options.map((o) => <option key={o} value={o} className="text-[color:var(--navy)]">{o}</option>)}
      </select>
    </div>
  );
}
