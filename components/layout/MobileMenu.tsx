"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MessageCircle } from "lucide-react"
import { CLINIC } from "@/constants/clinic"

const NAV_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#doctors", label: "Our Doctors" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div>
                <p className="font-extrabold text-[#2A2A28] text-base leading-none">
                  Shine Dental
                </p>
                <p className="text-xs text-slate-400 mt-0.5">& Medical Clinic</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-0.5 px-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center px-4 py-3 rounded-xl text-[#2A2A28] font-semibold text-sm hover:bg-gold-50 hover:text-gold-700 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom CTA */}
            <div className="p-4 border-t border-slate-100 space-y-2">
              <a
                href={`#contact`}
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#B8935A] text-white text-sm font-bold hover:bg-gold-700 transition-colors"
              >
                📅 Book Appointment
              </a>
              <div className="flex gap-2">
                <a
                  href={`tel:+91${CLINIC.primaryPhone}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-gold-300 hover:text-gold-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call
                </a>
                <a
                  href={`https://wa.me/${CLINIC.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 text-emerald-600 text-xs font-semibold hover:border-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
