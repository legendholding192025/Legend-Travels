"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

type Destination = {
  slug: string
  country: string
  title: string
  price: string
  image: string
  images: string[]
  overview: string
  inclusions: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
}

const destinations: Destination[] = [
  {
    slug: "kenya-safaris",
    country: "KENYA",
    title: "KENYA SAFARIS BY ROAD",
    price: "9000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fcd211d69459.09801331_20251025_133513.webp",
    images: [
      "https://cdn.legendholding.com/images/cdn_68fcd211d69459.09801331_20251025_133513.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
    ],
    overview: "Experience the ultimate African adventure with our Kenya Safaris by Road. Journey through breathtaking landscapes, witness the Big Five in their natural habitat, and immerse yourself in the rich culture and wildlife of Kenya. This comprehensive road safari takes you through national parks, game reserves, and cultural sites, offering an authentic and unforgettable experience.",
    inclusions: [
      "Accommodation in selected lodges and camps",
      "All meals (breakfast, lunch, and dinner)",
      "Professional safari guide and driver",
      "All park entry fees and game drives",
      "Transportation in 4x4 safari vehicle",
      "Bottled water during game drives",
      "Airport transfers",
      "24/7 support during the trip",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Arrive at Jomo Kenyatta International Airport, meet your guide, and transfer to your hotel. Briefing about your safari adventure and overnight stay in Nairobi.",
      },
      {
        day: 2,
        title: "Nairobi to Maasai Mara",
        description: "Early morning departure to Maasai Mara National Reserve. Afternoon game drive to spot lions, elephants, cheetahs, and the great wildebeest migration (seasonal).",
      },
      {
        day: 3,
        title: "Full Day in Maasai Mara",
        description: "Full day game drives in Maasai Mara. Experience the vast savannah plains, witness predator-prey interactions, and visit a Maasai village to learn about their culture.",
      },
      {
        day: 4,
        title: "Maasai Mara to Lake Nakuru",
        description: "Depart for Lake Nakuru National Park, famous for its flamingos and rhino sanctuary. Afternoon game drive to see white and black rhinos, buffalo, and various bird species.",
      },
      {
        day: 5,
        title: "Lake Nakuru to Amboseli",
        description: "Travel to Amboseli National Park with stunning views of Mount Kilimanjaro. Afternoon game drive to see large herds of elephants against the backdrop of Africa's highest peak.",
      },
      {
        day: 6,
        title: "Amboseli to Nairobi",
        description: "Early morning game drive in Amboseli, then return to Nairobi. Transfer to airport for your departure flight.",
      },
    ],
  },
  {
    slug: "jordan",
    country: "JORDAN",
    title: "LOREM IPSUM",
    price: "1000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fcd1e63233b8.71394110_20251025_133430.webp",
    images: [
      "https://cdn.legendholding.com/images/cdn_68fcd1e63233b8.71394110_20251025_133430.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
    ],
    overview: "Discover the ancient wonders and modern charm of Jordan. From the rose-red city of Petra to the therapeutic waters of the Dead Sea, experience a journey through history, culture, and natural beauty.",
    inclusions: [
      "Accommodation in 4-star hotels",
      "Daily breakfast",
      "Professional English-speaking guide",
      "All entrance fees to historical sites",
      "Transportation in air-conditioned vehicle",
      "Dead Sea experience",
      "Wadi Rum desert camp experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Amman",
        description: "Arrive at Queen Alia International Airport, transfer to hotel in Amman. Free time to explore the capital city.",
      },
      {
        day: 2,
        title: "Amman to Petra",
        description: "Travel to the ancient city of Petra. Explore the Siq, Treasury, and Royal Tombs. Overnight in Petra.",
      },
      {
        day: 3,
        title: "Petra to Wadi Rum",
        description: "Continue to Wadi Rum for a jeep tour and overnight stay in a desert camp under the stars.",
      },
      {
        day: 4,
        title: "Wadi Rum to Dead Sea",
        description: "Travel to the Dead Sea, the lowest point on Earth. Experience floating in the therapeutic waters and enjoy the mineral-rich mud.",
      },
      {
        day: 5,
        title: "Dead Sea to Amman",
        description: "Return to Amman for city tour including the Citadel and Roman Theatre. Transfer to airport for departure.",
      },
    ],
  },
  {
    slug: "china",
    country: "CHINA",
    title: "LOREM IPSUM",
    price: "9000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fcd19cac0a18.81136205_20251025_133316.webp",
    images: [
      "https://cdn.legendholding.com/images/cdn_68fcd19cac0a18.81136205_20251025_133316.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
    ],
    overview: "Explore the ancient civilization and modern marvels of China. From the Great Wall to bustling metropolises, experience the perfect blend of tradition and innovation.",
    inclusions: [
      "Accommodation in 4-star hotels",
      "Daily breakfast",
      "Professional English-speaking guide",
      "All entrance fees",
      "High-speed train tickets",
      "Internal flights",
      "All transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Beijing",
        description: "Arrive in Beijing, transfer to hotel. Evening at leisure to explore the city.",
      },
      {
        day: 2,
        title: "Great Wall of China",
        description: "Visit the magnificent Great Wall of China at Mutianyu section. Explore this ancient wonder and enjoy breathtaking views.",
      },
      {
        day: 3,
        title: "Forbidden City & Tiananmen Square",
        description: "Tour the Forbidden City and Tiananmen Square. Experience the imperial history of China.",
      },
      {
        day: 4,
        title: "Beijing to Shanghai",
        description: "Take high-speed train to Shanghai. Explore the Bund and Nanjing Road in the evening.",
      },
      {
        day: 5,
        title: "Shanghai Exploration",
        description: "Visit Yu Garden, Shanghai Museum, and enjoy a Huangpu River cruise. Experience modern Shanghai.",
      },
    ],
  },
  {
    slug: "japan",
    country: "JAPAN",
    title: "LOREM IPSUM",
    price: "8000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fcd006ae4fc9.31319454_20251025_132630.webp",
    images: [
      "https://cdn.legendholding.com/images/cdn_68fcd006ae4fc9.31319454_20251025_132630.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
    ],
    overview: "Immerse yourself in the unique culture of Japan, where ancient traditions meet cutting-edge technology. Experience cherry blossoms, traditional temples, and modern cities.",
    inclusions: [
      "Accommodation in traditional ryokans and modern hotels",
      "Daily breakfast",
      "Japan Rail Pass",
      "Professional guide",
      "All entrance fees",
      "Traditional kaiseki dinner",
      "All transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        description: "Arrive in Tokyo, transfer to hotel. Explore Shibuya and Harajuku districts.",
      },
      {
        day: 2,
        title: "Tokyo City Tour",
        description: "Visit Senso-ji Temple, Tokyo Skytree, and the Imperial Palace. Experience traditional and modern Tokyo.",
      },
      {
        day: 3,
        title: "Tokyo to Kyoto",
        description: "Take bullet train to Kyoto. Visit Fushimi Inari Shrine and explore Gion district.",
      },
      {
        day: 4,
        title: "Kyoto Temples",
        description: "Visit Kinkaku-ji (Golden Pavilion), Arashiyama Bamboo Grove, and Kiyomizu-dera Temple.",
      },
      {
        day: 5,
        title: "Kyoto to Osaka",
        description: "Travel to Osaka. Visit Osaka Castle and enjoy street food in Dotonbori district.",
      },
    ],
  },
  {
    slug: "bali",
    country: "BALI",
    title: "LOREM IPSUM",
    price: "5000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
    images: [
      "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
    ],
    overview: "Discover the Island of Gods with its stunning beaches, ancient temples, lush rice terraces, and vibrant culture. Experience the perfect blend of relaxation and adventure.",
    inclusions: [
      "Accommodation in beachfront resorts",
      "Daily breakfast",
      "Airport transfers",
      "Temple visits and cultural tours",
      "Traditional Balinese dance show",
      "Rice terrace tour",
      "Water sports activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali",
        description: "Arrive at Ngurah Rai Airport, transfer to your beachfront resort. Evening at leisure to enjoy the beach.",
      },
      {
        day: 2,
        title: "Ubud Cultural Tour",
        description: "Visit Tegalalang Rice Terraces, Ubud Monkey Forest, and traditional Balinese villages. Experience local crafts and culture.",
      },
      {
        day: 3,
        title: "Temple Tour",
        description: "Visit Tanah Lot Temple, Uluwatu Temple, and watch the famous Kecak dance performance at sunset.",
      },
      {
        day: 4,
        title: "Water Sports & Beach",
        description: "Enjoy water sports activities including snorkeling, diving, or surfing. Relax on pristine beaches.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Free time for last-minute shopping or beach activities. Transfer to airport for departure.",
      },
    ],
  },
  {
    slug: "maldives",
    country: "MALDIVES",
    title: "LOREM IPSUM",
    price: "12000 AED",
    image: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
    images: [
      "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
      "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
    ],
    overview: "Escape to paradise in the Maldives, where crystal-clear turquoise waters, pristine white sand beaches, and luxurious overwater villas await. Experience ultimate relaxation and world-class diving.",
    inclusions: [
      "Accommodation in overwater villa",
      "All meals (breakfast, lunch, dinner)",
      "Speedboat transfers",
      "Snorkeling equipment",
      "Sunset cruise",
      "Spa treatment",
      "Water sports activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Maldives",
        description: "Arrive at Velana International Airport, speedboat transfer to your resort. Check into your overwater villa and enjoy the stunning views.",
      },
      {
        day: 2,
        title: "Snorkeling & Marine Life",
        description: "Explore the vibrant coral reefs and marine life. Snorkel with colorful fish, rays, and if lucky, spot sea turtles.",
      },
      {
        day: 3,
        title: "Island Hopping",
        description: "Visit local islands, experience Maldivian culture, and enjoy a traditional lunch. Return to resort for relaxation.",
      },
      {
        day: 4,
        title: "Spa & Relaxation",
        description: "Enjoy a rejuvenating spa treatment, relax on the beach, or try water sports like kayaking and paddleboarding.",
      },
      {
        day: 5,
        title: "Sunset Cruise & Departure",
        description: "Enjoy a romantic sunset cruise with dolphin watching. Return to resort and transfer to airport for departure.",
      },
    ],
  },
]

