"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { AnimatedCounter } from "./animated-counter"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { FORM_URL } from "@/lib/constants"

const stats = [
  { end: 500, suffix: "M+", label: "Wyświetleń", gradient: "from-gradient-start to-gradient-mid" },
  { end: 500, suffix: "K+", label: "Obserwujących", gradient: "from-gradient-mid to-gradient-end" },
  { end: 1, prefix: "#", suffix: "", label: "Robot w Polsce", gradient: "from-gradient-end to-gradient-start" },
]

const mediaLogos = ["BBC", "Reuters", "TVN", "Polsat News", "Sejm RP", "Money.pl", "Spider's Web", "WP"]

export function SpeakerSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })
  const [isHovered, setIsHovered] = useState(false)

  const openForm = () => window.open(FORM_URL, "_blank", "noopener,noreferrer")

  return (
    <section ref={ref} id="prelegent" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gradient-start/12 via-gradient-mid/8 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gradient-end/12 via-gradient-mid/8 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium">Główny Gość</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 via-gradient-mid/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image area */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
          >
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`aspect-[4/5] rounded-3xl overflow-hidden relative transition-all duration-500 ${isHovered ? "scale-[1.02]" : ""}`}>
                {/* Animated gradient border */}
                <div className="absolute inset-0 p-[3px] rounded-3xl bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end animate-gradient-rotate">
                  <div className="w-full h-full rounded-3xl bg-card relative overflow-hidden">
                    <Image
                      src="/edekfotka.webp"
                      alt="Edward Warchocki pierwszy robot influencer w Polsce"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-[center_10%] opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
                      <p className="text-2xl font-bold text-foreground">Edward Warchocki</p>
                      <p className="text-sm text-foreground/60 font-medium mt-1">Pierwszy Robot Influencer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 blur-[60px] -z-10 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.72 0.19 65 / 0.4), oklch(0.55 0.14 35 / 0.4))",
                    opacity: isHovered ? 0.5 : 0.15,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
          >
            <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl tracking-tight mb-2 leading-[1.15] text-foreground" style={{ letterSpacing: "-0.02em" }}>
              EDWARD
            </h2>
            <h2 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl tracking-tight mb-10 leading-[1.15]" style={{ letterSpacing: "-0.02em" }}>
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, oklch(0.72 0.19 65), oklch(0.82 0.14 75), oklch(0.62 0.16 50))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 5s linear infinite",
                }}
              >
                WARCHOCKI
              </span>
            </h2>

            <p className="text-2xl text-foreground font-bold leading-relaxed mb-4 max-w-xl">
              500 milionów wyświetleń. Setki współprac. Pierwszy polski robot influencer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Fenomen na skalę światową. Wspominany przez BBC, Reuters, gość Sejmu, TVN, Polsat News. Na tym wydarzeniu dowiesz się, co dzieje się za kulisami projektu, który śledzi cały świat.
            </p>

            {/* Media mentions */}
            <div className="mb-10">
              <span className="text-xs uppercase tracking-widest text-gradient-start mb-4 block">Widziany w</span>
              <div className="flex flex-wrap gap-3">
                {mediaLogos.map((logo) => (
                  <span
                    key={logo}
                    className="px-4 py-2 text-xs uppercase tracking-wider border rounded-full text-foreground/80 hover:text-foreground hover:border-gradient-start hover:bg-gradient-start/10 transition-all cursor-default"
                    style={{
                      borderColor: "oklch(0.72 0.19 65 / 0.25)",
                    }}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-gradient-start/20 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
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
                Chcę być na sali
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
