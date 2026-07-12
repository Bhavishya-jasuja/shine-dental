"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CLINIC } from "@/constants/clinic"

const CLINIC_HIGHLIGHTS = [
  "Multiple fully-equipped treatment rooms",
  "Strict international sterilization protocols",
  "Advanced air purification system",
  "Comfortable and calming patient lounge",
  "Dedicated reception and consultation areas",
  "Wheelchair accessible facility",
]

export function AboutClinicSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Clinic"
          title="Where Advanced Care"
          highlight="Meets Comfort"
          subtitle="A modern, welcoming dental facility in the heart of Muzaffarnagar — designed around your comfort and clinical excellence."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80">
              <Image
                src="/images/hospital.png"
                alt="Shine Dental and Medical Clinic building"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Clinic video */}
            <div className="mt-3 rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <video
                src="/videos/clinic-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>

            {/* Floating info chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-premium"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#0C1B33]">Mon – Sat</p>
                  <p className="text-[11px] text-slate-400">11AM–3PM · 5PM–7:30PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-premium"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#0C1B33]">ISO Standards</p>
                  <p className="text-[11px] text-slate-400">International Sterilization</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="text-2xl font-extrabold text-[#0C1B33] mb-2">
                {CLINIC.name}
              </h3>
              <div className="flex items-center gap-1.5 mb-5">
                <MapPin className="w-4 h-4 text-blue-600" />
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {CLINIC.addressShort}
                </a>
              </div>

              <p className="text-slate-500 leading-relaxed mb-6">
                Our state-of-the-art dental clinic is located in the heart of Muzaffarnagar, featuring modern architecture and cutting-edge dental technology. The facility is designed to provide a comfortable, stress-free environment — because we believe exceptional dental care starts with exceptional surroundings.
              </p>

              <p className="text-slate-500 leading-relaxed mb-8">
                With multiple treatment rooms, advanced sterilization protocols meeting European standards, and a calming, welcoming atmosphere, every visit to Shine Dental is a positive experience. Easily accessible from all parts of Muzaffarnagar.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                {CLINIC_HIGHLIGHTS.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{h}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact info */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:+91${CLINIC.primaryPhone}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1565C0] text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
                >
                  <Phone className="w-4 h-4" />
                  Call Clinic
                </a>
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-blue-300 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-blue-600" />
                  View on Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
