"use client"

import { useState } from "react"

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

export default function HolidaysHero() {
  // Hotel-specific state
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2 guests")

  const popularDestinations = ["Paris", "Tokyo", "New York", "London", "Bali", "Dubai"]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", { destination, checkIn, checkOut, guests })
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
      <section
        className="relative min-h-screen flex items-center justify-center -mt-24 pt-24 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.legendholding.com/images/cdn_68fcd006ae4fc9.31319454_20251025_132630.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 -z-10" />
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
            <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              {/* Hotels Tab */}
              <div className="flex w-full max-w-md mx-auto gap-1 mb-6 bg-white/20 backdrop-blur-sm rounded-lg p-1">
                <span
                  className="flex-1 px-4 py-3 text-center rounded-md text-sm font-medium font-helvetica bg-white/90 text-gray-900 shadow-sm border-b-2"
                  style={{ borderBottomColor: '#EE8900' }}
                >
                  Hotels
                </span>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-300">
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
                    Request Hotels
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
    </>
  )
}

