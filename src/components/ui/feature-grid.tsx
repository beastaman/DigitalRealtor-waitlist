"use client"

import type React from "react"

import { motion } from "framer-motion"
import { TrendingUp, Zap, Users, Brain, Target, Lock } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-xl border border-yellow-500/20 bg-black/50 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <div className="relative">
        <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

function FeatureGrid() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-500" />,
      title: "Competitive Edge Analysis",
      description: "Discover your unique advantages and market positioning with AI-powered competitive intelligence.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Growth Opportunities",
      description: "Identify untapped revenue streams and expansion opportunities tailored to your business.",
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Strategic Connections",
      description: "Get warm introductions to potential partners, customers, and strategic tools.",
    },
    {
      icon: <Brain className="w-6 h-6 text-yellow-500" />,
      title: "AI-Powered Insights",
      description: "Receive consultant-grade strategy briefs powered by GPT-4 and real business data.",
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-500" />,
      title: "Precision Targeting",
      description: "Get laser-focused recommendations based on your industry, location, and goals.",
    },
    {
      icon: <Lock className="w-6 h-6 text-yellow-500" />,
      title: "Enterprise Security",
      description: "Your business data is protected with enterprise-grade security and privacy measures.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent">
              Powerful AI Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to unlock your business potential and accelerate growth with AI-powered intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeatureGrid }
