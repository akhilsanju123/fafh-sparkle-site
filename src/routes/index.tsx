import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import {
  AboutSection, AdmissionsCTA, AnnouncementTicker, FacilitiesSection,
  GalleryPreview, NewsSection, ProgramsSection, TestimonialsSection, WhyChooseSection,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Holy Fathima High School, New Hafeezpet — English-medium School in Hyderabad" },
      { name: "description", content: "Premium English-medium school in New Hafeezpet, Hyderabad. Nursery to Class 10 — CBSE primary, SSC high school, plus Abacus and IIT Foundation. Admissions open." },
      { property: "og:title", content: "Holy Fathima High School, New Hafeezpet" },
      { property: "og:description", content: "Building bright futures since 1989. English-medium education from Nursery to Class 10 in New Hafeezpet, Hyderabad." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSlider />
      <AnnouncementTicker />
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <WhyChooseSection />
      <GalleryPreview />
      <TestimonialsSection />
      <AdmissionsCTA />
      <NewsSection />
    </>
  );
}
