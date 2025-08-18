"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles, Mail, CheckCircle, Building, User } from "lucide-react"

function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.name) {
      setError("Please fill in all required fields")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Submit to Airtable
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Failed to join waitlist")
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div
        id="waitlist"
        className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto p-4 text-center"
        >
          <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="relative z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-yellow-500 text-center font-sans font-bold mb-4">
            Welcome to the Future!
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto text-lg text-center relative z-10 mb-6">
            You're now part of an exclusive group of forward-thinking business leaders. Check your email for next steps!
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-yellow-500 font-medium">Confirmation email sent</span>
          </div>
        </motion.div>
        <BackgroundBeams />
      </div>
    )
  }

  return (
    <div
      id="waitlist"
      className="h-[50rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-yellow-500 font-medium">Limited Early Access</span>
          </div>
          <h1 className="relative z-10 text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-yellow-500 text-center font-sans font-bold mb-4">
            Experience Next-Level Business Intelligence
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-lg mx-auto my-6 text-lg text-center relative z-10"
        >
          Get exclusive early access to the most powerful B2B intelligence platform. Connect with strategic partners,
          discover hidden opportunities, and accelerate your growth.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4 mt-8 relative z-10"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10 h-12 bg-black/50 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20"
                required
              />
            </div>
            <div className="relative flex-1">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="pl-10 h-12 bg-black/50 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="email"
                placeholder="Business email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10 h-12 bg-black/50 border-yellow-500/30 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500/20"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-8 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold disabled:opacity-50 whitespace-nowrap"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Securing Spot...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Secure My Spot
                </div>
              )}
            </Button>
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-6 relative z-10"
        >
          <p className="text-xs text-gray-500 mb-2">🔒 Your information is secure and will never be shared</p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <span>✓ No spam, ever</span>
            <span>✓ Unsubscribe anytime</span>
            <span>✓ Early access guaranteed</span>
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export { WaitlistForm }
