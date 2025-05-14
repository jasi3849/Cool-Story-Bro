// // export default function YouTubeEmbed({ embedUrl }) {
// //   return (
// //     <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
// //       <iframe
// //         src={embedUrl}
// //         title="YouTube video player"
// //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //         allowFullScreen
// //         className="absolute top-0 left-0 w-full h-full border-0"
// //       ></iframe>
// //     </div>
// //   )
// // }
// export default function YouTubeEmbed({ embedUrl }) {
//   return (
//     <div className="w-full h-full">
//       <iframe
//         src={embedUrl}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         className="w-full h-full border-0"
//       ></iframe>
//     </div>
//   )
// }


export default function YouTubeEmbed({ embedUrl }) {
  return (
    <div className="w-full h-full">
      <iframe
        src={embedUrl.replace("watch?v=", "embed/")} // Ensure correct format
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
}
