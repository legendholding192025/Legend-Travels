"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Cut Corner Button Component
function CutCornerButton({
  children,
  backgroundColor = "#5D376E",
  textColor = "white",
  cutSize = 15,
  onClick,
  className = "",
  type = "button" as "button" | "submit",
}: {
  children: React.ReactNode
  backgroundColor?: string
  textColor?: string
  cutSize?: number
  onClick?: () => void
  className?: string
  type?: "button" | "submit"
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative px-8 py-3 font-medium transition-colors duration-300 font-helvetica ${className}`}
      style={{
        backgroundColor,
        color: isHovered ? "#CEED00" : textColor,
        clipPath: `polygon(${cutSize}px 0, 100% 0, 100% calc(100% - ${cutSize}px), calc(100% - ${cutSize}px) 100%, 0 100%, 0 ${cutSize}px)`,
        letterSpacing: "0.04em",
      }}
    >
      {children}
    </button>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center -mt-24 pt-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://cdn.legendholding.com/images/cdn_6908aea13fff70.37546157_20251103_133113.webp')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/80"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-helvetica">Get in Touch</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide font-helvetica">Let's plan your next adventure together</p>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#5D376E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-helvetica">Phone</p>
                  <p className="font-semibold text-gray-900 font-helvetica">+971 4 548 9489</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#5D376E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-600 font-helvetica">Email</p>
                  <p className="font-semibold text-gray-900 font-helvetica break-words">leisure@legendtravels.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#5D376E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-helvetica">Location</p>
                  <p className="font-semibold text-gray-900 font-helvetica">Dubai Investment Park</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#5D376E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-helvetica">Hours</p>
                  <p className="font-semibold text-gray-900 font-helvetica">Mon-Fri 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Image Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-helvetica">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE8900] focus:border-transparent font-helvetica"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE8900] focus:border-transparent font-helvetica"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE8900] focus:border-transparent font-helvetica"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4 font-helvetica">
                      Choose Service *
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: "ticketing", label: "Ticketing" },
                        { value: "holidays", label: "Holidays" },
                        { value: "corporate", label: "Corporate Travel" },
                        { value: "events", label: "Events" }
                      ].map((service) => (
                        <button
                          key={service.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, subject: service.value })}
                          className="flex items-center space-x-2 transition-all duration-200 font-helvetica hover:opacity-80"
                        >
                          <div className={`w-4 h-4 rounded border-2 transition-colors duration-200 ${
                            formData.subject === service.value
                              ? "bg-[#EE8900] border-[#EE8900]"
                              : "border-gray-400"
                          }`}>
                            {formData.subject === service.value && (
                              <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <span className="text-sm font-medium text-black">{service.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE8900] focus:border-transparent font-helvetica"
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#EE8900] text-white px-8 py-3 rounded-lg font-medium font-helvetica hover:bg-[#EE8900]/90 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Image Section */}
              <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68fcd006ae4fc9.31319454_20251025_132630.webp"
                  alt="Legend Travels Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-helvetica">Visit Our Office</h2>
              <p className="text-gray-600 text-lg font-helvetica">Come meet our team and let's plan your dream vacation together</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0000000000!2d55.1726831!3d24.9978314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f615ac4a1c607%3A0xade3d2df27e4d9ab!2sLegend%20World%20Travel%20%26%20Tourism%20-%20Office%20601%20Bayan%20Business%20Center%20Dubai%20Investment%20Park%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Legend Travels Office Location"
                  />

                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-helvetica">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed font-helvetica">
                    Office 601, Bayan Business Center
                    <br />
                    Dubai Investment Park 1
                    <br />
                    Dubai, UAE
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-helvetica">Business Hours</h3>
                  <div className="space-y-2 text-gray-600 font-helvetica">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

