"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactSection from "@/components/ContactSection"
import PromoBanner from "@/components/PromoBanner"
import TravelCollage from "@/components/TravelCollage"

// Icon components
const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
)

export default function HolidaysPage() {
  const [activeTab, setActiveTab] = useState("flights")
  const [from, setFrom] = useState("New York")
  const [to, setTo] = useState("Los Angeles")
  const [departure, setDeparture] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [passengers, setPassengers] = useState("2 guests")
  
  // Hotel-specific state
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2 guests")

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)

  const destinations = [
    {
      country: "KENYA",
      title: "KENYA SAFARIS BY ROAD",
      price: "9000 AED",
      image: "https://cdn.legendholding.com/images/cdn_68fcd211d69459.09801331_20251025_133513.webp",
    },
    {
      country: "JORDAN",
      title: "LOREM IPSUM",
      price: "1000 AED",
      image: "https://cdn.legendholding.com/images/cdn_68fcd1e63233b8.71394110_20251025_133430.webp",
    },
    {
      country: "CHINA",
      title: "LOREM IPSUM",
      price: "9000 AED",
      image: "https://cdn.legendholding.com/images/cdn_68fcd19cac0a18.81136205_20251025_133316.webp",
    },
    {
      country: "JAPAN",
      title: "LOREM IPSUM",
      price: "8000 AED",
      image: "https://cdn.legendholding.com/images/cdn_68fcd006ae4fc9.31319454_20251025_132630.webp",
    },
    {
      country: "BALI",
      title: "LOREM IPSUM",
      price: "5000 AED",
      image: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
    },
    {
      country: "MALDIVES",
      title: "LOREM IPSUM",
      price: "12000 AED",
      image: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
    },
  ]

  const groupedDestinations = []
  for (let i = 0; i < destinations.length; i += 3) {
    groupedDestinations.push(destinations.slice(i, i + 3))
  }

  const tabs = [
    { id: "flights", label: "Flights" },
    { id: "hotels", label: "Hotels" },
    { id: "cars", label: "Cars" },
  ]

  const popularDestinations = ["Paris", "Tokyo", "New York", "London", "Bali", "Dubai"]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", { activeTab, from, to, departure, returnDate, passengers })
  }

  return (
    <>
      <style jsx>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0;
          position: absolute;
          right: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        input[type="date"]::-webkit-inner-spin-button,
        input[type="date"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="date"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}</style>
      <main className="overflow-x-hidden">
        {/* Header + Hero wrapper with background behind transparent header */}
        <div className="relative -mt-24 pt-24 min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 -z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.legendholding.com/images/cdn_68fcd006ae4fc9.31319454_20251025_132630.webp')",
            }}
          />
          <Header />
          <section className="relative min-h-screen flex items-center justify-center">

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 w-full max-w-6xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-helvetica" style={{ color: '#EE8900' }}>
                Discover Your Perfect Holiday
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-helvetica">
                Find flights, hotels, and experiences for your perfect getaway
              </p>
            </div>

            {/* Search Card */}
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              {/* Tabs */}
              <div className="flex gap-1 mb-6 bg-white/20 backdrop-blur-sm rounded-lg p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-all font-helvetica flex-1 ${
                      activeTab === tab.id
                        ? "bg-white/90 text-gray-900 shadow-sm border-b-2"
                        : "text-white hover:text-white/80"
                    }`}
                    style={activeTab === tab.id ? { borderBottomColor: '#EE8900' } : {}}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-300">
                  {activeTab === "flights" && (
                    <>
                    {/* From */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        From
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="New York"
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* To */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        To
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Los Angeles"
                          value={to}
                          onChange={(e) => setTo(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Departure */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Departure
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={departure}
                          onChange={(e) => setDeparture(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Return */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Return
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Passengers */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Passengers
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="2 guests"
                          value={passengers}
                          onChange={(e) => setPassengers(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>
                    </>
                  )}

                  {activeTab === "hotels" && (
                    <>
                    {/* Destination */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Destination
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Where to?"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Check-in */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Check-in
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Check-out */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Check-out
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Guests */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="2 guests"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>
                    {/* Empty div for consistent spacing */}
                    <div></div>
                    </>
                  )}

                  {activeTab === "cars" && (
                    <>
                    {/* Pickup Location */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Pickup Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="City or airport"
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Drop Location */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Drop Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="City or airport"
                          value={to}
                          onChange={(e) => setTo(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Pickup Date */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Pickup Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={departure}
                          onChange={(e) => setDeparture(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Return Date */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white font-helvetica">
                        Return Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                        />
                      </div>
                    </div>
                    {/* Empty div for consistent spacing */}
                    <div></div>
                    </>
                  )}
                </div>

                {/* Search Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white px-12 py-3 rounded-lg font-medium font-helvetica transition-colors duration-200 hover:opacity-80"
                    style={{ backgroundColor: '#EE8900' }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.backgroundColor = 'rgba(238, 137, 0, 0.8)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.backgroundColor = '#EE8900';
                    }}
                  >
                    Request {activeTab}
                  </button>
                </div>
              </form>
            </div>

            {/* Popular Destinations */}
            <div className="mt-12 text-center">
              <p className="text-white/80 mb-4 font-helvetica">Popular destinations:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {popularDestinations.map((city) => (
                  <button
                    key={city}
                    className="bg-black/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-helvetica hover:bg-black/30 transition-colors duration-200"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
          </section>
        </div>

        {/* Popular Destinations Section */}
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
                          <div key={idx} className="relative rounded-3xl overflow-hidden h-[450px] group">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                              <img
                                src={dest.image}
                                alt={dest.country}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Country Label */}
                            <div className="absolute top-0 left-0 bg-[#6b4d8a] text-white px-6 py-3 text-lg font-semibold tracking-wide">
                              {dest.country}
                            </div>

                            {/* Bottom Card */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-tr-[3rem] p-6 flex items-end justify-between">
                              <div>
                                <h3 className="text-black text-xl font-bold mb-1 leading-tight">{dest.title}</h3>
                              </div>
                              <div className="text-right flex flex-col items-end">
                                <span className="text-orange-500 text-sm font-medium">Starting</span>
                                <span className="text-[#6b4d8a] text-2xl font-bold whitespace-nowrap">{dest.price}</span>
                              </div>
                            </div>
                          </div>
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

        {/* Travel Collage Section */}
        <TravelCollage />

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">Why Us</h2>
            </div>


            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Guides",
                  description: "Travel with experienced local guides who know every hidden gem",
                  image: "https://cdn.legendholding.com/images/cdn_68fcd006ae4fc9.31319454_20251025_132630.webp",
                },
                {
                  title: "Best Destinations",
                  description: "Curated locations that offer unforgettable experiences",
                  image: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
                },
                {
                  title: "Seamless Planning",
                  description: "From booking to departure, we handle every detail for you",
                  image: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <PromoBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

