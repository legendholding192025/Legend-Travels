"use client"

const features = [
  {
    title: "IATA Certified",
    description: "Official certification ensuring industry compliance and quality standards",
    bgImage: "https://cdn.legendholding.com/images/cdn_68fb6b87e26cf5.43301910_20251024_120527.webp",
    iconSrc: "/12.svg",
  },
  {
    title: "95% Satisfaction Rate",
    description: "Consistently exceeding client expectations with proven results",
    bgImage: "https://cdn.legendholding.com/images/cdn_68fb6ba704e459.11634108_20251024_120559.webp",
    iconSrc: "/13.svg",
  },
  {
    title: "Diversified Teams with Regional Offices",
    description: "Global presence with local expertise across multiple continents",
    bgImage: "https://cdn.legendholding.com/images/cdn_68fb6bf2721ac2.99553463_20251024_120714.webp",
    iconSrc: "/14.svg",
  },
  {
    title: "Part of Legend Holding",
    description: "Backed by a trusted international corporate group",
    bgImage: "https://cdn.legendholding.com/images/cdn_68fb6c11b820c8.33819064_20251024_120745.webp",
    iconSrc: "/15.svg",
  },
]

function WhyChooseUsComponent() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: "#5D376E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Why Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

              <div className="relative p-6">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm p-3 transition-colors group-hover:bg-white/30">
                  <img src={feature.iconSrc} alt="" className="h-8 w-8" />
                </div>
                <h3 className="text-balance mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-white/90">{feature.description}</p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-primary transition-all duration-500 ease-in-out group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid gap-8 rounded-2xl border border-border bg-secondary/50 p-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">+20,000</div>
            <div className="mt-1 text-sm text-muted-foreground">Satisfied Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">+80</div>
            <div className="mt-1 text-sm text-muted-foreground">Destination Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">+300</div>
            <div className="mt-1 text-sm text-muted-foreground">Successful Events</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const WhyChooseUs = WhyChooseUsComponent

export { WhyChooseUs }
export default WhyChooseUsComponent
