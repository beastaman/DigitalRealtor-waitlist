"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

function FounderSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <Quote className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed mb-8">
              "After building and scaling multiple businesses, I realized the biggest challenge wasn't having great
              ideas—it was knowing which opportunities to pursue and finding the right partners to make it happen.
              That's why we built Sleft Signals."
            </blockquote>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/images/founder.jpeg"
              alt="Grant Denmark - Founder & CEO"
              className="w-24 h-24 rounded-full border-4 border-yellow-500/30 object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">Grant Denmark</h3>
              <p className="text-yellow-500 mb-2">Founder & CEO</p>
              <p className="text-gray-400 text-sm">
                Former Strategy Director at McKinsey • Built 3 successful exits • 15+ years in business intelligence
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl"
          >
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-yellow-500">Our Promise:</strong> We're not just building another analytics tool.
              We're creating a platform that connects the dots between data, opportunities, and the right people to make
              things happen. Every feature we build is tested with real businesses facing real challenges.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { FounderSection }
