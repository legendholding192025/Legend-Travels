"use client"

import type React from "react"
import { useCallback, useMemo, useState } from "react"
import { Calendar, MapPin, Users } from "lucide-react"
import AirportSearch from "@/components/AirportSearch"

type TabType = "flights" | "hotels" | "cars"

const tabs = [
  { id: "flights" as TabType, label: "Flights" },
  { id: "hotels" as TabType, label: "Hotels" },
  { id: "cars" as TabType, label: "Cars" },
]

const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabType>("flights")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [departure, setDeparture] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [passengers, setPassengers] = useState("")
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("")

  const popularDestinations = ["Paris", "Tokyo", "New York", "London", "Bali", "Dubai"]

  const inputBaseClasses = useMemo(
    () =>
      "w-full h-[46px] rounded-lg border border-gray-300 bg-white pr-4 text-sm shadow-sm outline-none transition focus:border-[#EE8900] focus:ring-2 focus:ring-[#EE8900]/40 font-helvetica",
    []
  )

  const getDateInputClasses = useCallback(
    (value: string) => `${inputBaseClasses} ${value ? "text-gray-900" : "text-gray-500"}`,
    [inputBaseClasses]
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", activeTab)
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center -mt-24 pt-24 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.legendholding.com/images/cdn_68da538e0103a7.76868179_20250929_093822.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight font-helvetica">
            Discover Your Next Adventure
          </h1>
        </div>

        {/* Search Card */}
        <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
          <div className="flex gap-1 mb-6 bg-white/20 backdrop-blur-sm rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-all font-helvetica flex-1 border-b-2 border-transparent ${
                  activeTab === tab.id
                    ? "bg-white/90 text-gray-900 shadow-sm border-b-[#EE8900]"
                    : "text-white hover:text-white/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearch} className="space-y-3">
            {activeTab === "flights" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* From */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">From</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <AirportSearch
                      inputId="flight-from"
                      value={from}
                      onQueryChange={setFrom}
                      onSelect={(_, formatted) => setFrom(formatted)}
                      placeholder="City, airport, or code"
                      inputClassName={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>

                {/* To */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">To</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <AirportSearch
                      inputId="flight-to"
                      value={to}
                      onQueryChange={setTo}
                      onSelect={(_, formatted) => setTo(formatted)}
                      placeholder="City, airport, or code"
                      inputClassName={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>

                {/* Departure */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Departure</label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className={`pl-10 ${getDateInputClasses(departure)}`}
                    />
                  </div>
                </div>

                {/* Return */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Return</label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className={`pl-10 ${getDateInputClasses(returnDate)}`}
                    />
                  </div>
                </div>

                {/* Passengers */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Passengers</label>
                  <div className="relative">
                    <Users className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="2 guests"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "hotels" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Destination */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Destination</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Check-in</label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className={`pl-10 ${getDateInputClasses(checkIn)}`}
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Check-out</label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className={`pl-10 ${getDateInputClasses(checkOut)}`}
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Guests</label>
                  <div className="relative">
                    <Users className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="2 guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>

                {/* Empty div for consistent spacing */}
                <div></div>
              </div>
            )}

            {activeTab === "cars" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Pickup Location */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City or airport"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>

                {/* Drop Location */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Drop Location</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="City or airport"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>

                {/* Pickup Date */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#EE8900] focus:ring-2 focus:ring-[#EE8900]/40 font-helvetica"
                    />
                  </div>
                </div>

                {/* Return Date */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Return Date</label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#EE8900] focus:ring-2 focus:ring-[#EE8900]/40 font-helvetica"
                    />
                  </div>
                </div>

                {/* Empty div for consistent spacing */}
                <div></div>
              </div>
            )}

            <div className="flex justify-center pt-1">
              <button
                type="submit"
                className="text-white px-12 py-3 rounded-lg font-medium font-helvetica transition-colors duration-200 hover:opacity-80"
                style={{ backgroundColor: "#EE8900" }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement
                  target.style.backgroundColor = "rgba(238, 137, 0, 0.8)"
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement
                  target.style.backgroundColor = "#EE8900"
                }}
              >
                Request {activeTab}
              </button>
            </div>
          </form>
        </div>

        {/* Popular Destinations */}
        {activeTab !== "cars" && (
          <div className="mt-12 text-center">
            <p className="text-white/80 mb-4 font-helvetica">Popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularDestinations.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setTo(city)
                    setDestination(city)
                  }}
                  className="bg-black/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-helvetica hover:bg-black/30 transition-colors duration-200"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero