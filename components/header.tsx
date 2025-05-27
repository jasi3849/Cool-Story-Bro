// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { Menu, X } from "lucide-react"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <Link href="/" className="flex items-center">
//           <Image src="/images/logo.png" alt="COOL STORY BRO" width={120} height={80} className="h-16 w-auto" />
//         </Link>

//         {/* Mobile menu button */}
//         <button className="md:hidden" onClick={toggleMenu}>
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-10">
//           <Link
//             href="/about"
//             className={`font-medium text-lg hover:text-[#ffd100] transition-colors ${
//               isScrolled ? "text-black" : "text-white"
//             }`}
//           >
//             About Us
//           </Link>
//           <Link
//             href="/services"
//             className={`font-medium text-lg hover:text-[#ffd100] transition-colors ${
//               isScrolled ? "text-black" : "text-white"
//             }`}
//           >
//             Our Services
//           </Link>
//           <Link
//             href="/portfolio"
//             className={`font-medium text-lg hover:text-[#ffd100] transition-colors ${
//               isScrolled ? "text-black" : "text-white"
//             }`}
//           >
//             Portfolio
//           </Link>
//           <Link
//             href="/contact"
//             className={`font-medium text-lg hover:text-[#ffd100] transition-colors ${
//               isScrolled ? "text-black" : "text-white"
//             }`}
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md z-50">
//             <div className="flex flex-col p-6 space-y-6">
//               <Link
//                 href="/about"
//                 className="font-medium text-lg hover:text-[#ffd100]"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/services"
//                 className="font-medium text-lg hover:text-[#ffd100]"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Our Services
//               </Link>
//               <Link
//                 href="/portfolio"
//                 className="font-medium text-lg hover:text-[#ffd100]"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Portfolio
//               </Link>
//               <Link
//                 href="/contact"
//                 className="font-medium text-lg hover:text-[#ffd100]"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }


"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="COOL STORY BRO" width={120} height={80} className="h-16 w-auto" />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/about"
            className={`font-medium text-lg hover:text-[#ffd100] transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`font-medium text-lg hover:text-[#ffd100] transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Our Services
          </Link>
          <Link
            href="/portfolio"
            className={`font-medium text-lg hover:text-[#ffd100] transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className={`font-medium text-lg hover:text-[#ffd100] transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Contact
          </Link>

          {/* Schedule a Meet Button */}
          <a
            href="https://calendly.com/jsaddiwal" // replace with your actual Calendly URL
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded font-semibold bg-[#E6BC00] text-white hover:bg-[#d1a700] transition-colors"
          >
            Schedule a Meet
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex flex-col p-6 space-y-4">
              <Link
                href="/about"
                className="font-medium text-lg hover:text-[#ffd100]"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="font-medium text-lg hover:text-[#ffd100]"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className="font-medium text-lg hover:text-[#ffd100]"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="font-medium text-lg hover:text-[#ffd100]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Schedule a Meet Button Mobile */}
              <a
                href="https://calendly.com/your-calendly-username" // replace with your actual Calendly URL
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-5 py-3 rounded font-semibold bg-teal-500 text-white hover:bg-teal-600 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Meet
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
