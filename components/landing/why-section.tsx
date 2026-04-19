"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ArrowUpRight, TrendingUp, Clock, Target } from "lucide-react"
import { FORM_URL } from "@/lib/constants"

export function WhySection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  })
  const [animateChart, setAnimateChart] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setAnimateChart(true), 300)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const openForm = () => window.open(FORM_URL, "_blank", "noopener,noreferrer")

  return (
    <section
      ref={ref}
      id="dlaczego-warto"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gradient-start/6 via-gradient-mid/4 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-gradient-end/8 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-gradient-start mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-gradient-start to-gradient-mid" />
              Dlaczego teraz
            </span>
            <h2 className="font-display uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight mb-8 leading-[1.25]" style={{ letterSpacing: "-0.02em" }}>
              <span className="text-foreground">ERA HUMANOIDÓW</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
                WŁAŚNIE SIĘ ZACZYNA
              </span>
            </h2>
            <p className="text-xl text-foreground font-medium leading-relaxed mb-4">
              Robotyka humanoidalna wchodzi na rynek szybciej, niż ktokolwiek przewidywał.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Dla tych, którzy dopiero wchodzą w temat, to szansa by zacząć od razu we właściwym miejscu.
              Dla tych, którzy już działają, to moment by obrać nowy kierunek i wyprzedzić resztę.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Wystąpią twórcy i ludzie bezpośrednio zaangażowani w projekt. Ich perspektywa, ich doświadczenie.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10">
              <div className="p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 min-w-0">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-gradient-start mb-1.5" />
                <p className="text-xl sm:text-2xl font-bold text-foreground">10x</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">wzrost rynku do 2030</p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 min-w-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gradient-mid mb-1.5" />
                <p className="text-base sm:text-2xl font-bold text-foreground leading-tight">Wczesny</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">etap rynku</p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 min-w-0">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-gradient-end mb-1.5" />
                <p className="text-xl sm:text-2xl font-bold text-foreground">Teraz</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">czas na ruch</p>
              </div>
            </div>

            <Button
              onClick={openForm}
              size="lg"
              className="font-bold text-lg px-8 group border-0 transition-all hover:scale-[1.03]"
              style={{
                background: "linear-gradient(90deg, oklch(0.72 0.19 65), oklch(0.82 0.14 75), oklch(0.62 0.16 50))",
                color: "oklch(0.06 0.005 270)",
                boxShadow: "0 0 20px oklch(0.72 0.19 65 / 0.3)",
              }}
            >
              Chcę tam być
              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Chart */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative bg-card border border-gradient-start/15 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-gradient-to-b from-gradient-start/20 to-transparent blur-2xl" />
              
              {/* Chart */}
              <div className="relative h-72 mb-8">
                <svg
                  viewBox="0 0 400 220"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid lines */}
                  <line x1="0" y1="44" x2="400" y2="44" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" className="text-gradient-start" />
                  <line x1="0" y1="88" x2="400" y2="88" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" className="text-gradient-start" />
                  <line x1="0" y1="132" x2="400" y2="132" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" className="text-gradient-start" />
                  <line x1="0" y1="176" x2="400" y2="176" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" className="text-gradient-start" />
                  
                  {/* S-curve gradient fill */}
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--gradient-start)" />
                      <stop offset="50%" stopColor="var(--gradient-mid)" />
                      <stop offset="100%" stopColor="var(--gradient-end)" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--gradient-start)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="var(--gradient-start)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <path
                    d="M0 200 Q50 195 80 185 Q120 170 160 140 Q200 100 240 65 Q280 38 320 22 Q360 12 400 10 L400 220 L0 220 Z"
                    fill="url(#areaGradient)"
                    className={`transition-all duration-700 ${animateChart ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* S-curve line */}
                  <path
                    d="M0 200 Q50 195 80 185 Q120 170 160 140 Q200 100 240 65 Q280 38 320 22 Q360 12 400 10"
                    stroke="url(#curveGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    className={`transition-all duration-700 ${animateChart ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      strokeDasharray: 500,
                      strokeDashoffset: animateChart ? 0 : 500,
                      transition: 'stroke-dashoffset 2s ease-out',
                    }}
                  />
                  
                  {/* "You are here" marker */}
                  <g className={`transition-all duration-500 ${animateChart ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.5s' }}>
                    {/* Pulse ring */}
                    <circle cx="80" cy="185" r="16" fill="none" stroke="var(--gradient-start)" strokeWidth="2" strokeOpacity="0.3">
                      <animate attributeName="r" values="12;24;12" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="80" cy="185" r="10" fill="none" stroke="var(--gradient-start)" strokeWidth="1" strokeOpacity="0.5">
                      <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    {/* Main dot */}
                    <circle cx="80" cy="185" r="10" fill="var(--gradient-start)" />
                    <circle cx="80" cy="185" r="5" fill="var(--foreground)" />
                  </g>

                  {/* SK label at end */}
                  <text x="395" y="25" fill="var(--gradient-end)" fontSize="12" fontWeight="bold" textAnchor="end" className={`transition-all duration-500 ${animateChart ? 'opacity-80' : 'opacity-0'}`} style={{ transitionDelay: '2s' }}>
                    SK
                  </text>
                </svg>

                {/* "You are here" label — desktop */}
                <div
                  className={`absolute hidden md:block transition-all duration-500 ${animateChart ? 'opacity-100' : 'opacity-0'}`}
                  style={{ top: '62%', left: '12%', transitionDelay: '1.8s' }}
                >
                  <div className="bg-gradient-to-r from-gradient-start to-gradient-mid text-foreground px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider whitespace-nowrap shadow-xl shadow-gradient-start/30">
                    Jesteś tutaj
                  </div>
                </div>

                {/* "You are here" label — mobile */}
                <div
                  className={`absolute block md:hidden transition-all duration-500 ${animateChart ? 'opacity-100' : 'opacity-0'}`}
                  style={{ top: '18%', left: '6%', transitionDelay: '1.8s' }}
                >
                  <div className="bg-gradient-to-r from-gradient-start to-gradient-mid text-foreground px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-xl shadow-gradient-start/30">
                    Jesteś tutaj
                  </div>
                </div>
              </div>

              {/* Phase labels */}
              <div className="flex justify-between text-[9px] sm:text-xs uppercase tracking-wide sm:tracking-widest gap-1">
                <span className="text-gradient-start font-bold shrink-0">Teraz</span>
                <span className="text-foreground/60 shrink-0">Early Adopter</span>
                <span className="text-muted-foreground/40 hidden sm:block">Wzrost</span>
                <span className="text-muted-foreground/20 shrink-0 text-right">Rynek Masowy</span>
              </div>

              {/* Caption */}
              <p className="mt-8 text-sm text-muted-foreground text-center">
                Krzywa adopcji rynku robotyki humanoidalnej
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
