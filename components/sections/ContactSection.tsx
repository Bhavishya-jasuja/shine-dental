"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CLINIC } from "@/constants/clinic"

const TREATMENTS = [
  "Micro-Endodontics (Root Canal)",
  "Dental Implants",
  "Smile Design & Veneers",
  "Laser Dentistry",
  "Digital Dentistry",
  "Braces & Aligners",
  "Crowns & Bridges",
  "Kids Dentistry",
  "Teeth Whitening",
  "General Consultation",
  "Emergency Care",
]

const TIME_SLOTS = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
]

interface FormData {
  name: string
  phone: string
  email: string
  treatment: string
  date: string
  time: string
  message: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", treatment: "", date: "", time: "", message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `*New Appointment Request*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      `📧 Email: ${form.email || "Not provided"}\n` +
      `🦷 Treatment: ${form.treatment}\n` +
      `📅 Date: ${form.date}\n` +
      `⏰ Time: ${form.time}\n` +
      `💬 Message: ${form.message || "None"}`
    )

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.open(`https://wa.me/${CLINIC.whatsapp}?text=${msg}`, "_blank")
    }, 800)
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#2A2A28] placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"

  const CONTACT_ITEMS = [
    {
      icon: MapPin,
      label: "Address",
      value: CLINIC.address,
      href: CLINIC.mapsUrl,
      color: "blue" as const,
    },
    {
      icon: Phone,
      label: "Phone",
      value: CLINIC.phones.join("  ·  "),
      href: `tel:+91${CLINIC.phones[0]}`,
      color: "teal" as const,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CLINIC.phones[0],
      href: `https://wa.me/${CLINIC.whatsapp}`,
      color: "emerald" as const,
    },
    {
      icon: Mail,
      label: "Email",
      value: CLINIC.email,
      href: `mailto:${CLINIC.email}`,
      color: "amber" as const,
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon–Sat: 11AM–3PM & 5PM–7:30PM\nSunday: Closed",
      color: "violet" as const,
    },
  ]

  const colorMap = {
    blue: { bg: "bg-gold-50", icon: "text-gold-600" },
    teal: { bg: "bg-stone-50", icon: "text-stone-600" },
    emerald: { bg: "bg-emerald-50", icon: "text-emerald-600" },
    amber: { bg: "bg-amber-50", icon: "text-amber-600" },
    violet: { bg: "bg-violet-50", icon: "text-violet-600" },
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative color orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-gold-200/25 blur-[110px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-stone-200/25 blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book Your"
          highlight="Appointment"
          subtitle="Schedule a consultation with our specialist doctors. We'll confirm your appointment within 2 hours."
        />

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
          {/* Left — Contact info */}
          <div className="space-y-4">
            {CONTACT_ITEMS.map((item, i) => {
              const colors = colorMap[item.color]
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-x-0.5 transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-4.5 h-4.5 ${colors.icon}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-slate-600 hover:text-[#B8935A] transition-colors leading-relaxed"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-slate-200 h-64 sm:h-72 overflow-hidden relative border border-slate-100 shadow-sm"
            >
              <iframe
                src={CLINIC.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                title="Shine Dental & Medical Clinic location"
              />

              {/* Pin label overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-2 rounded-xl glass shadow-md pointer-events-none max-w-[75%]">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-xs font-bold text-[#2A2A28] truncate">{CLINIC.shortName}</span>
              </div>

              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white text-xs font-bold text-[#B8935A] shadow-md hover:shadow-lg transition-shadow"
              >
                Get Directions →
              </a>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-3xl border border-slate-100 shadow-premium p-6 sm:p-8 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-600 via-amber-500 to-stone-500" />

            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-stone-600" />
                </div>
                <h3 className="text-xl font-extrabold text-[#2A2A28] mb-2">Appointment Requested!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Your request has been sent via WhatsApp. We&apos;ll confirm your appointment shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-[#B8935A] text-white text-sm font-bold hover:bg-gold-700 transition-colors"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gold-50 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#2A2A28] text-xl leading-tight">Book an Appointment</h3>
                    <p className="text-slate-400 text-sm">We&apos;ll confirm within 2 hours via WhatsApp</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className={inputClass}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 mb-1.5 block">Phone *</label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        className={inputClass}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                        pattern="[0-9]{10}"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-1.5 block">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com (optional)"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-1.5 block">Treatment Required *</label>
                    <select
                      className={inputClass}
                      value={form.treatment}
                      onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                      required
                    >
                      <option value="">Select treatment</option>
                      {TREATMENTS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 mb-1.5 block">Preferred Date *</label>
                      <input
                        type="date"
                        className={inputClass}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 mb-1.5 block">Preferred Time *</label>
                      <select
                        className={inputClass}
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        required
                      >
                        <option value="">Select time</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-1.5 block">Additional Message</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your dental concern..."
                      className={inputClass}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#B8935A] hover:bg-gold-700 text-white font-bold text-sm disabled:opacity-60 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Your details are sent directly to our WhatsApp for instant confirmation.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
