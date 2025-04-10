"use client"

import { useEffect, useRef, useState, RefCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon, XIcon, CheckCircleIcon, Loader2 } from "lucide-react"
import { WaitlistPopup } from "@/components/ui/waitlist-popup"

export default function FoundersPage() {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [bgColorIndex, setBgColorIndex] = useState(0)
  const bgColors = ["#fffae8", "#9e97f6", "#efff82"]
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false)
  const [quoteText, setQuoteText] = useState("")
  const fullQuote = "We help fundraise so you can build"
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [sectionsVisible, setSectionsVisible] = useState(false)

  useEffect(() => {
    const typingIntervalMs = 16; // Adjusted for target speed
    const revealDelayMs = 1500;
    const initialHatchDelay = 900; // Keep the delay before typing starts

    const interval = setInterval(() => {
      setBgColorIndex((prevIndex) => (prevIndex + 1) % bgColors.length);
    }, 5000);

    let typeTimer: NodeJS.Timeout | null = null;
    let revealTimer: NodeJS.Timeout | null = null;

    // Delay the start of typing
    const startTypingTimeout = setTimeout(() => {
      typeTimer = setInterval(() => {
        setQuoteText((prev) => {
          if (prev.length < fullQuote.length) {
            return fullQuote.substring(0, prev.length + 1);
          }
          if (typeTimer) clearInterval(typeTimer); // Stop typing when done
          return prev;
        });
      }, typingIntervalMs); // Use faster interval
    }, initialHatchDelay); // Start typing after HATCH animation settles

    // Set timeout to reveal navbar and sections at the target time
    revealTimer = setTimeout(() => {
      setNavbarVisible(true);
      setSectionsVisible(true);
    }, revealDelayMs);

    return () => {
      clearInterval(interval);
      clearTimeout(startTypingTimeout);
      if (typeTimer) clearInterval(typeTimer);
      if (revealTimer) clearTimeout(revealTimer); // Clear the reveal timer
    };
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Header/Navigation - position absolutely to avoid affecting layout */}
      <header className={`w-full py-6 px-8 md:px-16 flex items-center justify-between bg-black/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-700 transform ${navbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-white">foundess</span>
          <span className="text-sm text-white/70">Hatch</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Button 
            onClick={() => setIsWaitlistPopupOpen(true)}
            className="bg-[#e8ff6b] hover:bg-[#d9f059] text-black rounded-full px-6 font-medium"
          >
            Join the Waitlist
          </Button>
        </nav>
      </header>

      {/* Hero Section with Dynamic Background - ensure consistent positioning */}
      <section
        className="w-full min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden transition-colors duration-1000"
        style={{ backgroundColor: bgColors[bgColorIndex], position: 'relative', zIndex: 1 }}
      >
        {/* Prevent text selection */}
        <div className="absolute inset-0 z-10 select-none pointer-events-none"></div>

        <div className="max-w-5xl mx-auto z-20">
          <h1 className="mb-6 relative" style={{ position: 'relative', top: 0, zIndex: 5 }}>
            {["H", "A", "T", "C", "H"].map((letter, index) => (
              <span
                key={index}
                ref={(el) => { letterRefs.current[index] = el; }}
                className="inline-block text-42xl md:text-9xl font-black tracking-tight text-black font-chivo"
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-2xl font-junicode text-black max-w-2xl mx-auto mt-12 min-h-[4.5rem]">
            {quoteText.split(' ').map((word, i) => (
              <span key={i}>
                {i > 0 && ' '}
                {word === 'fundraise' || word === 'build' ? <i>{word}</i> : word}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* How It Works Section - with animation */}
      <section 
        id="how-it-works" 
        className={`w-full py-32 px-8 md:px-16 bg-black text-white transition-all duration-1000 transform ${sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-0 right-0 flex gap-4 md:gap-6">
            <Button 
              onClick={() => window.open('https://www.linkedin.com/company/foundess', '_blank')}
              className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white rounded-md font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" className="mr-2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Message Me on LinkedIn
            </Button>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-24 font-chivo mt-16 md:mt-0">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="bg-[#111] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,255,107,0.3)] hover:-translate-y-1">
              <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#e8ff6b] text-black flex items-center justify-center font-bold">1</div>
                <img src="IMG_7377.jpeg" alt="Message on LinkedIn" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-chivo">Message Me on LinkedIn</h3>
                <p className="text-white/70 font-chivo">
                  Reach out about your startup and what you're looking for in an investor.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#111] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,255,107,0.3)] hover:-translate-y-1">
              <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#e8ff6b] text-black flex items-center justify-center font-bold">2</div>
                <img src="IMG_1007.jpeg" alt="Phone call" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-chivo">I'll Give You a Call</h3>
                <p className="text-white/70 font-chivo">
                  We'll chat to ensure we can provide the right fundraising support.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#111] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,255,107,0.3)] hover:-translate-y-1">
              <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#e8ff6b] text-black flex items-center justify-center font-bold">3</div>
                <img src="IMG_7249.jpeg" alt="Introductions" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-chivo">I'll Make Introductions</h3>
                <p className="text-white/70 font-chivo">
                  I'll connect you with the right investors for your startup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Comparison Section */}
      <section 
        className={`w-full py-32 px-8 md:px-16 bg-[#111] text-white transition-all duration-1000 transform ${sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-chivo">
            Fundraising, Simplified
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Timeline - Traditional Journey */}
            <div className="space-y-12 relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Traditional Founder Journey</h2>
              
              {/* Continuous line that connects all points */}
              <div className="absolute left-3 top-20 bottom-0 w-1 bg-white/20 z-0"></div>

              {/* Product Creation */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Product Creation</h3>
                <p className="text-white/70">Ideation, market research, and MVP development</p>
              </div>

              {/* Fundraising Begins */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Fundraising Begins</h3>
                <p className="text-white/70">Navigate investor meetings, rejections, and networking events</p>
              </div>

              {/* Development Slowdown */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Development Slowdown</h3>
                <p className="text-white/70">Product progress stalls as fundraising consumes focus</p>
              </div>

              {/* Investor Hunting */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Investor Hunting</h3>
                <p className="text-white/70">Countless pitches and follow-ups with potential investors</p>
              </div>

              {/* Negotiation Phase */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Negotiation Phase</h3>
                <p className="text-white/70">Complex term sheet discussions and due diligence</p>
              </div>

              {/* Finally Funded */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold">6</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Finally Funded</h3>
                <p className="text-white/70">Secure investment after months of effort</p>
              </div>

              {/* Growth Focus */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold">7</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Focus</h3>
                <p className="text-white/70">Return to building and scaling your product</p>
              </div>
            </div>

            {/* Right Timeline - Foundess AI Journey */}
            <div className="space-y-24 relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#e8ff6b]">
                Foundess Founder Journey 
              </h2>
              
              {/* Continuous line that connects all points */}
              <div className="absolute left-3 top-20 bottom-0 w-1 bg-[#e8ff6b]/20 z-0"></div>

              {/* Product Creation */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-[#e8ff6b]">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Product Creation</h3>
                <p className="text-white/70">Ideation, market research, and MVP development</p>
              </div>

              {/* Foundess AI Integration */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-[#e8ff6b]">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Foundess AI Integration</h3>
                <p className="text-white/70">Streamline fundraising with investor outreaching, matching, and management</p>
              </div>

              {/* Growth Focus */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-[#e8ff6b]/20 flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-[#e8ff6b]">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#e8ff6b]">Growth Focus</h3>
                <p className="text-white/70">Quickly secure funding and maintain product development momentum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Waitlist Section - Updated Color and Pricing Grid */}
      <section 
        id="waitlist" 
        className={`w-full py-32 px-8 md:px-16 bg-[#7B68EE] text-white transition-all duration-1000 transform ${sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{ transitionDelay: '400ms' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-chivo">Automate Your Fundraising Today</h2>
          <p className="text-lg mb-16 font-chivo">Choose a plan that fits your needs and join the waitlist.</p>

          {/* Pricing Plans Grid - Added */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-6 border-b border-[#7B68EE]/20">
                <h3 className="text-[#7B68EE] text-xl font-bold mb-2">Basic Tier</h3>
                <div className="text-[#7B68EE] text-3xl font-bold">
                  FREE
                </div>
              </div>
              <div className="p-6 text-[#7B68EE]/80 flex-grow flex flex-col">
                <ul className="space-y-4 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>15 warm intros</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3 meeting sit-in's and follow-up's</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Insights Panel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Share Features</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => setIsWaitlistPopupOpen(true)}
                  className="w-full bg-[#7B68EE] hover:bg-[#6A5ACD] text-white py-2 rounded-md font-medium mt-auto"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-6 border-b border-[#7B68EE]/20">
                <h3 className="text-[#7B68EE] text-xl font-bold mb-2">Hatch Tier</h3>
                <div className="text-[#7B68EE] text-3xl font-bold">
                  $15<span className="text-sm font-normal text-[#7B68EE]/70">/month</span>
                </div>
              </div>
              <div className="p-6 text-[#7B68EE]/80 flex-grow flex flex-col">
                <ul className="space-y-4 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                     <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                     </svg>
                     <span>Unlimited warm intros</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30/month meeting sit-in's and follow-ups</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated SAFE and transaction management</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => setIsWaitlistPopupOpen(true)}
                  className="w-full bg-[#7B68EE] hover:bg-[#6A5ACD] text-white py-2 rounded-md font-medium mt-auto"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-6 border-b border-[#7B68EE]/20">
                <h3 className="text-[#7B68EE] text-xl font-bold mb-2">Moonshot Tier</h3>
                <div className="text-[#7B68EE] text-3xl font-bold whitespace-nowrap">
                Custom Pricing
                </div>
              </div>
              <div className="p-6 text-[#7B68EE]/80 flex-grow flex flex-col">
                <ul className="space-y-4 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Hatch</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited meeting sit-in's and follow up's</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom models trained on individual communication styles</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => window.location.href = 'mailto:emmy@foundess.com'}
                  className="w-full bg-[#7B68EE] hover:bg-[#6A5ACD] text-white py-2 rounded-md font-medium mt-auto"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Waitlist form trigger section */}
          <div className="max-w-md mx-auto bg-white/10 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 font-chivo">Join the Waitlist</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => setIsWaitlistPopupOpen(true)}
                className="w-full bg-white text-[#7B68EE] hover:bg-white/90 hover:text-[#6A5ACD] font-chivo"
              >
                Join Now
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
        </div>
      </section>

      {/* Final Section */}
      <section 
        className={`w-full py-32 px-8 md:px-16 bg-black text-white relative overflow-hidden transition-all duration-1000 transform ${sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{ transitionDelay: '600ms' }}
      >
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
      
      {/* Footer */}
      <footer 
        className={`w-full py-8 px-8 md:px-16 bg-[#0a0a0a] text-white/60 transition-all duration-1000 transform ${sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-lg font-bold text-white">foundess</span>
              <span className="text-xs text-white/70">Hatch</span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <Link href="/terms" className="text-sm hover:text-white">Terms of Service</Link>
            <Link href="/privacy" className="text-sm hover:text-white">Privacy Policy</Link>
            <a href="mailto:emmy@foundess.com" className="text-sm hover:text-white">Contact Us</a>
          </div>
          <div className="mt-6 md:mt-0 text-xs">
            &copy; 2025 Foundess. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Render the new Waitlist Popup Component */}
      <WaitlistPopup 
        isOpen={isWaitlistPopupOpen} 
        onClose={() => setIsWaitlistPopupOpen(false)} 
      />
    </div>
  )
}
