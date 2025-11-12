"use client";
import Header from '@/components/Header';
import { useState, type ReactNode } from 'react';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function TicketingPage() {
  const [from, setFrom] = useState("New York");
  const [to, setTo] = useState("Los Angeles");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("2 guests");

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
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex gap-1 mb-6 bg-white/20 backdrop-blur-sm rounded-lg p-1">
              <span className="px-4 py-3 rounded-md text-sm font-medium font-helvetica bg-white/90 text-gray-900 shadow-sm border-b-2" style={{ borderBottomColor: '#EE8900' }}>
                Flights
              </span>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-300">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">From</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <input
                      type="text"
                      placeholder="New York"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">To</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <input
                      type="text"
                      placeholder="Los Angeles"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white font-helvetica">Passengers</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                    <input
                      type="text"
                      placeholder="2 guests"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-helvetica text-gray-900"
                    />
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
        </div>
      </section>

      {/* Why Us (custom) */}
      <section className="py-24" style={{ backgroundColor: '#5D376E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance font-helvetica">Why Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'iata', label: 'IATA Certified', icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )},
              { id: 'satisfaction', label: '95% Satisfaction Rate', icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )},
              { id: 'support', label: '24/7 Support', icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" /></svg>
              )},
              { id: 'group', label: 'Part of Legend Holding', icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              )},
            ].map((item) => (
              <Card key={item.id} label={item.label} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection/>
      <Footer />
    </main>
  );
}

function Card({ label, icon }: { label: string; icon: ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative overflow-hidden border-0 bg-white/10 hover:bg-white/20 transition-all duration-500 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-full flex flex-col p-8 text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto transition-colors duration-300 ${hovered ? 'bg-[#EE8900] text-white' : 'bg-white/20 text-white'}`}>
          {icon}
        </div>
        <div className="text-3xl font-bold text-white mb-2 font-helvetica">{label}</div>
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#EE8900] to-[#EE8900]/80 transition-all duration-500 ${hovered ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
}


