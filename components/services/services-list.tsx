// export default function ServicesList() {
//   const services = [
//     {
//       title: " Digital Strategy",
//       technologies: ["Strategic planning for your digital presence."],
//     },
//     {
//       title: "Social Media Marketing",
//       technologies: ["Engaging content and community-driven campaigns that convert."],
//     },
//     {
//       title: "Influencer Marketing",
//       technologies: ["Leveraging influencers to amplify your brands story and sales."],
//     },
//     {
//       title: "Creative Production",
//       technologies: ["High-quality content creation — from videos to podcasts, we tell your brand’s story."],
//     },
//     {
//       title: "Performance Marketing",
//       technologies: ["Data-driven campaigns designed to optimize ROI and drive conversions."],
//     },
//     {
//       title: "Web Development",
//       technologies: ["Beautiful, functional websites that bring your brand to life."],
//     },
//     {
//       title: "E-commerce Services",
//       technologies: ["End-to-end e-commerce solutions that scale your brand online."],
//     },
//   ]

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-gray-100 p-8 rounded-lg">
//               <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//               <ul className="space-y-2">
//                 {service.technologies.map((tech, techIndex) => (
//                   <li key={techIndex} className="text-gray-700">
//                     {tech}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
export default function ServicesList() {
  const services = [
    {
      title: "Social Media Marketing",
      summary: "Strategic campaigns that build visibility and engagement.",
      description:
        "We design tailored strategies for each social media platform to boost your brand presence and foster authentic connections with your audience.",
    },
    {
      title: "Influencer Marketing",
      summary: "Authentic collaborations with the right voices to elevate your brand.",
      description:
        "By leveraging our expansive influencer network, we create partnerships that amplify your brand's message in an engaging and credible way.",
    },
    {
      title: "Content Strategy & Creative Development",
      summary: "Content that resonates and drives meaningful action.",
      description:
        "We create high-quality, brand-aligned content that speaks directly to your audience, from static visuals to videos, ensuring your message always stands out.",
    },
    {
      title: "Performance Marketing",
      summary: "Maximizing ROI with data-driven ad strategies.",
      description:
        "We implement conversion-focused campaigns that blend creative excellence with advanced targeting, ensuring your marketing budget drives measurable growth.",
    },
    {
      title: "Brand Strategy & Positioning",
      summary: "Crafting a unique identity for your brand.",
      description:
        "We help define your brand's core values, positioning, and voice to ensure it stands out in a competitive market and connects deeply with your target audience.",
    },
    {
      title: "Creative Campaigns & IP Development",
      summary: "Building memorable brand experiences that resonate over time.",
      description:
        "We develop innovative and culturally relevant campaigns that go beyond traditional ads, creating long-lasting brand moments and properties that engage your audience on a deeper level.",
    },
    {
      title: "E-commerce & Quick Commerce Solutions",
      summary: "End-to-end eCommerce management, from platform setup to sales acceleration.",
      description:
        "We provide comprehensive solutions for eCommerce and quick commerce businesses, including Shopify store management, product integration, order fulfillment strategies, and sales optimization.",
    },
    {
      title: "Production & Media Creation",
      summary: "High-quality production that brings your brand to life.",
      description:
        "From concept to final edit, our production team handles everything — commercial ads, content shoots, podcasts, and more — ensuring your brand is presented in the most compelling and professional manner.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="font-semibold mb-3 text-gray-800">{service.summary}</p>
              {service.description && <p className="text-gray-700">{service.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
