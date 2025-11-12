"use client"

import { useState } from "react"
import Image from "next/image"

const services = [
  {
    title: "HOLIDAYS",
    icon: "/holidays.svg",
  },
  {
    title: "TICKETING",
    icon: "/ticketing.svg",
  },
  {
    title: "EVENTS",
    icon: "/events.svg",
  },
  {
    title: "CORPORATE\nTRAVEL\nMANAGEMENT",
    icon: "/corporate.svg",
  },
]

export default function CircularSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-[linear-gradient(to_bottom,#EE8900_0%,#EE8900_50%,white_50%,white_100%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <div
                className="relative w-48 h-48 lg:w-56 lg:h-56"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] w-28 h-28 lg:w-32 lg:h-32 bg-[#5D376E] rounded-full z-0 transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-0" : "scale-100"
                  }`}
                />

                {/* Icon circle (between top violet and main white circle) */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-lg z-20 flex items-center justify-center"
                >
                  <Image 
                    src={service.icon} 
                    alt={service.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                </div>

                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-48 lg:h-48 bg-white rounded-full shadow-xl z-10 flex items-center justify-center transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  }`}
                >
                  <h3 className="text-[#EE8900] font-bold text-lg lg:text-xl text-center whitespace-pre-line px-4">
                    {service.title}
                  </h3>
                </div>

                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] w-28 h-28 lg:w-32 lg:h-32 bg-[#5D376E] rounded-full z-0 transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-0" : "scale-100"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
