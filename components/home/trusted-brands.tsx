import Image from "next/image"

export default function TrustedBrands() {
  const brands = [
    { name: "Reliance-retial", logo: "/brand-logs/reliance-retail-logo.png" },
    { name: "Brand 2", logo: "/brand-logs/peak-pacific.png" },
    { name: "Brand 3", logo: "/brand-logs/newgen-enterprise-logo.png" },
    { name: "Brand 4", logo: "/brand-logs/edvantech-logo.jpeg" },
    { name: "Brand 5", logo: "/brand-logs/hike-logo.png" },
    { name: "Brand 6", logo: "/brand-logs/sarmentum-logo.jpeg" },
    { name: "Brand 7", logo: "/brand-logs/aptara-logo.jpeg" },
    { name: "Brand 8", logo: "/brand-logs/edofox-logo.png" },
    { name: "Brand 9", logo: "/brand-logs/quickheal-logo.jpeg" },
    { name: "Brand 10", logo: "/brand-logs/vtp-logo.jpeg" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 text-center">
          OUR TEAM HAS WORKED WITH 
          <br />
          LEADING
          
          BRANDS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand, i) => (
            <div key={i} className="w-32 h-32 flex items-center justify-center">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={100}
                height={100}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
