"use client";
import Header from "@/components/Header";
import { useCallback, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import AirportSearch from "@/components/AirportSearch";
import WhyUsSection from "@/components/WhyUsSection";
import { MapPin } from "lucide-react";

type TicketingWhyUsFeature = {
  title: string;
  description: string;
  bgImage: string;
  iconSrc: string;
};

type TicketingWhyUsStat = {
  label: string;
  value: number;
  prefix?: string;
};

const ticketingFeatures: TicketingWhyUsFeature[] = [
  {
    title: "IATA Certified",
    description: "Official certification ensuring industry compliance and quality standards.",
    bgImage: "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
    iconSrc: "/12.svg",
  },
  {
    title: "95% Satisfaction Rate",
    description: "Consistently exceeding client expectations with proven results.",
    bgImage: "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
    iconSrc: "/13.svg",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance from dedicated travel specialists.",
    bgImage: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
    iconSrc: "/14.svg",
  },
  {
    title: "Part of Legend Holding",
    description: "Backed by a trusted international corporate group.",
    bgImage: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
    iconSrc: "/15.svg",
  },
];

const ticketingStats: TicketingWhyUsStat[] = [
  {
    label: "Satisfied Customers",
    value: 20000,
    prefix: "+",
  },
  {
    label: "Destination Partners",
    value: 80,
    prefix: "+",
  },
  {
    label: "Successful Events",
    value: 300,
    prefix: "+",
  },
];

export default function TicketingPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const popularDestinations = ["Paris", "Tokyo", "New York", "London", "Bali", "Dubai"];

  const inputBaseClasses = useMemo(
    () =>
      "w-full h-[46px] rounded-lg border border-gray-300 bg-white pr-4 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica",
    []
  );

  const getDateInputClasses = useCallback(
    (value: string) => `${inputBaseClasses} ${value ? "text-gray-900" : "text-gray-500"}`,
    [inputBaseClasses]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Request flight:", { from, to, departure, returnDate, passengers });
  };
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero (custom) */}
      <section
        className="relative min-h-screen flex items-center justify-center -mt-24 pt-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://cdn.legendholding.com/images/cdn_690320fa755959.27740469_20251030_082530.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}</style>
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-helvetica" style={{ color: '#EE8900' }}>
              Seamless Ticketing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-helvetica">
              Book flights quickly with flexible options and best fares
            </p>
          </div>

          {/* Flights search form (like home hero, flights only) */}
          <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex w-full max-w-md mx-auto gap-1 mb-6 bg-white/20 backdrop-blur-sm rounded-lg p-1">
              <span
                className="flex-1 px-4 py-3 text-center rounded-md text-sm font-medium font-helvetica bg-white/90 text-gray-900 shadow-sm border-b-2"
                style={{ borderBottomColor: '#EE8900' }}
              >
                Flights
              </span>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-300">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">From</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <AirportSearch
                      inputId="ticketing-from"
                      value={from}
                      onQueryChange={setFrom}
                      onSelect={(_, formatted) => setFrom(formatted)}
                      placeholder="City, airport, or code"
                      inputClassName={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">To</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <AirportSearch
                      inputId="ticketing-to"
                      value={to}
                      onQueryChange={setTo}
                      onSelect={(_, formatted) => setTo(formatted)}
                      placeholder="City, airport, or code"
                      inputClassName={`pl-10 ${inputBaseClasses} text-gray-900`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Departure</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <input
                      type="date"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className={`pl-10 ${getDateInputClasses(departure)}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Return</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className={`pl-10 ${getDateInputClasses(returnDate)}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Passengers</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                    <input
                      type="number"
                      min={1}
                      inputMode="numeric"
                      value={passengers}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setPassengers(Number.isFinite(value) ? Math.max(1, Math.round(value)) : 1);
                      }}
                      className={`pl-10 ${inputBaseClasses} text-gray-900 pr-12`}
                    />
                    <div className="absolute inset-y-2 right-2 flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
                      <button
                        type="button"
                        onClick={() => setPassengers((prev) => Math.max(1, prev + 1))}
                        className="flex items-center justify-center px-2 text-xs text-gray-700 hover:bg-gray-100"
                        aria-label="Increase passengers"
                      >
                        ▲
                      </button>
                      <button
                        type="button"
                        onClick={() => setPassengers((prev) => Math.max(1, prev - 1))}
                        className="flex items-center justify-center px-2 text-xs text-gray-700 hover:bg-gray-100"
                        aria-label="Decrease passengers"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                </div>
              </div>

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
                  Request Flight
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
                  type="button"
                  onClick={() => setTo(city)}
                  className="bg-black/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-helvetica hover:bg-black/30 transition-colors duration-200"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyUsSection heading="Why Us" features={ticketingFeatures} stats={ticketingStats} />
      <ContactSection/>
      <Footer />
    </main>
  );
}