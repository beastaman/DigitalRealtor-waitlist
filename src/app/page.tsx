"use client"

import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { WaitlistForm } from "@/components/ui/waitlist-form"
import { FeatureGrid } from "@/components/ui/feature-grid"
import { FounderSection } from "@/components/ui/founder-section"
import { FinalCTASection } from "@/components/ui/final-cta-section"
import CTA from "@/components/ui/cta"
import { FreeTrialSection } from "@/components/ui/free-trial-section"

// ─── Reusable gradient blob ───────────────────────────────────────────────────
function Blob({
  top, left, right, bottom,
  width, height,
  gradient,
  blur = 200,
  opacity = 0.35,
  rotate,
  rounded = "9999px",
}: {
  top?: string; left?: string; right?: string; bottom?: string
  width: string; height: string
  gradient: string
  blur?: number
  opacity?: number
  rotate?: string
  rounded?: string
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top, left, right, bottom,
        width, height,
        background: gradient,
        filter: `blur(${blur}px)`,
        opacity,
        borderRadius: rounded,
        transform: rotate,
        transformOrigin: rotate ? "0 0" : undefined,
      }}
    />
  )
}

// ─── Section pill ─────────────────────────────────────────────────────────────
function SectionPill({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-[66px] font-manrope font-semibold text-white text-lg"
      style={{
        background: "rgba(24,73,246,0.09)",
        boxShadow: "0px 4px 8px -2px rgba(23,23,23,0.1), 0px 2px 4px -2px rgba(23,23,23,0.06)",
      }}
    >
      {label}
    </div>
  )
}

