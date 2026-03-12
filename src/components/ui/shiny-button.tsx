"use client"

import type React from "react"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  href?: string
}

export function ShinyButton({ children, onClick, className = "", href }: ShinyButtonProps) {
  const inner = <span className="shiny-inner">{children}</span>

  if (href) {
    return (
      <a href={href} className={`shiny-cta ${className}`} onClick={onClick}>
        {inner}
      </a>
    )
  }

  return (
    <button className={`shiny-cta ${className}`} onClick={onClick}>
      {inner}
    </button>
  )
}
