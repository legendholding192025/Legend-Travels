import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SpecialtySection from '@/components/SpecialtySection'
import StatsSection from '@/components/StatsSection'
import ProcessDiagram from '@/components/ProcessDiagram'
import CaseStudies from '@/components/CaseStudies'
import ContactSection from '@/components/ContactSection'

export default function CorporateEventsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center -mt-24 pt-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.legendholding.com/images/cdn_6901ffe687c2c3.41223005_20251029_115206.webp')",
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
              Corporate Events Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-helvetica">
              Professional event planning and management for your corporate needs
            </p>
          </div>
        </div>
      </section>

      <SpecialtySection/>
      <StatsSection/>
      
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
