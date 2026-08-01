"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Check, ChevronRight, Microscope, Zap, Smile, Scan, GitMerge, Shield, Heart, Star } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SERVICES } from "@/constants/services"

const ICON_MAP: Record<string, React.ElementType> = {
  microscope: Microscope,
  tooth: Star,
  zap: Zap,
  smile: Smile,
  scan: Scan,
  "git-merge": GitMerge,
  shield: Shield,
  heart: Heart,
}

const BADGE_STYLES = {
  blue: "bg-gold-500/30 border border-white/25 text-white",
  gold: "bg-amber-500/30 border border-white/25 text-white",
  teal: "bg-stone-900/35 border border-white/20 text-white",
  rose: "bg-rose-500/30 border border-white/25 text-white",
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Dental"
          highlight="Services"
          subtitle="Advanced dental treatments delivered with specialist precision. From microscopic root canals to full smile makeovers."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Star
            const isActive = activeId === service.id

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveId(isActive ? null : service.id)}
                className="group relative bg-white rounded-2xl border border-slate-100 hover:border-gold-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://placehold.co/400x250/F8F8F6/B8935A?text=${encodeURIComponent(service.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A28]/50 to-transparent" />

                  {service.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md shadow-sm ${BADGE_STYLES[service.badge.variant]}`}>
                        {service.badge.text}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3">
                    <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4 text-gold-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-[#2A2A28] text-sm mb-1 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs mb-3">{service.shortDesc}</p>

                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-xs leading-relaxed mb-3">{service.description}</p>
                        <ul className="space-y-1.5">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                              <Check className="w-3.5 h-3.5 text-stone-500 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#contact"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-4 flex items-center gap-1 text-xs font-bold text-gold-600 hover:text-gold-700"
                        >
                          Book This Service <ChevronRight className="w-3 h-3" />
                        </a>
                      </motion.div>
                    ) : (
                      <button className="flex items-center gap-1 text-xs font-semibold text-gold-600">
                        Learn more <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </AnimatePresence>
                </div>

                {/* Active indicator */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-600 to-amber-500 transition-transform origin-left duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#B8935A] hover:bg-gold-700 text-white font-bold text-sm shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all"
          >
            Book a Free Consultation <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
