// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import YouTubeEmbed from "./youtube-embed"
// import InstagramEmbed from "./instagram-embed"

// // Portfolio data structure - easy to add new sections and items
// const portfolioData = {
//   sections: [
//     {
//       id: "all",
//       name: "All",
//     },
//     {
//       id: "ui-ux",
//       name: "UI/UX Design",
//     },
//     {
//       id: "Ad",
//       name: "Advertising",
//     },
//     {
//       id: "content",
//       name: "Content",
//     },
//     {
//       id: "social-media",
//       name: "Social Media",
//     },
//   ],
//   items: [
//     {
//       id: 1,
//       title: "Modern Dashboard UI",
//       description: "A clean and modern dashboard interface for a SaaS application",
//       category: "ui-ux",
//       type: "image",
//       media: "/placeholder.svg?height=400&width=600",
//       featured: true,
//     },
//     {
//       id: 2,
//       title: "Brand Identity for Tech Startup",
//       description: "Complete brand identity including logo, color palette, and guidelines",
//       category: "branding",
//       type: "image",
//       media: "/placeholder.svg?height=400&width=600",
//       featured: false,
//     },
//     {
//       id: 3,
//       title: "E-commerce Website Redesign",
//       description: "Complete redesign of an e-commerce platform focusing on user experience",
//       category: "web-design",
//       type: "youtube",
//       media: "https://player.vimeo.com/video/1065859246?h=aaa8715a97", // Replace with actual YouTube embed URL
//       // thumbnail: "/placeholder.svg?height=400&width=600",
//       featured: true,
//     },
//     {
//       id: 4,
//       title: "Social Media Campaign",
//       description: "Viral social media campaign for a fashion brand",
//       category: "social-media",
//       type: "instagram",
//       media: "https://www.instagram.com/p/CdKI1S9OLdY/embed", // Replace with actual Instagram embed URL
//       thumbnail: "/placeholder.svg?height=400&width=600",
//       featured: false,
//     },
//     {
//       id: 5,
//       title: "Mobile App UI Kit",
//       description: "Comprehensive UI kit for a fitness tracking mobile application",
//       category: "ui-ux",
//       type: "image",
//       media: "/placeholder.svg?height=400&width=600",
//       featured: false,
//     },
//     {
//       id: 6,
//       title: "Corporate Website",
//       description: "Modern corporate website with custom animations",
//       category: "web-design",
//       type: "youtube",
//       media: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual YouTube embed URL
//       thumbnail: "/placeholder.svg?height=400&width=600",
//       featured: true,
//     },
//     {
//       id: 7,
//       title: "Product Branding",
//       description: "Complete product branding for a new consumer electronics line",
//       category: "branding",
//       type: "image",
//       media: "/placeholder.svg?height=400&width=600",
//       featured: false,
//     },
//     {
//       id: 8,
//       title: "Social Media Content",
//       description: "Engaging content series for a food delivery service",
//       category: "social-media",
//       type: "instagram",
//       media: "https://www.instagram.com/p/CdKI1S9OLdY/embed", // Replace with actual Instagram embed URL
//       thumbnail: "/placeholder.svg?height=400&width=600",
//       featured: false,
//     },
//     {
//       id: 9,
//       title: "Web Application Interface",
//       description: "User interface design for a project management tool",
//       category: "ui-ux",
//       type: "image",
//       media: "/placeholder.svg?height=400&width=600",
//       featured: true,
//     },
//   ],
// }

// export default function PortfolioGallery() {
//   const [activeSection, setActiveSection] = useState("all")
//   const [showModal, setShowModal] = useState(false)
//   const [selectedItem, setSelectedItem] = useState(null)

//   // Filter items based on active section
//   const filteredItems =
//     activeSection === "all"
//       ? portfolioData.items
//       : portfolioData.items.filter((item) => item.category === activeSection)

//   const openModal = (item) => {
//     setSelectedItem(item)
//     setShowModal(true)
//   }

