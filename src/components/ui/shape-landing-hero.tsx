"use client"

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

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

// ─── Main Hero Component ──────────────────────────────────────────────────────
function HeroGeometric({
  badge = "AI-Powered Content Creation",
  title1 = "Turn Your Ideas into",
  title2 = "Ready-to-Post Content",
  subtitle = "Give the AI your idea, niche, or topic and instantly get content angles, scripts, captions, post formats, and a posting plan tailored to your audience.",
}: {
  badge?: string
  title1?: string
  title2?: string
  subtitle?: string
}) {
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

        {/* CTA Buttons — exact Figma button styles */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          {/* Watch Demo (ghost pill) */}
          <a
            href="#demo"
            className="flex items-center gap-2 rounded-[66px] px-5 py-[10px] text-white font-semibold text-base font-manrope transition-all duration-200 hover:bg-white/10"
            style={{
              background: "rgba(24,73,246,0.09)",
              boxShadow: "0px 4px 8px -2px rgba(23,23,23,0.1), 0px 2px 4px -2px rgba(23,23,23,0.06)",
            }}
          >
            {/* Video icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch Demo
          </a>

          {/* Start Creating (gradient pill — exact from Figma) */}
          <a
            href="#waitlist"
            className="flex items-center gap-2 rounded-[66px] px-5 py-[10px] text-white font-semibold text-base font-manrope transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(270deg, #174aff, rgba(24,75,255,0)), linear-gradient(270deg, rgba(24,75,255,0), #174aff), linear-gradient(#000, #000)",
              boxShadow: "0 0 32px rgba(23,74,255,0.35)",
            }}
          >
            {/* Sparkle icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            Start Creating
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex items-center gap-3 mt-8"
        >
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#174AFF]/30"
                style={{ background: `rgba(23,74,255,${0.08 + i * 0.04})` }}
              />
            ))}
          </div>
          <span className="text-sm font-satoshi text-white/40">
            Join realtors getting early access
          </span>
        </motion.div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0b] to-transparent pointer-events-none" />
    </section>
  )
}

export { HeroGeometric }