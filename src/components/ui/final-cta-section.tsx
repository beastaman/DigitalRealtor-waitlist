"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Sparkles, Clock, Users, Zap, ArrowRight, CheckCircle } from "lucide-react"

function FinalCTASection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,transparent_70%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-500/20 rounded-full"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: "100%",
            }}
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
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-8"
          >
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">Limited Time: Early Access Closing Soon</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent">
              Don't Miss Out
            </span>
            <br />
            <span className="text-white">On The Future</span>
          </motion.h1>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4 min-w-[80px]">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-500">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{unit}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Join the exclusive group of business leaders who will get{" "}
              <span className="text-yellow-500 font-semibold">first access</span> to the most powerful B2B intelligence
              platform ever created.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Free beta access (worth $500)</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">50% off first year pricing</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Priority customer support</span>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-xl rounded-full transition-all duration-300 shadow-2xl shadow-yellow-500/25"
            >
              <Sparkles className="w-6 h-6" />
              Claim My Exclusive Access
              <ArrowRight className="w-6 h-6" />
            </motion.a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">2,847 businesses already joined</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">Only 153 spots remaining</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              By joining our waitlist, you're not just getting early access to a product—you're becoming part of a
              revolution in how businesses discover opportunities and build strategic partnerships. The future of
              business intelligence starts here.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-sm mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {["Microsoft", "Google", "Amazon", "Tesla", "Apple"].map((company, index) => (
              <span key={index} className="text-gray-500 font-semibold text-lg">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { FinalCTASection }
