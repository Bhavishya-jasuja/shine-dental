"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Microscope, ScanFace, Zap, Activity, ShieldCheck, Settings, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { TECHNOLOGIES } from "@/constants/technology"

const ICON_MAP: Record<string, React.ElementType> = {
  microscope: Microscope,
  "scan-face": ScanFace,
  zap: Zap,
  activity: Activity,
  "shield-check": ShieldCheck,
  settings: Settings,
  sparkles: Sparkles,
}

const TECH_IMAGES: Record<string, string> = {
  "Surgical Microscope": "/images/microscope-treatment.jpeg",
  "Intraoral Scanner": "/images/carousel/intraoral-scanner.jpg",
  "Dental Laser": "/images/carousel/laser.webp",
  "Digital Radiology": "/images/services/digital-radiology.webp",
  "Rubber Dam System": "/images/technology/rubber-dam.jpg",
  "Rotary Endodontics": "/images/technology/rotary-endodontics.png",
  "Facial Aesthetics": "/images/technology/facial-aesthetics.jpg",
}

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 sm:py-28 bg-[#F8F8F6] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold-100/50 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="State-of-the-Art Equipment"
          title="Technology That"
          highlight="Changes Everything"
          subtitle="We invest in the most advanced dental technology so you receive treatments that were previously only available in major cities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = ICON_MAP[tech.icon] ?? Microscope
            const img = TECH_IMAGES[tech.title]
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-[#E8E8E4] bg-white overflow-hidden hover:border-gold-300 hover:shadow-xl hover:shadow-gold-900/10 transition-all duration-300"
              >
                {/* Real photo header if available */}
                {img ? (
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={img}
                      alt={tech.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                    />

                    {/* Hover shine sweep */}
                    <div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out pointer-events-none"
                      style={{ background: "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.14) 50%, transparent 65%)" }}
                    />

                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/45 text-white border border-white/15 backdrop-blur-sm">
                      {tech.highlight}
                    </span>
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F8F8F6] text-[#666666] border border-[#E8E8E4] mb-3">
                      {tech.highlight}
                    </span>
                  </div>
                )}

                <div className="p-5 pt-4">
                  {img && (
                    <div className="w-9 h-9 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center mb-3 group-hover:bg-gold-100 group-hover:scale-110 transition-all">
                      <Icon className="w-4 h-4 text-gold-600" />
                    </div>
                  )}
                  <h3 className="text-[#2A2A28] font-bold text-base mb-2 leading-snug">{tech.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{tech.description}</p>
                </div>
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
          className="mt-12 rounded-2xl border border-[#E8E8E4] bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm"
        >
          <div>
            <p className="text-[#2A2A28] font-extrabold text-xl mb-1">
              Experience the difference of specialist care
            </p>
            <p className="text-[#666666] text-sm">
              Internationally trained doctors · State-of-the-art equipment · 10,000+ successful treatments
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-[#B8935A] text-white font-bold text-sm hover:bg-[#A17F49] transition-colors shadow-md"
          >
            Book Consultation →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
