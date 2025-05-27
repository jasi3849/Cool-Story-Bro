// export default function Story() {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
//             <span className="text-gray-500 font-bold">Image Placeholder</span>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold mb-6">Our Story</h2>
//             <p className="mb-4">
//             We started as a team of marketers, content creators, and social media geeks who believed storytelling is the future of commerce. Tired of campaigns that win awards but don’t drive sales, we built Cool Story Bro — a place where creative meets conversion, and stories lead to scale.
//             </p>
           
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from "next/image";

export default function Story() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden">
            <Image
              src="\images\our-story.png" // Replace with your actual image path
              alt="Our Story Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              We started as a team of marketers, content creators, and social media geeks who believed storytelling is the future of commerce. Tired of campaigns that win awards but don’t drive sales, we built Cool Story Bro — a place where creative meets conversion, and stories lead to scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
