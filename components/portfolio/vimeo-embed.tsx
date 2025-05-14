// export default function VimeoEmbed({ embedUrl }) {
//     return (
//       <div className="w-full h-full">
//         <iframe
//           src={embedUrl}
//           title="Vimeo video player"
//           allow="autoplay; fullscreen; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full border-0"
//         ></iframe>
//       </div>
//     )
//   }
  
export default function VimeoEmbed({ embedUrl }) {
  // Add query parameters to hide title, byline, and portrait
  const customizedUrl = new URL(embedUrl);
  customizedUrl.searchParams.set("title", "0");
  customizedUrl.searchParams.set("byline", "0");
  customizedUrl.searchParams.set("portrait", "0");
  customizedUrl.searchParams.set("controls", "1");
  customizedUrl.searchParams.set("sidedock", "0");

  return (
    <div className="w-full h-full">
      <iframe
        src={customizedUrl.toString()}
        title="Vimeo video player"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
}