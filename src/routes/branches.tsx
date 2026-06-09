import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SCHOOL, BRANCHES } from "@/lib/school";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import campus from "@/assets/marthanda-nagar.jpg";

const MAIN_BRANCH_MAPS_URL = "https://share.google/2aYsLAgXmeQJweWO6";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Branches — Holy Fathima High School" },
      { name: "description", content: "Visit any of our four campuses — Marthanda Nagar (Main), Aditya Nagar, Prem Nagar and Indra Reddy Nagar (Kollur)." },
      { property: "og:title", content: "Branches — Holy Fathima High School" },
      { property: "og:description", content: "Four campuses serving New Hafeezpet, Hyderabad and Kollur." },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Branches"
        title={<>Find your nearest <span className="text-gradient-gold">campus</span></>}
        description={`${SCHOOL.shortName} Group of Schools — established ${SCHOOL.established}. Four campuses, one promise of quality English-medium education.`}
        image={campus}
      />

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-8">
          {BRANCHES.map((b) => (
            <article key={b.id} className="glass rounded-3xl overflow-hidden shadow-glow flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                <img src={b.image} alt={b.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="font-display text-2xl font-bold text-[color:var(--navy)]">{b.name}</h2>
                <div className="mt-3 flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="size-4 mt-0.5 text-[color:var(--royal)] shrink-0" />
                  <span>{b.address}</span>
                </div>
                <div className="mt-2 flex items-start gap-3 text-sm">
                  <Phone className="size-4 mt-0.5 text-[color:var(--royal)] shrink-0" />
                  <span className="flex flex-wrap gap-x-3">
                    {b.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="font-medium text-[color:var(--navy)] hover:text-[color:var(--royal)]">{p}</a>
                    ))}
                  </span>
                </div>
                {b.id === "marthanda-nagar" && (
                  <a
                    href={MAIN_BRANCH_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[color:var(--royal)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[color:var(--navy)] transition w-fit"
                  >
                    <ExternalLink className="size-4" />
                    Open in Maps — Main Branch
                  </a>
                )}
                <div className="mt-5 rounded-2xl overflow-hidden border border-border flex-1 min-h-[200px]">
                  <iframe title={b.name} src={b.mapEmbed} className="w-full h-full min-h-[200px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
