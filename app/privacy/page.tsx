"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="w-full py-6 px-8 md:px-16 flex items-center justify-between bg-black/90 backdrop-blur-sm fixed top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-white">foundess</span>
          <span className="text-sm text-white/70">Hatch</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Button 
            onClick={() => window.location.href = "/"}
            className="bg-[#e8ff6b] hover:bg-[#d9f059] text-black rounded-full px-6 font-medium"
          >
            Join the Waitlist
          </Button>
        </nav>
      </header>

      {/* Content Section */}
      <main className="flex-1 pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-[#e8ff6b] hover:text-[#d9f059] mb-8">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/90">
              At Foundess, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. Please read this privacy policy carefully. By using Foundess, you consent to the data practices described in this policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
            <p className="text-white/90">
              When you register for Foundess, we collect the following types of information:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Contact information (email address and phone number)</li>
              <li>Public LinkedIn profile information</li>
              <li>Information you provide during your AI phone call</li>
              <li>Your professional background, goals, and preferences to facilitate matchmaking</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Usage Information</h3>
            <p className="text-white/90">
              We also collect information about how you use the Service:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Interactions with the Foundess AI</li>
              <li>Message threads and communication content</li>
              <li>Phone call transcripts and recordings</li>
              <li>Feature usage patterns and preferences</li>
              <li>Connection and match history</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Technical Information</h3>
            <p className="text-white/90">
              Our servers automatically collect:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Access times and dates</li>
              <li>Pages viewed</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-white/90">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Provide, maintain, and improve our services</li>
              <li>Facilitate meaningful introductions between users</li>
              <li>Customize your experience and provide personalized matching</li>
              <li>Communicate with you regarding service updates and opportunities</li>
              <li>Monitor and analyze usage and trends to enhance the user experience</li>
              <li>Detect, investigate, and prevent fraudulent transactions and unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing Practices</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Sharing with Other Users</h3>
            <p className="text-white/90">
              We share your information with other users in the following ways:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Your public LinkedIn profile information is visible to potential matches</li>
              <li>Your email address is only shared after both parties have explicitly opted in to connect</li>
              <li>Your phone number is never shared with other users under any circumstances</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Service Providers</h3>
            <p className="text-white/90">
              We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf, including:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>AI technology providers (including OpenAI, Anthropic, and others)</li>
              <li>Cloud storage providers</li>
              <li>Analytics services</li>
              <li>Customer support services</li>
              <li>Communication platforms</li>
            </ul>
            <p className="text-white/90 mt-4">
              All third-party service providers are required to protect your personal information and are prohibited from using your personal information for their own purposes.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Partner Networks</h3>
            <p className="text-white/90">
              If you join Foundess through a partner organization, your profile may be included in both the partner network and Foundess's global network for potential introductions. Your information will be handled according to this Privacy Policy regardless of which network you join through.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Legal Requirements</h3>
            <p className="text-white/90">
              We may disclose your information where required to do so by law or in the good faith belief that such action is necessary to:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of Foundess</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">AI Processing of Data</h2>
            <p className="text-white/90">
              Foundess uses artificial intelligence systems to power our service. Your interactions with Foundess are processed by AI systems to:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Facilitate conversations and understand your needs</li>
              <li>Create and manage your profile within our system</li>
              <li>Analyze interests and backgrounds to make appropriate matches</li>
              <li>Improve our AI capabilities and service quality</li>
            </ul>
            <p className="text-white/90 mt-4">
              Our AI processing partners may retain processed data in accordance with their terms of service. These partners include industry leaders like OpenAI and Anthropic, who maintain strict security and privacy standards.
            </p>
            <p className="text-white/90 mt-4">
              For more information about our AI data processing practices, please contact us at privacy@foundess.com.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
            <p className="text-white/90">
              We retain your personal information for as long as necessary to provide you with the Service and fulfill the purposes outlined in this Privacy Policy. We will also retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <p className="text-white/90 mt-4">
              When we no longer need personal information, we securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Security of Your Information</h2>
            <p className="text-white/90">
              We use administrative, technical, and physical security measures designed to protect your personal information from unauthorized access, use, or disclosure. These measures include:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Encryption of sensitive information</li>
              <li>Secure access controls to our systems</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection practices</li>
              <li>Vendor security evaluations</li>
            </ul>
            <p className="text-white/90 mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights and Choices</h2>
            <p className="text-white/90">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
              <li><strong>Data Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
            </ul>
            <p className="text-white/90 mt-4">
              To exercise these rights or ask questions about them, please contact us at privacy@foundess.com.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Opt-Out and Unsubscribe</h2>
            <p className="text-white/90">
              You can opt out of receiving further communications from Foundess by:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Following the unsubscribe instructions in any email you receive from us</li>
              <li>Contacting us directly at privacy@foundess.com</li>
              <li>Requesting removal from our system during a call with our AI</li>
            </ul>
            <p className="text-white/90 mt-4">
              Please note that even if you opt out of receiving marketing communications, we may still send you service-related communications.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Similar Technologies</h2>
            <p className="text-white/90">
              We use cookies and similar tracking technologies to collect information about your browsing activities. These technologies help us analyze usage patterns, recognize you across devices, and improve our service.
            </p>
            <p className="text-white/90 mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
            <p className="text-white/90">
              The Service is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us immediately at privacy@foundess.com.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">International Data Transfers</h2>
            <p className="text-white/90">
              Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
            </p>
            <p className="text-white/90 mt-4">
              When we transfer your information to other countries, we take steps to ensure that appropriate safeguards are in place to protect your information and to ensure that it is treated in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-white/90">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-white/90 mt-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
            <p className="text-white/90">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-white/90 mt-4">
              <strong>Email:</strong> <a href="mailto:privacy@foundess.com" className="text-[#e8ff6b] hover:underline">privacy@foundess.com</a>
            </p>
          </div>
          
          <div className="mt-16 border-t border-white/20 pt-8">
            <p className="text-white/60 text-sm">
              Last updated: April 8, 2025
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-8 md:px-16 bg-[#0a0a0a] text-white/60">
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
    </div>
  )
}
