'use client'

import { useState } from 'react'
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { XIcon } from "lucide-react"

export default function CTA() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section 
        id="cta-section"  // ← ADD THIS ID FOR SCROLL TARGET
        className="flex items-center justify-center w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 bg-transparent"
      >
        <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1076px]">
          <div
            className="relative flex flex-col items-center justify-center w-full h-[240px] xs:h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[574px] rounded-xl sm:rounded-2xl lg:rounded-3xl xl:rounded-[40px] overflow-hidden border border-white/10 cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
            style={{
              background: "rgba(33,33,33,0.6)",
            }}
          >
            {/* Demo.png as clear, full-cover background */}
            <Image
              src="/images/digitalrealtor-demo.png"
              alt="Digital Realtor Platform Demo"
              width={1076}
              height={574}
              priority
              className="absolute inset-0 object-cover z-0 transition-all duration-200 group-hover:brightness-[0.8]"
              style={{ 
                opacity: 1, 
                filter: "none",
              }}
              sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 800px, (max-width: 1280px) 1000px, 1076px"
            />

            {/* Overlay for better button visibility */}
            <div 
              className="absolute inset-0 z-[1]"
              style={{
                background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
              }}
            />

            {/* Play button centered */}
            <div className="relative z-10 flex justify-center items-center h-full w-full">
              <button
                className="flex items-center gap-1.5 sm:gap-2 md:gap-3 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8 rounded-full text-white font-manrope text-xs sm:text-sm md:text-base lg:text-lg shadow-[0px_4px_12px_-2px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-[0px_6px_16px_-2px_rgba(0,0,0,0.5)]"
                style={{
                  background: "linear-gradient(135deg, #174AFF 0%, #1E5AFF 100%)",
                  backdropFilter: "blur(10px)"
                }}
                aria-label="Play Digital Realtor Platform Demo Video"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsVideoOpen(true)
                }}
              >
                {/* Play Icon */}
                <span className="flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                  <svg 
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    aria-hidden="true"
                    className="drop-shadow-sm"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </span>
                {/* Text */}
                <span className="leading-tight font-manrope font-medium whitespace-nowrap drop-shadow-sm">
                  Play Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 hover:bg-neutral-900/70 ring-1 backdrop-blur-md rounded-full p-2 transition-colors"
                aria-label="Close video"
              >
                <XIcon className="size-5" />
              </button>
              <div className="size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative bg-black">
                <video
                  src="/assets/digitalrealtor-demo.mp4"  // ← CHANGED TO LOCAL PATH
                  poster="/images/Demo.png"
                  className="size-full object-cover"
                  controls
                  autoPlay
                  muted={false}
                  playsInline
                  preload="metadata"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
