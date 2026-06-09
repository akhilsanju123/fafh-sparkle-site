import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Sparkles, HeartHandshake, Lightbulb, BookOpen, GraduationCap, Award, Check } from "lucide-react";
import activity4 from "@/assets/activity-4.png";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Programs from Nursery to 10th | Holy Fathima High School" },
      { name: "description", content: "Explore our English-medium academic programs at Holy Fathima High School, New Hafeezpet — Nursery to 5th (CBSE), 6th to 10th (SSC), Abacus for 1st–5th and IIT Foundation for 5th–10th." },
      { property: "og:title", content: "Academic Programs — Holy Fathima High School" },
      { property: "og:description", content: "A complete educational journey from Nursery to Class 10 with CBSE primary, SSC high school, plus Abacus and IIT Foundation programs." },
    ],
  }),
  component: AcademicsPage,
});

const programs = [
  { icon: Sparkles, title: "Nursery", age: "Ages 2.5 – 3.5", points: ["Play-based exploration", "Sensory & motor activities", "Storytime, rhymes & music", "Gentle social skills development"] },
  { icon: HeartHandshake, title: "Preschool", age: "Ages 3.5 – 4.5", points: ["Pre-literacy and pre-numeracy", "Group projects & circle time", "Art, craft and movement", "Confidence and routine building"] },
  { icon: Lightbulb, title: "Kindergarten (LKG & UKG)", age: "Ages 4.5 – 6", points: ["Phonics and early reading", "Numeracy and basic math", "Themed learning units", "School-readiness in English"] },
  { icon: BookOpen, title: "Primary (Classes 1 – 5) — CBSE", age: "Foundation Stage", points: ["CBSE-aligned curriculum", "Strong English-medium foundation", "Math, EVS, Computers, Art", "Activity-based assessments"] },
  { icon: GraduationCap, title: "High School (Classes 6 – 10) — SSC", age: "Middle & High School", points: ["SSC board curriculum", "Concept-based learning", "Science, Math, Social, Languages", "Board exam preparation"] },
  { icon: Award, title: "Enrichment — Abacus & IIT Foundation", age: "Skill Programs", points: ["Abacus for Classes 1 – 5", "IIT Foundation for Classes 5 – 10", "Mental math & logical reasoning", "Competitive exam readiness"] },
];

function AcademicsPage() {
  return (
    <>
      <PageHero eyebrow="Academics" title={<>A complete journey from <span className="text-gradient-gold">Nursery to Class 10</span></>} description="CBSE primary (Nursery – 5th), SSC high school (6th – 10th), with Abacus for 1st–5th and IIT Foundation for 5th–10th — designed to nurture curious minds and confident learners." image={activity4} />

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border p-8 hover:-translate-y-1 hover:shadow-glow hover:border-[color:var(--gold)]/40 transition-all">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[color:var(--gold)]/10 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="size-14 grid place-items-center rounded-2xl gradient-royal text-white shadow-glow shrink-0"><p.icon className="size-6" /></div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[color:var(--navy)]">{p.title}</h3>
                    <div className="text-xs uppercase tracking-widest text-[color:var(--royal)] mt-1">{p.age}</div>
                  </div>
                </div>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 mt-0.5 text-[color:var(--gold)] shrink-0" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Academic Calendar" title={<>Examination <span className="text-gradient-gold">Schedule</span></>} description="Plan ahead with our formative and summative assessment timeline for the academic year 2026–27." />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="gradient-royal text-white">
                  <tr>
                    <th className="px-6 py-4 font-display text-base sm:text-lg">Type of Assessment</th>
                    <th className="px-6 py-4 font-display text-base sm:text-lg">Schedule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Formative Assessment (FA)-1", "By 31.07.2026"],
                    ["Formative Assessment (FA)-2", "By 21.09.2026"],
                    ["Summative Assessment (SA)-1", "01.10.2026 to 09.10.2026"],
                    ["Formative Assessment (FA)-3", "By 10.12.2026"],
                    ["Formative Assessment (FA)-4", "By 27.01.2027 for Class X & 15.02.2027 for Classes I to IX"],
                    ["Summative Assessment (SA)-2 (Classes I to IX)", "09.04.2027 to 19.04.2027"],
                    ["Pre-final for Class X", "Before 28.02.2027"],
                    ["SSC Board Examinations", "March, 2027"],
                  ].map(([type, schedule]) => (
                    <tr key={type} className="hover:bg-[color:var(--gold)]/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-[color:var(--navy)]">{type}</td>
                      <td className="px-6 py-4 text-muted-foreground">{schedule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl rounded-3xl gradient-royal text-white p-10 sm:p-14 text-center shadow-glow">
          <h3 className="font-display text-3xl sm:text-4xl font-bold">Curious about our curriculum?</h3>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">Talk to our admissions team to learn more about subjects, timetables and how we support every learner.</p>
          <Link to="/admissions" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 font-bold shadow-gold hover:-translate-y-0.5 transition">
            Apply for Admission
          </Link>
        </div>
      </section>
    </>
  );
}
