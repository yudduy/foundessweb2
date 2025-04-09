"use client"

import { useEffect, useRef, useState, RefCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SelectorPage() {
  const router = useRouter()
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [bgColorIndex, setBgColorIndex] = useState(0)
  const bgColors = ["#fffae8", "#9e97f6", "#efff82"]
  const [buttonsVisible, setButtonsVisible] = useState(true)

  useEffect(() => {
    // Animation for HATCH letters
    letterRefs.current.forEach((letter, index) => {
      if (letter) {
        setTimeout(() => {
          letter.style.transform = "translateY(0)"
          letter.style.opacity = "1"
        }, 100 * index)
      }
    })

    // Background color transition
    const interval = setInterval(() => {
      setBgColorIndex((prevIndex) => (prevIndex + 1) % bgColors.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleFounderClick = () => {
    setButtonsVisible(false)
    setTimeout(() => {
      router.push('/founders')
    }, 500) // Fade out animation time
  }

  const handleInvestorClick = () => {
    setButtonsVisible(false)
    setTimeout(() => {
      router.push('/investors')
    }, 500) // Fade out animation time
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Dynamic Background */}
      <section
        className="w-full min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden transition-colors duration-1000"
        style={{ backgroundColor: bgColors[bgColorIndex] }}
      >
        {/* Prevent text selection */}
        <div className="absolute inset-0 z-10 select-none pointer-events-none"></div>

        <div className="max-w-5xl mx-auto z-20">
          <h1 className="mb-6 relative">
            {["H", "A", "T", "C", "H"].map((letter, index) => (
              <span
                key={index}
                ref={(el) => { letterRefs.current[index] = el; }}
                className="inline-block text-42xl md:text-9xl font-black tracking-tight text-black font-chivo transform translate-y-20 opacity-0 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          
          <div className={`flex flex-col md:flex-row gap-6 justify-center mt-12 transition-opacity duration-500 ${buttonsVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Button 
              onClick={handleFounderClick}
              className="bg-black hover:bg-black/80 text-white text-lg py-6 px-10 rounded-lg font-bold shadow-lg transition-transform hover:scale-105"
            >
              For Founders
            </Button>
            <Button 
              onClick={handleInvestorClick}
              className="bg-white hover:bg-white/90 text-black text-lg py-6 px-10 rounded-lg font-bold shadow-lg transition-transform hover:scale-105"
            >
              For Investors
            </Button>
          </div>
          
          <div className={`mt-8 text-black/60 text-sm font-light transition-opacity duration-500 ${buttonsVisible ? 'opacity-100' : 'opacity-0'}`}>
            Choose your path to continue
          </div>
        </div>
      </section>
    </div>
  )
}
