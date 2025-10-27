import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import PromoBanner from '@/components/PromoBanner';
import StatsSection from '@/components/StatsSection';
import WhyUsSection from '@/components/WhyUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <PromoBanner />
      <StatsSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
