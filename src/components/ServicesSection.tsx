"use client"

import { useState } from "react"
import Image from "next/image"

const services = [
  {
    id: "holidays",
    title: "Holidays",
    description: "Curated vacation packages and bespoke travel experiences tailored to your desires.",
    image: "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    features: ["Custom itineraries", "Luxury accommodations", "Local experiences", "24/7 support"],
  },
  {
    id: "ticketing",
    title: "Ticketing",
    description: "Seamless booking solutions for flights, trains, and transportation worldwide.",
    image: "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
        />
      </svg>
    ),
    features: ["Best price guarantee", "Flexible booking", "Multi-city options", "Instant confirmation"],
  },
  {
    id: "events",
    title: "Events",
    description: "Exclusive access to cultural events, festivals, and unique experiences.",
    image: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    features: ["VIP access", "Cultural immersion", "Private tours", "Expert guides"],
  },
  {
    id: "corporate",
    title: "Corporate Travel Management",
    description: "Comprehensive business travel solutions with advanced reporting and cost control.",
    image: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    features: ["Policy compliance", "Expense management", "Travel analytics", "Dedicated support"],
  },
]

interface ServiceCardProps {
  service: (typeof services)[number]
}

function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden border-0 bg-white hover:bg-gray-50 transition-all duration-500 cursor-pointer rounded-lg shadow-md hover:shadow-lg h-[380px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {/* Icon overlay on image */}
          <div className={`absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-[#EE8900] transition-colors duration-300 ${
            isHovered ? "text-[#EE8900]/80" : "text-[#EE8900]"
          }`}>
            {service.icon}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col relative">
          {/* Title */}
          <h3 className={`text-lg font-medium mb-3 transition-colors duration-300 font-helvetica ${
            isHovered ? "text-[#EE8900]" : "text-gray-900"
          }`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow font-helvetica">
            {service.description}
          </p>

          {/* Features */}
          <div
            className="space-y-2 overflow-hidden"
            style={{
              maxHeight: isHovered ? "120px" : "0px",
              opacity: isHovered ? 1 : 0,
              transition: "max-height 0.4s ease-out, opacity 0.3s ease-out"
            }}
          >
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-gray-500">
                <div className="w-1 h-1 bg-[#EE8900] rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>

          {/* Hover indicator */}
          <div
            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#EE8900] to-[#EE8900]/80 transition-all duration-500 ${
              isHovered ? "w-full" : "w-0"
            }`}
          />
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-balance font-helvetica">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty font-helvetica">
            We provide comprehensive travel solutions designed to transform your journey into an extraordinary
            experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
