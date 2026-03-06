"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

function FounderSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <Quote className="w-12 h-12 text-[#174AFF] mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed mb-8 font-manrope">
              &ldquo;I&apos;ve helped realtors generate over $300M in sales by building powerful personal brands on social media.
              The biggest problem wasn&apos;t talent — it was consistency. That&apos;s why I built Digital Realtor: to give every
              agent an AI content team that never sleeps.&rdquo;
            </blockquote>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/images/founder.jpg"
              alt="Abdelrahman Abd Rabou - Founder"
              className="w-24 h-24 rounded-full border-4 border-[#174AFF]/30 object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2 font-manrope">Abdelrahman Abd Rabou</h3>
              <p className="text-[#174AFF] mb-2 font-manrope">Founder — Digital Realtor & A-Team Management</p>
              <p className="text-gray-400 text-sm mb-2 font-manrope">
                @tamerbranding on Instagram • 14.3K followers • 180 posts
              </p>
              <p className="text-gray-400 text-sm font-manrope">
                I help realtors build a personal brand • $300M+ in Sales Generated in 2025
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-xl border border-white/10"
            style={{ background: "rgba(33,33,33,0.6)" }}
          >
            <p className="text-gray-300 leading-relaxed font-manrope">
              <strong className="text-[#174AFF]">About Us:</strong> Our platform is your AI-powered content partner that
              helps you create, plan, and grow across social media. We combine smart content automation with
              creator-focused workflows to make content creation faster, easier, and more consistent for everyone.
              You handle the face-to-face. Your new AI content team will handle the rest.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { FounderSection }