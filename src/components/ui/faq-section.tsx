"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What exactly is Sleft Signals?",
      answer:
        "Sleft Signals is an AI-powered business intelligence platform that analyzes your business data, market trends, and competitive landscape to provide actionable insights, strategic recommendations, and valuable business connections.",
    },
    {
      question: "How does the AI analysis work?",
      answer:
        "Our platform uses GPT-4 and advanced machine learning algorithms to analyze your business data, industry trends, and market conditions. It then generates personalized strategy briefs with competitive analysis, growth opportunities, and partnership recommendations.",
    },
    {
      question: "Is my business data secure?",
      answer:
        "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data centers, and strict access controls. Your data is never shared with third parties and you maintain full ownership of your information.",
    },
    {
      question: "What kind of businesses can benefit from this?",
      answer:
        "Sleft Signals is designed for B2B companies of all sizes - from startups looking for their first strategic partnerships to enterprises seeking new market opportunities. We cover 50+ industries and adapt our insights to your specific business context.",
    },
    {
      question: "How much will it cost?",
      answer:
        "We're still finalizing our pricing structure, but early access users will get significant discounts. Pricing will be based on company size and feature requirements, starting from $99/month for small businesses.",
    },
    {
      question: "When will the platform be available?",
      answer:
        "Beta access starts in March 2024 for the first 500 waitlist members. Full launch is planned for May 2024. Join the waitlist to be among the first to experience the platform.",
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
            Everything you need to know about Sleft Signals and how it can transform your business.
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