export default function DestinationDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const destination = destinations.find((dest) => dest.slug === slug)

  if (!destination) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
            <p className="text-gray-600">The destination you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const [activeTab, setActiveTab] = useState("overview")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Header is typically hidden when scrolling down past ~100px
      setIsHeaderVisible(scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Title and Info Section */}
      <section className="pt-8 pb-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{destination.title}</h1>
            <p className="text-lg text-gray-600 mb-2">{destination.country}</p>
            <p className="text-2xl font-bold text-[#EE8900]">Starting from {destination.price}</p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className={`border-b bg-white sticky z-40 shadow-sm transition-all duration-300 ${isHeaderVisible ? "top-24" : "top-0"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "inclusions", label: "Inclusions" },
              { id: "itinerary", label: "Itinerary" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-all duration-200 whitespace-nowrap text-base font-medium ${
                  activeTab === tab.id
                    ? "border-[#EE8900] text-[#EE8900]"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Image Gallery Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Large Image */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden mb-4">
            <Image
              src={destination.images[selectedImageIndex]}
              alt={destination.title}
              fill
              className="object-cover cursor-pointer"
              priority
            />
          </div>

          {/* Thumbnail Row */}
          <div className="px-2 py-3">
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {destination.images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-1"
                >
                  <button
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-32 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImageIndex === index
                        ? "ring-2 ring-[#EE8900] ring-offset-2 opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${destination.title} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                </div>
              ))}
              {destination.images.length > 5 && (
                <div className="relative flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center m-1">
                  <span className="text-gray-600 text-sm font-medium">+{destination.images.length - 5} more</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections with Tabs */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === "overview" && (
                <div>
                  <p className="text-gray-700 leading-relaxed">{destination.overview}</p>
                </div>
              )}

              {activeTab === "inclusions" && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-[#EE8900] flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="text-gray-700">{inclusion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "itinerary" && (
                <div>
                  <div className="space-y-8">
                    {destination.itinerary.map((item, index) => (
                      <div key={index} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-[#EE8900] rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {item.day}
                          </div>
                        </div>
                        <div className="flex-1 pb-8 border-b border-gray-200 last:border-b-0">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Package Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="text-lg font-semibold text-gray-900">{destination.itinerary.length} Days</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Starting Price</p>
                    <p className="text-2xl font-bold text-[#EE8900]">{destination.price}</p>
                  </div>
                  <button
                    className="w-full mt-6 bg-[#EE8900] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#EE8900]/90 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

