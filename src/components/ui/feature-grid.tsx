"use client"

import type React from "react"
import { motion } from "framer-motion"
import { TrendingUp, Zap, Users, Brain, Target, BookOpen } from "lucide-react"

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
      className="group relative p-6 rounded-xl border border-white/[0.08] backdrop-blur-sm hover:border-[#174AFF]/40 transition-all duration-300 hover:-translate-y-1"
      style={{ background: "rgba(33,33,33,0.6)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#174AFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <div className="relative">
        <div className="w-12 h-12 rounded-lg bg-[#174AFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#174AFF]/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 font-manrope">{title}</h3>
        <p className="text-gray-400 leading-relaxed font-manrope">{description}</p>
      </div>
    </motion.div>
  )
}

function FeatureGrid() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-[#174AFF]" />,
      title: "AI Idea Generator",
      description: "Chat with the AI to get tailored content ideas for your niche, audience, or goals. Get 3–5 strong content angles instantly.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#174AFF]" />,
      title: "Script & Caption AI",
      description: "Pick an idea and let AI write scripts, captions, and hooks. Advanced prompts and formats for every platform.",
    },
    {
      icon: <Target className="w-6 h-6 text-[#174AFF]" />,
      title: "Post Maker",
      description: "Customize your content via the Post Maker, then save to your storage. Multi-platform post templates included.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#174AFF]" />,
      title: "AI Analytics & Growth",
      description: "Schedule posts, track performance, and learn what works. Get AI suggestions to boost views, engagement, and follower growth.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#174AFF]" />,
      title: "Unlimited Content Storage",
      description: "Save unlimited AI-generated ideas, scripts, and posts organized in folders. Your entire content library in one place.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#174AFF]" />,
      title: "Tutorial Library",
      description: "Access a full tutorial library that teaches personal branding and guides you in using the platform to its full potential.",
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-manrope">
            <span className="bg-gradient-to-r from-white via-blue-100 to-[#174AFF] bg-clip-text text-transparent">
              Everything You Need to Create & Grow
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-manrope">
            Your AI-powered content partner that helps you create, plan, and grow across social media — faster, easier, and more consistently.
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