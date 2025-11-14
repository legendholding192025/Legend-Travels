"use client"

import { useState } from "react"
import Link from "next/link"

type Destination = {
  slug: string
  country: string
  title: string
  price: string
  image: string
}

const destinations: Destination[] = [
  {
    slug: "kenya-safaris",
    country: "KENYA",
    title: "KENYA SAFARIS BY ROAD",
    price: "9000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fcd211d69459.09801331_20251025_133513.webp",
  },
  {
    slug: "jordan",
    country: "JORDAN",
    title: "WONDERS OF JORDAN",
    price: "1000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fcd1e63233b8.71394110_20251025_133430.webp",
  },
  {
    slug: "china",
    country: "CHINA",
    title: "ENCHANTING CHINA TOURS",
    price: "9000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fcd19cac0a18.81136205_20251025_133316.webp",
  },
  {
    slug: "japan",
    country: "JAPAN",
    title: "DISCOVER JAPAN: LAND OF THE RISING SUN",
    price: "8000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fcd006ae4fc9.31319454_20251025_132630.webp",
  },
  {
    slug: "bali",
    country: "BALI",
    title: "BALI DREAM ESCAPE",
    price: "5000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
  },
  {
    slug: "maldives",
    country: "MALDIVES",
    title: "MALDIVES LUXURY RETREAT",
    price: "12000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
  },
]

export default function PopularDestinations() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const groupedDestinations: Destination[][] = []
  for (let i = 0; i < destinations.length; i += 3) {
    groupedDestinations.push(destinations.slice(i, i + 3))
  }

  return (
    <section className="bg-[#3d2b5c] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12 tracking-wide">
          Popular Destinations
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {groupedDestinations.map((group, groupIndex) => (
                <div key={groupIndex} className="min-w-full px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {group.map((dest, idx) => (
                      <Link key={idx} href={`/holidays/${dest.slug}`}>
                        <div className="relative rounded-3xl overflow-hidden h-[450px] group cursor-pointer">
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            <img
                              src={dest.image}
                              alt={dest.country}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>

                          {/* Country Label */}
                          <div className="absolute top-0 left-0 bg-[#6b4d8a] text-white px-6 py-3 text-lg font-semibold tracking-wide">
                            {dest.country}
                          </div>

                          {/* Bottom Card */}
                          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-tr-[3rem] p-6 flex items-end justify-between">
                            <div>
                              <h3 className="text-[#2B1C48] text-xl font-bold mb-1 leading-tight">{dest.title}</h3>
                            </div>
                            <div className="text-right flex flex-col items-end">
                              <span className="text-orange-500 text-sm font-medium">Starting</span>
                              <span className="text-[#6b4d8a] text-2xl font-bold whitespace-nowrap">{dest.price}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? groupedDestinations.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === groupedDestinations.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {groupedDestinations.map((_, dot) => (
              <button
                key={dot}
                onClick={() => setCurrentSlide(dot)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === dot ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

