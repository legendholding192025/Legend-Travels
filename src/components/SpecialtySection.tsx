export default function SpecialtySection() {
  const specialties = [
    {
      title: "CORPORATE EVENTS",
      image: "https://cdn.legendholding.com/images/cdn_6903239d0aa250.26197380_20251030_083645.webp",
    },
    {
      title: "SUMMITS",
      image: "https://cdn.legendholding.com/images/cdn_690323b7ebaf81.19125116_20251030_083711.webp",
    },
    {
      title: "EXHIBITIONS",
      image: "https://cdn.legendholding.com/images/cdn_690323da6cf1f4.88332464_20251030_083746.webp",
    },
  ];

  return (
    <section className="bg-[#2d2550] py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-12 md:mb-16">Specialty</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {specialties.map((specialty) => (
            <div key={specialty.title} className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <img
                  src={specialty.image || "/placeholder.svg"}
                  alt={specialty.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-light tracking-wider">{specialty.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


