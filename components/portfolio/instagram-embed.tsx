// // // // // export default function InstagramEmbed({ embedUrl }) {
// // // // //   return (
// // // // //     <div className="relative pb-[100%] h-0 overflow-hidden max-w-full">
// // // // //       <iframe
// // // // //         src={embedUrl}
// // // // //         title="Instagram post"
// // // // //         allowTransparency={true}
// // // // //         allowFullScreen={true}
// // // // //         className="absolute top-0 left-0 w-full h-full border-0"
// // // // //       ></iframe>
// // // // //     </div>
// // // // //   )
// // // // // }
// // // // export default function InstagramEmbed({ embedUrl }) {
// // // //   return (
// // // //     <div className="w-full h-full">
// // // //       <iframe
// // // //         src={embedUrl}
// // // //         title="Instagram post"
// // // //         allowTransparency={true}
// // // //         allowFullScreen={true}
// // // //         className="w-full h-full border-0"
// // // //       ></iframe>
// // // //     </div>
// // // //   )
// // // // }
// // // export default function InstagramEmbed({ embedUrl }) {
// // //   return (
// // //     <div className="w-full h-full">
// // //       <iframe
// // //         src={embedUrl}
// // //         title="Instagram post"
// // //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //         allowFullScreen
// // //         className="w-full h-full border-0"
// // //       ></iframe>
// // //     </div>
// // //   );
// // // }


// // import { useEffect, useRef } from "react";

// // export default function InstagramEmbed({ embedUrl }) {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     if (window.instgrm) {
// //       window.instgrm.Embeds.process();
// //     } else {
// //       const script = document.createElement("script");
// //       script.async = true;
// //       script.src = "//www.instagram.com/embed.js";
// //       script.onload = () => {
// //         if (window.instgrm) window.instgrm.Embeds.process();
// //       };
// //       document.body.appendChild(script);
// //     }
// //   }, []);

// //   return (
// //     <div ref={containerRef} className="w-full">
// //       <blockquote
// //         className="instagram-media"
// //         data-instgrm-permalink={embedUrl}
// //         data-instgrm-version="14"
// //         style={{ width: "100%" }}
// //       ></blockquote>
// //     </div>
// //   );
// // }


// import { useEffect, useRef } from "react";

// export default function InstagramEmbed({ embedUrl }) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     } else {
//       const script = document.createElement("script");
//       script.async = true;
//       script.src = "//www.instagram.com/embed.js";
//       script.onload = () => {
//         if (window.instgrm) window.instgrm.Embeds.process();
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div ref={containerRef} className="overflow-hidden">
//       <blockquote
//         className="instagram-media"
//         data-instgrm-permalink={embedUrl}
//         data-instgrm-version="14"
//         style={{
//           width: "100%",
//           margin: "0 auto",
//           maxWidth: "540px", // Instagram's default max width
//         }}
//       ></blockquote>
//     </div>
//   );
// }

// export default function InstagramEmbed({ embedUrl }) {
//   return (
//     <div className="w-full h-full flex items-center justify-center bg-gray-100">
//       <iframe
//         src={embedUrl}
//         title="Instagram post"
//         allowTransparency={true}
//         allowFullScreen={true}
//         className="w-full min-h-[600px] border-0"
//         scrolling="no"
//       ></iframe>
//     </div>
//   )
// }


// export default function InstagramEmbed({ embedUrl }) {
//   // Ensure the URL ends with /embed
//   const normalizedUrl = embedUrl.includes("/embed") ? embedUrl : `${embedUrl}/embed`;

//   return (
//     <div className="w-full h-full flex items-center justify-center bg-gray-100">
//       <iframe
//         src={normalizedUrl}
//         title="Instagram post"
//         allowtransparency="true"
//         allowFullScreen={true}
//         className="w-full min-h-[600px] border-0"
//         scrolling="no"
//         onError={(e) => console.error("Instagram embed failed:", e)}
//       ></iframe>
//     </div>
//   );
// }

export default function InstagramEmbed({ embedUrl }) {
  // Ensure the URL ends with /embed
  const normalizedUrl = embedUrl.includes("/embed") ? embedUrl : `${embedUrl}/embed`;

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <iframe
        src={normalizedUrl}
        title="Instagram post"
        allowtransparency="true"
        allowFullScreen={true}
        className="w-full min-h-[600px] border-0"
        scrolling="no"
      ></iframe>
    </div>
  );
}