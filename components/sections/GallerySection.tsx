"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"

const GALLERY = [
  { src: "/images/gallery/AB901295.jpg", alt: "Shine Dental Clinic", orientation: "landscape" },
  { src: "/images/gallery/AB901301.jpg", alt: "Treatment Room", orientation: "portrait" },
  { src: "/images/gallery/AB901304.jpg", alt: "Dental Equipment", orientation: "landscape" },
  { src: "/images/gallery/AB901313.jpg", alt: "Clinic Interior", orientation: "landscape" },
  { src: "/images/gallery/AB901330.jpg", alt: "Patient Area", orientation: "landscape" },
  { src: "/images/gallery/AB901337.jpg", alt: "Advanced Technology", orientation: "landscape" },
  { src: "/images/gallery/AB901341.jpg", alt: "Sterilization Unit", orientation: "landscape" },
  { src: "/images/gallery/AB901344.jpg", alt: "Reception Area", orientation: "landscape" },
  { src: "/images/gallery/AB901350.jpg", alt: "Dental Suite", orientation: "portrait" },
  { src: "/images/gallery/AB901352.jpg", alt: "Treatment Chair", orientation: "landscape" },
  { src: "/images/gallery/AB901354.jpg", alt: "Clinic Facility", orientation: "landscape" },
  { src: "/images/gallery/AB901369.jpg", alt: "Shine Dental", orientation: "landscape" },
  { src: "/images/gallery/AB901390.jpg", alt: "Modern Clinic", orientation: "landscape" },
  { src: "/images/gallery/AB901395.jpg", alt: "Clinic Gallery", orientation: "landscape" },
  { src: "/images/gallery/AB901400.jpg", alt: "Dental Clinic", orientation: "landscape" },
  { src: "/images/gallery/AB901401.jpg", alt: "Interior View", orientation: "landscape" },
  { src: "/images/gallery/AB901412.jpg", alt: "Facility Tour", orientation: "landscape" },
] as const

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setLightbox((i) => (i! - 1 + GALLERY.length) % GALLERY.length)
  }
  const next = () => {
    setDirection(1)
    setLightbox((i) => (i! + 1) % GALLERY.length)
  }

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox])

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Facility"
          title="A Clinic Designed"
          highlight="For Your Comfort"
          subtitle="Step inside Shine Dental — modern treatment rooms, advanced sterilization areas, and a welcoming environment built around you."
        />

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[130px] sm:auto-rows-[150px] gap-3">
          {GALLERY.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.28, delay: (i % 4) * 0.04, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              onClick={() => {
                setDirection(1)
                setLightbox(i)
              }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-200 ${
                img.orientation === "portrait" ? "row-span-2" : "row-span-1"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B33]/70 via-[#0C1B33]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                  <Expand className="w-4.5 h-4.5 text-[#1565C0]" />
                </div>
              </div>
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                {img.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={GALLERY[lightbox].src}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -30 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={GALLERY[lightbox].src}
                    alt={GALLERY[lightbox].alt}
                    width={1200}
                    height={800}
                    className="w-full max-h-[80vh] object-contain rounded-2xl"
                  />
                  <p className="text-white/60 text-sm text-center mt-3">
                    {lightbox + 1} / {GALLERY.length} · {GALLERY[lightbox].alt}
                  </p>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors max-lg:-translate-x-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors max-lg:translate-x-2"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
