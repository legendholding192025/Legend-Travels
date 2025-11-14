"use client"

import Image from "next/image"

const caseStudies = [
  {
    id: 1,
    title: "Tech Conference 2024",
    client: "TechCorp Industries",
    description: "Organized a 3-day tech conference with 500+ attendees, featuring keynote speakers, workshops, and networking sessions.",
    image: "https://cdn.legendholding.com/images/cdn_6901ffe687c2c3.41223005_20251029_115206.webp",
    tags: ["Conference", "Networking", "Workshops"],
  },
  {
    id: 2,
    title: "Product Launch Event",
    client: "Innovate Solutions",
    description: "Executed a high-profile product launch with media coverage, VIP guests, and immersive brand experiences.",
    image: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
    tags: ["Launch", "Media", "VIP"],
  },
  {
    id: 3,
    title: "Annual Gala Dinner",
    client: "Global Finance Group",
    description: "Managed a prestigious annual gala with 300+ executives, featuring award ceremonies and entertainment.",
    image: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
    tags: ["Gala", "Awards", "Entertainment"],
  },
  {
    id: 4,
    title: "Corporate Team Building",
    client: "ConnectHub Corp",
    description: "Designed and executed outdoor team-building activities for 200+ employees across multiple locations.",
    image: "https://cdn.legendholding.com/images/cdn_68ff2783e8ed15.58998963_20251027_080419.webp",
    tags: ["Team Building", "Outdoor", "Activities"],
  },
  {
    id: 5,
    title: "Trade Show Exhibition",
    client: "Industry Leaders Inc",
    description: "Coordinated a major trade show booth with product demonstrations, meetings, and lead generation.",
    image: "https://cdn.legendholding.com/images/cdn_68ff28899b4215.43209353_20251027_080841.webp",
    tags: ["Exhibition", "B2B", "Networking"],
  },
  {
    id: 6,
    title: "Executive Retreat",
    client: "Elite Business Group",
    description: "Planned an exclusive executive retreat with strategic sessions, luxury accommodations, and curated experiences.",
    image: "https://cdn.legendholding.com/images/cdn_68ff2b084196e1.64521788_20251027_081920.webp",
    tags: ["Retreat", "Strategy", "Luxury"],
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-orange-500 mb-12 md:mb-16">Case Studies</h2>
        </div>

        <div className="relative">
          {/* Scrolling Container */}
          <div className="flex gap-8 animate-scroll-horizontal">
            {/* First set of cards */}
            {caseStudies.map((study) => (
              <div
                key={`first-${study.id}`}
                className="group flex-shrink-0 w-[400px] overflow-hidden border border-gray-200 rounded-xl bg-white hover:border-orange-500 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2 font-helvetica">{study.client}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-orange-500 transition-colors duration-300 font-helvetica">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed font-helvetica">{study.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full font-helvetica"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {caseStudies.map((study) => (
              <div
                key={`second-${study.id}`}
                className="group flex-shrink-0 w-[400px] overflow-hidden border border-gray-200 rounded-xl bg-white hover:border-orange-500 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2 font-helvetica">{study.client}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-orange-500 transition-colors duration-300 font-helvetica">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed font-helvetica">{study.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full font-helvetica"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

