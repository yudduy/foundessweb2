"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"

export default function TermsOfService() {
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Terms of Service</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/90">
              These Terms of Service ("Terms") govern your use of Foundess, the world's first social AI designed to facilitate meaningful introductions. By sharing your contact information and using Foundess, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Definitions</h2>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li><strong>"Service":</strong> The Foundess platform and its functionalities, including facilitating introductions, interactions, and AI phone calls.</li>
              <li><strong>"User":</strong> An individual who has shared their phone number or email address with Foundess through LinkedIn or Slack messaging and completed an AI phone call with Foundess.</li>
              <li><strong>"Partner":</strong> Organizations that agree to work with Foundess to provide services within their network and share opted-in users with Foundess's global network.</li>
              <li><strong>"Profile Information":</strong> Information from your public LinkedIn profile that is used to facilitate introductions.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Eligibility</h2>
            <p className="text-white/90">
              You must be at least 18 years of age to use the Service. By using Foundess, you represent and warrant that you are at least 18 years old. If you are under 18 years of age, you may not use or access the Service under any circumstances.
            </p>
            <p className="text-white/90">
              Foundess reserves the right to request proof of age from any user and to terminate or suspend accounts of users who are found to be under 18 years of age.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Registration and Service Access</h2>
            <p className="text-white/90">The registration process for Foundess occurs in the following steps:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Initial Contact:</h3>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>You message the Foundess company page on LinkedIn or Slack</li>
              <li>Foundess requests your email address and phone number</li>
              <li>You provide this contact information to Foundess</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Phone Call and Terms Acceptance:</h3>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>After receiving your contact information, Foundess will initiate an AI-powered phone call</li>
              <li>By participating in this phone call, you:
                <ul className="space-y-2 list-disc pl-5 mt-2">
                  <li>Accept these Terms of Service</li>
                  <li>Authorize Foundess to access and use your public LinkedIn profile information</li>
                  <li>Agree to be added to Foundess's matching pool</li>
                  <li>Understand that your LinkedIn profile information will be shared with potential matches</li>
                </ul>
              </li>
            </ul>
            
            <p className="text-white/90 mt-4">
              You are not considered a User of the Service, and these Terms do not take effect, until you complete the phone call with Foundess. Prior to completing the phone call, no matching or introduction services will be provided.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">User Conduct</h2>
            <p className="text-white/90">
              Users are expected to maintain respectful behavior when interacting with Foundess and other users within the network. Foundess aims to provide a positive environment for meaningful connections.
            </p>
            <p className="text-white/90 mt-4">Inappropriate conduct includes, but is not limited to:</p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Using offensive, discriminatory, or inflammatory language</li>
              <li>Engaging in hostile or aggressive communication</li>
              <li>Making inappropriate personal remarks or threats</li>
              <li>Deliberately attempting to manipulate or misuse the AI system</li>
              <li>Any form of harassment or bullying</li>
            </ul>
            <p className="text-white/90 mt-4">
              Violation of these conduct guidelines may result in restriction or removal from the Foundess network, at Foundess's sole discretion. Foundess reserves the right to take appropriate action to maintain service quality for all users.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">AI Phone Call and Service Activation</h2>
            <p className="text-white/90">
              The AI phone call with Foundess is a required step to activate your account and join the matching pool. During this call, Foundess will learn more about you and your preferences. You are responsible for any charges or fees from your phone service provider associated with the call.
            </p>
            <p className="text-white/90 mt-4">
              During this call, any information you share that is publicly available (e.g., LinkedIn profile, job title) will be used to generate your profile and facilitate personalized introductions. Personal information beyond what is publicly available will not be shared unless a double opt-in is provided by both parties.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Verbal Communications and Agreements</h2>
            <p className="text-white/90">
              Any communications with Foundess, including phone calls, message threads on Slack or LinkedIn, emails, or other interactions, cannot create binding agreements, contracts, or legal obligations beyond these Terms of Service.
            </p>
            <p className="text-white/90 mt-4">Users cannot enter into:</p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Non-disclosure agreements</li>
              <li>Non-competition agreements</li>
              <li>Verbal contracts</li>
              <li>Legal settlements</li>
              <li>Any other binding agreements</li>
            </ul>
            <p className="text-white/90 mt-4">
              Any attempt to create such agreements during AI interactions is non-binding and void. Only written agreements explicitly authorized by Foundess's legal team (contact: legal@foundess.com) are valid and enforceable.
            </p>
            <p className="text-white/90 mt-4">
              Users may not claim or represent that they have entered into any agreement with Foundess through AI interactions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Privacy and Data Protection</h2>
            <p className="text-white/90">
              Foundess implements strict data protection measures:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Email addresses are only shared between users after both parties have explicitly opted in to connect</li>
              <li>Phone numbers are never shared between users under any circumstances</li>
              <li>LinkedIn profile information is used to facilitate meaningful introductions and is shared with potential matches</li>
              <li>All user data is protected and handled in accordance with Foundess's <Link href="/privacy" className="text-[#e8ff6b] hover:underline">Privacy Policy</Link></li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Internal Data Access and Usage</h2>
            <p className="text-white/90">
              The Foundess team has access to and monitors:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>User conversations with Foundess</li>
              <li>Email communications</li>
              <li>LinkedIn and Slack messages with Foundess</li>
              <li>User behavioral data</li>
            </ul>
            <p className="text-white/90 mt-4">
              This access is strictly for the purposes of:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Monitoring and preventing platform abuse</li>
              <li>Improving the product experience</li>
              <li>Resolving user issues and concerns</li>
              <li>Ensuring service quality and safety</li>
            </ul>
            <p className="text-white/90 mt-4">
              While Foundess team members can access individual user data for the above purposes, we maintain strict data handling protocols:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Specific user information is never exported or used for purposes other than those listed above</li>
              <li>User data is only accessed when necessary for service operation and improvement</li>
              <li>Anonymous and aggregated data may be used for product analytics and service enhancement</li>
              <li>All team members are bound by confidentiality requirements regarding user data</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party AI Processing</h2>
            <p className="text-white/90">
              To provide our services, Foundess uses industry-leading artificial intelligence providers. By using the Service, you acknowledge and agree that:
            </p>
            <p className="text-white/90 mt-4">
              Your communications and interactions with Foundess may be processed by third-party AI services including OpenAI, Anthropic, and other AI technology providers. Information processed by these services may include:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Content of your conversations with Foundess on LinkedIn, Slack, or phone</li>
              <li>Profile information you provide</li>
              <li>Public information from your LinkedIn profile</li>
              <li>Call transcripts and recordings</li>
            </ul>
            <p className="text-white/90 mt-4">
              These third-party providers:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Process data according to their own privacy policies and security standards</li>
              <li>May retain processed data in accordance with their terms of service</li>
              <li>Are bound by industry-standard confidentiality and security requirements</li>
            </ul>
            <p className="text-white/90 mt-4">
              We select providers based on their security practices and reliability, and we regularly review their compliance with applicable data protection standards.
            </p>
            <p className="text-white/90 mt-4">
              You can request more information about our AI data processing practices by contacting us at privacy@foundess.com.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Service Operation and Matching Process</h2>
            <p className="text-white/90">
              By using the Service, you understand and agree that:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-white/80">
              <li>Your public LinkedIn profile information will be visible to potential matches</li>
              <li>You will be added to Foundess's matching pool after accepting an AI call</li>
              <li>Matches will be able to view your LinkedIn profile information before deciding to connect</li>
              <li>Your email address will only be shared with another user after both parties have explicitly opted in</li>
              <li>Your phone number will remain confidential and will not be shared with other users</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Safety and Well-being Measures</h2>
            <p className="text-white/90">
              Foundess takes the safety and well-being of its users seriously. While the platform focuses on making introductions and building connections, it is not designed for nor should be used as a substitute for professional advice, including mental health or legal services. We urge users to seek assistance from licensed professionals when needed.
            </p>
            <p className="text-white/90 mt-4">
              If at any time you feel that the conversation with Foundess or another user is inappropriate or raises concerns, we encourage you to discontinue the conversation and contact our support team for assistance.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Partner Network</h2>
            <p className="text-white/90">
              Foundess collaborates with partner organizations to expand the introduction pool. Users who opt in through partner networks agree to have their profiles included in both the partner network and Foundess's global network for potential introductions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Feedback</h2>
            <p className="text-white/90">
              Foundess values user feedback to improve its services. By providing feedback, you grant Foundess a worldwide, royalty-free, perpetual, irrevocable license to use, modify, and incorporate your feedback into our services without restriction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            <p className="text-white/90">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Foundess and its licensors. You agree not to copy, modify, or distribute any part of the Service without prior written consent.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Payment and Fees</h2>
            <p className="text-white/90">
              While Foundess is currently free to use, you are responsible for any charges from your phone service provider related to calls with Foundess. Foundess is not responsible for any carrier fees, data charges, or other costs associated with using your phone service to interact with Foundess.
            </p>
            <p className="text-white/90 mt-4">
              If Foundess introduces any service fees in the future, users will be notified in advance, and continued use of the service after the notification period will indicate acceptance of the new fee structure.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-white/90">
              Foundess is not liable for any outcomes resulting from introductions or interactions facilitated by the service. Users agree that the connections facilitated by Foundess are done on an "as-is" basis, and Foundess does not guarantee success, financial outcomes, or any particular results from the use of the service.
            </p>
            <p className="text-white/90 mt-4">
              To the maximum extent permitted by law, Foundess shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of its services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
            <p className="text-white/90">
              Foundess's services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, either expressed or implied, about the operation of the service, its availability, or its ability to meet your expectations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
            <p className="text-white/90">
              These Terms are governed by the laws of the State of Delaware, United States. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of Delaware courts.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to the Terms</h2>
            <p className="text-white/90">
              Foundess may update these Terms from time to time. Any material changes will be communicated to users via email or platform notifications. Continued use of the service after changes have been made will constitute acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
            <p className="text-white/90">
              If you have any questions about these Terms, please contact us at <a href="mailto:emmy@foundess.com" className="text-[#e8ff6b] hover:underline">emmy@foundess.com</a>.
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