// ─── Gradient divider ─────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="w-full px-[80px] max-w-[1440px] mx-auto">
      <div className="h-px w-full" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(23,74,255,0.2) 20%, rgba(255,41,195,0.12) 50%, rgba(23,74,255,0.2) 80%, transparent 100%)",
      }} />
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-[60px] pt-[80px] pb-6">
      <div className="flex flex-col gap-[60px]">
        <div className="flex items-start justify-between gap-16 flex-wrap">
          <div className="flex flex-col items-start gap-5 max-w-[560px]">
            <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center" style={{ background: "rgba(23,74,255,0.09)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#174AFF" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p className="font-satoshi font-medium text-[#eef2f6]" style={{ fontSize: "clamp(22px,3vw,36px)", letterSpacing: "-0.02em", lineHeight: "1.4" }}>
              Join us in shaping the future of AI-powered content creation.
            </p>
            <button
              className="flex items-center justify-center gap-2 rounded-[66px] text-white font-manrope font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(270deg, #174aff, rgba(24,75,255,0)), linear-gradient(270deg, rgba(24,75,255,0), #174aff), linear-gradient(#000,#000)", minWidth: 140, height: 40, padding: "0 20px" }}
            >
              Subscribe
            </button>
          </div>
          <div className="flex gap-[84px]">
            <div className="flex flex-col gap-2">
              {["Home", "How It Works", "Features", "Contact", "Privacy Policy", "Terms of Use"].map(l => (
                <a key={l} href="#" className="font-satoshi text-[#cdd5df] hover:text-white transition-colors" style={{ fontSize: "14px", lineHeight: "30px" }}>{l}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {["Twitter", "Instagram", "LinkedIn"].map(s => (
                <a key={s} href="#" className="flex items-center gap-2 font-satoshi text-[#e3e8ef] hover:text-white transition-colors" style={{ fontSize: "14px", lineHeight: "26px" }}>
                  {s}
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1 8L8 1M8 1H2M8 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #202939 40%, #202939 60%, transparent)" }} />
          <div className="flex items-center justify-between">
            <span className="font-satoshi text-[#e3e8ef] text-sm">© 2025 All rights reserved.</span>
            <a href="#" className="flex items-center gap-1 font-satoshi text-[#e3e8ef] hover:text-white transition-colors text-sm">
              Go all the way up
              <svg width="9" height="10" viewBox="0 0 9 10" fill="none"><path d="M4.5 9V1M1 4l3.5-3.5L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">

      {/*
        ── ONE single wrapper that is `relative` and holds ALL content + ALL blobs.
           This means blobs are absolute inside the full page height, not just viewport.
           Every component renders over the same seamless gradient atmosphere.
      ──────────────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full">

        {/* ════════════════════════════════════════════════════════════
            BACKGROUND BLOBS — absolute, spread across full page height
            so gradient is CONTINUOUS from top to bottom with no breaks
        ════════════════════════════════════════════════════════════ */}

        {/* ── TOP zone (hero area) ── */}
        <Blob top="-68px" left="-36px" width="454px" height="315px"
          gradient="linear-gradient(180deg, #6a11cb, #2575fc)"
          blur={250} opacity={0.55} rotate="rotate(-89.9deg)" rounded="171px" />
        <Blob top="-222px" right="95px" width="603px" height="603px"
          gradient="linear-gradient(180deg, rgba(0,194,255,0), #ff29c3)"
          blur={200} opacity={0.30} />
        <Blob top="57px" right="252px" width="290px" height="411px"
          gradient="linear-gradient(180deg, rgba(24,75,255,0), #174aff)"
          blur={200} opacity={0.40} />

        {/* ── MIDDLE zone (CTA / about / testimonials) ── */}
        <Blob top="90vh" left="-150px" width="500px" height="500px"
          gradient="linear-gradient(180deg, rgba(0,194,255,0), #ff29c3)"
          blur={220} opacity={0.18} />
        <Blob top="110vh" right="-100px" width="450px" height="450px"
          gradient="linear-gradient(180deg, rgba(24,75,255,0), #174aff)"
          blur={200} opacity={0.22} />

        {/* ── FEATURE GRID zone ── */}
        <Blob top="180vh" left="-200px" width="540px" height="540px"
          gradient="linear-gradient(180deg, rgba(0,194,255,0), #ff29c3)"
          blur={200} opacity={0.20} />
        <Blob top="200vh" right="50px" width="400px" height="400px"
          gradient="linear-gradient(180deg, rgba(24,75,255,0), #6a11cb)"
          blur={220} opacity={0.18} />

        {/* ── WAITLIST / FOUNDER zone ── */}
        <Blob top="280vh" left="30%" width="600px" height="300px"
          gradient="linear-gradient(180deg, #6a11cb, #2575fc)"
          blur={250} opacity={0.12} rotate="rotate(-89.9deg)" rounded="171px" />
        <Blob top="320vh" right="-80px" width="480px" height="480px"
          gradient="linear-gradient(180deg, rgba(0,194,255,0), #ff29c3)"
          blur={200} opacity={0.18} />

        {/* ── FINAL CTA / FOOTER zone ── */}
        <Blob top="400vh" left="-100px" width="500px" height="500px"
          gradient="linear-gradient(180deg, rgba(24,75,255,0), #174aff)"
          blur={200} opacity={0.22} />
        <Blob top="430vh" right="-50px" width="400px" height="600px"
          gradient="linear-gradient(180deg, #6a11cb, #2575fc)"
          blur={250} opacity={0.15} rotate="rotate(-89.9deg)" rounded="171px" />

        {/* ════════════════════════════════════════════════════════════
            ALL CONTENT — z-10 so it sits above blobs
        ════════════════════════════════════════════════════════════ */}
        <div className="relative z-10">

          {/* 1. HERO */}
          <HeroGeometric badge="AI-Powered Content Creation" />

          {/* 2. DEMO VIDEO */}
          <CTA />


          {/* 7. WAITLIST FORM */}
          <Divider />
          <section id="waitlist" className="py-10">
            <div className="container mx-auto px-4">
              <WaitlistForm />
            </div>
          </section>
          <Divider />

          {/* 6. FEATURE GRID */}
          <FeatureGrid />

          {/* FREE TRIAL */}
          <FreeTrialSection />

          {/* 8. FOUNDER */}
          <FounderSection />
          <Divider />

          {/* 9. FINAL CTA */}
          <FinalCTASection />

        </div>
      </div>
    </div>
  )
}