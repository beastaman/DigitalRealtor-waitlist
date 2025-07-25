"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Zap, Globe } from "lucide-react"

function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      number: "10,000+",
      label: "Businesses Analyzed",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      number: "40%",
      label: "Average Growth Increase",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      number: "24/7",
      label: "AI-Powered Insights",
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      number: "50+",
      label: "Industries Covered",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent">
              Trusted by Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the growing community of businesses transforming their strategy with AI-powered insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { StatsSection }
