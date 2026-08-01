"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: "left" | "center" | "right"
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align]

  return (
    <div className={cn("flex flex-col gap-3 mb-12", alignClass, className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full",
              light
                ? "bg-white/10 border border-white/20 text-white/90"
                : "bg-gold-50 border border-gold-100 text-gold-700"
            )}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]",
          light ? "text-white" : "text-[#2A2A28]"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className="text-gradient">{highlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={cn(
            "text-base sm:text-lg max-w-2xl leading-relaxed",
            light ? "text-white/65" : "text-slate-500",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
