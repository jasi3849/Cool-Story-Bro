import Image from "next/image"

export default function WorkGallery() {
  const categories = ["All", "Web Design", "App Development", "Branding", "UI/UX Design"]

  const works = [
    {
      title: "I'M AARON LOEB.",
      category: "Web Design",
      description: "Portfolio website for a creative professional",
      type: "image",
      media: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "CV Resume Portfolio",
      category: "Branding",
      description: "Personal branding and resume design",
      type: "image",
      media: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Hello. I'm Omar",
      category: "Web Design",
      description: "Personal portfolio website with custom animations",
      type: "image",
      media: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "UX/UI Design",
      category: "UI/UX Design",
      description: "User interface design for a mobile application",
      type: "video",
      media: "https://example.com/video.mp4", // Replace with actual video URL
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Web Development",
      category: "Web Design",
      description: "Full-stack web application for a startup",
      type: "image",
      media: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mobile App",
      category: "App Development",
      description: "iOS and Android app development",
      type: "image",
      media: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand identity design for a new business",
      type: "video",
      media: "https://example.com/video2.mp4", // Replace with actual video URL
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Online store with custom checkout process",
      type: "image",
      media: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Dashboard Design",
      category: "UI/UX Design",
      description: "Analytics dashboard with data visualization",
      type: "image",
      media: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full ${
                index === 0 ? "bg-[#ffd100] text-[#1a1a1a] font-bold" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Work Gallery - Different Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 3 || index === 6 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {work.type === "video" ? (
                <>
                  <div className="relative w-full h-full">
                    <Image
                      src={work.thumbnail || "/placeholder.svg"}
                      alt={work.title}
                      width={600}
                      height={400}
                      className={`w-full ${
                        index === 0 || index === 3 || index === 6 ? "h-[500px]" : "h-64"
                      } object-cover transition-transform duration-500 group-hover:scale-110`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#ffd100] rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-8 h-8 text-[#1a1a1a]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Image
                  src={work.media || "/placeholder.svg"}
                  alt={work.title}
                  width={600}
                  height={400}
                  className={`w-full ${
                    index === 0 || index === 3 || index === 6 ? "h-[500px]" : "h-64"
                  } object-cover transition-transform duration-500 group-hover:scale-110`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block bg-[#ffd100] text-[#1a1a1a] px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {work.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-white text-sm opacity-80">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
