import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SpecialtySection from '@/components/SpecialtySection'
import StatsSection from '@/components/StatsSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import CaseStudies from '@/components/CaseStudies'
import ContactSection from '@/components/ContactSection'
import WhyUsSection from '@/components/WhyUsSection'

export default function ExhibitionsAndSummitsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center -mt-24 pt-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.legendholding.com/images/cdn_690323b7ebaf81.19125116_20251030_083711.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 w-full max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-helvetica" style={{ color: '#EE8900' }}>
              Exhibitions & Summits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-helvetica">
              Comprehensive event management solutions for exhibitions and summits worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-helvetica" style={{ color: '#EE8900' }}>
                World-Class Event Management
              </h2>
              <p className="text-lg text-gray-700 mb-4 font-helvetica">
                At Legend Travels, we specialize in creating exceptional exhibition and summit experiences. 
                Our comprehensive event management services ensure seamless execution from planning to completion.
              </p>
              <p className="text-lg text-gray-700 mb-4 font-helvetica">
                Whether you&apos;re organizing a trade show, industry summit, or international exhibition, 
                our expert team handles every detail to deliver outstanding results.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.legendholding.com/images/cdn_690323da6cf1f4.88332464_20251030_083746.webp"
                alt="Exhibitions and Summits"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-helvetica" style={{ color: '#EE8900' }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600 font-helvetica">
              End-to-end solutions for exhibitions and summits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EE8900] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-helvetica" style={{ color: '#2B1C48' }}>Event Planning</h3>
              <p className="text-gray-600 font-helvetica">
                Comprehensive planning services including venue selection, logistics coordination, and timeline management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EE8900] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-helvetica" style={{ color: '#2B1C48' }}>Delegate Management</h3>
              <p className="text-gray-600 font-helvetica">
                Complete delegate registration, accommodation, and travel arrangements for all participants.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EE8900] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-helvetica" style={{ color: '#2B1C48' }}>Venue Management</h3>
              <p className="text-gray-600 font-helvetica">
                Expert venue sourcing, negotiation, and on-site management to ensure optimal event spaces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EE8900] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-helvetica" style={{ color: '#2B1C48' }}>Technology Solutions</h3>
              <p className="text-gray-600 font-helvetica">
                State-of-the-art event technology including registration systems, mobile apps, and virtual event platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EE8900] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-helvetica" style={{ color: '#2B1C48' }}>24/7 Support</h3>
              <p className="text-gray-600 font-helvetica">
                Round-the-clock support team available throughout your event to handle any issues immediately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EE8900] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-helvetica" style={{ color: '#2B1C48' }}>Risk Management</h3>
              <p className="text-gray-600 font-helvetica">
                Comprehensive risk assessment and contingency planning to ensure smooth event execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SpecialtySection/>
      <WhyUsSection/>
      {/* <StatsSection/> */}
      
      {/* Process Diagram Section */}
      <section className="py-16 bg-white">
        <ProcessDiagram />
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      <ContactSection/>

      <Footer />
    </main>
  )
}

