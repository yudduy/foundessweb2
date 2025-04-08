"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon } from "lucide-react"

export default function Home() {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [bgColorIndex, setBgColorIndex] = useState(0)
  const bgColors = ["#fffae8", "#9e97f6", "#efff82"]

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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="w-full py-6 px-8 md:px-16 flex items-center justify-between bg-black/90 backdrop-blur-sm fixed top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-white">foundess</span>
          <span className="text-sm text-white/70">Hatch</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/how-it-works"
            className="text-white font-bold font-junicode hover:text-purple-400 transition-colors"
          >
            How It Works
          </Link>
          <Button asChild className="bg-[#e8ff6b] hover:bg-[#d9f059] text-black rounded-full px-6 font-medium">
            <Link href="#waitlist">Join the Waitlist</Link>
          </Button>
        </nav>
      </header>

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
                ref={(el) => (letterRefs.current[index] = el)}
                className="inline-block text-8xl md:text-9xl font-black tracking-tight text-black font-chivo transform translate-y-20 opacity-0 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-xl font-junicode text-black max-w-2xl mx-auto mt-8">
            We <i>fundraise</i> so you can <i>build</i>. 
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="how-it-works" className="w-full py-32 px-8 md:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light italic text-center mb-24 font-junicode">
            Fundraising on Autopilot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-bold mb-4 font-chivo">Warm Intros</h3>
              <p className="text-white/80 font-chivo">
                Facilitates warm investor introductions at scale, connecting you with the right people at the right
                time.
              </p>
            </div>

            <div className="flex flex-col p-6">
              <h3 className="text-xl font-bold mb-4 font-chivo">Conversion Optimization</h3>
              <p className="text-white/80 font-chivo">
                Takes care of top-of-funnel conversion, ensuring your pitch reaches its max potential with investors.
              </p>
            </div>

            <div className="flex flex-col p-6">
              <h3 className="text-xl font-bold mb-4 font-chivo">Seamless Management</h3>
              <p className="text-white/80 font-chivo">
                Provides frictionless SAFE and transaction management, streamlining the entire fundraising process.
              </p>
            </div>
          </div>

          <div className="mt-24 max-w-3xl mx-auto text-center">
            <p className="text-xl text-white/90 italic font-junicode">
              Think of it as an autopilot for fundraising – what if founders are now free to focus on building rather
              than raising?
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full py-32 px-8 md:px-16 bg-[#7B68EE] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chivo">
            Ready to focus on building instead of fundraising?
          </h2>
          <p className="text-lg mb-12 font-chivo">Join our waitlist for early access to the future of fundraising.</p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white font-chivo"
            />
            <Button className="bg-white text-[#7B68EE] hover:bg-white/90 hover:text-[#6A5ACD] font-chivo">
              Join Waitlist
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-xs mt-4 text-white/70 font-chivo">
            By joining, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>

      {/* Final Section */}
      <section className="w-full py-32 px-8 md:px-16 bg-black text-white relative overflow-hidden">
        {/* White line patterns */}
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M500 0C377 0 300 100 300 250C300 400 200 500 100 500C0 500 -100 600 100 700C300 800 400 700 450 600C500 500 600 400 500 300C400 200 500 100 500 0Z"
              stroke="white"
              strokeWidth="0.5"
            />
            <path
              d="M520 50C397 50 320 150 320 300C320 450 220 550 120 550C20 550 -80 650 120 750C320 850 420 750 470 650C520 550 620 450 520 350C420 250 520 150 520 50Z"
              stroke="white"
              strokeWidth="0.5"
            />
            <path
              d="M540 100C417 100 340 200 340 350C340 500 240 600 140 600C40 600 -60 700 140 800C340 900 440 800 490 700C540 600 640 500 540 400C440 300 540 200 540 100Z"
              stroke="white"
              strokeWidth="0.5"
            />
            <path
              d="M560 150C437 150 360 250 360 400C360 550 260 650 160 650C60 650 -40 750 160 850C360 950 460 850 510 750C560 650 660 550 560 450C460 350 560 250 560 150Z"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto z-10 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-junicode leading-tight">
            Finally, I can <i>build</i> without <i>worrying</i> about <i>fundraising</i>
          </h2>
        </div>
      </section>
    </div>
  )
}
