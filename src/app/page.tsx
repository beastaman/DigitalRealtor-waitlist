"use client"

import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { WaitlistForm } from "@/components/ui/waitlist-form"
import { FeatureGrid } from "@/components/ui/feature-grid"
import { StatsSection } from "@/components/ui/stats-section"
import { SocialProofSection } from "@/components/ui/social-proof-section"
import { FAQSection } from "@/components/ui/faq-section"
import { TimelineSection } from "@/components/ui/timeline-section"
import { FounderSection } from "@/components/ui/founder-section"
import { FinalCTASection } from "@/components/ui/final-cta-section"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroGeometric badge="AI-Powered Business Intelligence" title1="Unlock Hidden Business" title2="Opportunities" />

      {/* Hero CTA Section - Right after hero */}
      <section className="py-16 bg-black relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Connect with strategic partners, discover competitive advantages, and unlock growth opportunities with
              AI-powered business intelligence that transforms data into deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg rounded-full transition-all duration-300 shadow-lg shadow-yellow-500/25"
              >
                <Sparkles className="w-5 h-5" />
                Get Early Access
              </motion.a>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 border-2 border-yellow-500/30"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 border-2 border-yellow-500/30"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 border-2 border-yellow-500/30"></div>
                </div>
                <span className="text-sm">Join 2,500+ businesses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Waitlist Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <WaitlistForm />
        </div>
      </section>

      {/* Features Section */}
      <FeatureGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Founder Section */}
      <FounderSection />

      {/* Final CTA Section - The Amazing Ending */}
      <FinalCTASection />
    </div>
  )
}
