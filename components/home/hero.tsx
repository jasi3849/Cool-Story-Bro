"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const rotatingTexts = [
    "We Make You Sell",
    "Storytelling that Sells",
    "Influence that Converts",
    "Strategy that Scales",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true)

      // After flip animation starts, change the text
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
      }, 500) // Half of the flip animation duration

      // Reset the flip animation
      setTimeout(() => {
        setIsFlipping(false)
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-[#1a1a1a] to-[#333333]">
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">We Don't Just Market</h1>

          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <div className={`flip-container ${isFlipping ? "flip" : ""}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffd100]">
                {rotatingTexts[currentTextIndex]}
              </h2>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-[#ffd100] text-[#1a1a1a] font-bold py-4 px-10 rounded-md hover:bg-[#e6bc00] transition duration-300 text-lg"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* CSS for flip animation */}
      <style jsx>{`
        .flip-container {
          perspective: 1000px;
          width: 100%;
          transition: transform 0.5s;
        }
        
        .flip {
          animation: flip 1s ease-in-out;
        }
        
        @keyframes flip {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          50% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
