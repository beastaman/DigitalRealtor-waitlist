"use client"

import { motion } from "framer-motion"
import { Lightbulb, PenLine, BarChart2, BookOpen } from "lucide-react"

function TimelineSection() {
  const timeline = [
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      title: "Generate Ideas",
      description: "Chat with the AI to get tailored content ideas for your niche, audience, or goals. Example: \"I want to create a video for gym beginners.\" → AI gives 3–5 strong angles.",
      date: "Step 1",
      status: "active",
    },
    {
      icon: <PenLine className="w-6 h-6 text-yellow-500" />,
      title: "Create Your Content",
      description: "Pick an idea → AI helps write scripts, captions, and hooks. Customize via Post Maker, then save to your storage.",
      date: "Step 2",
      status: "upcoming",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-yellow-500" />,
      title: "Post & Grow",
      description: "Schedule posts, track performance, and learn what works with AI analytics. Get suggestions to boost views, engagement, and follower growth.",
      date: "Step 3",
      status: "upcoming",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-yellow-500" />,
      title: "Learn and Improve",
      description: "Access a full tutorial library that teaches you personal branding and guides you in using the platform to its full potential.",
      date: "Step 4",
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
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From idea to published post in four simple steps — powered by AI, built for creators.
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
