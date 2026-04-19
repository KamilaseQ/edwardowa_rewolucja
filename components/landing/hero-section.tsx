"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Zap, ChevronRight } from "lucide-react"
import { FORM_URL } from "@/lib/constants"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function useCountdown(targetDate: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }
    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

/* ── Cursor glow — smooth radial glow following mouse ── */
function useCursorGlow(containerRef: React.RefObject<HTMLElement | null>) {
  const pos = useRef({ x: -500, y: -500, currentX: -500, currentY: -500 })
  const rafId = useRef<number>(0)
  const element = useRef<HTMLDivElement | null>(null)
  const hasEntered = useRef(false)

  const onEnter = useCallback(() => {
    hasEntered.current = true
    if (element.current) element.current.style.opacity = "1"
  }, [])

  const onLeave = useCallback(() => {
    hasEntered.current = false
    if (element.current) element.current.style.opacity = "0"
  }, [])

  const onMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    pos.current.x = e.clientX - rect.left
    pos.current.y = e.clientY - rect.top
  }, [containerRef])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("mousemove", onMove)
    container.addEventListener("mouseenter", onEnter)
    container.addEventListener("mouseleave", onLeave)

    const tick = () => {
      const p = pos.current
      p.currentX += (p.x - p.currentX) * 0.06
      p.currentY += (p.y - p.currentY) * 0.06

      if (element.current) {
        element.current.style.transform = `translate(${p.currentX - 250}px, ${p.currentY - 250}px)`
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    return () => {
      container.removeEventListener("mousemove", onMove)
      container.removeEventListener("mouseenter", onEnter)
      container.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(rafId.current)
    }
  }, [containerRef, onMove, onEnter, onLeave])

  return element
}

