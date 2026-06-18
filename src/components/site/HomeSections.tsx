import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  GraduationCap, BookOpen, Users, Trophy, Bus, ShieldCheck, Laptop, FlaskConical,
  Library, Volleyball, Video, MonitorSmartphone, ArrowRight, Quote, Calendar, Megaphone,
  Sparkles, HeartHandshake, Lightbulb, Award,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Counter } from "./Counter";
import { SCHOOL } from "@/lib/school";
import campus from "@/assets/marthanda-nagar.jpg";
import schoolEvent1 from "@/assets/uploads/school-event-1.png.asset.json";
import schoolAchievement1 from "@/assets/uploads/school-achievement-1.png.asset.json";
import classroomCircle1 from "@/assets/uploads/classroom-circle-1.png.asset.json";
import awardCeremony1 from "@/assets/uploads/award-ceremony-1.png.asset.json";
import certificates1 from "@/assets/uploads/certificates-1.png.asset.json";
import exhibitionModel1 from "@/assets/uploads/exhibition-model-1.png.asset.json";
import montessoriClass1 from "@/assets/uploads/montessori-class-1.png.asset.json";
import culturalEvent1 from "@/assets/uploads/cultural-event-1.png.asset.json";
import storytelling1 from "@/assets/uploads/storytelling-1.png.asset.json";

export function AnnouncementTicker() {
  const items = [
    "Admissions open for academic year 2026-27",
    "Annual Sports Day celebrated with great enthusiasm",
    "Congratulations to our Class 10 toppers!",
    "New Smart Classrooms now live across all sections",
    "Parent-Teacher meeting scheduled for next Saturday",
  ];
  return (
    <div className="relative overflow-hidden gradient-gold text-[color:var(--navy)] py-2.5">
      <div className="flex gap-12 marquee whitespace-nowrap font-semibold text-sm">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-3"><Megaphone className="size-4" /> {t}</span>
        ))}
      </div>
    </div>
  );
}

