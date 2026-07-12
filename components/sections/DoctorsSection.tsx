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
  Certification: BadgeCheck,
  "International Training": Globe,
  "Academic Experience": Briefcase,
  Research: BookOpen,
  "Current Position": Briefcase,
  Memberships: Users,
}

export function DoctorsSection() {
  return (
    <section id="doctors" className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#0C1B33] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-600/10 blur-[80px] -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet Our"
          highlight="Specialist Doctors"
          subtitle="IBE-certified specialist endodontists dedicated to painless, precision dental care — trusted by 10,000+ patients across Muzaffarnagar."
          light
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
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  {/* Glow ring */}
                  <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-teal-500/10 blur-2xl" />
                  <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl border border-white/10">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={480}
                      height={560}
                      priority={idx === 0}
                      className="w-full aspect-[4/5] object-cover object-top"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B33]/75 via-[#0C1B33]/5 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white font-bold text-xl leading-tight">{doctor.name}</p>
                      <p className="text-white/60 text-sm mt-1">{doctor.title}</p>
                    </div>
                  </div>

                  {/* Info strip */}
                  <div className="relative flex items-center gap-3 mt-4 glass-dark rounded-2xl px-5 py-3.5 border border-white/10">
                    <span className="text-white text-xs font-semibold whitespace-nowrap">{doctor.badge}</span>
                    <span className="w-px h-4 bg-white/15 shrink-0" />
                    <span className="text-white text-xs font-semibold whitespace-nowrap">{doctor.experience} Yrs Exp.</span>
                    <span className="w-px h-4 bg-white/15 shrink-0 hidden sm:block" />
                    <span className="text-white/50 text-xs truncate hidden sm:block">{doctor.memberships.join(" · ")}</span>
                  </div>
                </div>
              </div>

              {/* Content column */}
              <div className={idx % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-bold tracking-wider uppercase mb-4">
                  {doctor.title}
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  {doctor.name}
                </h3>

                <p className="text-white/60 text-sm font-semibold mb-1">{doctor.qualifications}</p>
                <p className="text-white/55 leading-relaxed mb-7">{doctor.bio}</p>

                {/* Credentials */}
                <div className="divide-y divide-white/8 border-t border-white/8">
                  {doctor.credentials.map((cred) => {
                    const Icon = CREDENTIAL_ICONS[cred.label] ?? BadgeCheck
                    return (
                      <div key={cred.label} className="flex gap-3.5 py-4">
                        <Icon className="w-4 h-4 text-blue-300/80 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-blue-300/70 text-[10px] font-bold uppercase tracking-wider mb-1">
                            {cred.label}
                          </p>
                          <p className="text-white/70 text-sm leading-relaxed">{cred.value}</p>
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
