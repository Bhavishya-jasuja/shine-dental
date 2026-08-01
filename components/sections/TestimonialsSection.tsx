"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { Star, ExternalLink, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { GoogleIcon } from "@/components/shared/GoogleIcon"
import { TESTIMONIALS } from "@/constants/testimonials"
import { CLINIC } from "@/constants/clinic"

type Testimonial = (typeof TESTIMONIALS)[number]

function ReviewCardContent({ t }: { t: Testimonial }) {
  return (
    <div className="relative glass rounded-3xl shadow-premium p-6 sm:p-8 h-[400px] sm:h-[420px] flex flex-col">
      <Quote className="absolute top-6 right-6 w-9 h-9 text-gold-500/10" />

      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-base font-extrabold shrink-0`}>
          {t.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-[#2A2A28] text-sm sm:text-base truncate">{t.name}</p>
          <p className="text-xs text-slate-500">{t.reviewCount}</p>
        </div>
        <GoogleIcon className="w-6 h-6 shrink-0" />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs text-slate-500">· {t.date}</span>
      </div>

      <p className="text-slate-700 text-sm sm:text-base leading-relaxed line-clamp-6 flex-1">
        {t.text}
      </p>

      <span className="mt-4 inline-flex w-fit items-center text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-50/80 text-gold-700 border border-gold-100">
        {t.treatment}
      </span>
    </div>
  )
}

const AUTO_ADVANCE_MS = 5000
const SWIPE_CONFIDENCE_THRESHOLD = 8000

function swipePower(offset: number, velocity: number) {
  return Math.abs(offset) * velocity
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const total = TESTIMONIALS.length

  const goTo = useCallback((i: number, dir: number) => {
    setDirection(dir)
    setCurrent(((i % total) + total) % total)
  }, [total])

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo])

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % total)
    }, AUTO_ADVANCE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, total])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info
    const power = swipePower(offset.x, velocity.x)

    // Fast flicks jump multiple cards at once, like spinning a wheel picker.
    const jump = Math.max(1, Math.min(Math.round(Math.abs(velocity.x) / 500), total - 1))

    if (power < -SWIPE_CONFIDENCE_THRESHOLD) {
      goTo(current + jump, 1)
    } else if (power > SWIPE_CONFIDENCE_THRESHOLD) {
      goTo(current - jump, -1)
    }
  }

  const prevReview = TESTIMONIALS[(current - 1 + total) % total]
  const currentReview = TESTIMONIALS[current]
  const nextReview = TESTIMONIALS[(current + 1) % total]

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-gold-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative color orbs for glass effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[8%] w-[380px] h-[380px] rounded-full bg-gold-300/25 blur-[100px]" />
        <div className="absolute bottom-10 right-[8%] w-[340px] h-[340px] rounded-full bg-stone-300/25 blur-[90px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-amber-200/20 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Verified on Google"
          title="What Our Patients"
          highlight="Say"
          subtitle="Real, unedited 5-star reviews from Shine Dental's Google Business Profile."
        />

        {/* Rating summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 glass rounded-2xl shadow-sm p-6 sm:p-7 mb-12"
        >
          <div className="flex items-center gap-4">
            <GoogleIcon className="w-9 h-9 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-extrabold text-[#2A2A28]">{CLINIC.rating}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Based on <strong className="text-[#2A2A28]">{CLINIC.ratingCount} Google reviews</strong>
              </p>
            </div>
          </div>

          <a
            href={CLINIC.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#B8935A] hover:bg-gold-700 text-white text-sm font-bold shadow-md shadow-gold-500/20 transition-colors"
          >
            Read All Reviews on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev peek */}
          <div
            className="relative w-5 sm:w-16 md:w-24 self-stretch shrink-0 overflow-hidden rounded-l-3xl cursor-pointer"
            onClick={prev}
          >
            <div className="absolute right-0 top-0 w-[260px] sm:w-[420px] md:w-[500px] lg:w-[560px] opacity-40 blur-[3px] scale-95 pointer-events-none select-none">
              <ReviewCardContent t={prevReview} />
            </div>
          </div>

          {/* Current card */}
          <div className="relative w-[260px] sm:w-[420px] md:w-[500px] lg:w-[560px] shrink-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -direction * 60, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag="x"
                dragElastic={0.6}
                dragSnapToOrigin
                onDragEnd={handleDragEnd}
                whileDrag={{ cursor: "grabbing", scale: 1.02 }}
                className="cursor-grab touch-pan-y"
              >
                <ReviewCardContent t={currentReview} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next peek */}
          <div
            className="relative w-5 sm:w-16 md:w-24 self-stretch shrink-0 overflow-hidden rounded-r-3xl cursor-pointer"
            onClick={next}
          >
            <div className="absolute left-0 top-0 w-[260px] sm:w-[420px] md:w-[500px] lg:w-[560px] opacity-40 blur-[3px] scale-95 pointer-events-none select-none">
              <ReviewCardContent t={nextReview} />
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full glass shadow-md flex items-center justify-center text-[#2A2A28] hover:bg-white/90 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#B8935A] shadow-md flex items-center justify-center text-white hover:bg-gold-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#B8935A]" : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
