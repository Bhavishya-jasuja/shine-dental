"use client"

import { motion } from "framer-motion"
import { Users, Calendar, Activity, Star } from "lucide-react"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"

const STATS = [
  { value: 15, suffix: "+", label: "Years of Excellence", icon: Calendar, color: "blue" },
  { value: 10000, suffix: "+", label: "Happy Patients", icon: Users, color: "teal" },
  { value: 50000, suffix: "+", label: "Treatments Done", icon: Activity, color: "cyan" },
  { value: 48, suffix: "", label: "Google Rating", icon: Star, color: "gold", decimals: 1, display: "4.8★" },
]

const colorMap = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600", number: "text-blue-600" },
  teal: { bg: "bg-teal-50", icon: "text-teal-600", number: "text-teal-600" },
  cyan: { bg: "bg-cyan-50", icon: "text-cyan-600", number: "text-cyan-600" },
  gold: { bg: "bg-amber-50", icon: "text-amber-500", number: "text-amber-600" },
}

export function StatsSection() {
  return (
    <section className="relative py-16 bg-white border-y border-slate-100">
      {/* Subtle pattern */}
      <div className="absolute inset-0 section-dots opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => {
            const colors = colorMap[stat.color as keyof typeof colorMap]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-5 h-5 ${colors.icon}`} />
                </div>

                <div className={`text-3xl sm:text-4xl font-extrabold ${colors.number} mb-1 tabular-nums`}>
                  {stat.display ? (
                    <span>{stat.display}</span>
                  ) : (
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
