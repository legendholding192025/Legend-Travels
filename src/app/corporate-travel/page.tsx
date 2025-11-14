"use client"

import Image from "next/image"
import Link from "next/link"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from "@/components/ContactSection"
import { PartnerSection } from "@/components/PartnerSection"

export default function CorporateTravelPage() {
  const circularServices = [
    {
      title: "HOLIDAYS",
      description: "Discover your perfect getaway with curated holiday packages and expert travel planning.",
      icon: "/holidays.svg",
      image: "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
      href: "/holidays",
    },
    {
      title: "TICKETING",
      description: "Seamless booking experience for flights, trains, and events worldwide.",
      icon: "/ticketing.svg",
      image: "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
      href: "/ticketing",
    },
    {
      title: "TRANSFERS",
      description: "Reliable and comfortable airport transfers and ground transportation services.",
      icon: "/transfers.svg",
      image: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
      href: "/corporate-travel",
    },
    {
      title: "MICE",
      description: "Comprehensive Meetings, Incentives, Conferences, and Exhibitions solutions.",
      icon: "/mice.svg",
      image: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
      href: "/corporate-events",
    },
  ]

  const features = [
    {
      icon: "/3.svg",
      text: "Reliable Service"
    },
    {
      icon: "/4.svg",
      text: "24/7 Support"
    },
    {
      icon: "/5.svg",
      text: "Secure Booking"
    },
    {
      icon: "/6.svg",
      text: "Global Network"
    },
  ]


  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center -mt-24 pt-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.legendholding.com/images/cdn_6908712a31fc36.93627321_20251103_090858.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 w-full max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-helvetica" style={{ color: '#EE8900' }}>
            Serving You On Time
            Every Time
            </h1>
          </div>
        </div>
      </section>

      {/* Circular Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance font-helvetica" style={{ color: '#EE8900' }}>
              Specialty
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {circularServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer block"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl z-10">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className="text-[#2B1C48] font-bold text-lg mb-3 transition-colors duration-300 group-hover:text-[#EE8900]"
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance font-helvetica" style={{ color: "#2B1C48" }}>
              Program Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image 
                    src={feature.icon} 
                    alt={feature.text}
                    width={96}
                    height={96}
                    className="w-24 h-24"
                  />
                </div>
                <p className="text-gray-900 text-lg font-medium font-helvetica">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerSection />

      <ContactSection />
      <Footer />
    </main>
  )
}