//   const closeModal = () => {
//     setShowModal(false)
//     setSelectedItem(null)
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Filter Categories */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {portfolioData.sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                 activeSection === section.id ? "bg-[#ffd100] text-[#1a1a1a] font-bold" : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {section.name}
//             </button>
//           ))}
//         </div>

//         {/* Portfolio Gallery */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredItems.map((item) => (
//             <div
//               key={item.id}
//               className={`group relative overflow-hidden rounded-lg ${
//                 item.featured ? "md:col-span-2 md:row-span-2" : ""
//               }`}
//               onClick={() => item.type !== "image" && openModal(item)}
//             >
//               {/* Thumbnail/Image */}
//               <Image
//                 src={item.type === "image" ? item.media : item.thumbnail || "/placeholder.svg"}
//                 alt={item.title}
//                 width={600}
//                 height={400}
//                 className={`w-full ${
//                   item.featured ? "h-[500px]" : "h-64"
//                 } object-cover transition-transform duration-500 group-hover:scale-110`}
//               />

//               {/* Play button for videos */}
//               {(item.type === "youtube" || item.type === "instagram") && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 bg-[#ffd100] rounded-full flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="w-8 h-8 text-[#1a1a1a]"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               )}

//               {/* Hover overlay with details */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                 <span className="inline-block bg-[#ffd100] text-[#1a1a1a] px-3 py-1 rounded-full text-sm font-medium mb-2">
//                   {portfolioData.sections.find((section) => section.id === item.category)?.name}
//                 </span>
//                 <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-white text-sm opacity-80">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal for videos */}
//         {showModal && selectedItem && (
//           <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
//             <div className="bg-white rounded-lg w-full max-w-4xl">
//               <div className="p-4 border-b flex justify-between items-center">
//                 <h3 className="text-xl font-bold">{selectedItem.title}</h3>
//                 <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//               <div className="p-4">
//                 {selectedItem.type === "youtube" && (
//                   <div className="aspect-w-16 aspect-h-9">
//                     <YouTubeEmbed embedUrl={selectedItem.media} />
//                   </div>
//                 )}
//                 {selectedItem.type === "instagram" && (
//                   <div className="aspect-w-1 aspect-h-1">
//                     <InstagramEmbed embedUrl={selectedItem.media} />
//                   </div>
//                 )}
//               </div>
//               <div className="p-4 border-t">
//                 <p>{selectedItem.description}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import YouTubeEmbed from "./youtube-embed"
import InstagramEmbed from "./instagram-embed"
import VimeoEmbed from "./vimeo-embed"

// Portfolio data structure with support for subsections
const portfolioData = {
  // Main categories
  sections: [
    {
      id: "all",
      name: "All",
      subsections: [],
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      subsections: [],
    },
    {
      id: "motion-ani",
      name: "Motion Graphics & Animation",
      subsections: [],
    },
    {
      id: "content",
      name: "Content",
      subsections: [
        {
          id: "youtube",
          name: "YouTube",
        },
        {
          id: "reels",
          name: "Reels",
        },
      ],
    },
    {
      id: "branding",
      name: "Branding",
      subsections: [],
    },
  ],

  // Portfolio items
  items: [
    {
      id: 1,
      title: "A World Trasformed by Learning",
      description: "Custom 2D Animation | Character Design & Motion Graphics",
      category: "motion-ani",
      subcategory: "",
      type: "vimeo",
      media: "https://player.vimeo.com/video/1065859246?h=aaa8715a97",
    },
    {
      id: 2,
      title: "Moro cloud",
      description: "Minimalist & Impactful Animation | Icon & Graphic Motion Design",
      category: "motion-ani",
      subcategory: "",
      type: "vimeo",
      media: "https://player.vimeo.com/video/1065865476?h=1b80f930d9",
    },
    {
      id: 3,
      title: "Moro Hub Dubai website lunch",
      description: "Typography & Motion Graphics | Dynamic Visual Storytelling",
      category: "motion-ani",
      subcategory: "",
      type: "vimeo",
      media: "https://player.vimeo.com/video/1065865532?h=ba1c3a1c2c", // Replace with actual YouTube embed URL
      featured: true,
    },
    {
      id: 4,
      title: "MORO",
      description: "Informative Explainer Video | Illustration & Motion Graphics",
      category: "motion-ani",
      subcategory: "",
      type: "vimeo",
      media: "https://player.vimeo.com/video/1065865427?h=87bbefa42d", // Replace with actual Instagram embed URL
    },
    {
      id: 5,
      title: "VTP AV",
      description: "High-Impact AV for VTP Realty | Video Editing, Motion Graphics & Voiceover Production",
      category: "motion-ani",
      subcategory: "",
      type: "vimeo",
      media: "https://player.vimeo.com/video/1065864640?h=bc26fc47a5",
      featured: true,
    },
    {
      id: 6,
      title: "3000cr",
      description: "VTP Realty – ₹3000 Crore Milestone | High-Impact Motion Graphics & Video Editing",
      category: "motion-ani",
      subcategory: "",
      type: "vimeo",
      media: "https://player.vimeo.com/video/1065864311?h=7ba31121de", // Replace with actual YouTube embed URL
    },
    {
      id: 7,
      title: "Why I Quit My Corporate Job To Do YouTube-Aevy Tv",
      description: "Honest Lessons On Money & Risk",
      category: "content",
      subcategory: "youtube",
      type: "youtube",
      media: "https://www.youtube.com/watch?v=gqbTmZDzPXU",
    },
    {
      id: 8,
      title: "Indian MBA Is DYING-Aevy Tv",
      description: "Student Exposes Harsh Truth",
      category: "content",
      subcategory: "youtube",
      type: "youtube",
      media: "https://www.youtube.com/watch?v=SATEUEKh7xA", // Replace with actual Instagram embed URL
      featured: true,
    },
    {
      id: 9,
      title: "The Piyush Kukreja Show 3.0",
      description: "Hindi Marketing Podcast (AI, Content Creation, D2C, Google Ads, SEO…)",
      category: "content",
      subcategory: "youtube",
      type: "youtube",
      media: "https://www.youtube.com/watch?v=V_7iS2RDbjY",
    },
    {
      id: 10,
      title: "NuutJob final",
      description: "",
      category: "content",
      subcategory: "youtube",
      type: "youtube",
      media: "https://www.youtube.com/watch?v=eyAJPIQtyy4", // Replace with actual Vimeo embed URL
      featured: true,
    },
    {
      id: 11,
      title: "Tryorganiko",
      description: "",
      category: "content",
      subcategory: "reels",
      type: "instagram",
      media: "https://www.instagram.com/reel/CyQpEzASm4Q/embed", // Replace with actual Vimeo embed URL
    },
    {
      id: 12,
      title: "Tryorganiko",
      description: "",
      category: "content",
      subcategory: "reels",
      type: "instagram",
      media: "https://www.instagram.com/reel/CxF46IRSw3E/embed", // Replace with actual Vimeo embed URL
      featured: true,
    },



  ],
}

// export default function PortfolioGallery() {
//   const [activeSection, setActiveSection] = useState("all")
//   const [activeSubsection, setActiveSubsection] = useState("")

//   // Get current section
//   const currentSection = portfolioData.sections.find((section) => section.id === activeSection)

//   // Filter items based on active section and subsection
//   const filteredItems = portfolioData.items.filter((item) => {
//     if (activeSection === "all") return true
//     if (!activeSubsection) return item.category === activeSection
//     return item.category === activeSection && item.subcategory === activeSubsection
//   })

//   // Handle section change
//   const handleSectionChange = (sectionId) => {
//     setActiveSection(sectionId)
//     setActiveSubsection("")
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Main Categories */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {portfolioData.sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => handleSectionChange(section.id)}
//               className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                 activeSection === section.id ? "bg-[#ffd100] text-[#1a1a1a] font-bold" : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {section.name}
//             </button>
//           ))}
//         </div>

//         {/* Subsections (if available) */}
//         {currentSection && currentSection.subsections.length > 0 && (
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <button
//               onClick={() => setActiveSubsection("")}
//               className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
//                 activeSubsection === "" ? "bg-[#ffd100] text-[#1a1a1a] font-bold" : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               All {currentSection.name}
//             </button>
//             {currentSection.subsections.map((subsection) => (
//               <button
//                 key={subsection.id}
//                 onClick={() => setActiveSubsection(subsection.id)}
//                 className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
//                   activeSubsection === subsection.id
//                     ? "bg-[#ffd100] text-[#1a1a1a] font-bold"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 {subsection.name}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Portfolio Items */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredItems.map((item) => (
//             <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
//               {/* Media Content */}
//               <div className="h-64 overflow-hidden">
//                 {item.type === "image" && (
//                   <Image
//                     src={item.media || "/placeholder.svg"}
//                     alt={item.title}
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover"
//                   />
//                 )}

//                 {item.type === "youtube" && <YouTubeEmbed embedUrl={item.media} />}

//                 {item.type === "instagram" && <InstagramEmbed embedUrl={item.media} />}

//                 {item.type === "vimeo" && <VimeoEmbed embedUrl={item.media} />}
//               </div>

//               {/* Item Details (below media) */}
//               <div className="p-4">
//                 <h3 className="text-lg font-bold mb-1">{item.title}</h3>
//                 {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



export default function PortfolioGallery() {
  const [activeSection, setActiveSection] = useState("all")
  const [activeSubsection, setActiveSubsection] = useState("")

  // Get current section
  const currentSection = portfolioData.sections.find((section) => section.id === activeSection)

  // Filter items based on active section and subsection
  const filteredItems = portfolioData.items.filter((item) => {
    if (activeSection === "all") return true
    if (!activeSubsection) return item.category === activeSection
    return item.category === activeSection && item.subcategory === activeSubsection
  })

  // Handle section change
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    setActiveSubsection("")
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {portfolioData.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeSection === section.id ? "bg-[#ffd100] text-[#1a1a1a] font-bold" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* Subsections (if available) */}
        {currentSection && currentSection.subsections.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveSubsection("")}
              className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
                activeSubsection === "" ? "bg-[#ffd100] text-[#1a1a1a] font-bold" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              All {currentSection.name}
            </button>
            {currentSection.subsections.map((subsection) => (
              <button
                key={subsection.id}
                onClick={() => setActiveSubsection(subsection.id)}
                className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
                  activeSubsection === subsection.id
                    ? "bg-[#ffd100] text-[#1a1a1a] font-bold"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {subsection.name}
              </button>
            ))}
          </div>
        )}

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Media Content - Adjusted for different media types */}
              <div className={`${item.type === "instagram" ? "h-auto" : "h-64"} overflow-hidden`}>
                {item.type === "image" && (
                  <Image
                    src={item.media || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                )}

                {item.type === "youtube" && <YouTubeEmbed embedUrl={item.media} />}

                {item.type === "instagram" && <InstagramEmbed embedUrl={item.media} />}

                {item.type === "vimeo" && <VimeoEmbed embedUrl={item.media} />}
              </div>

              {/* Item Details (below media) */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
