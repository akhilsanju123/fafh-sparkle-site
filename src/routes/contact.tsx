import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import activity6 from "@/assets/activity-6.png";
import { SCHOOL, BRANCHES } from "@/lib/school";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Holy Fathima High School, New Hafeezpet" },
      { name: "description", content: "Get in touch with Holy Fathima High School. Address: 4-1061/84, New New Hafeezpet, Hyderabad. Phone: 9391668092 / 8121731765 / 9391837245." },
      { property: "og:title", content: "Contact Holy Fathima High School" },
      { property: "og:description", content: "Reach our admissions team in New Hafeezpet, Hyderabad — call, email or visit our campus." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Message sent!", { description: "We'll get back to you shortly." });
  };

  const cards = [
    { icon: Mail, title: "Email", lines: [SCHOOL.email], hrefPrefix: "mailto:" },
    { icon: Clock, title: "Hours", lines: ["Mon – Sat: 8:30 AM – 4:30 PM", "Sunday: Closed"] },
  ];

  return (
    <>
      <Toaster richColors position="top-center" />
      <PageHero eyebrow="Contact Us" title={<>We'd love to <span className="text-gradient-gold">hear from you</span></>} description="Questions about admissions, programs or a campus visit — our team is here to help." image={activity6} />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[color:var(--navy)] text-center">Our <span className="text-gradient-gold">Campuses</span></h2>
          <p className="mt-2 text-center text-muted-foreground">Visit us at our campus in New Hafeezpet, Hyderabad.</p>
          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            {BRANCHES.map((b) => (
              <div key={b.id} className="glass rounded-3xl p-6 shadow-glow flex flex-col">
                <div className="flex items-start gap-3">
                  <div className="size-12 grid place-items-center rounded-xl gradient-royal text-white shrink-0"><MapPin className="size-5" /></div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[color:var(--navy)]">{b.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.address}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <div className="size-10 grid place-items-center rounded-lg bg-[color:var(--gold)]/15 text-[color:var(--royal)] shrink-0"><Phone className="size-4" /></div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                    {b.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="font-medium text-[color:var(--navy)] hover:text-[color:var(--royal)]">{p}</a>
                    ))}
                  </div>
                </div>
                <div className="mt-5 rounded-2xl overflow-hidden border border-border min-h-[260px] flex-1">
                  <iframe title={b.name} src={b.mapEmbed} className="w-full h-full min-h-[260px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="glass rounded-3xl p-6 shadow-glow">
              <div className="size-12 grid place-items-center rounded-xl gradient-royal text-white"><c.icon className="size-5" /></div>
              <h3 className="mt-4 font-display text-lg font-bold text-[color:var(--navy)]">{c.title}</h3>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                {c.lines.map((l) => c.hrefPrefix
                  ? <div key={l}><a className="hover:text-[color:var(--royal)]" href={`${c.hrefPrefix}${l}`}>{l}</a></div>
                  : <div key={l}>{l}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="mx-auto max-w-3xl">

          <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-8 shadow-glow">
            <h3 className="font-display text-2xl font-bold text-[color:var(--navy)]">Send a message</h3>
            <p className="text-sm text-muted-foreground mt-1">Fill in the form and our team will respond within one business day.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Input label="Your name" name="name" required />
              <Input label="Phone" name="phone" type="tel" required />
              <div className="sm:col-span-2">
                <Input label="Email" name="email" type="email" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Message *</label>
                <textarea name="message" rows={4} required className="w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--royal)]" placeholder="How can we help?" />
              </div>
            </div>
            <button type="submit" disabled={sending} className="mt-5 w-full inline-flex items-center justify-center rounded-full gradient-royal text-white px-6 py-3.5 font-semibold shadow-glow hover:-translate-y-0.5 transition disabled:opacity-70">
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--royal)]" />
    </div>
  );
}
