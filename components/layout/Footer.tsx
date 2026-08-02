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
    <footer className="bg-[#F8F8F6] text-[#2A2A28] relative overflow-hidden border-t border-[#E8E8E4]">
      {/* Emergency Bar */}
      <div
        className="relative py-3.5 border-b border-gold-500/20"
        style={{ background: "linear-gradient(90deg, #2A2A28, #5C2430, #2A2A28)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white">
          <div className="flex items-center gap-2.5 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-300" />
            </span>
            Dental Emergency? We&apos;re here to help.
          </div>
          <div className="flex gap-2.5">
            <a
              href={`tel:+91${CLINIC.primaryPhone}`}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 hover:border-gold-300/40 font-semibold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {CLINIC.primaryPhone}
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 hover:border-gold-300/40 font-semibold text-xs transition-colors"
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
              className="w-10 h-10 rounded-xl object-cover shadow-md shadow-gold-900/10"
            />
            <div>
              <p className="font-extrabold text-base text-[#2A2A28] leading-none">Shine Dental</p>
              <p className="text-xs text-[#666666] mt-0.5">& Medical Clinic</p>
            </div>
          </div>
          <p className="text-[#666666] text-sm leading-relaxed mb-5">
            IBE-certified specialist endodontists providing advanced microscopic dental care with 15+ years of excellence in Muzaffarnagar.
          </p>

          {/* Rating */}
          <a
            href={CLINIC.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white hover:bg-gold-50 border border-[#E8E8E4] transition-colors"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-[#2A2A28] text-xs font-semibold">
              {CLINIC.rating} · {CLINIC.ratingCount} Reviews
            </span>
          </a>

          {/* Socials */}
          <div className="flex gap-2">
            <a
              href={CLINIC.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-[#E8E8E4] hover:border-gold-300 flex items-center justify-center transition-colors"
              aria-label="Google Reviews"
            >
              <GoogleIcon className="w-4 h-4" />
            </a>
            <a
              href={CLINIC.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-[#E8E8E4] hover:border-gold-300 flex items-center justify-center transition-colors text-[#666666] hover:text-gold-600"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white border border-[#E8E8E4] hover:border-gold-300 flex items-center justify-center transition-colors text-[#666666] hover:text-gold-600"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-bold text-sm text-[#2A2A28] mb-4 uppercase tracking-wider">Quick Links</p>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#666666] hover:text-gold-600 hover:translate-x-1 transition-all flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-500" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="font-bold text-sm text-[#2A2A28] mb-4 uppercase tracking-wider">Services</p>
          <ul className="space-y-2.5">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-[#666666] hover:text-gold-600 hover:translate-x-1 transition-all flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-500" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="font-bold text-sm text-[#2A2A28] mb-4 uppercase tracking-wider">Contact</p>
          <div className="space-y-4">
            <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 group">
              <MapPin className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-[#666666] group-hover:text-gold-600 transition-colors leading-relaxed">
                {CLINIC.address}
              </span>
            </a>
            <div className="flex gap-3">
              <Phone className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                {CLINIC.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="text-sm text-[#666666] hover:text-gold-600 transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <a href={`mailto:${CLINIC.email}`} className="flex gap-3 group">
              <Mail className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span className="text-sm text-[#666666] group-hover:text-gold-600 transition-colors">
                {CLINIC.email}
              </span>
            </a>
            <div className="flex gap-3">
              <Clock className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <span className="text-[#2A2A28] font-semibold">{CLINIC.hours.weekdays.label}:</span>{" "}
                <span className="text-[13px] font-bold text-[#2A2A28]">{CLINIC.hours.weekdays.time}</span>
                <p className="font-bold mt-1" style={{ color: "#A35A5A" }}>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[#E8E8E4] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#666666]">
          <p>© {year} {CLINIC.name}. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/jasujabhavishya/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#2A2A28] hover:text-gold-600 transition-colors"
            >
              Bhavishya Jasuja
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
