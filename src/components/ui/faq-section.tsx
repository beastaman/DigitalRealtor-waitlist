"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What exactly is Digital Realtor?",
      answer:
        "Digital Realtor is an AI-powered content creation platform that helps realtors and content creators turn ideas into ready-to-post content. You give the AI your idea, niche, or topic and instantly get content angles, scripts, captions, post formats, and a complete posting plan tailored to your audience.",
    },
    {
      question: "How does the AI content creation work?",
      answer:
        "Simply tell the AI your idea or niche — for example, \"I want to create a video for first-time home buyers.\" The AI generates 3–5 strong content angles, writes scripts, captions, and hooks, and formats them for your chosen platform. You then customize it in the Post Maker and schedule it.",
    },
    {
      question: "Which platforms does Digital Realtor support?",
      answer:
        "Digital Realtor supports all major social media platforms including Instagram, TikTok, YouTube, LinkedIn, Facebook, and X (Twitter). You get multi-platform post templates so your content is always formatted correctly for each channel.",
    },
    {
      question: "Do I need any prior content creation experience?",
      answer:
        "Not at all! Digital Realtor is designed for busy realtors and professionals who want to build a personal brand without spending hours creating content. The tutorial library guides you through every step, from crafting your first post to advanced personal branding strategies.",
    },
    {
      question: "What does it cost?",
      answer:
        "We offer two plans: $99.99/month for the monthly plan, or $999/year for the annual plan (save over 16%). Both include unlimited AI ideas and post generations, script and caption AI, unlimited saved content, multi-platform templates, and full analytics.",
    },
    {
      question: "When will the platform launch?",
      answer:
        "We're currently in early access. Join the waitlist to secure your spot and be among the first to get access when we launch. Early access members will receive special pricing and priority onboarding.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/30 to-black">
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
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Digital Realtor and how it can transform your content strategy.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-black/50 border border-yellow-500/20 rounded-xl hover:border-yellow-500/40 transition-all duration-300 focus:outline-none focus:border-yellow-500/60"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-yellow-500/20"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FAQSection }
