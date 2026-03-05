"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

function SocialProofSection() {
  const companies = [
    { name: "Instagram" },
    { name: "TikTok" },
    { name: "YouTube" },
    { name: "LinkedIn" },
    { name: "Facebook" },
    { name: "X (Twitter)" },
  ]

  const testimonials = [
    {
      quote: "Agents in every market are building stronger brands and attracting more clients with far less effort.",
      author: "Albert Flores",
      role: "Senior Dentist",
      avatar: "/images/testimonials/albert-flores.jpg",
    },
    {
      quote: "Managing clients is so much easier. One dashboard replaced multiple tools and saved me hours.",
      author: "Brooklyn Simmons",
      role: "Orthodontics",
      avatar: "/images/testimonials/brooklyn-simmons.jpg",
    },
    {
      quote: "This gave me a real content system. I know what to post, when, and why — no more guesswork.",
      author: "Monika Roy",
      role: "Dental Hygienist",
      avatar: "/images/testimonials/monika-roy.jpg",
    },
    {
      quote: "The AI content suggestions are spot-on. It's like having a creative team working 24/7 for my practice.",
      author: "Sarah Johnson",
      role: "Practice Manager",
      avatar: "/images/testimonials/sarah-johnson.jpg",
    },
    {
      quote: "Social media marketing became effortless. The automated posting schedule keeps my practice visible.",
      author: "Michael Chen",
      role: "Cosmetic Dentist",
      avatar: "/images/testimonials/michael-chen.jpg",
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
    <section className="py-20 bg-gradient-to-b from-black to-gray-900/30" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider">Create content for all major platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="h-10 flex items-center justify-center text-gray-400 font-semibold text-lg"
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

        {/* Testimonials heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of content creators who are already transforming their social media presence.
          </p>
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
