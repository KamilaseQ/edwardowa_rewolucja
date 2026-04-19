"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Cpu, Users, Lightbulb, Rocket, ArrowUpRight, Flame, Lock, Clock } from "lucide-react"
import { useState } from "react"
import { FORM_URL } from "@/lib/constants"

const features = [
  {
    icon: Cpu,
    title: "Robot",
    subtitle: "na żywo",
    description: "Technologia, o której słyszysz w newsach. Na wyciągnięcie ręki.",
    stat: "500M+",
    statLabel: "wyświetleń",
    gradient: "from-gradient-start to-gradient-mid",
  },
  {
    icon: Lightbulb,
    title: "Insider",
    subtitle: "knowledge",
    description: "Perspektywa od ludzi, którzy budują przyszłość, nie komentują jej z boku.",
    stat: "#1",
    statLabel: "robot w PL",
    gradient: "from-gradient-mid to-gradient-end",
  },
  {
    icon: Users,
    title: "Networking",
    subtitle: "bez barier",
    description: "Founderzy, studenci i eksperci w jednym miejscu.",
    stat: "350",
    statLabel: "osób",
    gradient: "from-gradient-end to-gradient-start",
  },
  {
    icon: Rocket,
    title: "Early",
    subtitle: "access",
    description: "Bądź przy projekcie teraz, nie wtedy, gdy stanie się oczywisty.",
    stat: "0 zł",
    statLabel: "wstęp wolny",
    gradient: "from-gradient-start to-gradient-end",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} id="o-wydarzeniu" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gradient-start/6 via-gradient-mid/4 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gradient-end/6 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div
          className={`max-w-3xl mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-gradient-start mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-gradient-start to-gradient-mid" />
            Co Cię czeka
          </span>
          <h2 className="font-display uppercase text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.15]" style={{ letterSpacing: "-0.02em" }}>
            <span className="text-foreground">Co Cię czeka na miejscu</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Robot na żywo. Perspektywa od twórców. Szansa na poznanie nowego biznesu i odpowiednie wejście w nowy boom technologiczny.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                hoveredIndex === index
                  ? "bg-gradient-to-br from-card via-card to-card/50 border-gradient-start/50 scale-[1.02]"
                  : "bg-card/50 border-border/50 hover:border-gradient-start/30"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl transition-opacity duration-500 -z-10 ${hoveredIndex === index ? "opacity-25" : "opacity-0"}`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-gradient-to-br ${feature.gradient} ${hoveredIndex === index ? "shadow-lg" : "opacity-80"}`}>
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  {feature.title}
                  <span className="text-foreground/50 font-normal"> {feature.subtitle}</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{feature.description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {feature.stat}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{feature.statLabel}</div>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${hoveredIndex === index ? "text-gradient-start translate-x-0.5 -translate-y-0.5" : "text-border"}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOMO strip — toned down but still present */}
        <div
          className={`mt-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: "oklch(0.72 0.19 65 / 0.10)" }}>
            {/* Seats */}
            <div
              className="relative p-6 flex items-center gap-4 group cursor-pointer overflow-hidden"
              style={{ background: "oklch(0.08 0.008 270)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 65 / 0.06), transparent)" }} />
              <div className="relative flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, oklch(0.72 0.19 65 / 0.18), oklch(0.72 0.19 65 / 0.06))", border: "1px solid oklch(0.72 0.19 65 / 0.20)" }}
                >
                  <Lock className="w-5 h-5" style={{ color: "oklch(0.72 0.19 65)" }} />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground leading-tight">Tylko 350 miejsc</p>
                  <p className="text-xs tracking-wide mt-0.5" style={{ color: "oklch(0.72 0.19 65 / 0.70)" }}>Rejestracja otwarta</p>
                </div>
              </div>
            </div>

            {/* Free */}
            <div
              className="relative p-6 flex items-center gap-4 group cursor-pointer overflow-hidden"
              style={{ background: "oklch(0.08 0.008 270)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, oklch(0.82 0.14 75 / 0.06), transparent)" }} />
              <div className="relative flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, oklch(0.82 0.14 75 / 0.18), oklch(0.82 0.14 75 / 0.06))", border: "1px solid oklch(0.82 0.14 75 / 0.20)" }}
                >
                  <Flame className="w-5 h-5" style={{ color: "oklch(0.82 0.14 75)" }} />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground leading-tight">Wstęp wolny</p>
                  <p className="text-xs tracking-wide mt-0.5" style={{ color: "oklch(0.82 0.14 75 / 0.70)" }}>Bez opłat, bez zobowiązań</p>
                </div>
              </div>
            </div>

            {/* Urgency */}
            <div
              className="relative p-6 flex items-center gap-4 group cursor-pointer overflow-hidden"
              style={{ background: "oklch(0.08 0.008 270)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, oklch(0.62 0.16 50 / 0.06), transparent)" }} />
              <div className="relative flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, oklch(0.62 0.16 50 / 0.18), oklch(0.62 0.16 50 / 0.06))", border: "1px solid oklch(0.62 0.16 50 / 0.20)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "oklch(0.62 0.16 50)" }} />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground leading-tight">Jednorazowy format</p>
                  <p className="text-xs tracking-wide mt-0.5" style={{ color: "oklch(0.62 0.16 50 / 0.70)" }}>Warto być wcześniej niż inni</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 flex justify-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <button
            onClick={() => window.open(FORM_URL, "_blank", "noopener,noreferrer")}
            className="flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-xl text-background transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(90deg, oklch(0.72 0.19 65), oklch(0.82 0.14 75), oklch(0.62 0.16 50))",
              boxShadow: "0 0 20px oklch(0.72 0.19 65 / 0.3)",
            }}
          >
            Chcę być na sali
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
