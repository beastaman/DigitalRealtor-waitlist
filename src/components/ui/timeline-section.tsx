"use client"

import { motion } from "framer-motion"
import { Calendar, Rocket, Users, Zap } from "lucide-react"

function TimelineSection() {
  const timeline = [
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Join Waitlist",
      description: "Secure your spot and get exclusive updates",
      date: "Now",
      status: "active",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Beta Access",
      description: "First 500 users get free beta access",
      date: "Aug 2025",
      status: "upcoming",
    },
    {
      icon: <Rocket className="w-6 h-6 text-yellow-500" />,
      title: "Full Launch",
      description: "Complete platform with all features",
      date: "Sep 2025",
      status: "upcoming",
    },
    {
      icon: <Calendar className="w-6 h-6 text-yellow-500" />,
      title: "Enterprise",
      description: "Advanced features for large organizations",
      date: "Oct 2025",
      status: "upcoming",
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
              Launch Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's what to expect as we build the future of business intelligence together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-8 last:mb-0"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${
                  item.status === "active" ? "bg-yellow-500/20 border-yellow-500" : "bg-gray-800 border-gray-600"
                }`}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "active"
                        ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30"
                        : "bg-gray-800 text-gray-400 border border-gray-600"
                    }`}
                  >
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TimelineSection }
