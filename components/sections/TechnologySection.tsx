"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Microscope, ScanFace, Zap, Activity, ShieldCheck, Settings } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { TECHNOLOGIES } from "@/constants/technology"

const ICON_MAP: Record<string, React.ElementType> = {
  microscope: Microscope,
  "scan-face": ScanFace,
  zap: Zap,
  activity: Activity,
  "shield-check": ShieldCheck,
  settings: Settings,
}

const TECH_IMAGES: Record<string, string> = {
  "Surgical Microscope": "/images/carousel/microscope.jpeg",
  "Intraoral Scanner": "/images/carousel/intraoral-scanner.jpg",
  "Dental Laser": "/images/carousel/laser.webp",
  "Digital Radiology": "/images/services/digital-radiology.webp",
}

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 sm:py-28 bg-gradient-to-br from-[#0C1B33] via-[#0D2E6B] to-[#0C1B33] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="State-of-the-Art Equipment"
          title="Technology That"
          highlight="Changes Everything"
          subtitle="We invest in the most advanced dental technology so you receive treatments that were previously only available in major cities."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = ICON_MAP[tech.icon] ?? Microscope
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/8 hover:border-white/14 transition-all duration-300"
              >
                {/* Real photo header if available */}
                {TECH_IMAGES[tech.title] ? (
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={TECH_IMAGES[tech.title]}
                      alt={tech.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D2E6B]/90" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/15 text-white/90 border border-white/15 backdrop-blur-sm">
                      {tech.highlight}
                    </span>
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-blue-300" />
                    </div>
                    <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/10 mb-3">
                      {tech.highlight}
                    </span>
                  </div>
                )}

                <div className="p-5 pt-4">
                  {TECH_IMAGES[tech.title] && (
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-blue-300" />
                    </div>
                  )}
                  <h3 className="text-white font-bold text-base mb-2 leading-snug">{tech.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{tech.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-br-2xl rounded-tl-full pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="text-white font-extrabold text-xl mb-1">
              Experience the difference of specialist care
            </p>
            <p className="text-white/55 text-sm">
              Internationally trained doctors · State-of-the-art equipment · 10,000+ successful treatments
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-white text-[#1565C0] font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg"
          >
            Book Consultation →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
