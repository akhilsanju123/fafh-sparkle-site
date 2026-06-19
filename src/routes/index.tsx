import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import {
  AboutSection, AdmissionsCTA, AnnouncementTicker, FacilitiesSection,
  GalleryPreview, NewsSection, ProgramsSection, TestimonialsSection, WhyChooseSection,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
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
