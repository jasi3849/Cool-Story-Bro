// // export default function ServicesList() {
// //   const services = [
// //     {
// //       title: " Digital Strategy",
// //       technologies: ["Strategic planning for your digital presence."],
// //     },
// //     {
// //       title: "Social Media Marketing",
// //       technologies: ["Engaging content and community-driven campaigns that convert."],
// //     },
// //     {
// //       title: "Influencer Marketing",
// //       technologies: ["Leveraging influencers to amplify your brands story and sales."],
// //     },
// //     {
// //       title: "Creative Production",
// //       technologies: ["High-quality content creation — from videos to podcasts, we tell your brand’s story."],
// //     },
// //     {
// //       title: "Performance Marketing",
// //       technologies: ["Data-driven campaigns designed to optimize ROI and drive conversions."],
// //     },
// //     {
// //       title: "Web Development",
// //       technologies: ["Beautiful, functional websites that bring your brand to life."],
// //     },
// //     {
// //       title: "E-commerce Services",
// //       technologies: ["End-to-end e-commerce solutions that scale your brand online."],
// //     },
// //   ]

// //   return (
// //     <section className="py-16 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {services.map((service, index) => (
// //             <div key={index} className="bg-gray-100 p-8 rounded-lg">
// //               <h3 className="text-xl font-bold mb-4">{service.title}</h3>
// //               <ul className="space-y-2">
// //                 {service.technologies.map((tech, techIndex) => (
// //                   <li key={techIndex} className="text-gray-700">
// //                     {tech}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// export default function ServicesList() {
//   const services = [
//     {
//       title: "Social Media Marketing",
//       summary: "Strategic campaigns that build visibility and engagement.",
//       description:
//         "We design tailored strategies for each social media platform to boost your brand presence and foster authentic connections with your audience.",
//     },
//     {
//       title: "Influencer Marketing",
//       summary: "Authentic collaborations with the right voices to elevate your brand.",
//       description:
//         "By leveraging our expansive influencer network, we create partnerships that amplify your brand's message in an engaging and credible way.",
//     },
//     {
//       title: "Content Strategy & Creative Development",
//       summary: "Content that resonates and drives meaningful action.",
//       description:
//         "We create high-quality, brand-aligned content that speaks directly to your audience, from static visuals to videos, ensuring your message always stands out.",
//     },
//     {
//       title: "Performance Marketing",
//       summary: "Maximizing ROI with data-driven ad strategies.",
//       description:
//         "We implement conversion-focused campaigns that blend creative excellence with advanced targeting, ensuring your marketing budget drives measurable growth.",
//     },
//     {
//       title: "Brand Strategy & Positioning",
//       summary: "Crafting a unique identity for your brand.",
//       description:
//         "We help define your brand's core values, positioning, and voice to ensure it stands out in a competitive market and connects deeply with your target audience.",
//     },
//     {
//       title: "Creative Campaigns & IP Development",
//       summary: "Building memorable brand experiences that resonate over time.",
//       description:
//         "We develop innovative and culturally relevant campaigns that go beyond traditional ads, creating long-lasting brand moments and properties that engage your audience on a deeper level.",
//     },
//     {
//       title: "E-commerce & Quick Commerce Solutions",
//       summary: "End-to-end eCommerce management, from platform setup to sales acceleration.",
//       description:
//         "We provide comprehensive solutions for eCommerce and quick commerce businesses, including Shopify store management, product integration, order fulfillment strategies, and sales optimization.",
//     },
//     {
//       title: "Production & Media Creation",
//       summary: "High-quality production that brings your brand to life.",
//       description:
//         "From concept to final edit, our production team handles everything — commercial ads, content shoots, podcasts, and more — ensuring your brand is presented in the most compelling and professional manner.",
//     },
//   ]

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//               <p className="font-semibold mb-3 text-gray-800">{service.summary}</p>
//               {service.description && <p className="text-gray-700">{service.description}</p>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

///////////////////////////////// working ////////////////////////
// import Image from "next/image"

