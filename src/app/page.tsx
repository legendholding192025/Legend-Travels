import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import PromoBanner from '@/components/PromoBanner';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <PromoBanner />
      <StatsSection />
    </main>
  );
}
