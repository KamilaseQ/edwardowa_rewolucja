"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { AnimatedCounter } from "./animated-counter"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Star } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const stats = [
  { end: 350, suffix: "M+", label: "Wyświetleń", gradient: "from-gradient-start to-gradient-mid" },
  { end: 500, suffix: "K+", label: "Obserwujących", gradient: "from-gradient-mid to-gradient-end" },
  { end: 1, prefix: "#", suffix: "", label: "Robot w Polsce", gradient: "from-gradient-end to-gradient-start" },
]

const mediaLogos = ["TVN", "Polsat News", "Sejm RP", "Money.pl", "Spider's Web", "WP"]

export function SpeakerSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })
  const [isHovered, setIsHovered] = useState(false)

  const scrollToSignup = () => {
    document.querySelector("#zapisz-sie")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={ref} id="prelegent" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gradient-start/15 via-gradient-mid/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gradient-end/15 via-gradient-mid/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gradient-start font-medium">Główny Gość</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gradient-start/50 via-gradient-mid/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image area */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
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
                      alt="Edward Warchocki"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-[center_10%] opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
                      <p className="text-2xl font-bold text-foreground">Edward Warchocki</p>
                      <p className="text-sm text-gradient-start font-medium mt-1">Pierwszy Robot Celebryta</p>
                    </div>
                    <a
                      href="https://konfederacja.com.pl/dzisiaj-w-gmachu-sejmu-rp-z-inicjatywy-konfederacji-pojawil-sie-niejaki-edward-w/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="absolute bottom-2 right-3 text-[9px] text-muted-foreground/30 hover:text-muted-foreground transition-colors z-20"
                    >
                      Źródło: konfederacja.com.pl
                    </a>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 blur-[60px] -z-10 transition-opacity duration-500`}
                  style={{
                    background: "linear-gradient(135deg, oklch(0.82 0.18 78 / 0.5), oklch(0.58 0.18 38 / 0.5))",
                    opacity: isHovered ? 0.6 : 0.2,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <h2 className="font-display uppercase text-6xl md:text-7xl lg:text-8xl tracking-tight mb-2 leading-[1.15] text-foreground">
              EDWARD
            </h2>
            <h2 className="font-display uppercase text-6xl md:text-7xl lg:text-8xl tracking-tight mb-10 leading-[1.15]">
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, oklch(0.82 0.18 78), oklch(0.88 0.20 85), oklch(0.70 0.20 55))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                WARCHOCKI
              </span>
            </h2>

            <p className="text-2xl text-foreground font-bold leading-relaxed mb-4 max-w-xl">
              350 milionów odsłon. Życie ciekawsze niż u nie jednego człowieka.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Pierwszy polski robot influencer. Fenomen na skalę światową. Gość Sejmu, TVN, Polsat News. Na Edwardowej Rewolucji powie coś,
              <span className="text-gradient-start font-medium"> czego jeszcze nikt w Polsce nie usłyszał i co może na zawsze odmienić rynek.</span>
            </p>

            {/* Media mentions */}
            <div className="mb-10">
              <span className="text-xs uppercase tracking-widest text-gradient-start mb-4 block">Widziany w</span>
              <div className="flex flex-wrap gap-3">
                {mediaLogos.map((logo) => (
                  <span
                    key={logo}
                    className="px-4 py-2 text-xs uppercase tracking-wider border rounded-full text-foreground/80 hover:text-foreground transition-all cursor-default"
                    style={{
                      borderColor: "oklch(0.82 0.18 78 / 0.30)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0.82 0.18 78)"
                      e.currentTarget.style.backgroundColor = "oklch(0.82 0.18 78 / 0.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0.82 0.18 78 / 0.30)"
                      e.currentTarget.style.backgroundColor = "transparent"
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
                  <div
                    className="text-3xl md:text-4xl font-bold"
                    style={{
                      backgroundImage: `linear-gradient(90deg, var(--gradient-start), var(--gradient-mid))`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToSignup}
                size="lg"
                className="font-bold text-lg px-8 group border-0 transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, oklch(0.82 0.18 78), oklch(0.88 0.20 85), oklch(0.70 0.20 55))",
                  color: "oklch(0.06 0.005 60)",
                  boxShadow: "0 0 24px oklch(0.82 0.18 78 / 0.4)",
                }}
              >
                Chcę posłuchać Edwarda
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
