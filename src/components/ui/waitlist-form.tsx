"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles, Mail, CheckCircle, User, Phone } from "lucide-react"

const COUNTRY_CODES = [
  { code: "+1", flag: "🇺🇸", name: "US" },
  { code: "+1", flag: "🇨🇦", name: "CA" },
  { code: "+44", flag: "🇬🇧", name: "GB" },
  { code: "+61", flag: "🇦🇺", name: "AU" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
  { code: "+966", flag: "🇸🇦", name: "SA" },
  { code: "+20", flag: "🇪🇬", name: "EG" },
  { code: "+962", flag: "🇯🇴", name: "JO" },
  { code: "+965", flag: "🇰🇼", name: "KW" },
  { code: "+974", flag: "🇶🇦", name: "QA" },
  { code: "+33", flag: "🇫🇷", name: "FR" },
  { code: "+49", flag: "🇩🇪", name: "DE" },
  { code: "+34", flag: "🇪🇸", name: "ES" },
  { code: "+39", flag: "🇮🇹", name: "IT" },
  { code: "+91", flag: "🇮🇳", name: "IN" },
  { code: "+92", flag: "🇵🇰", name: "PK" },
  { code: "+55", flag: "🇧🇷", name: "BR" },
  { code: "+52", flag: "🇲🇽", name: "MX" },
  { code: "+27", flag: "🇿🇦", name: "ZA" },
  { code: "+234", flag: "🇳🇬", name: "NG" },
]

function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.name) {
      setError("Please fill in your name and email")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : "",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Failed to join waitlist")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div
        id="waitlist"
        className="h-[40rem] w-full rounded-md bg-[#0B0B0B] relative flex flex-col items-center justify-center antialiased"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto p-4 text-center"
        >
          <CheckCircle className="w-16 h-16 text-[#174AFF] mx-auto mb-6" />
          <h1 className="relative z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-[#174AFF] text-center font-manrope font-bold mb-4">
            You&apos;re In — Let&apos;s Create!
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto text-lg text-center relative z-10 mb-6 font-manrope">
            You&apos;re now part of an exclusive group of forward-thinking realtors. Check your email for next steps!
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-[#174AFF]" />
            <span className="text-sm text-blue-400 font-medium font-manrope">Confirmation email sent</span>
          </div>
        </motion.div>
        <BackgroundBeams />
      </div>
    )
  }

  return (
    <div
      id="waitlist"
      className="min-h-[42rem] w-full rounded-md bg-[#0B0B0B] relative flex flex-col items-center justify-center antialiased py-12"
    >
      <div className="max-w-xl mx-auto p-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#174AFF]" />
            <span className="text-sm text-blue-400 font-medium font-manrope">Limited Early Access</span>
          </div>
          <h1 className="relative z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-[#174AFF] text-center font-manrope font-bold mb-4">
            Secure Your Spot
          </h1>
          <p className="text-gray-400 text-base font-manrope">
            Be first in line when Digital Realtor launches.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4 relative z-10"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Your full name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="pl-10 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#174AFF] focus:ring-[#174AFF]/20 font-manrope"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="pl-10 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#174AFF] focus:ring-[#174AFF]/20 font-manrope"
              required
            />
          </div>

          {/* Phone with country code */}
          <div className="flex gap-2">
            <div className="relative">
              <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none z-10" />
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="h-12 pl-7 pr-2 bg-white/5 border border-white/10 text-white rounded-md text-sm font-manrope focus:border-[#174AFF] focus:outline-none appearance-none cursor-pointer w-[90px]"
                style={{ colorScheme: "dark" }}
              >
                {COUNTRY_CODES.map((c, i) => (
                  <option key={i} value={c.code} className="bg-[#0B0B0B]">
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative flex-1">
              <Input
                type="tel"
                placeholder="Phone number (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#174AFF] focus:ring-[#174AFF]/20 font-manrope"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 text-white font-bold font-manrope disabled:opacity-50 rounded-full border-0"
            style={{ background: "linear-gradient(135deg, #174AFF 0%, #1E5AFF 100%)" }}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Securing Spot...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Secure My Spot
              </div>
            )}
          </Button>

          {error && <p className="text-red-400 text-sm text-center font-manrope">{error}</p>}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-6 relative z-10"
        >
          <p className="text-xs text-gray-600 mb-2 font-manrope">Your information is secure and will never be shared</p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 font-manrope">
            <span>No spam, ever</span>
            <span>·</span>
            <span>Unsubscribe anytime</span>
            <span>·</span>
            <span>Early access priority</span>
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export { WaitlistForm }
