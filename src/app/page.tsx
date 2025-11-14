import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import PromoBanner from '@/components/PromoBanner';
import StatsSection from '@/components/StatsSection';
import WhyUsSection from '@/components/WhyUsSection';
import CircularSection from '@/components/CircularSection';
import SpecialtySection from '@/components/SpecialtySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PopularDestinations from '@/components/holidays/PopularDestinations';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CircularSection />
      <PromoBanner />
      <PopularDestinations />
      {/* <StatsSection /> */}
      {/* <ServicesSection /> */}
      <WhyUsSection />  
      <ContactSection />
      <Footer />
    </main>
  );
}
