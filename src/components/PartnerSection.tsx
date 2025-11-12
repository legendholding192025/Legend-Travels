"use client"

import { useEffect, useRef, useState } from "react"
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

const partners = [
  { id: 1, logo: '/logo/logo1.jpg', name: 'Partner 1' },
  { id: 2, logo: '/logo/logo2.jpg', name: 'Partner 2' },
  { id: 3, logo: '/logo/logo3.jpg', name: 'Partner 3' },
  { id: 4, logo: '/logo/logo4.png', name: 'Partner 4' },
  { id: 5, logo: '/logo/logo5.jpg', name: 'Partner 5' },
  { id: 6, logo: '/logo/logo6.jpg', name: 'Partner 6' },
  { id: 7, logo: '/logo/logo7.jpg', name: 'Partner 7' },
  { id: 8, logo: '/logo/logo8.jpg', name: 'Partner 8' },
  { id: 9, logo: '/logo/logo9.jpg', name: 'Partner 9' },
  { id: 10, logo: '/logo/logo10.jpg', name: 'Partner 10' },
  { id: 11, logo: '/logo/logo11.jpg', name: 'Partner 11' },
  { id: 12, logo: '/logo/logo12.jpg', name: 'Partner 12' },
  { id: 13, logo: '/logo/logo13.png', name: 'Partner 13' },
  { id: 14, logo: '/logo/logo14.svg', name: 'Partner 14' },
]

export function PartnerSection() {
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const isMobileQuery = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)")

  // Determine how many partners to show based on screen size
  const partnersToShow = isMobileQuery ? 2 : isTablet ? 3 : 6

  // Create extended array for infinite scroll
  const extendedPartners = [...partners, ...partners, ...partners]

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    let animationId: number
    let lastTimestamp = 0
    const speed = isPaused ? 0 : 0.15 // pixels per millisecond

    const animate = (timestamp: number) => {
      if (!carouselRef.current) return

      if (lastTimestamp !== 0) {
        const delta = timestamp - lastTimestamp
        const moveAmount = speed * delta

        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + moveAmount
          const partnerItemWidth = carouselRef.current?.firstElementChild?.clientWidth || 200

          if (newPosition >= partnerItemWidth * partners.length) {
            return newPosition - partnerItemWidth * partners.length
          }

          return newPosition
        })
      }

      lastTimestamp = timestamp
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused])

  // Intersection Observer for animated text
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const textElement = document.getElementById('animated-text')
    if (textElement) {
      observer.observe(textElement)
    }

    return () => {
      if (textElement) {
        observer.unobserve(textElement)
      }
    }
  }, [])

  return (
    <>
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#EE8900] mb-4 text-center">Our Partners</h2>
          </div>
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              ref={carouselRef} 
              className="flex"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {extendedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className={cn(
                    "flex-shrink-0 px-2 flex items-center justify-center transition-transform duration-300",
                    isMobileQuery ? "w-1/2" : isTablet ? "w-1/3" : "w-1/6"
                  )}
                >
                  <div className="rounded-lg p-4 h-28 flex items-center justify-center border transition-all duration-300 mx-1 bg-white hover:shadow-md border-gray-200">
                    <div className="relative w-[120px] sm:w-[150px] h-[60px] sm:h-[80px]">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain transition-opacity duration-300 hover:opacity-90"
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    </>
  )
}

