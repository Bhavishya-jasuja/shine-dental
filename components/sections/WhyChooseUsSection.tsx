"use client"

import { motion } from "framer-motion"
import { SmilePlus, Award, Shield, Heart, Clock, BadgeCheck, Zap, Users } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"

const FEATURES = [
  {
    icon: SmilePlus,
    title: "Dental Implants",
    description: "All-on-4, All-on-6, immediate loading & single day implant dentistry.",
    color: "blue",
  },
  {
    icon: Award,
    title: "IBE Certified Specialists",
    description: "Diplomates of the Indian Board of Endodontics — highest endodontic qualification.",
    color: "gold",
  },
  {
    icon: Shield,
    title: "International Standards",
    description: "Sterilization and infection control protocols matching European standards.",
    color: "teal",
  },
  {
    icon: Heart,
    title: "Painless Procedures",
    description: "Advanced techniques and local anesthesia ensure virtually pain-free treatments.",
    color: "rose",
  },
  {
    icon: Zap,
    title: "Advanced Laser Technology",
    description: "Most advanced dental laser for bloodless, faster-healing procedures.",
    color: "cyan",
  },
  {
    icon: Users,
    title: "10,000+ Happy Patients",
    description: "A decade of trust, built one smile at a time in Muzaffarnagar.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "Convenient Timings",
    description: "Morning and evening slots to fit your schedule. Emergency care available.",
    color: "teal",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description: "Honest, upfront pricing with affordable EMI options. No hidden costs.",
    color: "gold",
  },
]

const colorMap = {
  blue: { bg: "bg-gold-50", icon: "text-gold-600", border: "border-gold-100", hover: "hover:border-gold-200" },
  gold: { bg: "bg-amber-50", icon: "text-amber-600", border: "border-amber-100", hover: "hover:border-amber-200" },
  teal: { bg: "bg-stone-50", icon: "text-stone-600", border: "border-stone-100", hover: "hover:border-stone-200" },
  rose: { bg: "bg-rose-50", icon: "text-rose-600", border: "border-rose-100", hover: "hover:border-rose-200" },
  cyan: { bg: "bg-amber-50", icon: "text-amber-600", border: "border-amber-100", hover: "hover:border-amber-200" },
}

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Patients Choose Us"
          title="Excellence in Every"
          highlight="Appointment"
          subtitle="We combine specialist expertise, cutting-edge technology, and genuine care to deliver dental experiences that exceed expectations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FEATURES.map((feature, i) => {
            const colors = colorMap[feature.color as keyof typeof colorMap]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className={`bg-white rounded-2xl p-5 border ${colors.border} ${colors.hover} shadow-sm hover:shadow-card-hover transition-all duration-300 group`}
              >
                <div className={`w-11 h-11 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <h3 className="font-bold text-[#2A2A28] text-sm mb-1.5 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
