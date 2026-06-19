import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { MonitorSmartphone, Laptop, FlaskConical, Library, Volleyball, Video, Bus, Lightbulb, ShieldCheck, BookOpen } from "lucide-react";
import campus from "@/assets/marthanda-nagar.jpg";

export const Route = createFileRoute("/facilities")({
  component: FacilitiesPage,
});

const items = [
  { icon: MonitorSmartphone, title: "Smart Classrooms", desc: "Interactive digital boards in every classroom create immersive lessons across subjects." },
  { icon: Laptop, title: "Computer Lab", desc: "Modern computers with high-speed internet and a structured ICT curriculum." },
  { icon: FlaskConical, title: "Science Lab", desc: "Well-equipped Physics, Chemistry and Biology labs for hands-on experiments." },
  { icon: Library, title: "Library", desc: "A growing collection of books, magazines and reference material to inspire reading." },
  { icon: Volleyball, title: "Sports & Activities", desc: "Indoor and outdoor games supervised by trained coaches for all-round growth." },
  { icon: Video, title: "CCTV Security", desc: "Round-the-clock monitoring across the entire campus for your child's safety." },
  { icon: Bus, title: "School Transport", desc: "Safe, reliable transport with trained drivers and dedicated attendants." },
  { icon: Lightbulb, title: "Digital Learning", desc: "Curated digital content, online assessments and parent-teacher portals." },
  { icon: ShieldCheck, title: "Healthcare", desc: "First-aid trained staff and tie-ups with nearby medical facilities." },
  { icon: BookOpen, title: "Reading Culture", desc: "Dedicated reading periods, story sessions and inter-class competitions." },
];

function FacilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Facilities" title={<>Everything they need to <span className="text-gradient-gold">thrive</span></>} description="A purpose-built campus designed to support modern, joyful and safe learning for every child." image={campus} />
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="group glass rounded-3xl p-7 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="size-14 grid place-items-center rounded-2xl gradient-royal text-white shadow-glow"><f.icon className="size-6" /></div>
              <h3 className="mt-5 font-display text-xl font-bold text-[color:var(--navy)]">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
