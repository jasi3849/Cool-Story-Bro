import Link from "next/link"

export default function CoreServices() {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Engaging content and community-driven campaigns that convert.",
      link: "/services#digital-strategy",
    },
    {
      title: "Influencer Marketing",
      description: "Leveraging influencers to amplify your brand’s story and sales.",
      link: "/services#social-media",
    },
    {
      title: "Creative Production",
      description: "High-quality content creation — from videos to podcasts, we tell your brand’s story.",
      link: "/services#performance-marketing",
    },
    {
      title: "Performance Marketing",
      description: "Data-driven campaigns designed to optimize ROI and drive conversions.",
      link: "/services#branding",
    },
       {
      title: "Web Development",
      description: "Beautiful, functional websites that bring your brand to life.",
      link: "/services#branding",
    },
       {
      title: "E-commerce Services",
      description: "End-to-end e-commerce solutions that scale your brand online.",
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
