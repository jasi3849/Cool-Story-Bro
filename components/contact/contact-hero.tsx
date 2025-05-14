"use client"

import { useState } from "react"

export default function ContactHero() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-lg mb-8 text-white">
            We'd love to hear from you. Reach out to discuss how we can help your{" "}
            <span
              className="text-[#ffd100] relative inline-block"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              brand
            </span>{" "}
            grow.
          </p>
        </div>
      </div>
    </section>
  )
}
