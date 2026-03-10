"use client"

import { motion } from "framer-motion"
import { CheckCircle, CreditCard, Zap, FileText, Lightbulb } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"

function FreeTrialSection() {
  const includes = [
    {
      icon: <Lightbulb className="w-5 h-5 text-[#174AFF]" />,
      text: "10 AI-generated ideas & scripts",
    },
    {
      icon: <FileText className="w-5 h-5 text-[#174AFF]" />,
      text: "5 ready-to-post content pieces",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#174AFF]" />,
      text: "Full platform access for 3 days",
    },
  ]

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Card */}
          <div
            className="relative rounded-2xl border border-[#174AFF]/20 overflow-hidden p-8 md:p-12"
            style={{ background: "rgba(23,74,255,0.04)" }}
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(23,74,255,0.10)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

              {/* Left: text */}
              <div className="flex-1 text-center md:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#174AFF]/10 border border-[#174AFF]/25 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#174AFF] animate-pulse" />
                  <span className="text-xs text-blue-400 font-semibold font-manrope tracking-wide uppercase">
                    Limited Offer
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-manrope mb-3">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-[#174AFF] bg-clip-text text-transparent">
                    3-Day Free Trial
                  </span>
                </h2>
                <p className="text-gray-400 font-manrope mb-6 max-w-md">
                  Try Digital Realtor completely free — no charge for 3 days. See real results before you commit.
                </p>

                {/* What's included */}
                <ul className="space-y-3 mb-8">
                  {includes.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 justify-center md:justify-start"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#174AFF]/10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-gray-300 font-manrope text-sm">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <ShinyButton href="#waitlist">Start Free Trial</ShinyButton>
              </div>

              {/* Right: card visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-full md:w-[280px]"
              >
                <div
                  className="rounded-xl border border-white/10 p-6 space-y-4"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  {/* Price block */}
                  <div className="text-center pb-4 border-b border-white/[0.07]">
                    <p className="text-gray-500 text-xs font-manrope uppercase tracking-wider mb-1">Trial Price</p>
                    <p className="text-4xl font-bold text-white font-manrope">$0</p>
                    <p className="text-gray-500 text-xs font-manrope mt-1">for 3 days, then cancel anytime</p>
                  </div>

                  {/* Features list */}
                  {[
                    "10 ideas & scripts",
                    "5 posts creation",
                    "Full platform access",
                    "No commitment",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#174AFF] flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-manrope">{f}</span>
                    </div>
                  ))}

                  {/* Credit card note */}
                  <div className="pt-3 border-t border-white/[0.07] flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-xs font-manrope leading-relaxed">
                      Credit card required to start. You won&apos;t be charged during your trial.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { FreeTrialSection }
