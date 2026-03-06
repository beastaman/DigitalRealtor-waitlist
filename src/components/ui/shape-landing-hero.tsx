"use client"

import { motion, Variants } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ShinyButton } from "@/components/ui/shiny-button"

// ─── Floating Blob Shape (matches Figma eclipse blobs) ───────────────────────
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute pointer-events-none", className)}
    >
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px]",
            "border border-white/[0.06]",
            "shadow-[0_8px_48px_0_rgba(23,74,255,0.18)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(23,74,255,0.12),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

// ─── Particle dot (subtle sparkle) ───────────────────────────────────────────
function Particle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[#174AFF]/40 pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

// ─── Main Hero Component ──────────────────────────────────────────────────────
function HeroGeometric({
  badge = "AI-Powered Content Creation",
  title1 = "N1 tool for realtors",
  title2 = "building their personal brands",
  subtitle = "Let our AI generate video ideas, hooks, scripts, captions and schedule your videos all in one place.",
}: {
  badge?: string
  title1?: string
  title2?: string
  subtitle?: string
}) {
  const launchDate = new Date("2026-04-01T00:00:00")
  const timeLeft = useCountdown(launchDate)

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: i * 0.18, ease: [0.23, 0.86, 0.39, 0.96] },
    }),
  }

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0b0b0b]">

      {/* ── Background gradient mesh (exact from Figma) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left purple-blue blob */}
        <div
          className="absolute rounded-[171px] blur-[250px] opacity-60"
          style={{
            top: "-68px", left: "-36px",
            width: "454px", height: "315px",
            background: "linear-gradient(180deg, #6a11cb, #2575fc)",
            transform: "rotate(-89.9deg)",
            transformOrigin: "0 0",
          }}
        />
        {/* Right pink-cyan blob */}
        <div
          className="absolute rounded-full blur-[200px] opacity-50"
          style={{
            top: "-222px", right: "95px",
            width: "603px", height: "603px",
            background: "linear-gradient(180deg, rgba(0,194,255,0), #ff29c3)",
          }}
        />
        {/* Right blue depth blob */}
        <div
          className="absolute blur-[200px] opacity-50"
          style={{
            top: "57px", right: "252px",
            width: "290px", height: "411px",
            background: "linear-gradient(180deg, rgba(24,75,255,0), #174aff)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Floating geometric shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <ElegantShape
          delay={0.3} width={580} height={130} rotate={12}
          gradient="from-[#174AFF]/[0.10]"
          className="left-[-8%] top-[18%]"
        />
        <ElegantShape
          delay={0.5} width={460} height={110} rotate={-14}
          gradient="from-[#ff29c3]/[0.07]"
          className="right-[-4%] top-[68%]"
        />
        <ElegantShape
          delay={0.4} width={280} height={72} rotate={-7}
          gradient="from-[#174AFF]/[0.08]"
          className="left-[6%] bottom-[12%]"
        />
        <ElegantShape
          delay={0.6} width={190} height={52} rotate={22}
          gradient="from-[#174AFF]/[0.10]"
          className="right-[18%] top-[12%]"
        />
        <ElegantShape
          delay={0.7} width={140} height={38} rotate={-28}
          gradient="from-white/[0.05]"
          className="left-[24%] top-[8%]"
        />

        {/* Particles */}
        {[
          { x: "20%", y: "30%", d: 0.5 },
          { x: "75%", y: "20%", d: 1.2 },
          { x: "60%", y: "70%", d: 0.8 },
          { x: "35%", y: "80%", d: 2.1 },
          { x: "85%", y: "50%", d: 1.6 },
        ].map((p, i) => (
          <Particle key={i} x={p.x} y={p.y} delay={p.d} />
        ))}
      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 w-full max-w-[956px] mx-auto px-6 flex flex-col items-center text-center">

        {/* Badge pill — matches Figma pill buttons */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-[66px] mb-8 md:mb-10"
          style={{
            background: "rgba(24,73,246,0.09)",
            boxShadow: "0px 4px 8px -2px rgba(23,23,23,0.1), 0px 2px 4px -2px rgba(23,23,23,0.06)",
          }}
        >
          {/* Animated pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#174AFF] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#174AFF]" />
          </span>
          <span className="text-sm font-semibold text-white/80 font-manrope tracking-wide">
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-manrope font-semibold tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 60px)", lineHeight: "1.2", color: "#f8fafc" }}
        >
          <span className="text-white">{title1}</span>
          <br />
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #ffffff 0%, #a8c4ff 50%, #174AFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title2}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-satoshi text-[#e3e8ef] max-w-[748px] mb-10"
          style={{ fontSize: "16px", lineHeight: "26px" }}
        >
          {subtitle}
        </motion.p>

        {/* Join the waitlist CTA */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <ShinyButton href="#waitlist">Join the waitlist</ShinyButton>

          {/* Countdown to April 1st */}
          <div className="flex gap-3">
            {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
              <div key={unit} className="text-center">
                <div className="bg-white/[0.04] border border-[#174AFF]/20 rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-xl font-bold text-[#174AFF] font-manrope">
                    {timeLeft[unit].toString().padStart(2, "0")}
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-manrope">{unit}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#174AFF]/30"
                  style={{ background: `rgba(23,74,255,${0.08 + i * 0.04})` }}
                />
              ))}
            </div>
            <span className="text-sm font-manrope text-white/50">
              Join 100s of realtors getting early access
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0b] to-transparent pointer-events-none" />
    </section>
  )
}

export { HeroGeometric }