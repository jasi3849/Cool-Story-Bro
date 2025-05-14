export default function PortfolioHero() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-[#1a1a1a] to-[#333333]">
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-white">
            Explore Our Showcase of <span className="text-[#ffd100]">Featured</span> Works
          </h2>
          <p className="text-lg mb-8 text-white">
            Check out our portfolio of successful projects across various industries.
          </p>
        </div>
      </div>
    </section>
  )
}
