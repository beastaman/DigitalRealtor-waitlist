"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Clock, Zap, CheckCircle } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"

function FinalCTASection() {
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 12, minutes: 30, seconds: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        else if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        else if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        else if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#174AFF]/30 rounded-full"
            animate={{ y: [-20, -100], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: "easeOut" }}
            style={{ left: `${(i * 7) % 100}%`, top: "100%" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#174AFF]/25 rounded-full px-4 py-2 mb-8"
            style={{ background: "rgba(33,33,33,0.6)" }}
          >
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium font-manrope">Limited Time: Early Access Closing Soon</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-bold mb-8 leading-tight font-manrope"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-[#174AFF] bg-clip-text text-transparent">
              Build Your Brand
            </span>
            <br />
            <span className="text-white">Without the Hassle</span>
          </motion.h1>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div
                  className="border border-[#174AFF]/20 rounded-lg p-4 min-w-[80px]"
                  style={{ background: "rgba(33,33,33,0.6)" }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-[#174AFF] font-manrope">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-manrope">{unit}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Value prop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed font-manrope">
              Join the exclusive group of realtors and creators who will get{" "}
              <span className="text-[#174AFF] font-semibold">first access</span> to the most powerful AI content
              platform for real estate professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {["Unlimited AI content generation", "Early access pricing locked in", "Priority onboarding support"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-[#174AFF] flex-shrink-0" />
                  <span className="text-gray-300 font-manrope">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ShinyButton href="#waitlist">Join the waitlist</ShinyButton>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#174AFF]" />
                <span className="text-sm font-manrope">Limited early access spots</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto font-manrope">
              By joining our waitlist, you&apos;re securing your spot in the future of real estate content creation. You
              handle the face-to-face. Your new AI content team will handle the rest.
            </p>
          </motion.div>
        </motion.div>

        {/* Platform logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-sm mb-6 font-manrope">Works with all major platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-30">
            {["Instagram", "TikTok", "YouTube", "LinkedIn", "Facebook"].map((platform, index) => (
              <span key={index} className="text-gray-400 font-semibold text-lg font-manrope">{platform}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { FinalCTASection }