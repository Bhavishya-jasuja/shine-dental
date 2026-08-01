"use client"

import { Phone, MessageCircle, ArrowUp, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { CLINIC } from "@/constants/clinic"

export function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Mobile hours tag — sits just above the bottom bar */}
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        className="fixed left-0 right-0 z-50 md:hidden flex justify-center px-4"
        style={{ bottom: "calc(5.25rem + env(safe-area-inset-bottom))" }}
      >
        <span
          className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 px-3 py-1.5 rounded-2xl border border-white/40 shadow-sm"
          style={{
            background: "rgba(255,255,255,0.35)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
          }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DAA91]" />
            <span className="text-[10px] font-semibold text-[#2A2A28]">Mon–Sat · 11AM–3PM &amp; 5PM–7:30PM</span>
          </span>
          <span className="w-px h-3 bg-[#E8E8E4]" />
          <span className="text-[10px] font-semibold text-gold-700">Sunday: Closed</span>
        </span>
      </motion.div>

      {/* Mobile bottom bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="fixed left-3 right-3 z-50 md:hidden"
        style={{ bottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gold-900/15 border border-[#E8E8E4] p-2"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
          }}
        >
          <div className="relative z-10 flex items-center gap-2">
            <a
              href={`tel:+91${CLINIC.primaryPhone}`}
              aria-label="Call"
              className="w-12 h-12 shrink-0 rounded-xl bg-[#F8F8F6] active:bg-gold-100 flex items-center justify-center text-[#2A2A28] transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 shrink-0 rounded-xl bg-[#F8F8F6] active:bg-gold-100 flex items-center justify-center text-[#2A2A28] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="flex-1 h-12 rounded-xl bg-[#B8935A] active:bg-[#A17F49] flex items-center justify-center gap-2 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </a>
          </div>
        </div>
      </motion.div>

      {/* Desktop floating buttons */}
      <div className="hidden md:flex fixed bottom-8 right-6 z-50 flex-col gap-3">
        <motion.a
          href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </motion.a>

        <motion.a
          href={`tel:+91${CLINIC.primaryPhone}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-[#B8935A] hover:bg-gold-700 text-white flex items-center justify-center shadow-lg shadow-gold-500/30 transition-colors"
          aria-label="Call"
        >
          <Phone className="w-5 h-5" />
        </motion.a>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center shadow-md transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
