"use client"

import { useState } from "react"

const features = [
  {
    id: "expertise",
    // title: "IATA Certified",
    // description: "With over two decades of experience in the travel industry, we've built a reputation for delivering exceptional service and unforgettable experiences.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: "IATA Certified"
  },
  {
    id: "global",
    // title: "95% Satisfaction Rate",
    // description: "Our extensive worldwide network ensures you have access to the best accommodations, experiences, and local insights wherever you travel.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: "95% Satisfaction Rate"
  },
  {
    id: "support",
    // title: "24/7 Support",
    // description: "Our dedicated team is available around the clock to assist you with any travel needs, ensuring peace of mind throughout your journey.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
      </svg>
    ),
    stats: "Diversified Teams with Regional Offices"
  },
  {
    id: "satisfaction",
    // title: "98% Satisfaction",
    // description: "Our commitment to excellence is reflected in our high customer satisfaction rate, with travelers consistently rating our services as outstanding.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    stats: "Part of Legend Holding"
  }
]

export default function WhyUsSection() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section className="py-24" style={{ backgroundColor: '#5D376E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 text-balance font-helvetica">WHY US</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden border-0 bg-white/10 hover:bg-white/20 transition-all duration-500 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="h-full flex flex-col p-8 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto transition-colors duration-300 ${
                  hoveredFeature === feature.id 
                    ? "bg-[#EE8900] text-white" 
                    : "bg-white/20 text-white"
                }`}>
                  {feature.icon}
                </div>

                {/* Stats */}
                <div className="text-3xl font-bold text-white mb-2 font-helvetica">
                  {feature.stats}
                </div>

                {/* Hover indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#EE8900] to-[#EE8900]/80 transition-all duration-500 ${
                    hoveredFeature === feature.id ? "w-full" : "w-0"
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