export function AboutSection() {
  const stats = [
    { v: 22, suffix: "+", label: "Years of Excellence" },
    { v: 1500, suffix: "+", label: "Happy Students" },
    { v: 60, suffix: "+", label: "Qualified Teachers" },
    { v: 6, suffix: "", label: "Programs Offered" },
  ];
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute -inset-4 gradient-gold rounded-3xl opacity-30 blur-2xl" />
          <div className="relative grid grid-cols-5 grid-rows-6 gap-3 h-[520px]">
            <img src={campus} alt="Holy Fathima school building" className="col-span-3 row-span-4 rounded-3xl object-cover w-full h-full shadow-glow" />
            <img src={classroomCircle1.url} alt="Students learning together in classroom" className="col-span-2 row-span-3 rounded-3xl object-cover w-full h-full" />
            <img src={montessoriClass1.url} alt="Interactive classroom activity" className="col-span-2 row-span-3 rounded-3xl object-cover w-full h-full" />
            <img src={schoolEvent1.url} alt="Montessori learning activity" className="col-span-3 row-span-2 rounded-3xl object-cover w-full h-full" />
          </div>
        </motion.div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Our School"
            title={<>Where every child becomes <span className="text-gradient-gold">extraordinary</span></>}
            description={`Established in ${SCHOOL.established}, Holy Fathima High School has been a trusted name in education at New Hafeezpet, Hyderabad. We blend academic rigour with character building to prepare students for a confident future.`}
          />
          <ul className="mt-6 space-y-3">
            {[
              "English-medium education from Nursery through Class 10",
              "CBSE for Nursery–5th and SSC for 6th–10th with experienced faculty",
              "Smart classrooms, science lab, computer lab and library",
              "Safe campus with CCTV, transport and dedicated care",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm sm:text-base">
                <span className="mt-1 size-2 rounded-full gradient-gold shrink-0" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-4 text-center shadow-glow">
                <div className="font-display text-3xl font-bold text-[color:var(--royal)]">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-[color:var(--royal)] font-semibold hover:gap-3 transition-all">
            Learn more about us <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const programs = [
  { icon: Sparkles, title: "Nursery", desc: "Joyful first steps into learning for ages 2.5–3.5 with play-based activities." },
  { icon: HeartHandshake, title: "Preschool", desc: "Fostering curiosity, social skills and pre-literacy through guided exploration." },
  { icon: Lightbulb, title: "Kindergarten", desc: "LKG & UKG building literacy, numeracy and confidence with experienced teachers." },
  { icon: BookOpen, title: "Primary 1–5 (CBSE)", desc: "A strong English-medium CBSE foundation in language, math, science and life skills." },
  { icon: GraduationCap, title: "High School 6–10 (SSC)", desc: "SSC board curriculum with concept-driven learning for academic excellence." },
  { icon: Award, title: "Abacus & IIT Foundation", desc: "Abacus for Classes 1–5 and IIT Foundation for Classes 5–10 to build a competitive edge." },
];

export function ProgramsSection() {
  return (
    <section className="py-20 sm:py-28 px-4 relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Academic Programs"
          title={<>A complete journey from <span className="text-gradient-gold">Nursery to Class 10</span></>}
          description="CBSE primary, SSC high school, plus Abacus and IIT Foundation enrichment — designed for curious minds and confident learners."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative glass rounded-3xl p-7 hover:-translate-y-1 hover:shadow-glow transition-all"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl gradient-gold opacity-0 group-hover:opacity-100 transition" />
              <div className="size-14 grid place-items-center rounded-2xl gradient-royal text-white shadow-glow">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-[color:var(--navy)]">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <Link to="/academics" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--royal)] group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const facilities = [
  { icon: MonitorSmartphone, title: "Smart Classrooms", desc: "Interactive digital boards in every classroom." },
  { icon: Laptop, title: "Computer Lab", desc: "Modern computers with high-speed internet." },
  { icon: FlaskConical, title: "Science Lab", desc: "Well-equipped Physics, Chemistry and Biology labs." },
  { icon: Library, title: "Library", desc: "A growing collection of books and reference material." },
  { icon: Volleyball, title: "Sports & Activities", desc: "Indoor and outdoor games for all-round growth." },
  { icon: Video, title: "CCTV Security", desc: "Round-the-clock monitoring across the campus." },
  { icon: Bus, title: "School Transport", desc: "Safe transport with trained drivers and attendants." },
  { icon: Lightbulb, title: "Digital Learning", desc: "Curated digital content and assessments." },
];

export function FacilitiesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-[color:var(--navy)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 px-3 py-1.5 rounded-full">World-class Facilities</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">Everything they need to <span className="text-gradient-gold">thrive</span></h2>
          <p className="mt-4 text-white/75">A purpose-built campus with every facility a modern learner deserves.</p>
          <div className="mx-auto mt-5 h-1 w-24 rounded-full gradient-gold" />
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass-dark rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all"
            >
              <div className="size-12 grid place-items-center rounded-xl gradient-gold text-[color:var(--navy)] shadow-gold">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Users, title: "Experienced Faculty", desc: "Caring, qualified teachers who know each child by name." },
  { icon: BookOpen, title: "English Medium", desc: "Strong communication and writing skills from day one." },
  { icon: Lightbulb, title: "Student-Centered", desc: "Personalised attention and concept-based learning." },
  { icon: ShieldCheck, title: "Safe Campus", desc: "Secure, supervised environment with full CCTV coverage." },
  { icon: HeartHandshake, title: "Holistic Development", desc: "Academics, arts, sports and values — all together." },
  { icon: Trophy, title: "Modern Methods", desc: "Smart classes, projects and technology-enabled teaching." },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Six reasons parents <span className="text-gradient-gold">trust us</span></>}
          description="A learning experience that balances academic excellence with values, character and care."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl bg-card p-7 shadow-glow border border-border hover:border-[color:var(--gold)]/40 transition group"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[color:var(--gold)]/10 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="size-12 grid place-items-center rounded-xl gradient-royal text-white">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-[color:var(--navy)]">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  const images = [
    { src: campus, label: "Main Building" },
    { src: classroomCircle1.url, label: "Classroom Circle Learning" },
    { src: montessoriClass1.url, label: "Montessori Activity" },
    { src: storytelling1.url, label: "Story Presentation" },
    { src: schoolAchievement1.url, label: "State Level Achievement" },
    { src: exhibitionModel1.url, label: "Exhibition Model" },
    { src: schoolEvent1.url, label: "School Stage Performance" },
    { src: culturalEvent1.url, label: "Cultural Program" },
  ];
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Campus Life"
          title={<>Glimpses of our <span className="text-gradient-gold">vibrant campus</span></>}
          description="A peek into the everyday moments that make our school a special place to learn and grow."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"}`}
            >
              <img src={img.src} alt={img.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/80 via-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">{img.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full gradient-royal text-white px-7 py-3 text-sm font-semibold shadow-glow hover:-translate-y-0.5 transition">
            Explore full gallery <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Mrs. Anjali Reddy", role: "Parent of Class 5", quote: "The teachers genuinely care about each child. My daughter has grown so confident since joining Holy Fathima.", img: classroomCircle1.url },
  { name: "Mr. Imran Khan", role: "Parent of Class 9", quote: "Excellent academics combined with strong values. The campus is safe and the staff is always approachable.", img: schoolEvent1.url },
  { name: "Sneha S.", role: "Alumna, Class 10", quote: "Holy Fathima shaped who I am today. The faculty pushed me to dream big and gave me the tools to get there.", img: exhibitionModel1.url },
  { name: "Mr. Ramesh Naidu", role: "Parent of UKG", quote: "Best decision we made. The play-based learning has my son excited to go to school every single day.", img: montessoriClass1.url },
];

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5500); return () => clearInterval(t); }, []);
  const t = testimonials[i];
  return (
    <section className="py-20 sm:py-28 px-4 bg-[color:var(--navy)] text-white relative overflow-hidden">
      <div className="absolute -bottom-32 -left-20 size-[30rem] rounded-full bg-[color:var(--royal)]/40 blur-3xl" />
      <div className="absolute -top-20 -right-20 size-[26rem] rounded-full bg-[color:var(--gold)]/15 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 px-3 py-1.5 rounded-full">Voices of Our Community</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">What parents and students say</h2>
        <Quote className="mx-auto mt-10 size-12 text-[color:var(--gold)]" />
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-xl sm:text-2xl font-display leading-relaxed text-white/90 max-w-3xl mx-auto"
        >
          “{t.quote}”
        </motion.blockquote>
        <div className="mt-8 flex flex-col items-center">
          <img src={t.img} alt={t.name} className="size-14 rounded-full object-cover ring-2 ring-[color:var(--gold)]" />
          <div className="mt-3 font-semibold">{t.name}</div>
          <div className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{t.role}</div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[color:var(--gold)]" : "w-4 bg-white/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdmissionsCTA() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-3xl gradient-royal text-white p-10 sm:p-16 shadow-glow">
        <div className="absolute -right-24 -top-24 size-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 size-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 px-3 py-1.5 rounded-full">Admissions Open · 2026–27</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold">Give your child the start they deserve.</h2>
            <p className="mt-4 text-white/85 max-w-xl">Limited seats available across all classes. Apply now to secure admission for the upcoming academic year.</p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
            <Link to="/admissions" className="inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 text-sm font-bold shadow-gold hover:-translate-y-0.5 transition">
              Apply Now <ArrowRight className="size-4" />
            </Link>
            <a href={`tel:${SCHOOL.phones[0]}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 ring-1 ring-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/20 transition">
              Call {SCHOOL.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const news = [
  { date: "Mar 12", title: "Annual Day 2026 — A celebration of talent", desc: "Students dazzled the audience with performances across music, dance, and drama.", img: culturalEvent1.url },
  { date: "Feb 24", title: "Inter-school science exhibition winners", desc: "Our Class 9 team brought home the gold in the regional science fair.", img: exhibitionModel1.url },
  { date: "Jan 15", title: "Parent-Teacher Workshop on digital safety", desc: "An interactive session on raising children in the digital era.", img: certificates1.url },
];

export function NewsSection() {
  return (
    <section className="py-20 sm:py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Latest News & Events"
          title={<>What's happening <span className="text-gradient-gold">on campus</span></>}
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-glow hover:-translate-y-1 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={n.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 rounded-full gradient-gold text-[color:var(--navy)] px-3 py-1 text-xs font-bold flex items-center gap-1.5">
                  <Calendar className="size-3.5" /> {n.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-[color:var(--navy)]">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--royal)] group-hover:gap-2.5 transition-all">
                  Read more <ArrowRight className="size-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
