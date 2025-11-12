"use client"

import Image from "next/image"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from "@/components/ContactSection"
import { PartnerSection } from "@/components/PartnerSection"

export default function CorporateTravelPage() {
  const circularServices = [
    {
      title: "HOLIDAYS",
      icon: "/holidays.svg",
    },
    {
      title: "TICKETING",
      icon: "/ticketing.svg",
    },
    {
      title: "TRANSFERS",
      icon: "/transfers.svg",
    },
    {
      title: "MICE",
      icon: "/mice.svg",
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
      <section className="relative bg-[linear-gradient(to_bottom,#EE8900_0%,#EE8900_50%,white_50%,white_100%)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance font-helvetica">
              Specialty
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {circularServices.map((service, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] w-28 h-28 lg:w-32 lg:h-32 bg-[#5D376E] rounded-full z-0" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg z-20 flex items-center justify-center">
                    <Image 
                      src={service.icon} 
                      alt={service.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 lg:w-12 lg:h-12"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-48 lg:h-48 bg-white rounded-full shadow-xl z-10 flex items-center justify-center">
                    <h3 className="text-[#EE8900] font-bold text-lg lg:text-xl text-center whitespace-pre-line px-4">
                      {service.title}
                    </h3>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] w-28 h-28 lg:w-32 lg:h-32 bg-[#5D376E] rounded-full z-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-balance font-helvetica">
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
