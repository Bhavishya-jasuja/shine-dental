"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Menu, Star, Calendar } from "lucide-react"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { MobileMenu } from "./MobileMenu"
import { CLINIC } from "@/constants/clinic"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#doctors", label: "Doctors" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()

  return (
    <>
      {/* Top Banner */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#F8F8F6] border-b border-[#E8E8E4]">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between text-xs text-[#2A2A28]/70">
          <div className="flex items-center gap-2.5 pl-1 pr-3.5 py-1 rounded-full bg-white border border-[#E8E8E4]">
            <a href={`tel:+91${CLINIC.primaryPhone}`} className="flex items-center gap-1.5 pl-0.5 font-semibold text-[#2A2A28] hover:text-gold-600 transition-colors">
              <span className="w-5 h-5 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                <Phone className="w-2.5 h-2.5" />
              </span>
              {CLINIC.primaryPhone}
            </a>
            <span className="w-px h-3 bg-[#E8E8E4]" />
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
              <strong className="text-[#2A2A28] font-semibold">{CLINIC.rating}</strong>
              <span>· {CLINIC.ratingCount} Google Reviews</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white border border-[#E8E8E4]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DAA91]" />
              Mon–Sat · 11AM–3PM &amp; 5PM–7:30PM
            </span>
            <span className="w-px h-3 bg-[#E8E8E4]" />
            <span className="text-gold-700 font-semibold">Sunday: Closed</span>
          </div>
        </div>
      </div>

      {/* Main Navbar — always light, subtle shadow once scrolled */}
      <motion.nav
        className={cn(
          "fixed left-0 right-0 z-40 md:top-9 top-0 bg-white transition-shadow duration-300",
          isScrolled ? "shadow-[0_2px_20px_rgba(42,42,40,0.08)]" : "shadow-none"
        )}
      >
        <div className="relative border-b border-[#E8E8E4]">
          {/* Accent underline */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 transition-opacity duration-300",
              isScrolled ? "opacity-100" : "opacity-0"
            )}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-20 gap-4">
            {/* Logo */}
            <a href="#doctors" className="group flex items-center gap-3 flex-shrink-0">
              <div className="relative mt-1">
                <div className="absolute -inset-1.5 rounded-2xl bg-gold-400/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Shine Dental Logo"
                  width={52}
                  height={52}
                  priority
                  className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover shadow-md shadow-gold-900/15 ring-2 ring-[#E8E8E4]"
                />
              </div>
              <div>
                <p className="font-extrabold text-lg sm:text-xl leading-tight tracking-tight text-[#2A2A28]">
                  Shine Dental
                </p>
                <p className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#666666]">
                  & Medical Clinic
                </p>
              </div>
            </a>

            <div className="flex-1" />

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link-underline px-3 py-2 text-sm font-semibold text-[#2A2A28] hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-2 ml-2">
              <a
                href={`tel:+91${CLINIC.primaryPhone}`}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#2A2A28] hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Call Now</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#B8935A] hover:bg-[#A17F49] text-white text-sm font-bold shadow-md shadow-gold-900/15 hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8F8F6] text-[#2A2A28] hover:bg-gold-50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
