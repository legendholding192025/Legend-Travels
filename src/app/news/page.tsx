"use client"

import { useState, useEffect, useRef } from "react"
// Using simple SVG icons instead of lucide-react
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Static news data
const staticNewsData = [
  {
    id: "1",
    title: "Legend Travels Expands Global Operations with New European Destinations",
    excerpt: "We're excited to announce the addition of 15 new European destinations to our travel portfolio, offering our clients more diverse and enriching travel experiences.",
    content: "Full article content here...",
    image_url: "https://res.cloudinary.com/dzfhqvxnf/image/upload/v1761120794/cdn_6862a6e1eef048.35976175_20250630_150153_zzb2ar.jpg",
    category: "Company News",
    author: "Legend Travels Team",
    read_time: "5 min read",
    publication_date: "2024-01-15",
    is_featured: true,
    published: true,
  },
  {
    id: "2", 
    title: "Sustainable Tourism Initiative Launched Across Middle East",
    excerpt: "Our new sustainable tourism program focuses on eco-friendly travel options and community-based tourism experiences.",
    content: "Full article content here...",
    image_url: "https://res.cloudinary.com/dzfhqvxnf/image/upload/v1761120728/cdn_6862aedc3ac7d3.80278555_20250630_153556_o8i9jv.png",
    category: "Sustainability",
    author: "Environmental Team",
    read_time: "4 min read",
    publication_date: "2024-01-10",
    is_featured: false,
    published: true,
  },
  {
    id: "3",
    title: "New Technology Platform Enhances Travel Booking Experience",
    excerpt: "We've launched an advanced booking platform with AI-powered recommendations and seamless mobile integration.",
    content: "Full article content here...",
    image_url: "https://res.cloudinary.com/dzfhqvxnf/image/upload/v1761120674/cdn_68831dafb50c56.86321986_20250725_060119_uwrksc.png",
    category: "Technology",
    author: "Tech Team",
    read_time: "6 min read",
    publication_date: "2024-01-05",
    is_featured: false,
    published: true,
  },
  {
    id: "4",
    title: "Partnership with Leading Airlines Expands Flight Options",
    excerpt: "New partnerships with major airlines provide our clients with more flight options and competitive pricing.",
    content: "Full article content here...",
    image_url: "https://res.cloudinary.com/dzfhqvxnf/image/upload/v1761120794/cdn_6862a6e1eef048.35976175_20250630_150153_zzb2ar.jpg",
    category: "Partnerships",
    author: "Partnership Team",
    read_time: "3 min read",
    publication_date: "2024-01-01",
    is_featured: false,
    published: true,
  },
  {
    id: "5",
    title: "Award-Winning Customer Service Team Recognized",
    excerpt: "Our customer service team has been recognized for excellence in travel industry customer support.",
    content: "Full article content here...",
    image_url: "https://res.cloudinary.com/dzfhqvxnf/image/upload/v1761120728/cdn_6862aedc3ac7d3.80278555_20250630_153556_o8i9jv.png",
    category: "Awards",
    author: "HR Team",
    read_time: "4 min read",
    publication_date: "2023-12-28",
    is_featured: false,
    published: true,
  },
  {
    id: "6",
    title: "Cultural Heritage Tours Launch in Historic Cities",
    excerpt: "New cultural heritage tours offer immersive experiences in some of the world's most historic destinations.",
    content: "Full article content here...",
    image_url: "https://res.cloudinary.com/dzfhqvxnf/image/upload/v1761120674/cdn_68831dafb50c56.86321986_20250725_060119_uwrksc.png",
    category: "Tours",
    author: "Tour Development Team",
    read_time: "5 min read",
    publication_date: "2023-12-20",
    is_featured: false,
    published: true,
  }
]

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  image_url: string
  category: string
  author: string
  read_time: string
  publication_date: string
  is_featured: boolean
  published: boolean
}

