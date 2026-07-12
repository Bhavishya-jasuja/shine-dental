import Image from "next/image"
import { Phone, Mail, MapPin, Clock, MessageCircle, Star } from "lucide-react"
import { CLINIC } from "@/constants/clinic"
import { GoogleIcon } from "@/components/shared/GoogleIcon"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const QUICK_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#doctors", label: "Our Doctors" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

const SERVICE_LINKS = [
  "Microscopic Root Canal",
  "Dental Implants",
  "Laser Dentistry",
  "Smile Design & Veneers",
  "Digital Dentistry",
  "Braces & Aligners",
  "Kids Dentistry",
  "Crowns & Bridges",
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0C1B33] text-white relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] rounded-full bg-teal-600/10 blur-[100px] translate-y-1/3" />
      </div>

      {/* Emergency Bar */}
      <div className="relative bg-gradient-to-r from-red-600 to-rose-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-2 font-semibold">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Dental Emergency? We&apos;re here to help.
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:+91${CLINIC.primaryPhone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 font-bold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {CLINIC.primaryPhone}
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 font-bold text-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/images/logo/logo.jpeg"
              alt="Shine Dental Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-blue-500/30"
            />
            <div>
              <p className="font-extrabold text-base text-white leading-none">Shine Dental</p>
              <p className="text-xs text-white/40 mt-0.5">& Medical Clinic</p>
            </div>
          </div>
          <p className="text-white/55 text-sm leading-relaxed mb-5">
            IBE-certified specialist endodontists providing advanced microscopic dental care with 15+ years of excellence in Muzaffarnagar.
          </p>

          {/* Rating */}
          <a
            href={CLINIC.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/8 hover:bg-white/12 border border-white/10 transition-colors"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white/80 text-xs font-semibold">
              {CLINIC.rating} · {CLINIC.ratingCount} Reviews
            </span>
          </a>

          {/* Socials */}
          <div className="flex gap-2">
            <a
              href={CLINIC.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors"
              aria-label="Google Reviews"
            >
              <GoogleIcon className="w-4 h-4" />
            </a>
            <a
              href={CLINIC.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors text-white/70 hover:text-white"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors text-white/70 hover:text-white"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-bold text-sm text-white/80 mb-4 uppercase tracking-wider">Quick Links</p>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/55 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="font-bold text-sm text-white/80 mb-4 uppercase tracking-wider">Services</p>
          <ul className="space-y-2.5">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-white/55 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-teal-400" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="font-bold text-sm text-white/80 mb-4 uppercase tracking-wider">Contact</p>
          <div className="space-y-4">
            <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 group">
              <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-white/55 group-hover:text-white/80 transition-colors leading-relaxed">
                {CLINIC.address}
              </span>
            </a>
            <a href={`tel:+91${CLINIC.phones[0]}`} className="flex gap-3 group">
              <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-sm text-white/55 group-hover:text-white/80 transition-colors">
                {CLINIC.phones[0]}
              </span>
            </a>
            <a href={`mailto:${CLINIC.email}`} className="flex gap-3 group">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-sm text-white/55 group-hover:text-white/80 transition-colors">
                {CLINIC.email}
              </span>
            </a>
            <div className="flex gap-3">
              <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-white/55">
                <p>Mon–Sat: 11AM–3PM</p>
                <p>5PM–7:30PM</p>
                <p className="text-red-400 font-semibold mt-1">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/8 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
          <p>© {year} {CLINIC.name}. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/jasujabhavishya/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/60 hover:text-white transition-colors"
            >
              Bhavishya Jasuja
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
