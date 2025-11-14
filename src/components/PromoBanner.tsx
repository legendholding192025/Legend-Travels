'use client';

import { useState, useEffect } from 'react';

export interface PromoBannerData {
  title: string;
  subtitle: string;
  image: string;
}

interface PromoBannerProps {
  data?: PromoBannerData[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

const defaultPromoData: PromoBannerData[] = [
  {
    title: 'SAINT LUCIA',
    subtitle: 'CARIBBEAN',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'MALDIVES',
    subtitle: 'TROPICAL PARADISE',
    image: 'https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp'
  },
  {
    title: 'BALI',
    subtitle: 'ISLAND ESCAPE',
    image: 'https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp'
  }
];

const PromoBanner = ({ 
  data = defaultPromoData, 
  autoRotate = true,
  rotationInterval = 5000 
}: PromoBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoRotate || data.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, data.length]);

  const currentData = data[currentIndex] || data[0];

  return (
    <section className="py-8 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div 
            className="h-64 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat relative transition-all duration-[600ms] ease-in-out"
            style={{
              backgroundImage: `url('${currentData.image}')`,
              opacity: isTransitioning ? 0.7 : 1,
              transform: isTransitioning ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-[600ms]"></div>
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-between p-8 md:p-12">
              {/* Left Side - Text Content */}
              <div className="flex-1">
                <div 
                  className="space-y-2 transition-all duration-[600ms] ease-in-out"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-white font-helvetica">
                    {currentData.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-purple-300 font-helvetica font-medium">
                    {currentData.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          {data.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
