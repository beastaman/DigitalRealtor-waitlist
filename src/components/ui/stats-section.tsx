"use client"

import { motion } from "framer-motion"
import { TrendingUp, Star, Lock, Rocket } from "lucide-react"

function StatsSection() {
  const perks = [
    {
      icon: <Star className="w-8 h-8 text-[#174AFF]" />,
      label: "Founding Member Status",
      description: "Be first in line when we launch and shape the product with your feedback.",
    },
    {
      icon: <Lock className="w-8 h-8 text-[#174AFF]" />,
      label: "Early Bird Pricing",
      description: "Lock in the lowest price ever offered — only available to waitlist members.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#174AFF]" />,
      label: "Beta Access",
      description: "Get hands-on access before the public launch and try every feature first.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#174AFF]" />,
      label: "$300M+ Founder Track Record",
      description: "Built by a realtor who generated $300M+ in sales through personal branding.",
    },
  ]

  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white font-manrope">
            <span className="bg-gradient-to-r from-white via-blue-100 to-[#174AFF] bg-clip-text text-transparent">
              Why Join the Waitlist?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-manrope">
            Digital Realtor is in beta — join now to get exclusive early access, founding member pricing, and a direct line to the team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group p-6 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-[#174AFF]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#174AFF]/10 flex items-center justify-center group-hover:bg-[#174AFF]/20 transition-colors duration-300">
                {perk.icon}
              </div>
              <div className="text-lg font-bold text-white mb-2 font-manrope">{perk.label}</div>
              <div className="text-gray-400 text-sm leading-relaxed font-manrope">{perk.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { StatsSection }
