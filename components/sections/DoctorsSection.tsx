"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Globe, BadgeCheck, Users, BookOpen, Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { DOCTORS } from "@/constants/doctors"

const CREDENTIAL_ICONS: Record<string, React.ElementType> = {
  Education: GraduationCap,
  "Post Graduation": GraduationCap,
  "Special Recognition": BadgeCheck,
  Recognition: BadgeCheck,
  Certification: BadgeCheck,
  "International Training": Globe,
  "Academic Experience": Briefcase,
  Research: BookOpen,
  "Current Position": Briefcase,
  Memberships: Users,
}

export function DoctorsSection() {
  return (
    <section id="doctors" className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-100/40 blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F8F8F6] blur-[80px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet Our"
          highlight="Specialist Doctors"
          subtitle="IBE-certified specialist endodontists and Implantologists, precision dental care, trusted by 10,000+ patients across Muzaffarnagar."
        />

        <div className="space-y-16 lg:space-y-24">
          {DOCTORS.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image column */}
              <div className={`relative ${idx % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <div className="relative mx-auto lg:mx-0">
                  {/* Glow ring */}
                  <div className="absolute -inset-4 rounded-[2rem] bg-gold-200/25 blur-2xl" />
                  <div className="group relative overflow-hidden rounded-[1.75rem] shadow-xl border border-[#E8E8E4]">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={480}
                      height={320}
                      priority={idx === 0}
                      className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A28]/70 via-[#2A2A28]/5 to-transparent" />

                    {/* Ambient shine sweep — slower, more elegant; auto-loops so it also plays on mobile (no hover) */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.13) 50%, transparent 65%)" }}
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3.5, delay: idx * 0.6, ease: "easeInOut" }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white font-bold text-xl leading-tight">{doctor.name}</p>
                      <p className="text-white/70 text-sm mt-1">{doctor.title}</p>
                    </div>
                  </div>

                  {/* Info strip */}
                  <div className="relative flex items-center gap-3 mt-4 bg-white rounded-2xl px-5 py-3.5 border border-[#E8E8E4] shadow-sm">
                    <span className="text-[#2A2A28] text-xs font-semibold whitespace-nowrap">{doctor.badge}</span>
                    <span className="w-px h-4 bg-[#E8E8E4] shrink-0" />
                    <span className="text-[#2A2A28] text-xs font-semibold whitespace-nowrap">{doctor.experience} Yrs Exp.</span>
                    <span className="w-px h-4 bg-[#E8E8E4] shrink-0 hidden sm:block" />
                    <span className="text-[#666666] text-xs truncate hidden sm:block">{doctor.memberships.join(" · ")}</span>
                  </div>
                </div>
              </div>

              {/* Content column */}
              <div className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-50 border border-gold-100 text-gold-700 text-xs font-bold tracking-wider uppercase mb-4">
                  {doctor.title}
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2A2A28] tracking-tight leading-tight mb-3">
                  {doctor.name}
                </h3>

                <p className="text-[#666666] text-sm font-semibold mb-1">{doctor.qualifications}</p>
                {doctor.bio && (
                  <p className="text-[#666666] leading-relaxed mb-7">{doctor.bio}</p>
                )}

                {/* Credentials */}
                <div className="divide-y divide-[#E8E8E4] border-t border-[#E8E8E4]">
                  {doctor.credentials.map((cred) => {
                    const Icon = CREDENTIAL_ICONS[cred.label] ?? BadgeCheck
                    return (
                      <div key={cred.label} className="flex gap-3.5 py-4">
                        <Icon className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-gold-700 text-[10px] font-bold uppercase tracking-wider mb-1">
                            {cred.label}
                          </p>
                          <p className="text-[#2A2A28] text-sm leading-relaxed">{cred.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