// export default function ServicesList() {
//   const services = [
//     {
//       id: "social-media",
//       title: "Social Media Marketing",
//       summary: "Strategic campaigns that build visibility and engagement.",
//       description:
//         "We design tailored strategies for each social media platform to boost your brand presence and foster authentic connections with your audience.",
//       iconDefault: "/icons/social-media-default.png", // Black icon
//       iconHover: "/icons/social-media-hover.png", // Yellow icon
//     },
//     {
//       id: "influencer",
//       title: "Influencer Marketing",
//       summary: "Authentic collaborations with the right voices to elevate your brand.",
//       description:
//         "By leveraging our expansive influencer network, we create partnerships that amplify your brand's message in an engaging and credible way.",
//       iconDefault: "/icons/influencer-default.png",
//       iconHover: "/icons/influencer-hover.png",
//     },
//     {
//       id: "content-strategy",
//       title: "Content Strategy & Creative Development",
//       summary: "Content that resonates and drives meaningful action.",
//       description:
//         "We create high-quality, brand-aligned content that speaks directly to your audience, from static visuals to videos, ensuring your message always stands out.",
//       iconDefault: "/icons/content-strategy-default.png",
//       iconHover: "/icons/content-strategy-hover.png",
//     },
//     {
//       id: "performance",
//       title: "Performance Marketing",
//       summary: "Maximizing ROI with data-driven ad strategies.",
//       description:
//         "We implement conversion-focused campaigns that blend creative excellence with advanced targeting, ensuring your marketing budget drives measurable growth.",
//       iconDefault: "/icons/performance-default.png",
//       iconHover: "/icons/performance-hover.png",
//     },
//     {
//       id: "brand-strategy",
//       title: "Brand Strategy & Positioning",
//       summary: "Crafting a unique identity for your brand.",
//       description:
//         "We help define your brand's core values, positioning, and voice to ensure it stands out in a competitive market and connects deeply with your target audience.",
//       iconDefault: "/icons/brand-strategy-default.png",
//       iconHover: "/icons/brand-strategy-hover.png",
//     },
//     {
//       id: "creative-campaigns",
//       title: "Creative Campaigns & IP Development",
//       summary: "Building memorable brand experiences that resonate over time.",
//       description:
//         "We develop innovative and culturally relevant campaigns that go beyond traditional ads, creating long-lasting brand moments and properties that engage your audience on a deeper level.",
//       iconDefault: "/icons/creative-campaigns-default.png",
//       iconHover: "/icons/creative-campaigns-hover.png",
//     },
//     {
//       id: "ecommerce",
//       title: "E-commerce & Quick Commerce Solutions",
//       summary: "End-to-end eCommerce management, from platform setup to sales acceleration.",
//       description:
//         "We provide comprehensive solutions for eCommerce and quick commerce businesses, including Shopify store management, product integration, order fulfillment strategies, and sales optimization.",
//       iconDefault: "/icons/ecommerce-default.png",
//       iconHover: "/icons/ecommerce-hover.png",
//     },
//     {
//       id: "production",
//       title: "Production & Media Creation",
//       summary: "High-quality production that brings your brand to life.",
//       description:
//         "From concept to final edit, our production team handles everything — commercial ads, content shoots, podcasts, and more — ensuring your brand is presented in the most compelling and professional manner.",
//       iconDefault: "/icons/production-default.png",
//       iconHover: "/icons/production-hover.png",
//     },
//   ]

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="group relative border-2 border-gray-200 p-8 rounded-lg transition-all duration-300 
//                          /* Desktop styles */
//                          bg-white hover:bg-[#ffd100] hover:border-[#ffd100] hover:shadow-xl hover:-translate-y-2
//                          /* Mobile styles - always yellow background */
//                          md:bg-white md:hover:bg-[#ffd100]
//                          bg-[#ffd100] border-[#ffd100] shadow-lg"
//             >
//               {/* Icon Container */}
//               <div className="mb-6 relative w-16 h-16">
//                 {/* Desktop: Yellow icon by default, Black icon on hover */}
//                 {/* Mobile: Always yellow icon */}
//                 <Image
//                   src={service.iconHover || "/placeholder.svg"} // Yellow icon for default state on desktop and mobile
//                   alt={`${service.title} icon`}
//                   width={64}
//                   height={64}
//                   className="w-full h-full object-contain transition-opacity duration-300 
//                            /* Desktop: Show yellow by default, hide on hover */
//                            md:opacity-100 md:group-hover:opacity-0
//                            /* Mobile: Always show yellow */
//                            opacity-100"
//                 />
//                 {/* Black icon for hover state on desktop only */}
//                 <Image
//                   src={service.iconDefault || "/placeholder.svg"} // Black icon for hover state on desktop
//                   alt={`${service.title} hover icon`}
//                   width={64}
//                   height={64}
//                   className="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-300 
//                            /* Desktop: Hidden by default, show on hover */
//                            md:opacity-0 md:group-hover:opacity-100
//                            /* Mobile: Always hidden */
//                            opacity-0"
//                 />
//               </div>

