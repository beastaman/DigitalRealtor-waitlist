"use client"

import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { WaitlistForm } from "@/components/ui/waitlist-form"
import { FeatureGrid } from "@/components/ui/feature-grid"
import { FounderSection } from "@/components/ui/founder-section"
import { FinalCTASection } from "@/components/ui/final-cta-section"
import CTA from "@/components/ui/cta"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden relative">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden">
        <div className="absolute top-[-68px] left-[-36px] w-[454px] h-[315px] -rotate-[89.89deg] rounded-[170px] bg-gradient-brand blur-[250px] opacity-60" />
        <div className="absolute top-[-222px] right-[95px] w-[603px] h-[603px] rounded-full bg-gradient-pink blur-[100px] opacity-30" />
        <div className="absolute top-[57px] right-[252px] w-[290px] h-[411px] bg-gradient-blue blur-[100px] opacity-50" />
      </div>

      {/* Hero Section */}
      <HeroGeometric badge="AI-Powered Content Creation" title1="Turn Your Ideas into" title2="Ready-to-Post Content" />

      {/* Hero CTA Section */}
      <section className="py-16 bg-transparent relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 font-manrope">
              Give the AI your idea, niche, or topic and instantly get content angles, scripts, captions, post formats,
              and a posting plan tailored to your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg font-manrope"
                style={{ background: "linear-gradient(135deg, #174AFF 0%, #1E5AFF 100%)" }}
              >
                <Sparkles className="w-5 h-5" />
                Start Creating
              </motion.a>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500/30" />
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500/30" />
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500/30" />
                </div>
                <span className="text-sm font-manrope">Join realtors getting early access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Demo CTA */}
      <CTA />

      {/* Waitlist Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <WaitlistForm />
        </div>
      </section>

      {/* Features Section */}
      <FeatureGrid />

      {/* Founder Section */}
      <FounderSection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  )
}
