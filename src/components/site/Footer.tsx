import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2.1-2H17V2.2C16.7 2.1 15.6 2 14.4 2 11.9 2 10 3.5 10 6.7V10H7v4h3v8h3z"/></svg>
);
const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
);
const Youtube = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M23 7.5c-.3-1.7-1.2-2.5-2.8-2.7C18 4.5 12 4.5 12 4.5s-6 0-8.2.3C2.2 5 1.3 5.8 1 7.5.7 9.3.7 12 .7 12s0 2.7.3 4.5c.3 1.7 1.2 2.5 2.8 2.7C6 19.5 12 19.5 12 19.5s6 0 8.2-.3c1.6-.2 2.5-1 2.8-2.7.3-1.8.3-4.5.3-4.5s0-2.7-.3-4.5zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
);
import logo from "@/assets/logo.webp";
import { SCHOOL, BRANCHES } from "@/lib/school";

export function Footer() {
  return (
    <footer className="mt-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-royal" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative text-white">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-14 w-14 rounded-full ring-2 ring-[color:var(--gold)]" />
              <div>
                <div className="font-display font-bold text-lg">{SCHOOL.name}</div>
                <div className="text-xs uppercase tracking-widest text-gradient-gold">{SCHOOL.location}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/75 leading-relaxed">
              Building bright futures since {SCHOOL.established}. English-medium education
              from Nursery through Class 10 in the heart of New Hafeezpet, Hyderabad.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={SCHOOL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition"><Facebook className="size-4" /></a>
              <a href={SCHOOL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition"><Instagram className="size-4" /></a>
              <a href="#" aria-label="YouTube" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition"><Youtube className="size-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gradient-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                ["/about", "About Us"],
                ["/academics", "Academics"],
                ["/facilities", "Facilities"],
                ["/branches", "Branches"],
                ["/gallery", "Gallery"],
              ].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-[color:var(--gold)] transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gradient-gold">Admissions</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/admissions" className="hover:text-[color:var(--gold)]">How to Apply</Link></li>
              <li><Link to="/admissions" className="hover:text-[color:var(--gold)]">Required Documents</Link></li>
              <li><Link to="/academics" className="hover:text-[color:var(--gold)]">Programs Offered</Link></li>
              <li><Link to="/contact" className="hover:text-[color:var(--gold)]">Schedule a Visit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gradient-gold">Our Campuses</h4>
            <ul className="space-y-4 text-sm text-white/80">
              {BRANCHES.map((b) => (
                <li key={b.id}>
                  <div className="font-semibold text-white">{b.name}</div>
                  <div className="flex gap-2 mt-1"><MapPin className="size-4 mt-0.5 text-[color:var(--gold)] shrink-0" /><span>{b.address}</span></div>
                  <div className="flex gap-2 mt-1 flex-wrap"><Phone className="size-4 mt-0.5 text-[color:var(--gold)] shrink-0" />
                    <span>{b.phones.map((p, i) => (
                      <span key={p}>{i > 0 && " · "}<a href={`tel:${p}`} className="hover:text-[color:var(--gold)]">{p}</a></span>
                    ))}</span>
                  </div>
                </li>
              ))}
              <li className="flex gap-3 pt-2 border-t border-white/10"><Mail className="size-4 mt-0.5 text-[color:var(--gold)] shrink-0" /><a href={`mailto:${SCHOOL.email}`} className="hover:text-[color:var(--gold)]">{SCHOOL.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
            <p>© {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
            <p>Knowledge is Power · New Hafeezpet, Hyderabad</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