const EVENT_DATE = new Date("2026-04-29T14:00:00")

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [tick, setTick] = useState(false)
  const timeLeft = useCountdown(EVENT_DATE)
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useCursorGlow(sectionRef)

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    setTick(true)
    const t = setTimeout(() => setTick(false), 150)
    return () => clearTimeout(t)
  }, [timeLeft.seconds])

  const openForm = () => window.open(FORM_URL, "_blank", "noopener,noreferrer")

  const scrollToSpeaker = () => {
    document.querySelector("#prelegent")?.scrollIntoView({ behavior: "smooth" })
  }

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-all duration-150 ${tick && label === "SEK" ? "scale-110" : "scale-100"}`}
        style={{
          background: "linear-gradient(135deg, oklch(0.13 0.010 270), oklch(0.09 0.008 270))",
          border: "1px solid var(--gradient-start-border, oklch(0.72 0.19 65 / 0.30))",
          boxShadow: "0 0 18px oklch(0.72 0.19 65 / 0.10), inset 0 1px 0 oklch(0.72 0.19 65 / 0.15)",
        }}
      >
        <span
          className="text-xl sm:text-2xl font-bold tabular-nums"
          style={{ color: "oklch(0.90 0.12 75)", textShadow: "0 0 18px oklch(0.72 0.19 65 / 0.5)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1.5 text-[9px] uppercase tracking-[0.18em] font-semibold" style={{ color: "oklch(0.72 0.19 65 / 0.6)" }}>
        {label}
      </span>
    </div>
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full animate-gold-flare"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.19 65 / 0.08) 0%, oklch(0.62 0.16 50 / 0.04) 40%, transparent 70%)" }}
        />
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full animate-hero-aurora"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.19 65 / 0.12) 0%, transparent 60%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.14 35 / 0.10) 0%, transparent 60%)", filter: "blur(80px)", animation: "hero-aurora 16s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(oklch(0.72 0.19 65 / 0.02) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.19 65 / 0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 80% at center, transparent 0%, oklch(0.06 0.005 270) 80%)" }}
        />
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ left: `${15 + i * 20}%`, bottom: "15%", backgroundColor: `oklch(0.72 0.19 65 / ${0.25 + (i % 3) * 0.15})`, animation: `float-particle ${6 + i * 1.5}s linear infinite`, animationDelay: `${i * 1}s` }}
          />
        ))}
      </div>

      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 pointer-events-none hidden md:block z-[1]"
        style={{
          width: "500px",
          height: "500px",
          opacity: 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.19 65 / 0.16) 0%, oklch(0.62 0.16 50 / 0.06) 35%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 text-center flex-1 flex flex-col items-center justify-center">

        {/* Live badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-5 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ background: "oklch(0.12 0.015 60 / 0.8)", border: "1px solid oklch(0.72 0.19 65 / 0.30)", backdropFilter: "blur(12px)" }}
        >
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "oklch(0.72 0.19 65)" }} />
            <span className="relative inline-flex rounded-full w-2 h-2" style={{ backgroundColor: "oklch(0.72 0.19 65)" }} />
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "oklch(0.82 0.14 75)" }}>
            29 Kwietnia 2026 &bull; Gmach Główny Politechniki Warszawskiej
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`font-display uppercase leading-[0.92] mb-4 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="block font-bold tracking-tight text-foreground" style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}>
            CZŁOWIEKU!
          </span>
          <span
            className="block font-bold tracking-tight"
            style={{
              fontSize: "clamp(2rem, 6vw, 5.5rem)",
              letterSpacing: "-0.02em",
              backgroundImage: "linear-gradient(90deg, oklch(0.72 0.19 65), oklch(0.82 0.14 75), oklch(0.62 0.16 50), oklch(0.72 0.19 65))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 6s linear infinite",
            }}
          >
            EDEK NA UCZELNI
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-foreground/70 mb-6 leading-snug transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Roboty humanoidalne z impetem wchodzą na rynek. Zrób pierwszy krok we właściwym kierunku.
        </p>

        {/* Countdown */}
        <div
          className={`inline-flex items-center gap-3 sm:gap-4 px-6 py-4 rounded-2xl mb-6 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            background: "oklch(0.08 0.008 270 / 0.7)",
            border: "1px solid oklch(0.72 0.19 65 / 0.18)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 30px oklch(0.72 0.19 65 / 0.05)",
          }}
        >
          <CountdownBox value={timeLeft.days} label="DNI" />
          <span className="text-xl font-bold animate-countdown-pulse" style={{ color: "oklch(0.72 0.19 65 / 0.4)" }}>:</span>
          <CountdownBox value={timeLeft.hours} label="GODZ" />
          <span className="text-xl font-bold animate-countdown-pulse" style={{ color: "oklch(0.72 0.19 65 / 0.4)" }}>:</span>
          <CountdownBox value={timeLeft.minutes} label="MIN" />
          <span className="text-xl font-bold animate-countdown-pulse" style={{ color: "oklch(0.72 0.19 65 / 0.4)" }}>:</span>
          <CountdownBox value={timeLeft.seconds} label="SEK" />
        </div>

        {/* Info row */}
        <div
          className={`flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-2 text-foreground/80 font-medium">
            <Zap className="w-4 h-4" style={{ color: "oklch(0.82 0.14 75)" }} />
            <span className="text-sm tracking-wide">Wstęp wolny</span>
          </div>

          <span className="text-muted-foreground/30 hidden sm:block">|</span>

          <div className="flex items-center gap-2 font-bold">
            <span className="text-sm tracking-wide" style={{ color: "oklch(0.72 0.19 65)" }}>350 miejsc · rejestracja otwarta</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Button
            onClick={openForm}
            size="lg"
            className="relative overflow-hidden text-sm sm:text-base px-7 py-5 font-bold tracking-wide border-0 group"
            style={{ background: "linear-gradient(90deg, oklch(0.72 0.19 65), oklch(0.82 0.14 75), oklch(0.62 0.16 50), oklch(0.72 0.19 65))", backgroundSize: "200% auto", animation: "shimmer 3s linear infinite, pulse-glow 2.5s ease-in-out infinite", color: "oklch(0.06 0.005 270)" }}
          >
            <span className="flex items-center gap-2">
              Rezerwuję miejsce
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            onClick={scrollToSpeaker}
            variant="outline"
            size="lg"
            className="text-sm sm:text-base px-7 py-5 font-semibold transition-all hover:scale-[1.02]"
            style={{ borderColor: "oklch(0.72 0.19 65 / 0.35)", color: "oklch(0.82 0.14 75)", backgroundColor: "oklch(0.72 0.19 65 / 0.05)" }}
          >
            Kim jest Edward?
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-6 pt-8">
        <button
          onClick={scrollToSpeaker}
          className={`flex flex-col items-center gap-1.5 transition-all duration-700 delay-[800ms] cursor-pointer ${isLoaded ? "opacity-100" : "opacity-0"}`}
          style={{ color: "oklch(0.50 0.015 270)" }}
          aria-label="Przewiń w dół"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Odkryj</span>
          <ArrowDown className="w-4 h-4 animate-bounce" style={{ color: "oklch(0.72 0.19 65 / 0.5)" }} />
        </button>
      </div>
    </section>
  )
}
