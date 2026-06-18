import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Campus Life at Holy Fathima High School" },
      { name: "description", content: "A glimpse into life at Holy Fathima High School, New Hafeezpet — classrooms, campus events and student moments." },
      { property: "og:title", content: "Gallery — Holy Fathima High School" },
      { property: "og:description", content: "Photos of our campus, classrooms, events and student life in New Hafeezpet, Hyderabad." },
      { property: "og:image", content: campus },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; cat: "Campus" | "Classrooms" | "Facilities" | "Events" | "Achievements"; label: string };

const all: Item[] = [
  { src: campus, cat: "Campus", label: "Main Building" },
  { src: classroomCircle1.url, cat: "Classrooms", label: "Classroom Circle Learning" },
  { src: montessoriClass1.url, cat: "Classrooms", label: "Montessori Classroom Activity" },
  { src: storytelling1.url, cat: "Classrooms", label: "Story Presentation" },
  { src: schoolAchievement1.url, cat: "Achievements", label: "State Level Carnival Achievement" },
  { src: awardCeremony1.url, cat: "Achievements", label: "Award Ceremony" },
  { src: certificates1.url, cat: "Achievements", label: "Student Certificates" },
  { src: exhibitionModel1.url, cat: "Facilities", label: "Student Exhibition Model" },
  { src: schoolEvent1.url, cat: "Events", label: "School Stage Performance" },
  { src: culturalEvent1.url, cat: "Events", label: "Cultural Program" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<"All" | Item["cat"]>("All");
  const [active, setActive] = useState<number | null>(null);
  const filtered = all.filter((i) => filter === "All" || i.cat === filter);

  const close = () => setActive(null);
  const prev = () => setActive((a) => (a === null ? a : (a - 1 + filtered.length) % filtered.length));
  const next = () => setActive((a) => (a === null ? a : (a + 1) % filtered.length));

  return (
    <>
      <PageHero eyebrow="Gallery" title={<>Moments from our <span className="text-gradient-gold">vibrant campus</span></>} description="A peek into the everyday life that makes Holy Fathima a special place to learn and grow." image={classroomCircle1.url} />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {(["All", "Campus", "Classrooms", "Facilities", "Events", "Achievements"] as const).map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${filter === f ? "gradient-royal text-white shadow-glow" : "bg-card border border-border hover:border-[color:var(--gold)]"}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((img, i) => (
              <motion.button
                key={img.src + i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setActive(i)}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img src={img.src} alt={img.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/80 via-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-3 left-3 text-left text-white opacity-0 group-hover:opacity-100 transition">
                  <div className="text-sm font-semibold">{img.label}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">{img.cat}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[color:var(--navy)]/95 backdrop-blur-md grid place-items-center p-4" onClick={close}>
            <button onClick={close} className="absolute top-5 right-5 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><ChevronLeft /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><ChevronRight /></button>
            <motion.img key={active} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} src={filtered[active].src} alt={filtered[active].label} className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-glow object-contain" onClick={(e) => e.stopPropagation()} />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">{filtered[active].label}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