//               {/* Content */}
//               <h3
//                 className="text-xl font-bold mb-3 transition-colors duration-300 
//                            /* Desktop: Black by default, black on hover */
//                            md:text-black md:group-hover:text-black
//                            /* Mobile: Always black */
//                            text-black"
//               >
//                 {service.title}
//               </h3>
//               <p
//                 className="font-semibold mb-3 transition-colors duration-300 
//                           /* Desktop: Gray by default, black on hover */
//                           md:text-gray-800 md:group-hover:text-black
//                           /* Mobile: Always black */
//                           text-black"
//               >
//                 {service.summary}
//               </p>
//               {service.description && (
//                 <p
//                   className="transition-colors duration-300 
//                             /* Desktop: Gray by default, darker gray on hover */
//                             md:text-gray-700 md:group-hover:text-gray-800
//                             /* Mobile: Always dark gray */
//                             text-gray-800"
//                 >
//                   {service.description}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
////////////////////////////////////////////////////////////////////end ///



import Image from "next/image";

export default function ServicesList() {
  const services = [
    {
      id: "social-media",
      title: "Social Media Marketing",
      summary: "Strategic campaigns that build visibility and engagement.",
   
      iconDefault: "/icons/social-media-default.png",
      iconHover: "/icons/social-media-hover.png",
    },
    {
      id: "influencer",
      title: "Influencer Marketing",
      summary: "Authentic collaborations with the right voices to elevate your brand.",
     
      iconDefault: "/icons/influencer-default.png",
      iconHover: "/icons/influencer-hover.png",
    },
    {
      id: "content-strategy",
      title: "Content Strategy & Creative Development",
      summary: "Content that resonates and drives meaningful action.",
  
      iconDefault: "/icons/content-strategy-default.png",
      iconHover: "/icons/content-strategy-hover.png",
    },
    {
      id: "performance",
      title: "Performance Marketing",
      summary: "Maximizing ROI with data-driven ad strategies.",
     
      iconDefault: "/icons/performance-default.png",
      iconHover: "/icons/performance-hover.png",
    },
    {
      id: "brand-strategy",
      title: "Brand Strategy & Positioning",
      summary: "Crafting a unique identity for your brand.",
    
      iconDefault: "/icons/brand-strategy-default.png",
      iconHover: "/icons/brand-strategy-hover.png",
    },
    {
      id: "creative-campaigns",
      title: "Creative Campaigns & IP Development",
      summary: "Building memorable brand experiences that resonate over time.",
    
      iconDefault: "/icons/creative-campaigns-default.png",
      iconHover: "/icons/creative-campaigns-hover.png",
    },
    {
      id: "ecommerce",
      title: "E-commerce & Quick Commerce Solutions",
      summary: "End-to-end eCommerce management, from platform setup to sales acceleration.",
   
      iconDefault: "/icons/ecommerce-default.png",
      iconHover: "/icons/ecommerce-hover.png",
    },
    {
      id: "production",
      title: "Production & Media Creation",
      summary: "High-quality production that brings your brand to life.",
    
      iconDefault: "/icons/production-default.png",
      iconHover: "/icons/production-hover.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative border-2 border-gray-200 p-8 rounded-lg transition-all duration-300 
                         bg-white hover:bg-[#ffd100] hover:border-[#ffd100] hover:shadow-xl hover:-translate-y-2 
                         md:bg-white md:hover:bg-[#ffd100] bg-[#ffd100] border-[#ffd100] shadow-lg"
            >
              {/* Icon */}
              <div
                className="mb-6 w-16 h-16 bg-contain bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url(${service.iconDefault})`,
                }}
              >
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${service.iconHover})`,
                  }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
              <p className="font-semibold mb-3 text-black">{service.summary}</p>
              {service.description && (
                <p className="text-gray-800">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
