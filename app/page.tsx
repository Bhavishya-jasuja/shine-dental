import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FloatingCTA } from "@/components/shared/FloatingCTA"
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar"
import { StatsSection } from "@/components/sections/StatsSection"
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection"
import { AboutClinicSection } from "@/components/sections/AboutClinicSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { DoctorsSection } from "@/components/sections/DoctorsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { TechnologySection } from "@/components/sections/TechnologySection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { AppointmentCTASection } from "@/components/sections/AppointmentCTASection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <DoctorsSection />
        <AboutClinicSection />
        <GallerySection />
        <ServicesSection />
        <TechnologySection />
        <TestimonialsSection />
        <AppointmentCTASection />
        <StatsSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
