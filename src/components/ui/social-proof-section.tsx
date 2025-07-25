"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

function SocialProofSection() {
  const companies = [
    { name: "Microsoft", logo: "/images/companies/microsoft.png" },
    { name: "Google", logo: "/images/companies/google.png" },
    { name: "Amazon", logo: "/images/companies/amazon.png" },
    { name: "Tesla", logo: "/images/companies/tesla.png" },
    { name: "Apple", logo: "/images/companies/apple.png" },
    { name: "Slack", logo: "/images/companies/slack.png" },
  ]

  const testimonials = [
    {
      quote: "This platform revealed opportunities we never knew existed. Our revenue increased 40% in just 3 months.",
      author: "Sarah Chen",
      role: "CEO, TechCorp",
      avatar: "/images/testimonials/sarah-chen.jpg",
    },
    {
      quote: "The AI insights are incredibly accurate. It's like having a team of consultants working 24/7.",
      author: "Michael Rodriguez",
      role: "Strategy Director, InnovateLab",
      avatar: "/images/testimonials/michael-rodriguez.jpg",
    },
    {
      quote: "Found our perfect strategic partner through their connection recommendations. Game-changing!",
      author: "Emily Watson",
      role: "Founder, GrowthCo",
      avatar: "/images/testimonials/emily-watson.jpg",
    },
  ]

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (imagePath: string) => {
    setImageErrors(prev => new Set(prev).add(imagePath))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900/30">
      <div className="container mx-auto px-4">
        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider">Trusted by forward-thinking companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="h-10 flex items-center justify-center text-gray-400 font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {company.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/50 border border-yellow-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300"
            >
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full border-2 border-yellow-500/30 overflow-hidden bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
                  {!imageErrors.has(testimonial.avatar) ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover rounded-full"
                      onError={() => handleImageError(testimonial.avatar)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-yellow-500 font-bold text-sm">
                      {getInitials(testimonial.author)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-yellow-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { SocialProofSection }
