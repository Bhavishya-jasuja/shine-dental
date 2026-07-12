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
      <div
        className="hidden md:block fixed top-0 left-0 right-0 z-50 text-white/85 text-xs py-2 border-b border-white/10"
        style={{ background: "linear-gradient(90deg, #0C1B33, #16294f, #0C1B33)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={`tel:+91${CLINIC.primaryPhone}`} className="flex items-center gap-1.5 hover:text-white transition-colors font-medium">
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-2.5 h-2.5" />
              </span>
              {CLINIC.primaryPhone}
            </a>
            <span className="w-px h-3 bg-white/15" />
            <span className="flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <strong className="text-white">{CLINIC.rating}</strong> · {CLINIC.ratingCount} Google Reviews
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-white/65">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Mon–Sat · 11AM–3PM & 5PM–7:30PM
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300",
          "md:top-[29px]",
          "top-0"
        )}
      >
        <motion.div
          variants={{
            top: { background: "rgba(255,255,255,0)", boxShadow: "none" },
            scrolled: {
              background: "rgba(255,255,255,0.92)",
              boxShadow: "0 2px 20px rgba(12,27,51,0.08)",
            },
          }}
          transition={{ duration: 0.2 }}
          style={{ backdropFilter: isScrolled ? "blur(20px)" : "none" }}
          className="relative border-b border-transparent"
        >
          {/* Accent underline */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 transition-opacity duration-300",
              isScrolled ? "opacity-100" : "opacity-0"
            )}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-16 gap-4">
            {/* Logo */}
            <a href="#doctors" className="group flex items-center gap-3 flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500/50 to-cyan-400/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Shine Dental Logo"
                  width={36}
                  height={36}
                  className="relative w-9 h-9 rounded-xl object-cover shadow-md shadow-blue-500/30 ring-2 ring-white/10"
                />
              </div>
              <div>
                <p className={cn(
                  "font-extrabold text-sm leading-none transition-colors",
                  isScrolled ? "text-[#0C1B33]" : "text-white"
                )}>
                  Shine Dental
                </p>
                <p className={cn(
                  "text-[10px] font-medium transition-colors",
                  isScrolled ? "text-slate-400" : "text-white/60"
                )}>& Medical Clinic</p>
              </div>
            </a>

            <div className="flex-1" />

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "nav-link-underline px-3 py-2 text-sm font-semibold transition-colors rounded-lg",
                      isScrolled
                        ? "text-slate-600 hover:text-[#1565C0] hover:bg-blue-50"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    )}
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
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors rounded-lg",
                  isScrolled
                    ? "text-slate-600 hover:text-[#1565C0] hover:bg-blue-50"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Call Now</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1565C0] to-[#0EA5E9] hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-bold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              className={cn(
                "md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors",
                isScrolled
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
