"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Calendar, Clock } from "lucide-react"
import { CLINIC } from "@/constants/clinic"

export function AppointmentCTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#B8935A] via-[#6B5431] to-[#2A2A28] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-white/70 text-sm font-medium">Emergency Dental Care Available</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              Ready for a Healthier Smile?
            </h2>
            <p className="text-white/65 max-w-lg leading-relaxed">
              Book your appointment with IBE-certified specialist endodontists. Same-week slots available for most treatments.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              Mon–Sat · 11AM–3PM & 5PM–7:30PM
            </div>
          </motion.div>

          {/* Right — CTA buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-[#B8935A] font-extrabold text-base hover:bg-gold-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <div className="flex gap-3">
              <a
                href={`tel:+91${CLINIC.primaryPhone}`}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
