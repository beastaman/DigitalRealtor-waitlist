"use client"

import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
    >
      {/* Radial glow — pure CSS, zero JS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(23,74,255,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_80%,rgba(106,17,203,0.06),transparent)]" />
    </div>
  )
}

BackgroundBeams.displayName = "BackgroundBeams"
