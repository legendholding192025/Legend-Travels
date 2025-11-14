export default function TravelCollage() {
  const categories = [
    {
      title: "NATURE",
      description: "Explore breathtaking landscapes",
      image: "https://cdn.legendholding.com/images/cdn_68ff2783e8ed15.58998963_20251027_080419.webp",
      gridArea: "md:col-span-2 md:row-span-2",
    },
    {
      title: "CITIES",
      description: "Discover urban wonders",
      image: "https://cdn.legendholding.com/images/cdn_68ff25749ac784.77104749_20251027_075532.webp",
      gridArea: "md:col-span-1 md:row-span-1",
    },
    {
      title: "HERITAGE",
      description: "Journey through history",
      image: "https://cdn.legendholding.com/images/cdn_68ff24e39a7b41.33171560_20251027_075307.webp",
      gridArea: "md:col-span-1 md:row-span-1",
    },
    {
      title: "ADVENTURE",
      description: "Seek thrilling experiences",
      image: "https://cdn.legendholding.com/images/cdn_68ff28899b4215.43209353_20251027_080841.webp",
      gridArea: "md:col-span-2 md:row-span-1",
    },
    {
      title: "FAMILY",
      description: "Create lasting memories",
      image: "https://cdn.legendholding.com/images/cdn_68ff2b084196e1.64521788_20251027_081920.webp",
      gridArea: "md:col-span-1 md:row-span-1",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Explore Your Next Journey</h2>
          <p className="text-lg text-purple-200">Discover amazing destinations across different categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`group relative overflow-hidden rounded-2xl ${category.gridArea} cursor-pointer`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">{category.title}</h3>
                  <p className="text-purple-200 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
                {/* Decorative Element */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

