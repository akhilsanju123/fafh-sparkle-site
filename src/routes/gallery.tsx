import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import campus from "@/assets/marthanda-nagar.jpg";
import a1 from "@/assets/activity-1.png";
import a2 from "@/assets/activity-2.png";
import a3 from "@/assets/activity-3.png";
import a4 from "@/assets/activity-4.png";
import a5 from "@/assets/activity-5.png";
import a6 from "@/assets/activity-6.png";
import a7 from "@/assets/activity-7.png";
import a8 from "@/assets/activity-8.png";
import a9 from "@/assets/activity-9.jpeg";
import a10 from "@/assets/activity-10.jpeg";
import a11 from "@/assets/activity-11.jpeg";
import a12 from "@/assets/activity-12.jpeg";
import a13 from "@/assets/activity-13.jpeg";
import a14 from "@/assets/activity-14.jpeg";
import a15 from "@/assets/activity-15.jpeg";
import a16 from "@/assets/activity-16.jpeg";
import a17 from "@/assets/activity-17.jpeg";
import a18 from "@/assets/activity-18.jpeg";
import a19 from "@/assets/activity-19.jpeg";
import a20 from "@/assets/activity-20.jpeg";
import a21 from "@/assets/activity-21.jpeg";
import a22 from "@/assets/activity-22.jpeg";
import a23 from "@/assets/activity-23.jpeg";
const schoolEvent1 = { url: a1 };
const schoolAchievement1 = { url: a2 };
const classroomCircle1 = { url: a3 };
const awardCeremony1 = { url: a4 };
const certificates1 = { url: a5 };
const exhibitionModel1 = { url: a6 };
const montessoriClass1 = { url: a7 };
const culturalEvent1 = { url: a8 };
const storytelling1 = { url: a9 };
const activity10 = { url: a10 };
const activity11 = { url: a11 };
const activity12 = { url: a12 };
const activity13 = { url: a13 };
const activity14 = { url: a14 };
const activity15 = { url: a15 };
const activity16 = { url: a16 };
const activity17 = { url: a17 };
const activity18 = { url: a18 };
const activity19 = { url: a19 };
const activity20 = { url: a20 };
const activity21 = { url: a21 };
const activity22 = { url: a22 };
const activity23 = { url: a23 };


export const Route = createFileRoute("/gallery")({
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
  { src: activity10.url, cat: "Events", label: "School Activity 10" },
{ src: activity11.url, cat: "Events", label: "School Activity 11" },
{ src: activity12.url, cat: "Events", label: "School Activity 12" },
{ src: activity13.url, cat: "Events", label: "School Activity 13" },
{ src: activity14.url, cat: "Events", label: "School Activity 14" },
{ src: activity15.url, cat: "Events", label: "School Activity 15" },
{ src: activity16.url, cat: "Events", label: "School Activity 16" },
{ src: activity17.url, cat: "Events", label: "School Activity 17" },
{ src: activity18.url, cat: "Events", label: "School Activity 18" },
{ src: activity19.url, cat: "Events", label: "School Activity 19" },
{ src: activity20.url, cat: "Events", label: "School Activity 20" },
{ src: activity21.url, cat: "Events", label: "School Activity 21" },
{ src: activity22.url, cat: "Events", label: "School Activity 22" },
{ src: activity23.url, cat: "Events", label: "School Activity 23" },
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
