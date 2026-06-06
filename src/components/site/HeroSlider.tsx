import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";
import activity3 from "@/assets/activity-3.png";
import activity8 from "@/assets/activity-8.png";
import logo from "@/assets/logo.webp";

const slides = [
  {
    image: heroBanner,
    eyebrow: "Welcome to Holy Fathima High School",
    title: "Building Bright Futures\nSince 1989",
    subtitle: "Premium English-medium education from Nursery to Class 10 — CBSE primary and SSC high school in the heart of New Hafeezpet, Hyderabad.",
  },
  {
    image: activity3,
    eyebrow: "Where Learning Comes Alive",
    title: "Inspiring Minds,\nShaping Tomorrow",
    subtitle: "Experienced faculty, joyful classrooms, and a curriculum that nurtures curiosity and confidence.",
  },
  {
    image: activity8,
    eyebrow: "Holistic Development",
    title: "Knowledge is Power.\nCharacter is Everything.",
    subtitle: "Academics, sports, exhibitions and values — a complete educational journey for every child.",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[i];

  return (
    <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy)]/85 via-[color:var(--royal)]/70 to-[color:var(--navy)]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_0,#0f1e4dcc_70%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Floating gold orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-[color:var(--royal)]/40 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <motion.img
          src={logo}
          alt=""
          aria-hidden
          className="absolute right-[6%] top-[18%] hidden lg:block h-40 w-40 rounded-full opacity-30 ring-2 ring-[color:var(--gold)]/40"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 pt-20">
        <div className="max-w-3xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)] ring-1 ring-white/20">
                <Sparkles className="size-3.5" /> {slide.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] whitespace-pre-line">
                {slide.title.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {idx === 1 ? <span className="text-gradient-gold">{line}</span> : line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/admissions" className="group inline-flex items-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 text-sm font-bold shadow-gold hover:-translate-y-0.5 transition-transform">
              Admissions Open
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/20 transition">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex items-center gap-4">
        <button onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)} aria-label="Previous"
          className="size-10 grid place-items-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 text-white hover:bg-white/20">
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[color:var(--gold)]" : "w-4 bg-white/40"}`} />
          ))}
        </div>
        <button onClick={() => setI((p) => (p + 1) % slides.length)} aria-label="Next"
          className="size-10 grid place-items-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 text-white hover:bg-white/20">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}
