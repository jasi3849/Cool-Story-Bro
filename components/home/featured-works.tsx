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
      title: "Clearly Tripping",
      description: "“Varkala” if you wanna have Goa level experience but on a budget!", 
      category: "Social Media",
      type: "instagram",
      // Replace with your actual YouTube video ID
      media: "https://www.instagram.com/reel/DD1Ge6CP7fs/embed",
    },

    // Example 2: Instagram Reel
    {
      id: 2,
      title: "grow.kwik",
      description: "This retail shift is quietly creating super-customers—and 90% of founders will miss it",
      category: "Social Media",
      type: "instagram",
      // Replace with your actual Instagram post embed URL
      media: "https://www.instagram.com/reel/DJT-TqqzEYR/embed",
    },

    // Example 3: Vimeo Video
    {
      id: 3,
      title: "theradical_era",
      description: "You must be tired of all the gyaan the influencers are giving out, and scrolling through the Instagram watching reels of the various case studies of different businesses, right!?",
      category: "Social Media",
      type: "instagram",
      // Replace with your actual Vimeo video ID
      media: "https://www.instagram.com/reel/CzD0ZBVIKuM/embed",
    },

    // Example 4: Regular Image
    {
      id: 4,
      title: "Aevy TV",
      description: "Why I Quit My Corporate Job To Do YouTube-Aevy Tv",
      category: "Youtube",
      type: "youtube",
      media: "https://www.youtube.com/watch?v=gqbTmZDzPXU",
    },

    // Example 5: Another YouTube Video
    {
      id: 5,
      title: "The Piyush Kukreja",
      description: "The Piyush Kukreja Show 3.0",
      category: "Youtube",
      type: "youtube",
      // Replace with your actual YouTube video ID
      media: "https://www.youtube.com/watch?v=V_7iS2RDbjY",
    },

    // Example 6: Another Instagram Reel
    {
      id: 6,
      title: "VTP AV",
      description: "High-Impact AV for VTP Realty | Video Editing, Motion Graphics & Voiceover Production",
      category: "Animation",
      type: "vimeo",
      // Replace with your actual Instagram post embed URL
      media: "https://player.vimeo.com/video/1065864640?h=bc26fc47a5",
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
