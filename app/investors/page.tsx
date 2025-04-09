"use client"

import { useEffect, useRef, useState, RefCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon, XIcon, CheckCircleIcon, Loader2 } from "lucide-react"
import { WaitlistPopup } from "@/components/ui/waitlist-popup"

export default function InvestorsPage() {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [bgColorIndex, setBgColorIndex] = useState(0)
  const bgColors = ["#fffae8", "#9e97f6", "#efff82"]
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false)
  const [quoteText, setQuoteText] = useState("")
  const fullQuote = "We help connect you with promising founders."
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [sectionsVisible, setSectionsVisible] = useState(false)

  useEffect(() => {
    const typingIntervalMs = 14; // Adjusted for target speed
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
  }, []);

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
            Join as Investor
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
                {word === 'connect' || word === 'promising' ? <i>{word}</i> : word}
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
            <Button 
              onClick={() => window.open('https://slack.com/app_redirect?team=foundess', '_blank')}
              className="bg-[#4A154B] hover:bg-[#4A154B]/90 text-white rounded-md font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" className="mr-2">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
              </svg>
              Message Me on Slack
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
                <img src="sample.jpg" alt="Join Hatch" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-chivo">Message Me on LinkedIn/Slack</h3>
                <p className="text-white/70 font-chivo">
                  Reach out about your ventures and what you're looking for in a startup.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#111] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,255,107,0.3)] hover:-translate-y-1">
              <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#e8ff6b] text-black flex items-center justify-center font-bold">2</div>
                <img src="sample.jpg" alt="AI Matching" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-chivo">I'll Give You a Call</h3>
                <p className="text-white/70 font-chivo">
                  We'll chat to ensure we understand your investment thesis/strategy, and provide the right connection. 
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#111] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,255,107,0.3)] hover:-translate-y-1">
              <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#e8ff6b] text-black flex items-center justify-center font-bold">3</div>
                <img src="sample.jpg" alt="Connect with Founders" className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-chivo">Connect Directly</h3>
                <p className="text-white/70 font-chivo">
                We filter through the noise to help you discover the best startups for your ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className={`w-full py-32 px-8 md:px-16 bg-[#111] text-white transition-all duration-1000 transform ${sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-chivo">
            Why Investors Choose Hatch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-black/30 p-8 rounded-lg">
              <div className="w-12 h-12 mb-6 bg-[#e8ff6b]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#e8ff6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Efficient Deal Flow</h3>
              <p className="text-white/70">
                Access a curated pipeline of startups that match your specific investment criteria, saving you time.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-black/30 p-8 rounded-lg">
              <div className="w-12 h-12 mb-6 bg-[#e8ff6b]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#e8ff6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Screening</h3>
              <p className="text-white/70">
                All startups in our network are pre-vetted to ensure they meet baseline quality standards.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-black/30 p-8 rounded-lg">
              <div className="w-12 h-12 mb-6 bg-[#e8ff6b]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#e8ff6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Network Expansion</h3>
              <p className="text-white/70">
                Expand your reach beyond your current network to discover promising startups nationwide.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-black/30 p-8 rounded-lg">
              <div className="w-12 h-12 mb-6 bg-[#e8ff6b]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#e8ff6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Decisions</h3>
              <p className="text-white/70">
                Access detailed analytics and insights about startups to make more informed investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Waitlist and Pricing Section */}
      <section 
        id="waitlist" 
        className={`w-full py-32 px-8 md:px-16 bg-[#7B68EE] text-white transition-all duration-1000 transform ${sectionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{ transitionDelay: '400ms' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chivo">
            Ready to enhance your deal flow?
          </h2>
          <p className="text-lg mb-16 font-chivo">Choose a plan that works for your investment strategy.</p>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Individual Investor Plan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-6 border-b border-[#7B68EE]/20">
                <h3 className="text-[#7B68EE] text-2xl font-bold mb-2">Individual Investor</h3>
                <div className="text-[#7B68EE] text-xl font-bold">
                  Free access
                </div>
              </div>
              <div className="p-6 text-[#7B68EE]/80 flex-grow flex flex-col">
                <ul className="space-y-4 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic startup matching</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Limited monthly intros</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic reporting</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => setIsWaitlistPopupOpen(true)}
                  className="w-full bg-[#7B68EE] hover:bg-[#6A5ACD] text-white py-2 rounded-md font-medium mt-auto"
                >
                  Join Now
                </Button>
              </div>
            </div>

            {/* Angel Investor Plan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-6 border-b border-[#7B68EE]/20">
                <h3 className="text-[#7B68EE] text-2xl font-bold mb-2">Angel Investor</h3>
                <div className="text-[#7B68EE] text-xl font-bold">
                  $199<span className="text-sm font-normal text-[#7B68EE]/70">/month</span>
                </div>
              </div>
              <div className="p-6 text-[#7B68EE]/80 flex-grow flex flex-col">
                <ul className="space-y-4 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All Individual features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced matching algorithm</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited introductions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority access to new startups</span>
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

            {/* VC Firm Plan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-6 border-b border-[#7B68EE]/20">
                <h3 className="text-[#7B68EE] text-2xl font-bold mb-2">VC Firm</h3>
                <div className="text-[#7B68EE] text-xl font-bold whitespace-nowrap">
                  Custom pricing
                </div>
              </div>
              <div className="p-6 text-[#7B68EE]/80 flex-grow flex flex-col">
                <ul className="space-y-4 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All Angel features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-user access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#7B68EE] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Analytics dashboard</span>
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

          {/* Waitlist form section - trigger popup instead of inline form */}
          <div className="max-w-md mx-auto bg-white/10 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 font-chivo">Join our network now</h3>
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
            Discover your next <i>portfolio</i> company with <i>precision</i>
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
