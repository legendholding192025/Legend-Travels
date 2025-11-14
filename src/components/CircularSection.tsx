"use client"

import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "HOLIDAYS",
    description:
      "Discover your perfect getaway with curated holiday packages and expert travel planning.",
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
    title: "EVENTS",
    description:
      "Create unforgettable experiences with our comprehensive event management services.",
    icon: "/events.svg",
    image: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
    href: "/corporate-events",
  },
  {
    title: "CORPORATE TRAVEL MANAGEMENT",
    description:
      "Streamlined business travel solutions with cost optimization and policy compliance.",
    icon: "/corporate.svg",
    image: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
    href: "/corporate-travel",
  },
]

export default function CircularSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance font-helvetica" style={{ color: '#EE8900' }}>
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
  )
}

