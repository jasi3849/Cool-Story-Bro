"use client"

import { useState } from "react"

export default function AboutHero() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section
      className={`relative h-screen flex items-center transition-all duration-500 ${
        isHovering ? "bg-red-800" : "bg-gradient-to-r from-[#1a1a1a] to-[#333333]"
      }`}
    >
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-white">
            We're a New-Age Marketing Agency Built for{" "}
            <span
              className="text-[#ffd100] relative inline-block"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Brands
            </span>{" "}
            That Want to Win
          </h2>
          <p className="text-lg mb-8 text-white">
            Fresh ideas, bold strategies, and real results — we're here to help you grow smarter, faster, louder.
          </p>
        </div>
      </div>
    </section>
  )
}