export default function NewsPage() {
  const [featuredArticle, setFeaturedArticle] = useState<NewsArticle | null>(null)
  const [allArticles, setAllArticles] = useState<NewsArticle[]>([])
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showAllMobile, setShowAllMobile] = useState(false)
  
  // Newsletter subscription state
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false)
  const [subscriptionError, setSubscriptionError] = useState("")
  
  const articlesPerPage = 3
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Set featured article (first one with is_featured: true)
      const featured = staticNewsData.find(article => article.is_featured) || staticNewsData[0]
      setFeaturedArticle(featured)
      
      // Set all other articles for carousel
      const otherArticles = staticNewsData.filter(article => article.id !== featured.id)
      setAllArticles(otherArticles)
      
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
  }

  const nextPage = () => {
    if (isTransitioning) return
    const maxIndex = Math.max(0, allArticles.length - articlesPerPage)
    if (currentCarouselIndex < maxIndex) {
      setIsTransitioning(true)
      setCurrentCarouselIndex(prev => prev + articlesPerPage)
    }
  }

  const prevPage = () => {
    if (isTransitioning) return
    if (currentCarouselIndex > 0) {
      setIsTransitioning(true)
      setCurrentCarouselIndex(prev => Math.max(0, prev - articlesPerPage))
    }
  }

  const handlePageChange = (newIndex: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentCarouselIndex(newIndex)
  }

  const toggleMobileView = () => {
    setShowAllMobile(!showAllMobile)
  }

  const handleShare = async (e: React.MouseEvent, article: NewsArticle) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const shareUrl = `${window.location.origin}/news/${article.id}`
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: shareUrl,
        })
      } else {
        await navigator.clipboard.writeText(shareUrl)
        alert("Link copied to clipboard")
      }
    } catch (err) {
      try {
        const fallbackUrl = `${window.location.origin}/news/${article.id}`
        await navigator.clipboard.writeText(fallbackUrl)
        alert("Link copied to clipboard")
      } catch {
        alert("Failed to share this article")
      }
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    setSubscriptionError("")
    setSubscriptionSuccess(false)

    // Simulate API call
    setTimeout(() => {
      setSubscriptionSuccess(true)
      setEmail("")
      setIsSubscribing(false)
    }, 1500)
  }

  // Get current set of articles for carousel
  const currentArticles = allArticles.slice(currentCarouselIndex, currentCarouselIndex + articlesPerPage)
  const totalPages = Math.ceil(allArticles.length / articlesPerPage)

  // Calculate transform for smooth carousel transition
  const translateX = -(currentCarouselIndex * (100 / articlesPerPage))

  // Get articles for mobile view
  const mobileArticles = showAllMobile ? allArticles : allArticles.slice(0, 3)

  // Calculate the actual number of carousel pages (considering 3 cards per page)
  const actualCarouselPages = Math.ceil(allArticles.length / articlesPerPage)
  
  // Calculate the current page index for pagination dots
  const currentPageIndex = Math.floor(currentCarouselIndex / articlesPerPage)

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[#f8f9fa] pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#5E366D] border-t-transparent"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Page Banner */}
        <div className="relative h-64 md:h-80 bg-gradient-to-r from-[#5E366D] to-[#3d2147] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold font-richmond mb-4">Newsroom</h1>
            <p className="text-lg md:text-xl opacity-90">Stay updated with the latest from Legend Travels</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="min-h-screen bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 py-8 md:px-6">
            <div className="mb-12">
              <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                {/* Featured News */}
                {featuredArticle ? (
                  <Link
                    href={`/news/${featuredArticle.id}`}
                    className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 block group"
                  >
                    <div className="relative h-[300px] w-full md:h-[400px]">
                      <Image
                        src={featuredArticle.image_url}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(featuredArticle.publication_date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {featuredArticle.read_time}
                        </div>
                      </div>
                      <h2 className="mb-3 text-2xl font-bold md:text-3xl group-hover:text-[#5E366D] transition-colors">{featuredArticle.title}</h2>
                      <p className="mb-4 text-gray-600">{featuredArticle.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-[#F39200] font-medium flex items-center">
                          Read More
                          <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex gap-2">
                          <button
                            className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                            onClick={(e) => featuredArticle && handleShare(e, featuredArticle)}
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                            <span className="sr-only">Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex h-[500px] items-center justify-center rounded-xl bg-white">
                    <p className="text-gray-500">No featured article available</p>
                  </div>
                )}

                {/* Newsletter & Latest News */}
                <div className="flex flex-col gap-8">
                  <div className="rounded-xl bg-gradient-to-br from-[#5E366D] to-[#3d2147] p-6 text-white shadow-md">
                    <h3 className="mb-2 text-xl font-bold">Stay Updated</h3>
                    <p className="mb-4 text-sm opacity-90">
                      Subscribe to our newsletter to get the latest news delivered to your inbox.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubscribing || subscriptionSuccess}
                        className="w-full px-3 py-2 border-0 bg-white/20 text-white placeholder:text-white/70 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button 
                        type="submit"
                        disabled={isSubscribing || subscriptionSuccess}
                        className="bg-[#F08900] text-white hover:bg-[#d67a00] disabled:opacity-50 flex items-center justify-center py-2 px-4 rounded-md transition-colors"
                      >
                        {isSubscribing ? (
                          <>
                            <svg className="animate-spin mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Subscribing...
                          </>
                        ) : subscriptionSuccess ? (
                          <>
                            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Subscribed!
                          </>
                        ) : (
                          "Subscribe Now"
                        )}
                      </button>
                      {subscriptionError && (
                        <p className="text-red-300 text-sm">{subscriptionError}</p>
                      )}
                    </form>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-md">
                    <h3 className="mb-6 text-xl font-bold">Latest News</h3>
                    <div className="divide-y divide-gray-100">
                      {mobileArticles.map((article, index) => (
                        <div key={article.id} className="py-4 first:pt-0 last:pb-0">
                          <div className="flex gap-4">
                            <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                              <Image 
                                src={article.image_url} 
                                alt={article.title}
                                fill
                                className="object-cover"
                                loading="lazy"
                                sizes="96px"
                                quality={85}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link href={`/news/${article.id}`}>
                                <h4 className="font-medium leading-tight mb-2 line-clamp-2 hover:text-[#5E366D] transition-colors">
                                  {article.title}
                                </h4>
                              </Link>
                              <p className="text-xs text-gray-500 mb-2">
                                {new Date(article.publication_date).toLocaleDateString()} • {article.read_time}
                              </p>
                              <Link 
                                href={`/news/${article.id}`}
                                className="inline-flex items-center text-sm font-medium text-[#5E366D] hover:text-[#3d2147] transition-colors"
                              >
                                Read More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                      {mobileArticles.length === 0 && (
                        <div className="py-4 text-center text-gray-500">
                          No articles available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* All News */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">All News</h2>
              </div>

              {currentArticles.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl">
                  <p className="text-gray-500">No articles available</p>
                </div>
              ) : (
                <>
                  {/* Mobile View */}
                  <div className="block md:hidden">
                    <div className="grid grid-cols-1 gap-6">
                      {mobileArticles.map((article) => (
                        <Link
                          key={article.id}
                          href={`/news/${article.id}`}
                          className="bg-[rgb(234,226,214)]/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative block"
                        >
                          <div 
                            className="absolute inset-0 bg-gradient-to-br from-[rgb(234,226,214)]/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                            aria-hidden="true"
                          />
                          <div className="relative h-48 overflow-hidden">
                            <Image 
                              src={article.image_url} 
                              alt={article.title} 
                              fill 
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              quality={85}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                          </div>
                          <div className="p-5 flex flex-col flex-grow relative">
                            <div className="flex items-center text-gray-500 text-sm mb-3">
                              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {new Date(article.publication_date).toLocaleDateString()}
                              <svg className="h-4 w-4 ml-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {article.read_time}
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-[rgb(43,28,72)] line-clamp-2">
                              {article.title}
                            </h3>
                            <p className="text-[rgb(93,55,110)] mb-4 line-clamp-3 flex-grow text-lg">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                              <div className="text-[#F39200] font-medium text-sm flex items-center">
                                Read More
                                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              <button
                                className="h-7 w-7 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                                onClick={(e) => handleShare(e, article)}
                              >
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                                <span className="sr-only">Share</span>
                              </button>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Show More/Less Button for Mobile */}
                    {allArticles.length > 3 && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={toggleMobileView}
                          className="bg-[#F08900] text-white hover:bg-[#d67a00] px-8 py-3 rounded-lg font-richmond font-medium transition-all duration-300"
                        >
                          {showAllMobile ? "Show Less" : "Show More"}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Desktop Carousel View */}
                  <div className="hidden md:block relative mb-12">
                    <div className="overflow-hidden pb-8 w-full">
                      <div
                        ref={carouselRef}
                        className="flex transition-transform duration-300 ease-out"
                        style={{
                          transform: `translateX(${translateX}%)`,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                      >
                        {allArticles.map((article, index) => (
                          <div
                            key={article.id}
                            className="flex-shrink-0 w-1/3 px-3"
                          >
                            <Link
                              href={`/news/${article.id}`}
                              className="bg-[rgb(234,226,214)]/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative block"
                            >
                              <div 
                                className="absolute inset-0 bg-gradient-to-br from-[rgb(234,226,214)]/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                                aria-hidden="true"
                              />
                              <div className="relative h-48 overflow-hidden">
                                <Image 
                                  src={article.image_url} 
                                  alt={article.title} 
                                  fill 
                                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  quality={85}
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                />
                              </div>
                              <div className="p-5 flex flex-col flex-grow relative">
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  {new Date(article.publication_date).toLocaleDateString()}
                                  <svg className="h-4 w-4 ml-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {article.read_time}
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-[rgb(43,28,72)] line-clamp-2">
                                  {article.title}
                                </h3>
                                <p className="text-[rgb(93,55,110)] mb-4 line-clamp-3 flex-grow text-lg">
                                  {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                  <div className="text-[#F39200] font-medium text-sm flex items-center">
                                    Read More
                                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                  <button
                                    className="h-7 w-7 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                                    onClick={(e) => handleShare(e, article)}
                                  >
                                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                                    <span className="sr-only">Share</span>
                                  </button>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                      onClick={prevPage}
                      disabled={isTransitioning || currentCarouselIndex === 0}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-100 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous page"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={nextPage}
                      disabled={isTransitioning || currentCarouselIndex >= Math.max(0, allArticles.length - articlesPerPage)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-100 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next page"
                    >
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom Pagination - Desktop Only */}
                  <div className="hidden md:flex justify-center mt-8 gap-2">
                    <div className="flex items-center gap-1.5 px-3">
                      {Array.from({ length: actualCarouselPages }).map((_, index) => {
                        const isCurrentPage = currentPageIndex === index;
                        return (
                          <button
                            key={index}
                            onClick={() => handlePageChange(index * articlesPerPage)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              isCurrentPage
                                ? "bg-[#F08900] w-6"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
