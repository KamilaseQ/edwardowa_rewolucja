"use client"

import { useEffect, useState } from "react"
import { Bot, X } from "lucide-react"
import { FORM_URL } from "@/lib/constants"

const BANNER_HEIGHT_PX = 42
const CLOSE_ZONE_WIDTH_PX = 48
const REPETITIONS = 7

function MarqueeContent() {
  return (
    <>
      {Array.from({ length: REPETITIONS }).map((_, i) => (
        <span
          key={i}
          className="flex items-center gap-3 px-8 text-sm sm:text-base font-extrabold uppercase tracking-[0.16em] whitespace-nowrap"
          style={{ color: "oklch(0.99 0.02 90)", textShadow: "0 1px 2px oklch(0.20 0.10 25 / 0.6)" }}
        >
          <Bot className="w-4 h-4 shrink-0 animate-pulse" strokeWidth={2.5} />
          Ostatnie 20 miejsc na wydarzenie!
          <Bot aria-hidden="true" className="w-4 h-4 shrink-0 opacity-70 mx-3" strokeWidth={2.5} />
        </span>
      ))}
    </>
  )
}

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--banner-h",
      isVisible ? `${BANNER_HEIGHT_PX}px` : "0px",
    )
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      role="region"
      aria-label="Ogłoszenie"
      className="fixed top-0 left-0 right-0 z-[60] flex"
      style={{
        height: `${BANNER_HEIGHT_PX}px`,
        background:
          "linear-gradient(90deg, oklch(0.55 0.24 25) 0%, oklch(0.65 0.24 35) 25%, oklch(0.72 0.22 50) 50%, oklch(0.65 0.24 35) 75%, oklch(0.55 0.24 25) 100%)",
        backgroundSize: "200% auto",
        backgroundRepeat: "repeat",
        animation: "banner-shimmer 14s linear infinite, pulse-glow 2.8s ease-in-out infinite",
        boxShadow: "0 2px 18px oklch(0.55 0.24 25 / 0.55)",
      }}
    >
      {/* Marquee zone — clickable, takes remaining width */}
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex-1 min-w-0 overflow-hidden cursor-pointer"
        aria-label="Ostatnie 20 miejsc — zapisz się"
      >
        <div
          className="flex h-full items-center animate-marquee will-change-transform"
          style={
            {
              "--marquee-duration": "40s",
              "--marquee-offset": "-50%",
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden",
            } as React.CSSProperties
          }
        >
          <div className="flex h-full items-center shrink-0">
            <MarqueeContent />
          </div>
          <div className="flex h-full items-center shrink-0" aria-hidden="true">
            <MarqueeContent />
          </div>
        </div>
      </a>

      {/* Close zone — separated, outside the animation, easy tap target */}
      <div
        className="relative shrink-0 flex items-center justify-center"
        style={{
          width: `${CLOSE_ZONE_WIDTH_PX}px`,
          backgroundColor: "oklch(0.30 0.16 25 / 0.85)",
          borderLeft: "1px solid oklch(0.99 0.02 90 / 0.25)",
        }}
      >
        <button
          onClick={() => setIsVisible(false)}
          className="flex items-center justify-center w-8 h-8 rounded-full transition-all hover:bg-black/30 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Zamknij baner"
        >
          <X className="w-4 h-4" strokeWidth={3} style={{ color: "oklch(0.99 0.02 90)" }} />
        </button>
      </div>
    </div>
  )
}
