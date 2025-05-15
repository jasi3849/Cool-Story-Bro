import Link from "next/link"

export default function CoreServices() {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Strategic campaigns that build visibility and engagement.",
      link: "/services#digital-strategy",
    },
    {
      title: "Influencer Marketing",
      description: "Authentic collaborations with the right voices to elevate your brand.",
      link: "/services#social-media",
    },
    {
      title: "Content Strategy & Creative Development",
      description: "Content that resonates and drives meaningful action.",
      link: "/services#performance-marketing",
    },
    {
      title: "Performance Marketing",
      description: "Maximizing ROI with data-driven ad strategies..",
      link: "/services#branding",
    },
       {
      title: "Brand Strategy & Positioning",
      description: "Crafting a unique identity for your brand.",
      link: "/services#branding",
    },
       {
      title: "Creative Campaigns & IP Development",
      description: "Building memorable brand experiences that resonate over time.",
      link: "/services#branding",
    },
        {
      title: "E-commerce & Quick Commerce Solutions",
      description: "End-to-end eCommerce management, from platform setup to sales acceleration.",
      link: "/services#branding",
    },
        {
      title: "Production & Media Creation",
      description: "High-quality production that brings your brand to life.",
      link: "/services#branding",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Core Services</h2>
        <h3 className="text-xl mb-12 text-center">From Strategy to Execution — Everything You Need to Grow Online</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6">{service.description}</p>
              <Link href={service.link} className="inline-block text-[#1a1a1a] font-medium hover:text-[#ffd100]">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
