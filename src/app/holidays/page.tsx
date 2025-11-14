"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactSection from "@/components/ContactSection"
import PromoBanner from "@/components/PromoBanner"
import TravelCollage from "@/components/TravelCollage"
import HolidaysHero from "@/components/holidays/HolidaysHero"
import PopularDestinations from "@/components/holidays/PopularDestinations"
import WhyUs from "@/components/holidays/WhyUs"

export default function HolidaysPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HolidaysHero />
      <PopularDestinations />
      <TravelCollage />
      <WhyUs />
      <PromoBanner />
      <ContactSection />
      <Footer />
    </main>
  )
}

