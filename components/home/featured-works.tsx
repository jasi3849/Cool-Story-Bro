// import Link from "next/link"
// import Image from "next/image"
// import YouTubeEmbed from "../portfolio/youtube-embed"
// import InstagramEmbed from "../portfolio/instagram-embed"
// import VimeoEmbed from "../portfolio/vimeo-embed"


// export default function FeaturedWorks() {
//   const works = [
//     {
//       title: "I'M AARON LOEB.",
//       category: "Portfolio",
//       image: "/placeholder.svg?height=400&width=600",
//       link: "#",
//     },
//     {
//       title: "CV Resume Portfolio",
//       category: "Elementor Template Kit",
//       image: "/placeholder.svg?height=400&width=600",
//       link: "#",
//     },
//     {
//       title: "Hello. I'm Omar",
//       category: "Portfolio",
//       image: "/placeholder.svg?height=400&width=600",
//       link: "#",
//     },
//     {
//       title: "UX/UI Design",
//       category: "APP Development",
//       image: "/placeholder.svg?height=400&width=600",
//       link: "#",
//     },
//     {
//       title: "Web Development",
//       category: "My Education",
//       image: "/placeholder.svg?height=400&width=600",
//       link: "#",
//     },
//     {
//       title: "UX/UI Design",
//       category: "APP Development",
//       image: "/placeholder.svg?height=400&width=600",
//       link: "#",
//     },
//   ]

//   return (
//     <section id="work" className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Showcase of Featured Works</h2>

//         {/* Featured Works Grid - Matching portfolio style */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {works.map((work) => (
//             <div key={work.id} className="bg-white rounded-lg overflow-hidden shadow-md">
//               {/* Media Content - Adjusted for different media types */}
//               <div className={`${work.type === "instagram" ? "h-auto" : "h-64"} overflow-hidden`}>
//                 {work.type === "image" && (
//                   <Image
//                     src={work.media || "/placeholder.svg"}
//                     alt={work.title}
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover"
//                   />
//                 )}

//                 {work.type === "youtube" && <YouTubeEmbed embedUrl={work.media} />}

//                 {work.type === "instagram" && <InstagramEmbed embedUrl={work.media} />}

//                 {work.type === "vimeo" && <VimeoEmbed embedUrl={work.media} />}
//               </div>

//               {/* Item Details (below media) */}
//               <div className="p-4">
//                 <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium mb-2">
//                   {work.category}
//                 </span>
//                 <h3 className="text-lg font-bold mb-1">{work.title}</h3>
//                 {work.description && <p className="text-gray-600 text-sm">{work.description}</p>}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             href="/portfolio"
//             className="inline-block bg-[#1a1a1a] text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300"
//           >
//             View More
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }


import Link from "next/link"
import Image from "next/image"
import YouTubeEmbed from "../portfolio/youtube-embed"
import InstagramEmbed from "../portfolio/instagram-embed"
import VimeoEmbed from "../portfolio/vimeo-embed"

export default function FeaturedWorks() {
  // Featured works data - examples for different media types
  const works = [
    // Example 1: YouTube Video
    {
      id: 1,
      title: "Brand Campaign Video",
      description: "Digital campaign for a leading fashion brand",
      category: "Video Production",
      type: "youtube",
      // Replace with your actual YouTube video ID
      media: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },

    // Example 2: Instagram Reel
    {
      id: 2,
      title: "Product Launch Reel",
      description: "Viral reel for new product launch",
      category: "Social Media",
      type: "instagram",
      // Replace with your actual Instagram post embed URL
      media: "https://www.instagram.com/reel/CyQpEzASm4Q/embed",
    },

    // Example 3: Vimeo Video
    {
      id: 3,
      title: "Corporate Documentary",
      description: "Behind-the-scenes look at corporate culture",
      category: "Documentary",
      type: "vimeo",
      // Replace with your actual Vimeo video ID
      media: "https://player.vimeo.com/video/76979871",
    },

    // Example 4: Regular Image
    {
      id: 4,
      title: "Brand Identity Design",
      description: "Complete rebrand for tech startup",
      category: "Branding",
      type: "image",
      media: "/placeholder.svg?height=400&width=600",
    },

    // Example 5: Another YouTube Video
    {
      id: 5,
      title: "Marketing Strategy Explainer",
      description: "Animated explainer video on marketing strategy",
      category: "Animation",
      type: "youtube",
      // Replace with your actual YouTube video ID
      media: "https://www.youtube.com/embed/jNQXAC9IVRw",
    },

    // Example 6: Another Instagram Reel
    {
      id: 6,
      title: "Influencer Campaign",
      description: "Collaboration with top industry influencers",
      category: "Influencer Marketing",
      type: "instagram",
      // Replace with your actual Instagram post embed URL
      media: "https://www.instagram.com/p/CpvKH0trTSH/embed",
    },
  ]

  return (
    <section id="work" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Showcase of Featured Works</h2>

        {/* Featured Works Grid - Matching portfolio style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Media Content - Adjusted for different media types */}
              <div className={`${work.type === "instagram" ? "h-auto" : "h-64"} overflow-hidden`}>
                {work.type === "image" && (
                  <Image
                    src={work.media || "/placeholder.svg"}
                    alt={work.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                )}

                {work.type === "youtube" && <YouTubeEmbed embedUrl={work.media} />}

                {work.type === "instagram" && <InstagramEmbed embedUrl={work.media} />}

                {work.type === "vimeo" && <VimeoEmbed embedUrl={work.media} />}
              </div>

              {/* Item Details (below media) */}
              <div className="p-4">
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium mb-2">
                  {work.category}
                </span>
                <h3 className="text-lg font-bold mb-1">{work.title}</h3>
                {work.description && <p className="text-gray-600 text-sm">{work.description}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block bg-[#1a1a1a] text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}
