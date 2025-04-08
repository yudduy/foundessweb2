"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export default function HowItWorks() {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.disconnect()
      })
    }
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
            <Link href="/#waitlist">Join the Waitlist</Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            See how Foundess AI transforms the traditional fundraising journey, saving you time and helping you focus on
            what matters most.
          </p>
        </div>
      </section>

      {/* Comparative Timeline Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Timeline - Traditional Journey */}
            <div className="space-y-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Traditional Founder Journey</h2>

              {/* Stage 1 */}
              <div
                ref={(el) => (timelineRefs.current[0] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div className="absolute left-3 top-6 h-[calc(100%+4rem)] w-px bg-white/20"></div>
                <h3 className="text-xl font-bold mb-2">Ideation</h3>
                <p className="text-white/70">Brainstorming your product idea and vision.</p>
              </div>

              {/* Stage 2 */}
              <div
                ref={(el) => (timelineRefs.current[1] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Market Research</h3>
                <p className="text-white/70">Analyzing industry data and validating your idea.</p>
              </div>

              {/* Stage 3 */}
              <div
                ref={(el) => (timelineRefs.current[2] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Building MVP</h3>
                <p className="text-white/70">Developing your minimum viable product.</p>
              </div>

              {/* Stage 4 */}
              <div
                ref={(el) => (timelineRefs.current[3] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "300ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Fundraising Begins</h3>
                <p className="text-white/70">
                  Struggling with multiple investor meetings, rejection emails, and networking events.
                </p>
              </div>

              {/* Stage 5 */}
              <div
                ref={(el) => (timelineRefs.current[4] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "400ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Limited Progress</h3>
                <p className="text-white/70">Product development slowing down as fundraising takes priority.</p>
              </div>

              {/* Stage 6 */}
              <div
                ref={(el) => (timelineRefs.current[5] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "500ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold">6</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Finally Funded</h3>
                <p className="text-white/70">Successful funding after months of effort.</p>
              </div>

              {/* Stage 7 */}
              <div
                ref={(el) => (timelineRefs.current[6] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "600ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold">7</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Back to Building</h3>
                <p className="text-white/70">Renewed product focus, but with significant time lost.</p>
              </div>
            </div>

            {/* Right Timeline - Foundess AI Journey */}
            <div className="space-y-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#e8ff6b]">
                Founder Journey with Foundess AI
              </h2>

              {/* Stage 1 */}
              <div
                ref={(el) => (timelineRefs.current[7] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "150ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#e8ff6b]">1</span>
                </div>
                <div className="absolute left-3 top-6 h-[calc(100%+4rem)] w-px bg-[#e8ff6b]/20"></div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Ideation</h3>
                <p className="text-white/70">Brainstorming your product idea and vision.</p>
              </div>

              {/* Stage 2 */}
              <div
                ref={(el) => (timelineRefs.current[8] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "250ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#e8ff6b]">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Market Research</h3>
                <p className="text-white/70">Analyzing industry data and validating your idea.</p>
              </div>

              {/* Stage 3 */}
              <div
                ref={(el) => (timelineRefs.current[9] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "350ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#e8ff6b]">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Building MVP</h3>
                <p className="text-white/70">Developing your minimum viable product.</p>
              </div>

              {/* Stage 4 */}
              <div
                ref={(el) => (timelineRefs.current[10] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "450ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#e8ff6b]">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Foundess AI Integration</h3>
                <p className="text-white/70">
                  Connecting with the platform to automate your entire fundraising process.
                </p>
              </div>

              {/* Stage 5 - Now "Quickly Funded" */}
              <div
                ref={(el) => (timelineRefs.current[11] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "550ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#e8ff6b]">5</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Quickly Funded</h3>
                <p className="text-white/70">
                  Successful funding in a fraction of the time through automated investor matching and outreach.
                </p>
              </div>

              {/* Stage 6 - "Back to Building" */}
              <div
                ref={(el) => (timelineRefs.current[12] = el)}
                className="relative pl-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: "650ms" }}
              >
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#e8ff6b]">6</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Back to Building</h3>
                <p className="text-white/70">
                  Focus entirely on product development with minimal fundraising distractions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Callout */}
      <section className="w-full py-16 px-8 md:px-16 bg-[#9e97f6] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-black/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Traditional Fundraising</h3>
              <p className="text-white/90 text-lg">
                Traditional fundraising means limited investor networks, constant context switching, and months of
                effort that takes you away from building your product.
              </p>
            </div>
            <div className="bg-[#e8ff6b]/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Foundess AI Solution</h3>
              <p className="text-white/90 text-lg">
                Our AI-powered platform automates the entire fundraising process, from investor matching to meeting
                scheduling, so you can stay focused on what matters most - building your product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-16 px-8 md:px-16 bg-black text-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg border border-white/10">
            <h2 className="text-3xl font-bold mb-6 text-center">Start Your Streamlined Fundraising Journey</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
              <div className="bg-black/30 p-6 rounded-lg text-center w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Monthly</h3>
                <p className="text-3xl font-bold mb-4">
                  $99<span className="text-sm font-normal text-white/70">/month</span>
                </p>
                <p className="text-white/70 text-sm">Billed monthly</p>
              </div>
              <div className="bg-[#e8ff6b]/10 p-6 rounded-lg text-center w-full md:w-1/2 border border-[#e8ff6b]/30">
                <h3 className="text-xl font-bold mb-2">Yearly</h3>
                <p className="text-3xl font-bold mb-4">
                  $990<span className="text-sm font-normal text-white/70">/year</span>
                </p>
                <p className="text-[#e8ff6b] text-sm">Save 2 months</p>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-[#e8ff6b] hover:bg-[#d9f059] text-black rounded-full px-8 py-6 text-lg font-medium">
                Sign Up Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
