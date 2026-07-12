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
      {/* Mobile bottom bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-3 left-3 right-3 z-50 md:hidden"
      >
        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-950/40 border border-white/20 p-2"
          style={{
            paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))",
            background: "linear-gradient(135deg, rgba(12,27,51,0.85), rgba(30,58,138,0.8), rgba(21,101,192,0.78))",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
          }}
        >
          {/* Light texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="relative z-10 flex items-center gap-2">
            <a
              href={`tel:+91${CLINIC.primaryPhone}`}
              aria-label="Call"
              className="w-12 h-12 shrink-0 rounded-xl bg-white/15 active:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 shrink-0 rounded-xl bg-white/15 active:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="flex-1 h-12 rounded-xl bg-white active:bg-blue-50 flex items-center justify-center gap-2 text-[#1565C0] font-bold text-sm shadow-md transition-colors"
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
          className="w-12 h-12 rounded-full bg-[#1565C0] hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-colors"
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
